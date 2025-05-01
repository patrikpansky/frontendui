import { useState, useEffect, useMemo } from 'react'

import { CardCapsule, useMe } from "@hrbolek/uoisfrontend-shared";
import { buildExpandedMutation, buildQueryPage, buildQueryScalar, getDeleteMutations, getInsertMutations, getReadScalarValue, getReadVectorValue, getUpdateMutations, gqlFetch, unwrapType, URI, useMutationInsertTest, useMutationUpdateTest, useQueryScalarTest, useQueryVectorTest } from "../../_utils/utils";
import { Accordion, AccordionHeader, AccordionItem, Card } from "react-bootstrap";

const TypeDeleteTest = ({schema, typename, variables}) => {  
    const { loading: vectorLoading, error: vectorError, data: vectorData} = useQueryVectorTest(schema, typename);
    const id = vectorData && vectorData.length > 0 && vectorData[0]?.id;
    const { loading: scalarLoading, error: scalarError, data: scalarData} = useQueryScalarTest(schema, typename, {id});

    const { loading: insertLoading, error: insertError, data: insertData} = useMutationInsertTest(schema, typename, scalarData);
    const { loading: updateLoading, error: updateError, data: updateData} = useMutationUpdateTest(schema, typename, insertData);
    const { loading: deleteLoading, error: deleteError, data: deleteData} = useMutationDeleteTest(schema, typename, updateData);

    const scalarQueries = getReadScalarValue(schema, typename)

    return (<>
        <CardCapsule title={`${typename} tests`}>

        
        {vectorLoading && <div>Loading vector...</div>}
        {vectorError && <div>Error vector: <pre>{JSON.stringify(vectorError, null, 4)}</pre></div>}
        {scalarLoading && <div>Loading scalar...</div>}
        {scalarError && <div>Error scalar: <pre>{JSON.stringify(scalarError, null, 4)}</pre></div>}
        {insertLoading && <div>Loading insert...</div>}
        {insertError && <div>Error insert: <pre>{JSON.stringify(insertError, null, 4)}</pre></div>}
        {updateLoading && <div>Loading update...</div>}
        {updateError && <div>Error update: <pre>{JSON.stringify(updateError, null, 4)}</pre></div>}
        {deleteLoading && <div>Loading delete...</div>}
        {deleteError && <div>Error delete: <pre>{JSON.stringify(deleteError, null, 4)}</pre></div>}

        <div>Type: {typename}</div>
        <div>Fields:</div>
        <ul>
            {fields.map((field) => (
                <li key={field.name}>
                    {field.name}: {unwrapType(field.type).name}
                </li>
            ))}
        </ul>
        </CardCapsule>
    </>)
}

const TypeUpdateTest = ({schema, typename, variables}) => {  
    const { loading: vectorLoading, error: vectorError, data: vectorData} = useQueryVectorTest(schema, typename);
    const id = vectorData && vectorData.length > 0 && vectorData[0]?.id;
    const { loading: scalarLoading, error: scalarError, data: scalarData} = useQueryScalarTest(schema, typename, {id});

    const { loading: insertLoading, error: insertError, data: insertData} = useMutationInsertTest(schema, typename, scalarData);
    const { loading: updateLoading, error: updateError, data: updateData} = useMutationUpdateTest(schema, typename, insertData);
    const { loading: deleteLoading, error: deleteError, data: deleteData} = useMutationDeleteTest(schema, typename, updateData);

    const scalarQueries = getReadScalarValue(schema, typename)

    return (<>
        <CardCapsule title={`${typename} tests`}>

        
        {vectorLoading && <div>Loading vector...</div>}
        {vectorError && <div>Error vector: <pre>{JSON.stringify(vectorError, null, 4)}</pre></div>}
        {scalarLoading && <div>Loading scalar...</div>}
        {scalarError && <div>Error scalar: <pre>{JSON.stringify(scalarError, null, 4)}</pre></div>}
        {insertLoading && <div>Loading insert...</div>}
        {insertError && <div>Error insert: <pre>{JSON.stringify(insertError, null, 4)}</pre></div>}
        {updateLoading && <div>Loading update...</div>}
        {updateError && <div>Error update: <pre>{JSON.stringify(updateError, null, 4)}</pre></div>}
        {deleteLoading && <div>Loading delete...</div>}
        {deleteError && <div>Error delete: <pre>{JSON.stringify(deleteError, null, 4)}</pre></div>}

        <div>Type: {typename}</div>
        <div>Fields:</div>
        <ul>
            {fields.map((field) => (
                <li key={field.name}>
                    {field.name}: {unwrapType(field.type).name}
                </li>
            ))}
        </ul>
        </CardCapsule>
    </>)
}

