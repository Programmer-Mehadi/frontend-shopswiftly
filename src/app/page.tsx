import FooterSection from "@/components/Sections/Footer/FooterSection"
import NavbarSection from "@/components/Sections/Navbar/NavbarSection"
import TopBarSection from "@/components/Sections/TopBar/TopBarSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBarSection className="hidden lg:block" />
      <NavbarSection />
      <FooterSection />
    </main>
  )
}
