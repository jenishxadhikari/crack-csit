import Link from "next/link"

import { cn } from "@/lib/utils"

interface ListItemsProps {
  props: {
    title: string
    href: string
  }
  className?: string
}

export function ListItems({
  props: { title, href },
  className,
}: ListItemsProps) {
  return (
    <li
      key={title}
      className={cn(
        "rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent",
        className
      )}
    >
      <Link href={href}>{title}</Link>
    </li>
  )
}
