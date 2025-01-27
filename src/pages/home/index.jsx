import { useNavigate } from "react-router";
import { Panels } from "../../components/panels";
import { Hero } from "../../components/hero";
import { Highlight } from "../../components/highlight";
import { VisualGrid } from "../../components/visualGrid";
import { Slider } from "../../components/slider";
import { TextGrid } from "../../components/textGrid";
import { Spinner } from "../../components/spinner";
import { useFetchLocale } from "../../utils";

export function Home() {
  const navigate = useNavigate();
  const t = useFetchLocale("home");

  if (!t) {
    return <Spinner />;
  } 

  return (
    <main className="flex flex-col items-center">
      
      {/* Main Banner */}
      <Hero
        hero={{
          title: t.hero.title,
          subtitle: t.hero.subtitle,
          image: t.hero.image,
          button: {
            label: t.hero.buttonLabel,
            func: () => (navigate('/register'))
          }
        }}
      />

      <div className="m-1 flex w-full flex-row justify-center bg-text font-Roboto text-sm text-text_secondary lg:text-lg">
        {t.divider}
      </div>

      {/* Array of animated SVGs with text labels*/}
      <Highlight
        highlights={t.highlights}
      />
 
      {/* Array of image Panels with text labels */}
      <Panels
        icon="signs"
        title={t.panels.title}
        places={t.panels.places}
      />

      {/* Slider with slides containing a image, a title and a description */}
      <Slider
        icon="bolt"
        title={t.slider.title}
        slides={t.slider.slides.map((slide) => ({
          image: slide.images,
          title: slide.title,
          description: slide.description,
          button: {
            label: slide.button_label,
            func: () => navigate("/Register"), // TODO: Make the json decide the navegation path for each slide
          },
        }))}
      />;

      {/* A grid of text cards with icons */}
      <TextGrid
        icon="info"
        title={t.textGrid.title}
        elements={t.textGrid.elements}
      />

      {/* A grid of images and text labels */}
      <VisualGrid
        icon="paperpeople"
        title={t.visualGrid.title}
        elements={t.visualGrid.elements.map((element) => ({
          image: element.image,
          title: element.title,
          subtitle: element.subtitle,
          description: element.description,
        }))}
      />
    </main>
  );
}
