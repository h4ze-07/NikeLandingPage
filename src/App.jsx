import Nav from "./components/Nav"
import { CustomerReviews, Footer, Hero, PopularProducts, Quality, Services, SpecialOffer, Subscribe } from "./sections"

function App() {

  return (
    <main className="relative">
      <Nav />
      <section className="padding-b xl:padding-l wide:padding-r" >
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding-x py-10">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
