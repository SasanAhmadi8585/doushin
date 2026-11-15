import { Outlet, ScrollRestoration } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
