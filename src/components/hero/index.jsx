export function Hero() {

  return (
  	<div className="flex flex-row justify-center align-middle h-[46rem] w-full  bg-custom_gradient" > 
  		<div className="flex flex-col justify-center h-full w-[48rem] "> 
        <h1 className="text-8xl mt-16 italic font-archivo-black-regular"> 
            Make your way to your dream job!
        </h1>
        <p className="text-lg mt-5 font-space-mono-regular"> 
            We can help you get there!
        </p>
      </div>
      <div className="h-full w-[48rem] bg-center bg-hero_pattern" /> 
  	</div> 
  );
}