"use client"

import { ArrowRight, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type DropdownItem = {
  label: string
  href: string
  hasArrow?: boolean
  isBold?: boolean
}

type NavItem = {
  label: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: "Giải pháp",
    href: "/#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Lorem ipsum dolor", href: "/#" },
      {
        label: "Sed do eiusmod tempor",
        href: "/#",
        hasArrow: true,
        isBold: true,
      },
      { label: "Lorem ipsum dolor", href: "/#" },
      { label: "Sed do eiusmod tempor", href: "/#" },
    ],
  },
  { label: "Thiết bị", href: "/#" },
  { label: "Bảng giá", href: "/#" },
  { label: "Hỗ trợ", href: "/#" },
]

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleMouseEnter(label: string) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(label)
  }

  function handleMouseLeave() {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <nav className="relative flex h-20 w-full items-center justify-between border-b px-[86px] py-[24px]">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image src="/Logo-v2.svg" alt="Logo" width={120} height={32} />
      </Link>

      {/* Center nav items */}
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative px-3 py-2"
              onMouseEnter={() =>
                item.hasDropdown && handleMouseEnter(item.label)
              }
              onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronUp
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === item.label ? "rotate-0" : "rotate-180",
                    )}
                  />
                )}
              </Link>

              {/* Dropdown menu */}
              {item.hasDropdown && item.dropdownItems && (
                <div
                  className={cn(
                    "pointer-events-none absolute top-full left-0 z-50 pt-3 opacity-0 transition-all duration-200",
                    openDropdown === item.label &&
                      "pointer-events-auto opacity-100",
                  )}
                >
                  <div className="flex w-[280px] flex-col gap-4 rounded-[12px] border-t bg-popover p-6 shadow-lg">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href}
                        className={cn(
                          "flex items-center text-sm transition-colors hover:opacity-70 gap-2",
                          dropdownItem.isBold && "font-semibold",
                        )}
                      >
                        {dropdownItem.label}
                        {dropdownItem.hasArrow && (
                          <ArrowRight className="size-4" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="/#" />}
            className="font-semibold"
          >
            Đăng nhập
          </Button>
          <Button
            variant="primary"
            size="lg"
            nativeButton={false}
            render={<Link href="/#" />}
            className="font-semibold"
          >
            Sử dụng miễn phí
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
