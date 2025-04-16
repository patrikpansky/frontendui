import { Card, Badge, Button, Form, OverlayTrigger, Tooltip } from "@hrbolek/uoisfrontend-shared"
import { useState, useCallback } from "react"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"

const UpdateApplicationStatusAsyncAction = {
    query: `
        mutation UpdateApplicationStatus($id: ID!, $status: String!, $notes: String) {
            updateApplicationStatus(id: $id, status: $status, notes: $notes) {
                id
                status
                notes
            }
        }
    `
}

export const ApplicationStatus = ({ application, onStatusUpdate }) => {
    const [expanded, setExpanded] = useState(false)
    const [notes, setNotes] = useState(application.notes || "")
    const [selectedStatus, setSelectedStatus] = useState(application.status)

    const { fetch: updateStatus } = useAsyncAction(
        UpdateApplicationStatusAsyncAction,
        { id: application.id },
        { deferred: true }
    )

    const handleStatusChange = useCallback(async (newStatus) => {
        try {
            const result = await updateStatus({
                id: application.id,
                status: newStatus,
                notes: notes
            })
            setSelectedStatus(newStatus)
            if (onStatusUpdate) {
                onStatusUpdate(result)
            }
        } catch (error) {
            console.error("Failed to update status:", error)
        }
    }, [application.id, notes, updateStatus, onStatusUpdate])

    const getStatusColor = (status) => {
        const colors = {
            SUBMITTED: "info",
            UNDER_REVIEW: "warning",
            ACCEPTED: "success",
            REJECTED: "danger",
            PENDING: "secondary",
            DEFERRED: "dark",
            WAITLISTED: "primary"
        }
        return colors[status] || "secondary"
    }

    const getStatusTooltip = (status) => {
        const tooltips = {
            SUBMITTED: "Application has been submitted and is awaiting initial review",
            UNDER_REVIEW: "Application is currently being reviewed by the committee",
            ACCEPTED: "Application has been approved",
            REJECTED: "Application has been declined",
            PENDING: "Application is incomplete or pending additional information",
            DEFERRED: "Decision has been postponed to a later date",
            WAITLISTED: "Applicant has been placed on a waiting list"
        }
        return tooltips[status] || "Status unknown"
    }

    return (
        <Card className="application-status-card mb-3">
            <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{application.applicant?.name || "Unknown Applicant"}</h5>
                    <div className="d-flex align-items-center gap-2">
                        <Form.Select 
                            size="sm" 
                            value={selectedStatus}
                            onChange={(e) => handleStatusChange(e.target.value)}
                            style={{ width: 'auto' }}
                        >
                            {Object.keys(getStatusColor(selectedStatus)).map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </Form.Select>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{getStatusTooltip(selectedStatus)}</Tooltip>}
                        >
                            <Badge bg={getStatusColor(selectedStatus)}>
                                {selectedStatus}
                            </Badge>
                        </OverlayTrigger>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="application-details">
                    <p><strong>Submission Date:</strong> {new Date(application.submissionDate).toLocaleDateString()}</p>
                    {expanded && (
                        <>
                            <p><strong>Program:</strong> {application.program?.name}</p>
                            <p><strong>Email:</strong> {application.applicant?.email}</p>
                            {application.examDate && (
                                <p><strong>Exam Date:</strong> {new Date(application.examDate).toLocaleDateString()}</p>
                            )}
                            <Form.Group className="mb-3">
                                <Form.Label><strong>Notes:</strong></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Add notes about this application..."
                                />
                            </Form.Group>
                        </>
                    )}
                </div>
                <Button 
                    variant="link" 
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2"
                >
                    {expanded ? "Show Less" : "Show More"}
                </Button>
            </Card.Body>
        </Card>
    )
}