import Button from 'react-bootstrap/Button';

export const RequestButtons = ({request}) => {
    const states = []
    const targets = request?.state?.targets || []
    return (
        <>
            {/* <Button variant="success" className='form-control'>Vrátit</Button>
            <Button variant="success" className='form-control'>Schválit</Button> */}
            {/* <Button variant="success" >Vrátit</Button>
            <Button variant="success" >Schválit</Button> */}
            {targets.map(transition => 
                <Button key={transition?.id} variant='outline-success'>
                    {transition?.name} ({transition?.target?.name})
                </Button>
            )}
        </>
    )
}