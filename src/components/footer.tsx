import Link from "next/link"

import { Semesters } from "@/config/links"
import { OtherLinks } from "@/config/links"

import { Icons } from "./icons"
import { ListItems } from "./list-items"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { buttonVariants } from "./ui/button"

export function Footer() {
  return (
    <footer>
      <MaxWidthWrapper className="grid grid-cols-1 gap-20 py-10 text-center md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-start gap-2">
          <Link href="/" className="text-lg font-semibold">
            <span className="text-primary">Crack</span>
            <span className="bg-primary px-0.5 text-white">CSIT</span>
          </Link>
          <p className="max-w-prose text-pretty text-start text-sm tracking-wide">
            Crack CSIT is a platform offering resources to help students excel
            in CSIT semester exams.
          </p>
          <p className="mt-4 flex items-center justify-center gap-1 text-sm font-normal">
            &copy; 2024 Jenish Adhikari -
            <Link
              target="_blank"
              href="https://github.com/jenishxadhikari/crack-csit"
              className={buttonVariants({
                size: "sm",
                variant: "outline",
              })}
            >
              <Icons.github />
              Open Source
            </Link>
          </p>
        </div>
        <div className="text-start">
          <h4 className="m-2 w-fit border-b-2 border-b-primary font-medium">
            Semesters
          </h4>
          <ul className="grid grid-cols-2 gap-2">
            {Semesters.map((semester) => (
              <ListItems
                props={semester}
                key={semester.title}
                className="p-2 font-normal"
              />
            ))}
          </ul>
        </div>
        <div className="text-start">
          <h4 className="m-2 w-fit border-b-2 border-b-primary font-medium">
            Links
          </h4>
          <ul className="grid grid-cols-2 gap-2">
            {OtherLinks.map((item) => (
              <ListItems
                props={item}
                key={item.title}
                className="p-2 font-normal"
              />
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
