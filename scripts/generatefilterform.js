// generate-filter-form.js

const fs = require('fs');
const path = require('path');

/**
 * Load AST (parsed SDL in JSON form).
 */
function loadAst(astPath) {
    return JSON.parse(fs.readFileSync(astPath, 'utf8'));
}

/**
 * Find the Query field returning [TargetType!]!
 */
function findQueryField(ast, typeName) {
    const defs = ast.definitions;
    const queryDef = defs.find(d => d.kind === 'ObjectTypeDefinition' && d.name.value === 'Query');
    if (!queryDef) throw new Error('No Query definition');
    for (const field of queryDef.fields) {
        // Find List of typeName (NON_NULL > LIST > NON_NULL > NamedType)
        let type = field.type;
        if (
            type.kind === 'NonNullType' &&
            type.type.kind === 'ListType' &&
            type.type.type.kind === 'NonNullType' &&
            type.type.type.type.kind === 'NamedType' &&
            type.type.type.type.name.value === typeName
        ) {
            return field;
        }
    }
    throw new Error(`No Query field returning [${typeName}!]!`);
}

/**
 * Find input type name for "where" argument.
 */
function findWhereInputType(field) {
    const whereArg = (field.arguments || []).find(arg => arg.name.value === 'where');
    if (!whereArg) throw new Error('No "where" argument');
    let t = whereArg.type;
    while (t.kind !== 'NamedType') t = t.type;
    return t.name.value;
}

/**
 * Build React code for a given Input type.
 */
function buildInputForm(ast, inputTypeName, used = new Set()) {
    const defs = ast.definitions;
    const inputDef = defs.find(d => 
        d.kind === 'InputObjectTypeDefinition' && d.name.value === inputTypeName
    );
    if (!inputDef) throw new Error(`No InputObjectTypeDefinition: ${inputTypeName}`);

    if (used.has(inputTypeName)) {
        return `// Prevented infinite recursion for ${inputTypeName}\n`;
    }
    used.add(inputTypeName);

    let code = `// --- ${inputTypeName} ---\n`;
    code += `
export function ${inputTypeName}Form({ value = {}, onChange }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: 8, margin: 8 }}>
`;

    for (const field of inputDef.fields) {
        const fname = field.name.value;
        let t = field.type;
        while (t.kind === 'NonNullType' || t.kind === 'ListType') t = t.type;

        if (t.kind === 'NamedType') {
            const tname = t.name.value;
            if (tname.endsWith('Filter') && tname !== inputTypeName) {
                // Nested filter (e.g., StrFilter, DatetimeFilter)
                code += `
            <div style={{ marginBottom: 8 }}>
                <label>${fname}:</label>
                <${tname}Form value={value.${fname} || {}} onChange={v => onChange({ ...value, ${fname}: v })} />
            </div>
`;
            } else if (tname === inputTypeName) {
                // Prevent recursion
                code += `            {/* recursion stopped at ${fname} */}\n`;
            } else if (tname === "String" || tname === "Int" || tname === "Boolean" || tname === "UUID" || tname === "DateTime") {
                code += `
            <div style={{ marginBottom: 8 }}>
                <label>${fname}:</label>
                <input
                    type="text"
                    value={value.${fname} || ""}
                    onChange={e => onChange({ ...value, ${fname}: e.target.value })}
                />
            </div>
`;
            } else if (tname === inputTypeName) {
                // Prevent recursion
                code += `            {/* recursion stopped at ${fname} */}\n`;
            } else if (tname.startsWith("[")) {
                code += `
            {/* Array input for ${fname} not implemented */}
`;
            } else {
                // Could be AND/OR group (list of same type)
                const fieldType = field.type;
                if (fieldType.kind === "ListType" && fieldType.type.kind === "NamedType" && fieldType.type.name.value === inputTypeName) {
                    // AND/OR
                    code += `
            <div>
                <label>${fname} (AND/OR group):</label>
                {(value.${fname} || []).map((item, idx) => (
                    <${inputTypeName}Form
                        key={idx}
                        value={item}
                        onChange={v => {
                            const arr = [...(value.${fname} || [])];
                            arr[idx] = v;
                            onChange({ ...value, ${fname}: arr });
                        }}
                    />
                ))}
                <button type="button" onClick={() => onChange({ ...value, ${fname}: [...(value.${fname} || []), {}] })}>
                    Add filter
                </button>
            </div>
`;
                } else {
                    code += `
            {/* Unhandled type for ${fname}: ${tname} */}
`;
                }
            }
        }
    }

    code += `
        </div>
    );
}
`;

    // Recursively build code for all nested input filters
    for (const field of inputDef.fields) {
        let t = field.type;
        while (t.kind === 'NonNullType' || t.kind === 'ListType') t = t.type;
        if (t.kind === 'NamedType') {
            const tname = t.name.value;
            if (tname.endsWith('Filter') && tname !== inputTypeName && !used.has(tname)) {
                code += buildInputForm(ast, tname, used);
            }
        }
    }

    return code;
}

/**
 * Entrypoint – generate component file
 */
function main(astPath, typeName, outFile) {
    const ast = loadAst(astPath);
    const queryField = findQueryField(ast, typeName);
    const whereInputType = findWhereInputType(queryField);

    let result = `
/**
 * Generated filter form for ${whereInputType} (for type ${typeName}).
 * Generated by generate-filter-form.js
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

// CLI usage: node generate-filter-form.js debug-sdl.json AdmissionGQLModel AdmissionFilterForm.jsx
if (require.main === module) {
    const [,, astPath, typeName, outFile] = process.argv;
    if (!astPath || !typeName || !outFile) {
        console.error("Usage: node generate-filter-form.js <debug-sdl.json> <TypeName> <OutputFile.jsx>");
        process.exit(1);
    }
    main(astPath, typeName, outFile);
}
