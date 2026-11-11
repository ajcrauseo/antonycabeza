import { Hero, Navbar, About, Works, Footer, JsonLd } from './components';

export default function HomePage() {
  return (
    <main className='relative z-0 bg-primary '>
      <JsonLd />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Works />

      <Footer />
    </main>
  );
}