const TypeInsertTest = ({schema, typename, operationname, variables}) => {  

    const { loading: insertLoading, error: insertError, data: insertData, query} = useMutationInsertTest(schema, operationname, variables);
    const { id } = insertData || {}
    const updateMutations = getUpdateMutations(schema, typename)

    return (<>
        <Accordion.Item eventKey={`${operationname}`}>
            <Accordion.Header className={insertError?"bg-danger":"bg-success"}>
                Query.{operationname} {"->"} {typename}
            </Accordion.Header>        
            <Accordion.Body className={insertError?"bg-danger":"bg-success"}>
                {insertLoading && <div>Loading scalar...</div>}
                {insertError && <div>Error scalar: <pre>{JSON.stringify(insertError, null, 4)}</pre></div>}
                {query && (<div>
                    <pre>{query}</pre>
                </div>)}
                {insertData && (<div>
                    <pre>{JSON.stringify(insertData, null, 4)}</pre>
                </div>)}
            
            </Accordion.Body>
        </Accordion.Item>
    </>)
}

const TypeScalarTest = ({schema, typename, operationname, variables}) => {  
    const { loading, error, query, data: scalarData} = useQueryScalarTest(schema, operationname, variables);
    const { id } = variables
    const insertQueries = getInsertMutations(schema, typename)

    return (<>
        
            <Accordion.Item eventKey={id}>
                <Accordion.Header className={error?"bg-danger":"bg-success"}>
                    Query.{operationname} {"->"} {typename}
                </Accordion.Header>        
                <Accordion.Body className={error?"bg-danger":"bg-success"}>
                    {loading && <div>Loading scalar...</div>}
                    {error && <div>Error scalar: <pre>{JSON.stringify(error, null, 4)}</pre></div>}
                    {query && (<div>
                        <pre>{query}</pre>
                    </div>)}
                    {scalarData && (<div>
                        <pre>{JSON.stringify(scalarData, null, 4)}</pre>
                    </div>)}
                
                </Accordion.Body>
            </Accordion.Item>
            {insertQueries.map(operationname => <TypeInsertTest key={operationname} schema={schema} typename={typename} variables={scalarData} operationname={operationname} />)}
        
    </>)
}

const TypePageTest = ({schema, typename, operationname}) => {  
    const { loading: vectorLoading, error: vectorError, query, data: vectorData} = useQueryVectorTest(schema, operationname);
    const id = vectorData && vectorData.length > 0 && vectorData[0]?.id;

    const scalarQueries = useMemo(() => getReadScalarValue(schema, typename), [schema, typename])

    return (<>
        <Accordion>    
            <Accordion.Item eventKey={operationname}>
                <Accordion.Header className={vectorError?"bg-danger":"bg-success"} as="div">
                Query.{operationname} {"->"} List[{typename}!]!
                </Accordion.Header>
                <Accordion.Body className={vectorError?"bg-danger":"bg-success"}>
                    {vectorLoading && <div>Loading vector...</div>}
                    {vectorError && <div>Error vector: <pre>{JSON.stringify(vectorError, null, 4)}</pre></div>}
                    {query && (<div>
                        <pre>{query}</pre>
                    </div>)}

                    {vectorData && (<div>
                        <pre>{JSON.stringify(vectorData, null, 4)}</pre>
                    </div>)}
                </Accordion.Body>
            </Accordion.Item>
        
            {!vectorError && vectorData && (<div>
                {scalarQueries.map(operationname => <TypeScalarTest schema={schema} typename={typename} operationname={operationname} variables={{id}} />)}
            </div>)}
        </Accordion>
    </>)
}

const TypeTests = ({schema, typename}) => {  
    const vectorQueries_ = useMemo(() => getReadVectorValue(schema, typename), [typename])
    const vectorQueries = vectorQueries_.slice(0, 1)

    return (<>
        <CardCapsule title={`${typename} tests`}>
            {JSON.stringify(vectorQueries)}
            {vectorQueries.map(operationname => <TypePageTest key={operationname} schema={schema} typename={typename} operationname={operationname} />)}
        </CardCapsule>
    </>)
}


