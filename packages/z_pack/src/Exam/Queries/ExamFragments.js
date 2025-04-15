export const ExamDatesFragment = `
fragment ExamDatesFragment on Exam {
    dates {
        date
        applicants {
            id
            name
        }
    }
}
`