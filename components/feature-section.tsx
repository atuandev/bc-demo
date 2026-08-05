"use client"

import Image from "next/image"
import { useState } from "react"
import { ChairIcon, FoodIcon, ShoppingIcon } from "@/components/svgs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface CategoryItem {
  id: string
  title: string
  description: string
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "cafe",
    title: "Quán cà phê",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
  {
    id: "restaurant",
    title: "Quán ăn / nhà hàng",
    description:
      "Tối ưu quy trình gọi món tại bàn, đồng bộ bếp - thu ngân và thanh toán nhanh chóng, chính xác.",
  },
  {
    id: "bar",
    title: "Quán bar / lounge / pub",
    description:
      "Quản lý đồ uống theo công thức (recipe), mở tab linh hoạt và kiểm soát tồn kho rượu chặt chẽ.",
  },
  {
    id: "foodtruck",
    title: "Quán ăn di động",
    description:
      "Bán hàng linh hoạt mọi lúc mọi nơi trên điện thoại, tablet với kết nối 4G/Wifi ổn định.",
  },
  {
    id: "milktea",
    title: "Tiệm trà sữa",
    description:
      "Tùy biến món không giới hạn, in tem nhãn dán ly tức thì và quản lý nguyên liệu tự động.",
  },
  {
    id: "bakery",
    title: "Tiệm bánh",
    description:
      "Theo dõi hạn sử dụng, quản lý đơn đặt bánh trước và tích điểm khách hàng thân thiết.",
  },
]

interface NavTab {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  isNew?: boolean
}

const NAV_TABS: NavTab[] = [
  {
    id: "fnb",
    label: "Ăn uống",
    icon: FoodIcon,
  },
  {
    id: "retail",
    label: "Bán lẻ",
    icon: ShoppingIcon,
    isNew: true,
  },
  {
    id: "service",
    label: "Dịch vụ",
    icon: ChairIcon,
    isNew: true,
  },
]

interface FeatureSectionProps {
  badgeText?: string
  title?: string
  description?: string
  className?: string
}

