import * as fs from 'fs';
import Handlebars  from 'handlebars';
import * as crypto from 'crypto';
import process from 'node:process'

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}
function lowerFirstLetter(string) {
    return string?.charAt(0).toLowerCase() + string?.slice(1);
}

const createReplacer = ({originalValue, newValue}) => (string) => string.replace(originalValue, newValue);
const NameHelper = (string) => string?capitalizeFirstLetter(string.toLowerCase())?.replace("Page", "")?.replace("byid", ""):null;
const nameHelper = (string) => string?string.toLowerCase().replace("Page", "").replace("byid", ""):null;
const stringifyHelper = (data) => JSON.stringify(data);
const keysHelper = (data) => JSON.stringify(Object.keys(data));
const ModelNameHelper = (string) => capitalizeFirstLetter(string).replace("GQLModel", "");

Handlebars.registerHelper('firstup', capitalizeFirstLetter);
Handlebars.registerHelper('Name', NameHelper);
Handlebars.registerHelper('name', nameHelper);
Handlebars.registerHelper('ModelName', ModelNameHelper);
Handlebars.registerHelper('stringify', stringifyHelper);
Handlebars.registerHelper('keys', keysHelper);

Handlebars.registerHelper("ifisname", function(conditional, options) {
    if (conditional === "name") {
      return options.fn(this);
    }
  });

const computeFileHash = (fileName) => {
    // Check if the file exists
    if (!fs.existsSync(fileName)) {
        return false;
    }

    // Read the file content
    const fileContent = fs.readFileSync(fileName);

    // Create a hash of the file content
    const hash = crypto.createHash('sha256'); // You can use other algorithms like 'md5', 'sha512', etc.
    hash.update(fileContent);

    // Return the computed hash in hexadecimal format
    return hash.digest('hex');
}

