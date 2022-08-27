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
        <Header title="Vítejte na provizorních stránkách FITBO.CZ" />
        <p className="description">
          Vzhledem k tehcnickým problémům došlo k výpadku našeho e-shopu. Vlivem technických problémů mohlo dojít k potíží s objednávkami. Pokud se vás tento problém týka, obraťte se na <code>objednavky@fitbo.cz</code>. Situaci s objednávkou vyčešíme do 24 hodin ke spokojenosti.
        </p>
      </main>

      <Footer />
    </div>
  )
}