export function FeatureSection({
  badgeText = "LONG SUBTITLE",
  title = "Everything You Need",
  description = "Improve speed of service, boost kitchen efficiency, and drive repeat business with a restaurant management solution that offers everything you need to maximize profits and offer an unparalleled guest experience – all in one place.",
  className,
}: FeatureSectionProps) {
  const [activeTab, setActiveTab] = useState("retail")
  const [activeCategory, setActiveCategory] = useState("cafe")

  const activeNavTab =
    NAV_TABS.find((tab) => tab.id === activeTab) ?? NAV_TABS[0]
  const ActiveNavIcon = activeNavTab.icon
  const activeCategoryItem =
    CATEGORIES.find((item) => item.id === activeCategory) ?? CATEGORIES[0]

  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24 sm:px-[86px]",
        className,
      )}
    >
      {/* Header Container */}
      <div className="flex w-full max-w-[1176px] flex-col items-center gap-6 sm:gap-5 lg:gap-6">
        {/* Subtitle Pill / Badge */}
        <div className="flex w-full max-w-[860px] flex-col items-center gap-4 sm:gap-5 lg:gap-4">
          <div className="flex h-[28px] w-fit items-center justify-center rounded-[24px] bg-primary px-3">
            <span className="font-manrope text-sm font-bold uppercase text-foreground">
              {badgeText}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-manrope w-full text-[32px] font-extrabold leading-[40px] tracking-tight text-secondary sm:text-[44px] sm:leading-[54px] lg:text-[56px] lg:leading-[68px]">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p className="font-manrope max-w-[860px] text-[15px] font-normal leading-[24px] text-secondary sm:text-[16px] sm:leading-[28px]">
          {description}
        </p>
      </div>

      {/* Feature Card Container */}
      <div className="relative mt-12 w-full max-w-[1220px] lg:mt-16">
        {/* Main Card with #F5F5EB background */}
        <div className="relative flex min-h-[580px] w-full flex-col justify-between overflow-hidden rounded-[28px] bg-[#F5F5EB] p-5 pt-16 sm:p-8 sm:pt-20 md:p-12 md:pt-20 lg:h-[600px] lg:rounded-[32px] lg:p-14 lg:pt-20">
          {/* Decorative Grid SVGs */}
          <div className="pointer-events-none absolute top-0 left-0 z-0 h-[360px] w-[360px] sm:h-[460px] sm:w-[460px] lg:h-[560px] lg:w-[560px]">
            <Image
              src="/feature-grid-top-left.svg"
              alt=""
              fill
              className="object-contain object-left-top opacity-20"
              priority
            />
          </div>

          <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[620px]">
            <Image
              src="/feature-grid-bottom-right.svg"
              alt=""
              fill
              className="object-contain object-right-bottom opacity-20"
              priority
            />
          </div>

          {/* Softening Blur Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-[1] h-[1713px] w-[942px] -translate-x-1/2 -translate-y-1/2 rotate-[43.07deg] bg-[#F5F5EB]"
            style={{
              filter: "blur(180px)",
            }}
          />

          {/* Top Navigation Notch Container (Desktop) */}
          <div className="absolute top-0 left-1/2 z-20 hidden w-[624px] -translate-x-1/2 sm:block">
            <div className="relative flex h-[60px] w-full items-center rounded-t-none rounded-b-[32px] bg-white px-[12px] pb-[12px] pt-0">
              {/* Left Inverted Concave Corner (24px) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -left-[24px] top-0 fill-white text-white"
              >
                <path d="M 0 0 A 24 24 0 0 1 24 24 V 0 H 0 Z" />
              </svg>

              {/* Right Inverted Concave Corner (24px) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -right-[24px] top-0 fill-white text-white"
              >
                <path d="M 0 24 A 24 24 0 0 1 24 0 H 0 V 24 Z" />
              </svg>

              {/* Navigation Tabs */}
              {NAV_TABS.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "group flex h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-secondary text-secondary-foreground shadow-sm"
                        : "text-secondary hover:bg-black/5 hover:text-black",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-4 shrink-0",
                        isActive
                          ? "text-secondary-foreground"
                          : "text-secondary",
                      )}
                    />
                    <span>{tab.label}</span>
                    {tab.isNew && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary">
                        NEW
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Top Navigation Notch Container (Mobile - Height 36px Select) */}
          <div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 sm:hidden">
            <div className="relative flex h-[48px] items-center rounded-t-none rounded-b-[24px] bg-white px-2.5 pb-[10px] pt-0">
              {/* Left Inverted Concave Corner (20px) */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -left-[20px] top-0 fill-white text-white"
              >
                <path d="M 0 0 A 24 24 0 0 1 24 24 V 0 H 0 Z" />
              </svg>

              {/* Right Inverted Concave Corner (20px) */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -right-[20px] top-0 fill-white text-white"
              >
                <path d="M 0 24 A 24 24 0 0 1 24 0 H 0 V 24 Z" />
              </svg>

              {/* Mobile Navigation Select */}
              <Select
                value={activeTab}
                onValueChange={(val) => val && setActiveTab(val)}
              >
                <SelectTrigger className="flex h-[36px] items-center gap-2 rounded-full border-none bg-secondary px-8 py-1 text-xs font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90 focus-visible:ring-0 [&_svg]:text-secondary-foreground">
                  <div className="flex items-center gap-1.5">
                    <ActiveNavIcon className="size-3.5 shrink-0 text-secondary-foreground items-end" />
                    <span className="font-semibold text-secondary-foreground text-base">
                      {activeNavTab.label}
                    </span>
                    {activeNavTab.isNew && (
                      <span className="rounded-full bg-primary px-1.5 py-1.5 text-[10px] font-bold text-secondary leading-none">
                        NEW
                      </span>
                    )}
                  </div>
                </SelectTrigger>
                <SelectContent className="min-w-[190px] rounded-2xl bg-white p-1.5 shadow-xl border border-black/5">
                  {NAV_TABS.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <SelectItem
                        key={tab.id}
                        value={tab.id}
                        className="flex cursor-pointer items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-secondary transition-colors hover:bg-black/5"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="size-4 shrink-0 text-secondary" />
                          <span>{tab.label}</span>
                          {tab.isNew && (
                            <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold text-secondary leading-none">
                              NEW
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Card Content: 2-Column Grid */}
          <div className="relative z-10 grid h-full w-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Mobile Categories Section (sm:hidden, Height 40px Select + Single Active Item) */}
            <div className="flex w-full flex-col gap-6 text-left sm:hidden">
              {/* Categories Select Dropdown (Height 40px) */}
              <Select
                value={activeCategory}
                onValueChange={(val) => val && setActiveCategory(val)}
              >
                <SelectTrigger className="flex h-[40px] w-full items-center justify-between rounded-full border border-black/[0.06] bg-white px-4 py-2 text-[15px] font-medium text-secondary shadow-sm transition-all focus-visible:ring-0 [&_svg]:text-secondary">
                  <span className="truncate">{activeCategoryItem.title}</span>
                </SelectTrigger>
                <SelectContent className="w-[var(--anchor-width)] min-w-[240px] rounded-2xl bg-white p-1.5 shadow-xl border border-black/5">
                  {CATEGORIES.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.id}
                      className="cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-black/5"
                    >
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Active Category Title & Description */}
              <div className="flex flex-col">
                <h3 className="font-manrope text-[24px] font-bold tracking-tight text-secondary">
                  {activeCategoryItem.title}
                </h3>
                <p className="font-manrope mt-2 text-[14px] leading-[22px] text-secondary/85">
                  {activeCategoryItem.description}
                </p>
              </div>
            </div>

            {/* Desktop Left Column: Categories List (hidden on mobile, visible on sm and up) */}
            <div className="hidden sm:flex flex-col justify-center space-y-4 text-left lg:col-span-6 lg:space-y-6">
              {CATEGORIES.map((item) => {
                const isActive = activeCategory === item.id

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveCategory(item.id)}
                    className={cn(
                      "group cursor-pointer transition-all duration-300",
                      isActive
                        ? "opacity-100 sm:py-8"
                        : "opacity-75 hover:opacity-100",
                    )}
                  >
                    {isActive ? (
                      <div className="relative flex items-start gap-4">
                        {/* Dark active indicator line */}
                        <div className="mt-1 h-[48px] w-[2.5px] shrink-0 rounded-full bg-secondary/70" />
                        <div className="flex flex-col">
                          <h3 className="font-manrope text-[20px] font-bold text-secondary sm:text-[36px]">
                            {item.title}
                          </h3>
                          <p className="font-manrope mt-2 max-w-[380px] text-[14px] leading-[22px] text-secondary/85 sm:text-[15px] sm:leading-[24px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="pl-[18px]">
                        <h4 className="font-manrope text-[17px] font-semibold text-secondary transition-colors group-hover:text-black sm:text-[18px]">
                          {item.title}
                        </h4>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Right Column: White Mockup Image Container */}
            <div className="flex h-full w-full items-center justify-center lg:col-span-6">
              <div className="relative aspect-square w-full min-h-[300px] overflow-hidden rounded-[24px] bg-white p-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] sm:min-h-[380px] sm:rounded-[32px] lg:h-[480px] lg:min-h-[480px]">
                {/* Clean white mockup surface */}
                <div className="h-full w-full rounded-[18px] sm:rounded-[24px] bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
