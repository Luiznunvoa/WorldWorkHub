import { SVG } from "../svg";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center w-full border-t-2 border-outline">
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-2 m-10">
          <h2 className="text-2xl font-bold font-kanit-thin text-outline">
            WorldWorkHub.
          </h2>

          <p className="text-sm text-outline font-Roboto">
            {`Copyright © ${new Date().getFullYear()} WorldWorkHub`}
          </p>

          <p className="text-sm text-outline font-Roboto">
            all rights reserved
          </p>

          <nav className="flex flex-row gap-5 items-center mt-5">
            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <SVG type="github" className="w-7 h-7 fill-text_secondary" />
            </div>

            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <SVG
                type="instagram"
                className="w-7 h-7 stroke-2 fill-outline stroke-text_secondary"
              />
            </div>

            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <SVG type="facebook" className="w-7 h-7 fill-text_secondary" />
            </div>

            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <SVG type="linkedin" className="w-5 h-5 fill-text_secondary" />
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
