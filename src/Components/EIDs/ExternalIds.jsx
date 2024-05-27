import { useParams } from "react-router-dom"
import { CardCapsule, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import { ExternalidsAsyncActions } from "../../Queries/_externalids"
import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"



export const ExternalIds = ({}) => {
    const {id} = useParams()
    // const [onResolve, onReject] = validator(useDispatch())
    const [ids, setIds] = useState(null)
    const dispatch = useDispatch()
    useEffect( 
        () => {
            const asyncFetch = async () => {
                const jsonResult = await dispatch(ExternalidsAsyncActions.read({id}))
                const resultList = jsonResult?.data?.resultList
                if (resultList) {
                    setIds(resultList)
                }
            }
            asyncFetch()    
        },
        [dispatch, id]
    )
    if (ids) {
        if (ids.length > 0) {
            return (
                <CardCapsule title={"Externí ID"}>
                    {/* {JSON.stringify(ids)} */}
                    {ids.map(
                        id => (id?.link)?<Row key={id?.id} >
                                <Col>
                                    <a href={id?.link}>{id?.type?.name}</a>
                                </Col>
                            </Row>:""
                    )}
                </CardCapsule>
            )
        } else {
            return <></>
        }
        
    } else {
        return (
            <></>
        )
    }
    
}