const genTemplate = ({type, typeList, tempateFile="./tools/templates/Pages/Page.jsx", destinationFile=null, destinationDir="./tools/__generated__", ...props }) => {
    const pageName = NameHelper(type?.name);
    const PageTemplateContent = fs.readFileSync(tempateFile);

    const [name] = tempateFile.split("/").slice(-1);
    const outFileName = destinationFile || destinationDir + "/" + pageName + name;
    let outFileNameHash = `${computeFileHash(outFileName)}`
    const outFileNameOldHashFileName = outFileName + ".hash"
    let oldHash = ""
    let overwrite = true;
    if (outFileNameHash) {
        if (fs.existsSync(outFileNameOldHashFileName)) {
            oldHash = `${fs.readFileSync(outFileNameOldHashFileName)}`;
            overwrite = oldHash === outFileNameHash
            // console.log(`"${oldhash}" ?== "${outFileNameHash}" ${overwrite}`)
        }
    }

    if (!overwrite) {
        console.log(`\nskiped ${outFileName}, it has been changed by user, delete it if you want ...`)
        return
    }

    const PageTemplate = Handlebars.compile(`${PageTemplateContent}`);
    // const ResultFileContent = PageTemplate(type);
    const ResultFileContent = PageTemplate({...props, ...type});

    if (!fs.existsSync(destinationDir)){
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    const hash = crypto.createHash('sha256'); // You can use other algorithms like 'md5', 'sha512', etc.
    hash.update(ResultFileContent);

    // Return the computed hash in hexadecimal format
    const newHash = `${hash.digest('hex')}`;

    if (newHash === oldHash) {
        process.stdout.write(".")
        return
    }
    console.log(`\n${type?.name} "=>" ${outFileName}`)
    // process.stdout.write("w")

    fs.writeFileSync(outFileName, ResultFileContent);
    fs.writeFileSync(outFileNameOldHashFileName, newHash);
}

const genPages = ({type, typeList, destinationDir="./tools/__generated__/Pages", ...props}) => {
    const location = "./tools/templates/Pages/"
    const pageTemplates = fs.readdirSync(location, { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    // pageTemplates.forEach(fileName => {
    //     console.log("PAGE", JSON.stringify(fileName), "for", type?.name)
    //   });

    pageTemplates.forEach(fileName => {
        // const destinatioFileName = 
        genTemplate({type, typeList, tempateFile: location + fileName, destinationDir: destinationDir + "/" + NameHelper(type.name), ...props});
    });
}

const genComponents = ({type, typeList, destinationDir="./tools/__generated__/Components", ...props}) => {
    const location = "./tools/templates/Components/"
    const pageTemplates = fs.readdirSync(location, { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    
    // pageTemplates.forEach(fileName => {
    //     console.log(JSON.stringify(fileName))
    // });

    pageTemplates.forEach(fileName => {
        genTemplate({type, typeList, tempateFile: location + fileName, destinationDir: destinationDir + "/" + NameHelper(type.name)});
      });
}

const genSubComponents = ({type, typeList, destinationDir="./tools/__generated__/Components"}) => {
    const Objects = "./tools/templates/Components/SubObjectComponents/"
    const objectsTemplates = fs.readdirSync(Objects, { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    const Vectors = "./tools/templates/Components/SubVectorComponents/"
    const vectorsTemplates = fs.readdirSync(Vectors, { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
        
    const capitalizedTypeName = NameHelper(type.name)
    // console.log(JSON.stringify(Object.keys(type)))

    const returnTypeDef = type?.returnType
    returnTypeDef?.fields?.forEach(
        field => {
            // console.log(JSON.stringify(field))
            // console.log(JSON.stringify(Object.keys(field)))
            if (field?.isObject) {               
                objectsTemplates.forEach(fileName => {
                    // console.log(fileName, returnTypeDef.name, field.name, field.isScalar, field.isObject)
                    const oldNameTargetType = field.targetType.name
                    // field.name = field.name + capitalizedFieldName
                    field.targetType.name = field.targetType.name.replace("GQLModel", "")
                    genTemplate({type: {...field, masterType: type}, typeList, tempateFile: Objects + fileName, destinationDir: destinationDir + "/" + capitalizedTypeName});
                    field.targetType.name = oldNameTargetType
                });            
            }
            if (field?.isVector) {

                vectorsTemplates.forEach(fileName => {
                    // console.log(fileName, returnTypeDef.name, field.name, field.isScalar, field.isObject)
                    const oldNameTargetType = field.targetType.name
                    // field.name = field.name + capitalizedFieldName
                    field.targetType.name = field.targetType.name.replace("GQLModel", "")
                    genTemplate({type: {...field, masterType: type}, typeList, tempateFile: Vectors + fileName, destinationDir: destinationDir + "/" + capitalizedTypeName});
                    field.targetType.name = oldNameTargetType
                });            
            }
        }
    )
}

const fieldMandatoryArgs = ({field}) => {
    const args = field.args.filter(
        field => !(field?.defaultValue)
    )
    return args
}

const prepareType = ({type, typeList}) => {
    // console.log(JSON.stringify(type))
    const findType = (name) => typeList.find(value => value?.name === name)

    const getFieldTypeName = (field) => {
        let ctype
        for(ctype=field.type; !ctype?.name; ctype=ctype.ofType) ;
        console.log(field.name, "->", ctype.name)
        return ctype.name
    }
    const returnTypeName = type?.name || type?.ofType?.name || type?.ofType?.ofType?.name || type?.ofType?.ofType?.ofType?.name
    const returnTypeDef = findType(returnTypeName)
    type.returnType = returnTypeDef
    type.returnTypeName = returnTypeName
    type.returnShortName = returnTypeName.replace('GQLModel', '')
    type.targetType = returnTypeDef
    type.targetTypeName = returnTypeName
    type.targetShortName = returnTypeName.replace('GQLModel', '')

    returnTypeDef?.fields?.forEach(field => {
        // console.log("preparing field", field?.name, "@", returnTypeName)

        field.argByName = {}
        field?.args.forEach(argument => {
            const argumentTypeName = getFieldTypeName(argument)
            const argumentType = findType(argumentTypeName)
            field.argByName[argument.name] = argument
            argument.targetType = argumentType
        })

        const fieldTypeName = getFieldTypeName(field)
        const targetType = findType(fieldTypeName)

        field.targetType = targetType
        field.returnType = targetType
        field.returnTypeName = fieldTypeName
        field.returnShortName = fieldTypeName.replace('GQLModel', '')

        const isScalar = field?.type?.ofType?.kind === "SCALAR" | field?.type?.kind === "SCALAR"
        const scalarTypeName = field?.type?.ofType?.name || field?.type?.name
        const mandatoryArgs = fieldMandatoryArgs({field})
        field.isScalar = false
        if (isScalar) {
            if (mandatoryArgs.length === 0) {
                field.isScalar = isScalar
            } else {
                field.isScalarFunction = true
            }
            field.targetType = findType(scalarTypeName)
        }
            
        if (isScalar) {
            //console.log(returnTypeDef.name, JSON.stringify(field))
            ;
        } else {
            // const isVector = field?.type?.ofType?.kind === "LIST" | field?.type?.kind === "LIST"
            // field.isVector = isVector
            const vectorTypeName = field?.type?.ofType?.ofType?.ofType?.name
            field.isVector = !!vectorTypeName

            const isObject = field?.type?.ofType?.kind === "OBJECT" | field?.type?.kind === "OBJECT"
            const objectTypeName = field?.type?.ofType?.name || field?.type?.name
            field.isObject = isObject
           
            if (field.isVector) {
                if (mandatoryArgs.length !== 0) {
                    field.isVector = false
                    field.isVectorFunction = true
                }
                field.targetType = findType(vectorTypeName)
            }
            if (field.isObject) {
                field.targetType = findType(objectTypeName)
            }
        }
        // console.log(JSON.stringify(field))
    })
    return type
}

const genui = async () => {
    const responsetxt = fs.readFileSync("./tools/introspectionresponse.json");
    const response = JSON.parse(responsetxt);
    const schemajson = response.data
    const { __schema } = schemajson;
    
    const { queryType, types } = __schema;
    const findType = (name) => types.find(value => value?.name === name)

    const { name: queryTypeName  } = queryType;

    const queryTypeDefinition = findType(queryTypeName)
    const pages = queryTypeDefinition?.fields.filter(
        field => field?.name?.endsWith("ById")
    )
    const destinationRoot = "./src"
    types.forEach(type => prepareType({type, typeList: types }))
    types.forEach(type => {
        type.originalName = type.name
        type.name = ModelNameHelper(type.name)
    })

    const disablenObjectNames = ["Mutation", "Query"]
    const objectTypes = types.filter(type => type?.kind === "OBJECT" & !type?.name.startsWith("_") & !type?.name.endsWith("Result") & !disablenObjectNames.includes(type?.name))
    const objectTypesName = objectTypes.map(type => type?.name)
    console.log(JSON.stringify(objectTypesName))

    pages.forEach(type => genPages({type, typeList: types, destinationDir: destinationRoot+"/Pages"}))

    objectTypes.forEach(type => genComponents({type, typeList: types, destinationDir: destinationRoot+"/Components"}))
    objectTypes.forEach(type => genSubComponents({type, typeList: types, destinationDir: destinationRoot+"/Components"}))

    genTemplate({type: {fields: pages, name: "Query"}, tempateFile: "./tools/templates"+"/AppRouter.jsx", destinationFile: destinationRoot+"/AppRouter.jsx"})
    // genTemplate({type: queryTypeDefinition, tempateFile: "./tools/templates"+"/AppRouter.jsx", destinationFile: destinationRoot+"/AppRouter.jsx"})
    
    // console.log(__schema);
    // console.log(queryTypeName, types[0]);
    // console.log(queryTypeDefinition);
    // console.log(pages);
    
    return __schema
}

genui().catch(error => console.error(error));