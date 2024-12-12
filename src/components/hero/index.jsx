export function Hero() {

  return (
  	<div className="flex lg:flex-row lg:pt-0 justify-center align-middle h-[46rem] w-full  bg-custom_gradient flex-col-reverse items-center pt-10" > 
  		<div className="flex flex-col justify-center items-center lg:h-full h-1/2 lg:w-[48rem] w-full"> 
        <h1 className="sm:text-8xl lg:mt-[10rem] italic font-archivo-black-regular text-center text-6xl">Make your way to your <span className="animate-colorAnimation">dream </span>job!</h1>
        <p className="text-lg mt-5 font-Roboto text-center"> WWH. can help you get there!</p>
        <button className="bg-text border-solid border-outline border-[0.1rem] text-text_secondary mt-10 w-1/2 h-16 font-kanit-thin font-bold hover:scale-105 transition duration-150 ease-in-out hover:shadow-2xl">Start Now!</button>
      </div>
      <div className="lg:h-full lg:w-[48rem] bg-center bg-cover bg-hero_pattern lg:block h-1/2 w-full" />
  	</div> 
  );
}