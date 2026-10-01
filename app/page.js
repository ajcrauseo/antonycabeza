import { Hero, Navbar, About, Works, Footer } from './components';

export default function HomePage() {
  return (
    <main className='relative z-0 bg-primary '>
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
