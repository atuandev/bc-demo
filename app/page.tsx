import { FeatureSection } from "@/components/feature-section"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FeatureSection />
    </main>
  )
}
