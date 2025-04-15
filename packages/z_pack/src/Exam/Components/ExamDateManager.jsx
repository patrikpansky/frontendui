import { Calendar, Select, Button, LoadingSpinner, ErrorHandler } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { useState, useEffect } from "react"
import { ExamDatesAsyncAction, UpdateExamDatesAsyncAction } from "../Queries/ExamDatesAsyncActions"

export const ExamDateManager = ({ exam }) => {
    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(true)
    
    // Fetch initial dates
    const { fetch: fetchDates } = useAsyncAction(
        ExamDatesAsyncAction,
        { examId: exam.id },
        { deferred: true }
    )

    const { fetch: saveDates } = useAsyncAction(
        UpdateExamDatesAsyncAction,
        { examId: exam.id, dates },
        { deferred: true }
    )

    useEffect(() => {
        const loadDates = async () => {
            try {
                const result = await fetchDates()
                setDates(result.dates?.map(date => ({
                    date: new Date(date.date),
                    applicants: date.applicants || []
                })) || [])
                setLoading(false)
            } catch (error) {
                console.error("Failed to load exam dates:", error)
                setLoading(false)
            }
        }
        loadDates()
    }, [exam.id])

    const handleAddDate = (date) => {
        setDates([...dates, {
            date: new Date(date),
            applicants: []
        }])
    }

    const handleAssignApplicants = (dateIndex, selectedApplicants) => {
        const updatedDates = [...dates]
        updatedDates[dateIndex].applicants = selectedApplicants.map(a => a.value)
        setDates(updatedDates)
    }

    const handleRemoveDate = (dateIndex) => {
        setDates(dates.filter((_, index) => index !== dateIndex))
    }

    if (loading) return <LoadingSpinner text="Loading exam dates..." />
    
    return (
        <div className="exam-dates">
            <h4>Exam Dates</h4>
            {error && <ErrorHandler error={error} />}
            
            <Calendar 
                onChange={handleAddDate}
                minDate={new Date()}
            />
            <ul>
                {dates.map((dateObj, i) => (
                    <li key={i}>
                        <div className="date-header">
                            <span>{dateObj.date.toLocaleDateString()}</span>
                            <Button variant="danger" size="sm" onClick={() => handleRemoveDate(i)}>
                                Remove
                            </Button>
                        </div>
                        <Select 
                            options={exam.applicants.map(a => ({
                                value: a.id,
                                label: `${a.name} (${a.id})`
                            }))}
                            value={dateObj.applicants.map(appId => ({
                                value: appId,
                                label: exam.applicants.find(a => a.id === appId)?.name || appId
                            }))}
                            onChange={(selected) => handleAssignApplicants(i, selected)}
                            isMulti
                            placeholder="Assign applicants..."
                        />
                    </li>
                ))}
            </ul>
            <Button onClick={saveDates} variant="success">
                Save All Dates
            </Button>
        </div>
    )
}