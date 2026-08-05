"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 4

  return (
    <div className="mx-auto flex w-full max-w-[1512px] flex-col items-center gap-6 px-4 py-3 sm:px-6 sm:py-4 lg:px-[86px]">
      <section className="relative flex w-full flex-col overflow-hidden rounded-[12px] lg:rounded-[24px] bg-[#FAFAF5] border border-black/5 lg:block lg:aspect-[4096/1986] lg:min-h-[480px] lg:bg-transparent lg:border-none">
        {/* Mobile Illustration (Top) */}
        <div className="relative aspect-[1745/1456] w-full overflow-hidden lg:hidden">
          <Image
            src="/hero_mobile.png"
            alt="Hero illustration"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Desktop Background Image */}
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          priority
          className="hidden object-cover object-center lg:block"
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-center px-5 pt-3 pb-8 sm:px-8 sm:pb-10 lg:absolute lg:inset-0 lg:h-full lg:w-full lg:px-0 lg:pl-[60px] lg:pr-12">
          <div className="flex max-w-[540px] flex-col gap-3 lg:gap-[10px]">
            {/* Logo badge */}
            <div className="inline-flex w-fit items-center rounded-[80px] border border-white bg-white/60 pt-[8px] pr-[12px] pb-[8px] pl-[8px] backdrop-blur-sm shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1),inset_2px_2px_2px_0_rgba(0,0,0,0.04)]">
              <Image
                src="/Logo-v2.svg"
                alt="Q table"
                width={85}
                height={28}
                className="h-[28px] w-auto object-contain"
              />
            </div>

            {/* Heading */}
            <h1 className="text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[38px] lg:text-[44px]">
              Quản lý dễ dàng,
              <br />
              bán hàng hiệu quả
            </h1>

            {/* Description */}
            <p className="mt-1 max-w-[500px] text-sm leading-relaxed text-foreground/80 sm:text-base lg:mt-2">
              Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>

            {/* CTA Button */}
            <div className="mt-2 lg:mt-4">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/#" />}
                variant="black"
                className="rounded-full px-6"
              >
                Đặt lịch tư vấn
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Slide indicator bar */}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className={cn(
              "h-[2px] cursor-pointer transition-all duration-300",
              index === activeSlide
                ? "w-[60px] bg-black"
                : "w-[24px] bg-[#D9D9D9] hover:bg-black/40",
            )}
          />
        ))}
      </div>
    </div>
  )
}
