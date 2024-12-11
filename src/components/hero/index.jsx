export function Hero() {

  return (
  	<div className="flex lg:flex-row justify-center align-middle h-[46rem] w-full  bg-custom_gradient flex-col-reverse items-center" > 
  		<div className="flex flex-col justify-center lg:h-full h-1/2 lg:w-[48rem] w-full"> 
        <h1 className="sm:text-8xl mt-16 italic font-archivo-black-regular text-center text-6xl">Make your way to your dream job!</h1>
        <p className="text-lg mt-5 font-Roboto text-center"> We can help you get there!</p>
      </div>
      <div className="lg:h-full w-[48rem] bg-center bg-cover bg-hero_pattern lg:block h-1/2" />
  	</div> 
  );
}