const TypeChainTest = ({schema, typename}) => {
    const vectorQueries = useMemo(() => getReadVectorValue(schema, typename), [schema, typename])
    const scalarQueries = useMemo(() => getReadScalarValue(schema, typename), [schema, typename])
    const insertQueries = useMemo(() => getInsertMutations(schema, typename), [schema, typename])
    const updateQueries = useMemo(() => getUpdateMutations(schema, typename), [schema, typename])
    const deleteQueries = useMemo(() => getDeleteMutations(schema, typename), [schema, typename])

    const [vectorResponses, setVectorResponses] = useState({});
    const [scalarResponses, setScalarResponses] = useState({});
    const [insertResponses, setInsertResponses] = useState({});
    const [updateResponses, setUpdateResponses] = useState({});
    const [deleteResponses, setDeleteResponses]   = useState({});    
    const [id, setId] = useState(null)
    const [insertVariables, setInsertVariables] = useState(null)
    const [mutationVariables, setMutationVariables] = useState(null)

    useEffect(() => {
        let isMounted = true;

        const runSequentialQueries = async () => {
            const results = {};
            for (const operationName of vectorQueries) {
                try {
                    const query = buildQueryPage(schema, operationName);
                    const json = await gqlFetch(URI, query);
                    results[operationName] = json;
                } catch (err) {
                    console.error(`Error in ${operationName}:`, err);
                    results[operationName] = json;
                }
            }
            if (isMounted) {
                setVectorResponses(results);
                // vezmeme první operation a jeho první prvek v poli, assume data[op] je pole objektů s id
                const firstOp = vectorQueries[0];
                const firstData = results[firstOp]?.data?.[firstOp];
                const firstId = Array.isArray(firstData) ? firstData[0]?.id : null;
                setId(firstId ?? null);
            }
        };

        if (vectorQueries.length > 0) {
            runSequentialQueries();
        }

        return () => {
            isMounted = false;
        };
    }, [vectorQueries, schema])

    // 2) Po získání id spustí scalar queries s proměnnou { id }
    useEffect(() => {
        let isMounted = true;

        const runSequentialScalarQueries = async () => {
            if (!id) return;
            const results = {};
            let entity = null;
            for (const operationName of scalarQueries) {
                try {
                    const query = buildQueryScalar(schema, operationName);
                    const json = await gqlFetch(URI, query, { id });
                    results[operationName] = json;
                    entity = json?.data[operationName]
                    
                } catch (err) {
                    console.error(`Error in ${operationName}:`, err);
                    results[operationName] = json;
                }
            }
            if (isMounted) {
                console.log(entity)
                // Remove the 'id' field from the variables
                delete entity.id;
                // Remove the 'lastchange' field from the variables
                delete entity.lastchange;

                setInsertVariables(entity)
                setScalarResponses(results);
            }
        };

        runSequentialScalarQueries();

        return () => {
            isMounted = false;
        };
    }, [scalarQueries, schema, id]);

    // 3) Insert → Update → Delete workflow
    useEffect(() => {
        if (!insertVariables) return;
        let isMounted = true;
        const runWorkflow = async () => {
            // a) Inserts
            const deleteMutation = buildExpandedMutation(schema, deleteQueries[0]);
            const responses = {}
            for (const op of insertQueries) {
                try {
                    const insertMutation = buildExpandedMutation(schema, op);
                    const json = await gqlFetch(URI, insertMutation, insertVariables);
                    const mutationVariables = json?.data?.[op];
                    responses[op] = json;
                    const deletejson = await gqlFetch(URI, deleteMutation, mutationVariables)
                } catch (err) {
                    responses[op] = json
                    console.error(`Insert error ${op}:`, err);
                }
            }
            if (!isMounted) return;
            setInsertResponses(responses);
        }
        runWorkflow()
        return () => { isMounted = false; };
    }, [insertQueries, insertVariables])

    useEffect(() => {
        let isMounted = true;
        const runWorkflow = async () => {
            // b) Updates on first inserted entity
            const insertMutation = buildExpandedMutation(schema, insertQueries[0]);
            const deleteMutation = buildExpandedMutation(schema, deleteQueries[0]);
            const json = await gqlFetch(URI, insertMutation, insertVariables);
            const mutationVariables = json?.data?.[insertQueries[0]];
            let entity = {...mutationVariables}
            const updateRes = {};
            for (const op of updateQueries) {
                try {
                    const m = buildExpandedMutation(schema, op);
                    const json = await gqlFetch(URI, m, entity);
                    const resp = json?.data?.[op];
                    updateRes[op] = json;
                    if (resp?.lastchange) {
                        entity = { ...entity, lastchange: resp.lastchange };
                    }
                    
                } catch (err) {
                    console.error(`Update error ${op}:`, err);
                    updateRes[op] = err
                }
            }
            const deletejson = await gqlFetch(URI, deleteMutation, entity)
            if (!isMounted) return;
            setUpdateResponses(updateRes);
        }
        if (insertQueries.length && updateQueries.length && deleteQueries.length) {
            runWorkflow();
        }
        return () => { isMounted = false; };
    }, [insertQueries, insertVariables, updateQueries, deleteQueries, schema])

    useEffect(() => {
        let isMounted = true;
        const runWorkflow = async () => {
            const insertMutation = buildExpandedMutation(schema, insertQueries[0]);
            const deleteRes = {};
            for (const delOp of deleteQueries) {
                try {
                    const insertJson = await gqlFetch(URI, insertMutation, insertVariables);
                    const mutationVariables = insertJson?.data?.[op];
                    const m = buildExpandedMutation(schema, delOp);
                    const json = await gqlFetch(URI, m, mutationVariables);
                    deleteRes[delOp] = json;
                } catch (err) {
                    console.error(`Delete error ${delOp}:`, err);
                    deleteRes[delOp] = err;
                }
            }           
            if (isMounted) setDeleteResponses(deleteRes);
        };

        if (insertQueries.length && deleteQueries.length) {
            runWorkflow();
        }
        return () => { isMounted = false; };
    }, [insertVariables, insertQueries, deleteQueries, schema]);

    return (<>
        <Accordion.Item eventKey={typename}>
            <Accordion.Header>{typename} - Summary</Accordion.Header>
            <Accordion.Body>
                {insertQueries.length == 0 && "Missing insert ops"}<br />
                {updateQueries.length == 0 && "Missing update ops"}<br />
                {deleteQueries.length == 0 && "Missing delete ops"}<br />
                <pre>{JSON.stringify(insertQueries)}</pre>
                <pre>{JSON.stringify(updateQueries)}</pre>
                <pre>{JSON.stringify(deleteQueries)}</pre>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={`${typename} - vector reads`}>
            <Accordion.Header>{`${typename} - Vector reads`}</Accordion.Header>
            <Accordion.Body>
                <pre>{JSON.stringify(vectorResponses, null, 2)}</pre>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={`${typename} - scalar reads`}>
            <Accordion.Header>{`${typename} - Scalar reads`}</Accordion.Header>
            <Accordion.Body>
                <pre>{JSON.stringify(scalarResponses, null, 2)}</pre>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={`${typename} - inserts`}>
            <Accordion.Header>{`${typename} - Inserts`}</Accordion.Header>
            <Accordion.Body>
                <pre>{JSON.stringify(insertResponses, null, 2)}</pre>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={`${typename} - updates`}>
            <Accordion.Header>{`${typename} - Updates`}</Accordion.Header>
            <Accordion.Body>
                <pre>{JSON.stringify(updateResponses, null, 2)}</pre>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={`${typename} - deletes`}>
            <Accordion.Header>{`${typename} - Deletes`}</Accordion.Header>
            <Accordion.Body>
                <pre>{JSON.stringify(deleteResponses, null, 2)}</pre>
            </Accordion.Body>
        </Accordion.Item>
    </>)
}

export const SchemaTests = ({schema}) => {

    const queryTypeName = schema?.queryType?.name;
    // find the full Query type definition in schema.types
    const queryTypeDef = schema?.types.find(t => t.name === queryTypeName) || {};
    const queryFields = queryTypeDef.fields || [];

    // Collect base type names, filter out falsy, then dedupe
    const names = queryFields
        .map(item => unwrapType(item.type).name)
        .filter(Boolean);

    const namesOnce_ = Array.from(new Set(names));    
    // const namesOnce = namesOnce_.slice(0, 1)
    const namesOnce = namesOnce_
    return (<>
        {/* <div>{namesOnce.map(typename => <TypeTests key={typename} schema={schema} typename={typename} />)}</div> */}
        <Accordion>
            {namesOnce.map(typename => <TypeChainTest key={typename} schema={schema} typename={typename} />)}
        </Accordion>
        
    </>)
}