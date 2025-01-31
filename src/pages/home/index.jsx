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
    <main className="flex flex-col gap-10 items-center">
      {/* Main Banner */}
      <Hero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image={t.hero.image}
        divider={t.divider}
        button={{
          label: t.hero.buttonLabel,
          func: () => navigate("/register"),
        }}
      />

      {/* Array of animated SVGs with text labels*/}
      <Highlight highlights={t.highlights} />

      {/* Array of image Panels with text labels */}
      <Panels panels={t.panels} />

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
            func: () => navigate("/Register"),
          },
        }))}
      />

      {/* A grid of text cards with icons */}
      <TextGrid textGrid={t.textGrid} />

      {/* A grid of images and text labels */}
      <VisualGrid visualGrid={t.visualGrid} />
    </main>
  );
}
