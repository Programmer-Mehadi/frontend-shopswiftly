import React from "react"
import TopBarSection from "../../components/Sections/TopBar/TopBarSection"
import HeaderSection from "@/components/Sections/Header/HeaderSection"
import FooterSection from "../../components/Sections/Footer/FooterSection"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <TopBarSection className="hidden lg:block" />
      <HeaderSection />
      {children}
      <FooterSection />
    </div>
  )
}
