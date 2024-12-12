import { UsaSvg, TapSvg  } from "../../assets";

export function Products() {

  return (
  	<div className="flex flex-row align-middle justify-center w-full">
      <div className="flex flex-col align-middle justify-center">
        <p className="font-Roboto  w-[10rem]"> 
           Choose the country where you want to work
        </p>     
      </div>
      <div className="flex flex-row"> 
        <TapSvg className="absolute mt-[4rem] w-[5rem] h-[5rem] fill-text rotate-90" />
        <UsaSvg className="w-[10rem] h-[10rem] fill-green" />
      </div>
  	</div>
  );
}