import React from "react"

export default function SubjectPage({
  params,
}: {
  params: {
    subject: string
  }
}) {
  return <div>subjectPage {params.subject}</div>
}
