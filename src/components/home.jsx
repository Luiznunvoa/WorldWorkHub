import { Panels } from "./ui/panels";
import { Hero } from "./ui/hero";
import { Highlight } from "./ui/highlight";
// import { VisualGrid } from "../../components/visualGrid";
import { Slider } from "./ui/slider";
import { TextGrid } from "./ui/textGrid";
import { Spinner } from "./ui/spinner";
import { useLocale } from "../hooks/useLocale";

export function Home() {
  const { t } = useLocale("home");

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
      {/* <VisualGrid visualGrid={t.visualGrid} /> */}
    </main>
  );
}
