import PropTypes from "prop-types";
import { Icon } from "./icon";

export function Footer() {
  const Sections = ({ sections }) => {
    return (
      <>
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-lg font-bold text-outline font-Roboto">
              {section.title}
            </p>
            <ul className="flex flex-col gap-2 mt-3">
              {section.links.map((link) => (
                <li
                  key={link.label}
                  className="text-sm italic text-center min-w-48 text-outline font-Roboto"
                >
                  <a
                    href={link.path}
                    className="cursor-pointer hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  };

  Sections.propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  };

  return (
    <footer className="flex flex-col justify-center items-center w-full border-t-2 border-outline">
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
              <Icon icon="github" className="w-5 h-5 fill-text_secondary" />
            </div>

            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <Icon icon="instagram" className="w-5 h-5 fill-text_secondary" />
            </div>

            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <Icon icon="linkedin" className="w-5 h-5 fill-text_secondary" />
            </div>

            <div className="flex flex-col justify-center items-center w-7 h-7 rounded-full transition cursor-pointer bg-outline hover:bg-background_secondary">
              <Icon icon="facebook" className="w-5 h-5 fill-text_secondary" />
            </div>
          </nav>
        </div>
        <Sections
          sections={[
            {
              title: "Company",
              links: [
                {
                  label: "About Us",
                  path: "#",
                },
                {
                  label: "Careers",
                  path: "#",
                },
                {
                  label: "Blog",
                  path: "#",
                },
              ],
            },
            {
              title: "Support",
              links: [
                {
                  label: "FAQ",
                  path: "#",
                },
                {
                  label: "Contact",
                  path: "#",
                },
                {
                  label: "Help Center",
                  path: "#",
                },
              ],
            },
            {
              title: "Legal",
              links: [
                {
                  label: "Privacy Policy",
                  path: "#",
                },
                {
                  label: "Terms of Service",
                  path: "#",
                },
                {
                  label: "License",
                  path: "#",
                },
              ],
            },
          ]}
        />

        <iframe
          className="hidden w-1/5 h-52 rounded-lg border-4 border-solid xl:flex border-outline"
          // WARN: If used on localhost, this may return a CORS warning.
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.187190181311!2d-43.13583512383353!3d-22.90646547925535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1738373228294!5m2!1spt-BR!2sbr"
          title="Our Base"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  );
}
