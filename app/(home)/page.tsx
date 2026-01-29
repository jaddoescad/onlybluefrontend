import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import Features from './_components/Features'
import Community from './_components/Community'
import Trades from './_components/Trades'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <Trades />
      <Footer />
    </main>
  )
}
