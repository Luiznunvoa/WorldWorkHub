import { SVG } from "../svg";
import { useFetchLocale } from "../../hooks/useFetchLocale";
import { useAppContext } from "../../context/context";

export function Footer() {
  const t = useFetchLocale("footer");
  const { language, toggleLanguage } = useAppContext();

  return (
    <footer className="flex flex-col justify-center items-center mt-16 w-full border-t-2 border-outline">
      {t && (
        <div className="flex flex-col gap-16 items-center lg:flex-row">
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
            <img
              onClick={toggleLanguage}
              className="object-cover mt-2 w-10 h-5 rounded-sm cursor-pointer"
              src={
                language == "en"
                  ? "https://i.postimg.cc/HxwyxK5L/usa.jpg"
                  : "https://i.postimg.cc/3N3DDBCF/brazil.jpg"
              }
            />
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
                    className="text-sm italic text-center min-w-48 text-outline font-Roboto"
                  >
                    <a className="cursor-pointer hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <iframe
            className="hidden w-1/5 h-52 rounded-lg border-4 border-solid xl:flex border-outline"
            // WARN: If used in a localhost will return a CORS warning
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.187190181311!2d-43.13583512383353!3d-22.90646547925535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1738373228294!5m2!1spt-BR!2sbr"
            title="Our Base"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </footer>
  );
}
