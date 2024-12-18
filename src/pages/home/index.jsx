import { About } from '../../components/about';
import { Hero } from '../../components/hero';
import { Products } from '../../components/products';

export function Home() {
  return (
    <main className="flex flex-col items-center"> 
      <Hero />
      <div className="flex flex-row justify-center align-middle w-full bg-text border-solid">
        <p className="text-text_secondary lg:text-lg font-Roboto m-1 text-sm">Look the Opportunities, Explore our solutions!</p>
      </div>
      <Products />
      <About />
    </main>
  );
}