import { Hero } from '../../components/hero'

export function Home() {
  return (
    <div className="flex flex-col items-center "> 
      <Hero />
      <div className="flex flex-row justify-center align-middle w-full bg-text border-solid">
        <p className="text-text_secondary lg:text-lg font-Roboto m-1 cursor-pointer text-sm">
        Look the Opportunities, Explore our solutions!
        </p>
      </div>
    </div>
  );
}