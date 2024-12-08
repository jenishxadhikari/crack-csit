import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="grow bg-muted">{children}</main>
      <Footer />
    </>
  )
}
