import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="container mx-auto px-6 pt-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Fav-ROxN4Yg1bzSVaNoy3NgCxfh9tgJprk.png"
          alt="Visuae Icon"
          width={40}
          height={40}
          priority
          className="h-auto"
        />
      </header>
      <main className="flex-grow container mx-auto px-6">
        <div className="max-w-2xl mx-auto mt-24 md:mt-32">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
            Find the candidates your business needs, simplified.
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Coming soon. Register your interest to be the first to know when we launch.
          </p>
          <Link
            href="https://a2gkf4y2fgu.typeform.com/to/O6mii15u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200"
          >
            Register Interest
          </Link>
        </div>
      </main>
      <footer className="container mx-auto px-6 py-8">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Visuae</p>
      </footer>
    </div>
  )
}

