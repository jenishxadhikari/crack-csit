import React from "react"

export default function SemesterPage({
  params,
}: {
  params: {
    semester: string
  }
}) {
  return <div>SemesterPage {params.semester}</div>
}
