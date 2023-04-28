import { Hero, Navbar, About, Works, Contact, Footer } from './components';

const { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } =
  process.env;

export default function HomePage() {
  return (
    <main className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Works />

      <div className='relative z-0'>
        <Contact
          EMAIL_JS_SERVICE_ID={EMAIL_JS_SERVICE_ID}
          EMAIL_JS_TEMPLATE_ID={EMAIL_JS_TEMPLATE_ID}
          EMAIL_JS_PUBLIC_KEY={EMAIL_JS_PUBLIC_KEY}
        />
      </div>
      <Footer />
    </main>
  );
}
