import { GetNote } from "@/components/get-note"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export default function LandingPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <MaxWidthWrapper className="flex flex-col items-center gap-6">
          <h1 className="bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text p-1 text-center font-heading text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Your Path to Excellence in Computer Science!
          </h1>
          <p className="max-w-prose text-pretty text-center text-sm tracking-wide text-zinc-600 sm:text-base/7">
            Comprehensive resources, semester-wise study materials, and past
            questions all in one place!
          </p>
          <GetNote />
        </MaxWidthWrapper>
      </section>
    </>
  )
}
