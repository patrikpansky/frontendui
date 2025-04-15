import { Input, Button } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"

export const ExamConditionEditor = ({ exam }) => {
    const [conditions, setConditions] = useState(exam.conditions || [])
    const [newCondition, setNewCondition] = useState("")
    
    const { fetch: saveConditions } = useAsyncAction(
        UpdateExamConditionsAsyncAction,
        { examId: exam.id, conditions },
        { deferred: true }
    )

    const handleAddCondition = () => {
        if (newCondition.trim()) {
            setConditions([...conditions, newCondition])
            setNewCondition("")
        }
    }

    return (
        <div className="exam-conditions">
            <h4>Exam Conditions</h4>
            <ul>
                {conditions.map((cond, i) => (
                    <li key={i}>{cond}</li>
                ))}
            </ul>
            <Input 
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                placeholder="Add new condition"
            />
            <Button onClick={handleAddCondition}>Add</Button>
            <Button onClick={saveConditions}>Save</Button>
        </div>
    )
}