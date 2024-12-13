export const ProgramMediumContent = ({program}) => {
    return (
        <>
            <Row>
                <Col>
                    {program?.name} ({program?.type?.name})
                </Col>
            </Row>
        </>
    )
}