import { SVG } from "../../utils/custom_svg";

export function Possibilities() {

  return (
    <div className="w-full flex flex-col justify-center items-center m-20"> 
  		<section className="flex flex-row  gap-5 items-center">
        <SVG type="bolt" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center" > Infinite Possibilities</h2>
      </section>
  	</div>
  );
}