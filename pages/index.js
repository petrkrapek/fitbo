import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Vítejte na info stránce FITBO.CZ" />
        <p className="description">
          Vzhledem k tehcnickým problémům došlo k výpadku našeho e-shopu. Vlivem této situace mohlo dojít k potíží s objednávkami. Pokud se vás tento problém týka, obraťte se na <b>objednavky@fitbo.cz</b>. Příapdnou platbu vrátíme do 24 hodin.
        </p>
      </main>

      <Footer />
    </div>
  )
}
