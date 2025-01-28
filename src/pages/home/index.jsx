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
    <main className="flex flex-col items-center gap-10">
      
      {/* Main Banner */}
      <Hero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image={t.hero.image}
        divider={t.divider}
        button={{
          label: t.hero.buttonLabel,
          func: () => (navigate('/register'))
        }}
      /> 

      {/* Array of animated SVGs with text labels*/}
      <Highlight
        highlights={t.highlights}
      />
 
      {/* Array of image Panels with text labels */}
      <Panels
        icon={t.panels.icon}
        title={t.panels.title}
        places={t.panels.places}
      />

      {/* Slider with slides containing a image, a title and a description */}
      <Slider
        icon={t.slider.icon}
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
      />

      {/* A grid of text cards with icons */}
      <TextGrid
        icon={t.textGrid.icon}
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
