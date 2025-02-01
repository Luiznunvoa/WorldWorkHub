import { Panels } from "../../components/panels";
import { Hero } from "../../components/hero";
import { Highlight } from "../../components/highlight";
import { VisualGrid } from "../../components/visualGrid";
import { Slider } from "../../components/slider";
import { TextGrid } from "../../components/textGrid";
import { Spinner } from "../../components/spinner";
import { useFetchLocale } from "../../utils";

export function Home() {
  const t = useFetchLocale("home");

  if (!t) {
    return <Spinner />;
  }

  return (
    <main className="flex flex-col gap-10 items-center">
      {/* Main Banner */}
      <Hero hero={t.hero} />

      {/* Array of animated SVGs with text labels*/}
      <Highlight highlights={t.highlights} />

      {/* Array of image Panels with text labels */}
      <Panels panels={t.panels} />

      {/* Slider with slides containing a image, a title and a description */}
      <Slider slider={t.slider} />

      {/* A grid of text cards with icons */}
      <TextGrid textGrid={t.textGrid} />

      {/* A grid of images and text labels */}
      <VisualGrid visualGrid={t.visualGrid} />
    </main>
  );
}
