import React from "react"
import TopBarSection from "../../components/Sections/TopBar/TopBarSection"

import FooterSection from "../../components/Sections/Footer/FooterSection"
import NavbarSection from "@/components/Sections/Navbar/NavbarSection"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <TopBarSection className="hidden lg:block" />
      <NavbarSection />
      {children}
      <FooterSection />
    </div>
  )
}
