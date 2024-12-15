import { personPNG } from "../../assets";
export function Hero() {

  return (
  	<div className="flex lg:flex-row lg:pt-0 justify-center align-middle h-[48rem] w-full  bg-custom_gradient flex-col-reverse items-center pt-10" > 
  		<div className="flex flex-col justify-center items-center lg:h-full h-1/2 lg:w-[48rem] w-full"> 
        <h1 className="xl:text-8xl sm:text-6xl lg:mt-40 italic font-archivo-black-regular text-center text-5xl max-w-[48rem]">Make your way to your <span className="animate-colorAnimation">dream </span>job!</h1>
        <p className="text-lg mt-5 font-Roboto text-center"> WWH. can help you get there!</p>
        <button className="bg-text border-solid border-outline border-[0.1rem] text-text_secondary mt-10 w-1/2 h-16 font-kanit-thin font-bold hover:scale-105 transition duration-150 ease-in-out hover:shadow-2xl">Start Now!</button>
      </div>
      <img src={personPNG} alt="Make your way to your dream job!" loading="lazy" className="lg:h-full lg:w-[48rem] lg:block h-1/2 w-full object-cover" />
  	</div> 
  );
}