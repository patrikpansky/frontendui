const fs = require('fs');

function getInputType(ast, inputTypeName) {
    return ast.definitions.find(
        d => d.kind === 'InputObjectTypeDefinition' && d.name.value === inputTypeName
    );
}

/**
 * Vygeneruje form komponentu pro zadaný input filter typ.
 * Umožní vybrat vždy jen jedno pole (operátor), a vyplnit operand.
 * _and a _or mohou obsahovat jen ostatní typy (žádné vnořené _and/_or).
 */
function buildInputForm(ast, inputTypeName, parentLogical = null, used = new Set()) {
    const inputDef = getInputType(ast, inputTypeName);
    if (!inputDef) throw new Error(`No InputObjectTypeDefinition: ${inputTypeName}`);

    // Rozděl pole na logická (_and/_or) a scalar fieldy
    const logicalFields = ['_and', '_or'];
    const allowedLogical = logicalFields.filter(x => x !== parentLogical); // pod _and nesmí být _and
    const scalars = inputDef.fields.filter(f => !logicalFields.includes(f.name.value));
    const logical = inputDef.fields.filter(f => allowedLogical.includes(f.name.value));

    let code = `
export function ${inputTypeName}Form({ value = {}, onChange }) {
    // Jediný aktivní field v hodnotě (kromě _and/_or)
    const [selectedField, setSelectedField] = React.useState(Object.keys(value).find(k => !k.startsWith('_')) || "");
    const [operand, setOperand] = React.useState(selectedField ? value[selectedField] : "");

    React.useEffect(() => {
        // Pokud value v props změní pole, aktualizuj stav
        const current = Object.keys(value).find(k => !k.startsWith('_'));
        if (current !== selectedField) {
            setSelectedField(current || "");
            setOperand(current ? value[current] : "");
        }
    }, [value]);

    // Handler změny operátoru
    function handleFieldChange(e) {
        const f = e.target.value;
        setSelectedField(f);
        setOperand("");
        onChange({ [f]: "" }); // Vynuluj ostatní
    }

    // Handler změny hodnoty operand
    function handleOperandChange(e) {
        setOperand(e.target.value);
        onChange({ [selectedField]: e.target.value });
    }

    return (
        <div className="border p-3 mb-3">
            {/* Scalar operátor */}
            <div className="mb-3">
                <label className="form-label">Pole/operátor</label>
                <select className="form-select" value={selectedField} onChange={handleFieldChange}>
                    <option value="">Vyber operátor…</option>
                    ${scalars.map(f => `<option value="${f.name.value}">${f.name.value}</option>`).join('\n')}
                </select>
            </div>
            {selectedField &&
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        value={operand}
                        onChange={handleOperandChange}
                        placeholder={"Zadej hodnotu"}
                    />
                </div>
            }

            {/* Logická pole */}
            ${logical
                .map(f => `
            <div className="mb-3">
                <label>${f.name.value.toUpperCase()}</label>
                {(value.${f.name.value} || []).map((item, idx) => (
                    <${inputTypeName}Form
                        key={idx}
                        value={item}
                        onChange={v => {
                            const arr = [...(value.${f.name.value} || [])];
                            arr[idx] = v;
                            onChange({ ...value, ${f.name.value}: arr });
                        }}
                        parentLogical="${f.name.value}"
                    />
                ))}
                <button
                    className="btn btn-outline-primary btn-sm mt-1"
                    type="button"
                    onClick={() => onChange({ ...value, ${f.name.value}: [...(value.${f.name.value} || []), {}] })}
                >
                    Přidat skupinu
                </button>
            </div>
            `).join('\n')}
        </div>
    );
}
`;

    // Rekurze: pro každý scalar filter typ (ne logické) rekurzivně vygeneruj pod-komponentu
    for (const f of scalars) {
        let t = f.type;
        while (t.kind === 'NonNullType' || t.kind === 'ListType') t = t.type;
        if (t.kind === 'NamedType') {
            const tname = t.name.value;
            // Nezacykli se (negeneruj sám sebe znovu)
            if (tname.endsWith('Filter') && tname !== inputTypeName && !used.has(tname)) {
                used.add(tname);
                code += buildInputForm(ast, tname, null, used);
            }
        }
    }

    return code;
}

function main(astPath, typeName, outFile) {
    const ast = JSON.parse(fs.readFileSync(astPath, 'utf8'));
    // Najdi odpovídající query
    const queryDef = ast.definitions.find(d => d.kind === 'ObjectTypeDefinition' && d.name.value === 'Query');
    if (!queryDef) throw new Error('No Query definition');
    let queryField = null;
    for (const field of queryDef.fields) {
        // List of typeName (NON_NULL > LIST > NON_NULL > NamedType)
        let type = field.type;
        if (
            type.kind === 'NonNullType' &&
            type.type.kind === 'ListType' &&
            type.type.type.kind === 'NonNullType' &&
            type.type.type.type.kind === 'NamedType' &&
            type.type.type.type.name.value === typeName
        ) {
            queryField = field;
            break;
        }
    }
    if (!queryField) throw new Error(`No Query field returning [${typeName}!]!`);
    // Najdi input typ filtru
    const whereArg = (queryField.arguments || []).find(arg => arg.name.value === 'where');
    if (!whereArg) throw new Error('No "where" argument');
    let t = whereArg.type;
    while (t.kind !== 'NamedType') t = t.type;
    const whereInputType = t.name.value;

    let result = `
/**
 * Generated filter form for ${whereInputType} (for type ${typeName}), Bootstrap styl, single field selection.
 * Generated by generate-hasura-filter-form.js
 */
import React from "react";

`;

    result += buildInputForm(ast, whereInputType);

    result += `
/**
 * Example usage:
 * <${whereInputType}Form value={where} onChange={setWhere} />
 */
`;

    fs.writeFileSync(outFile, result, 'utf8');
    console.log("✅ Generated:", outFile);
}

// CLI: node generate-hasura-filter-form.js debug-sdl.json AdmissionGQLModel AdmissionFilterForm.jsx
if (require.main === module) {
    const [,, astPath, typeName, outFile] = process.argv;
    if (!astPath || !typeName || !outFile) {
        console.error("Usage: node generate-hasura-filter-form.js <debug-sdl.json> <TypeName> <OutputFile.jsx>");
        process.exit(1);
    }
    main(astPath, typeName, outFile);
}
