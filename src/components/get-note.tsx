"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { CSITSemesters } from "@/config/subjects-info"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

interface Subject {
  code: string
  name: string
}

export function GetNote() {
  const [semester, setSemester] = useState("")
  const [subject, setSubject] = useState("")
  const [subjects, setSubjects] = useState<Subject[]>([])

  useEffect(() => {
    if (semester) {
      const currentSemester = CSITSemesters[semester]
      setSubjects(currentSemester)
    }
  }, [semester])

  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Select value={semester} onValueChange={setSemester}>
          <SelectTrigger className="w-[180px] border-primary">
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Semesters</SelectLabel>
              <SelectItem value="first">First</SelectItem>
              <SelectItem value="second">Second</SelectItem>
              <SelectItem value="third">Third</SelectItem>
              <SelectItem value="fourth">Fourth</SelectItem>
              <SelectItem value="fifth">Fifth</SelectItem>
              <SelectItem value="sixth">Sixth</SelectItem>
              <SelectItem value="seventh">Seventh</SelectItem>
              <SelectItem value="eighth">Eighth</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={subject} onValueChange={setSubject}>
          <SelectTrigger className="w-[180px] border-primary">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {subjects.length > 0 ? (
                <>
                  <SelectLabel>Subjects</SelectLabel>
                  {subjects.map((subject: Subject) => (
                    <SelectItem key={subject.code} value={subject.code}>
                      {subject.name}
                    </SelectItem>
                  ))}
                </>
              ) : (
                <SelectLabel>Select Semester</SelectLabel>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Link
          href={semester ? `/semester/${semester}/${subject}` : ""}
          className={buttonVariants({
            className: "group",
          })}
        >
          Get Note
          <Icons.arrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </>
  )
}
