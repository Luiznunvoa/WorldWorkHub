import { SVG } from "../svg";
import { useFetchLocale } from "../../utils";

export function Footer() {
  const t = useFetchLocale("footer");

  if (!t) {
    return null;
  }

  return (
    <footer className="flex flex-col justify-center w-full border-t-2 border-outline">
      <div className="flex flex-row gap-40 items-center max-w-[1920px]">
        <div className="flex flex-col gap-2 m-10">
          <h2 className="text-2xl font-bold font-kanit-thin text-outline">
            WorldWorkHub.
          </h2>

          <p className="text-sm italic text-outline font-Roboto">
            {`Copyright © ${new Date().getFullYear()} WorldWorkHub`}
          </p>

          <p className="text-sm italic text-outline font-Roboto">
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

        {t.links.map((links) => (
          <div
            key={links.title}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-lg font-bold text-outline font-Roboto">
              {links.title}
            </p>
            <ul className="flex flex-col gap-2 mt-3">
              {links.links.map((link) => (
                <li
                  key={link.label}
                  className="text-sm italic text-center text-outline font-Roboto"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
