"use client"

import { ArrowRight, ChevronDown, ChevronUp, Menu, X } from "lucide-react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  )
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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md mx-auto flex h-20 w-full max-w-[1512px] items-center justify-between px-4 py-[24px] sm:px-6 lg:px-[86px]">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image src="/Logo-v2.svg" alt="Logo" width={120} height={32} />
      </Link>

      {/* Center nav items (Desktop) */}
      <div className="hidden items-center gap-10 lg:flex">
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

        {/* Right actions (Desktop) */}
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

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="flex p-2 text-foreground lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="size-6" />
        ) : (
          <Menu className="size-6" />
        )}
      </button>

      {/* Mobile Menu Drawer/Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 flex max-h-[calc(100vh-5rem)] flex-col gap-4 overflow-y-auto border-b bg-background px-6 py-6 shadow-xl lg:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label} className="flex flex-col">
                {item.hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between py-2 text-base font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          mobileDropdownOpen === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileDropdownOpen === item.label &&
                      item.dropdownItems && (
                        <div className="flex flex-col gap-2 pl-4 pb-2">
                          {item.dropdownItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "flex items-center gap-2 py-1 text-sm text-foreground/80",
                                subItem.isBold &&
                                  "font-semibold text-foreground",
                              )}
                            >
                              {subItem.label}
                              {subItem.hasArrow && (
                                <ArrowRight className="size-3.5" />
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-col gap-3 pt-4 border-t">
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="/#" />}
              className="w-full justify-center font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng nhập
            </Button>
            <Button
              variant="primary"
              size="lg"
              nativeButton={false}
              render={<Link href="/#" />}
              className="w-full justify-center font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sử dụng miễn phí
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
