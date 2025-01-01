import { useNavigate } from "react-router";
import { Panels } from "../../components/panels";
import { Hero } from "../../components/hero";
import { Highlight } from "../../components/highlight";
import { VisualGrid } from "../../components/visualGrid";
import { Slider } from "../../components/slider";
import { TextGrid } from "../../components/textGrid";
import { useAppContext } from "../../utils";
import { translations } from "./translations";
import * as Images from "../../assets";

export function Home() {
  const navigate = useNavigate();
  const { language } = useAppContext();
  const t = translations[language];

  return (
    <main className="flex flex-col items-center">
      <Hero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image={Images.person}
        button={{
          label: t.hero.buttonLabel,
          func: () => navigate("/Register"),
        }}
      />

      <div className="m-1 flex w-full flex-row justify-center bg-text font-Roboto text-sm text-text_secondary lg:text-lg">
        {t.divider}
      </div>

      <Highlight
        highlights={[
          {
            text: t.highlights[0],
            greenIcon: "usa",
            blackIcon: "tap",
            animation: "animate-float",
          },
          {
            text: t.highlights[1],
            greenIcon: "graph",
            blackIcon: "man",
            animation: "animate-climb",
          },
          {
            text: t.highlights[2],
            greenIcon: "heart",
            blackIcon: "smile",
            animation: "animate-jump",
          },
          {
            text: t.highlights[3],
            greenIcon: "target",
            blackIcon: "bow",
            animation: "animate-turn",
          },
        ]}
      />

      <Panels
        icon="signs"
        title={t.panels.title}
        places={[
          {
            image: Images.houses,
            description: t.panels.descriptions[0],
          },
          {
            image: Images.statue,
            description: t.panels.descriptions[1],
          },
        ]}
      />

      <Slider
        icon="bolt"
        title={t.slider.title}
        slides={[
          {
            image: Images.construction,
            title: t.slider.slides[0].title,
            description: t.slider.slides[0].description,
            button: {
              label: t.slider.slides[0].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.cleaning,
            title: t.slider.slides[1].title,
            description: t.slider.slides[1].description,
            button: {
              label: t.slider.slides[1].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.gardening,
            title: t.slider.slides[2].title,
            description: t.slider.slides[2].description,
            button: {
              label: t.slider.slides[2].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.foodservice,
            title: t.slider.slides[3].title,
            description: t.slider.slides[3].description,
            button: {
              label: t.slider.slides[3].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.logistics,
            title: t.slider.slides[4].title,
            description: t.slider.slides[4].description,
            button: {
              label: t.slider.slides[4].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.retailservice,
            title: t.slider.slides[5].title,
            description: t.slider.slides[5].description,
            button: {
              label: t.slider.slides[5].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.healthcare,
            title: t.slider.slides[6].title,
            description: t.slider.slides[6].description,
            button: {
              label: t.slider.slides[6].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.childcare,
            title: t.slider.slides[7].title,
            description: t.slider.slides[7].description,
            button: {
              label: t.slider.slides[7].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.delivery,
            title: t.slider.slides[8].title,
            description: t.slider.slides[8].description,
            button: {
              label: t.slider.slides[8].button_label,
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.agriculture,
            title: t.slider.slides[9].title,
            description: t.slider.slides[9].description,
            button: {
              label: t.slider.slides[9].button_label,
              func: () => navigate("/Register"),
            }, 
          },
        ]}
      />

      <TextGrid
        icon="info"
        title={t.textGrid.title}
        elements={[
          {
            icon: "suitcase",
            title: t.textGrid.elements[0].title,
            description: t.textGrid.elements[0].description,
          },
          {
            icon: "calendar",
            title: t.textGrid.elements[1].title,
            description: t.textGrid.elements[1].description,
          },
          {
            icon: "man",
            title: t.textGrid.elements[2].title,
            description: t.textGrid.elements[2].description,
          },
          {
            icon: "support",
            title: t.textGrid.elements[3].title,
            description: t.textGrid.elements[3].description,
          },
        ]}
      />

      <VisualGrid
        icon="paperpeople"
        title={t.visualGrid.title}
        elements={[
          {
            image: Images.man1,
            title: t.visualGrid.elements[0].title,
            subtitle: t.visualGrid.elements[0].subtitle,
            description: t.visualGrid.elements[0].description,
          },
          {
            image: Images.woman1,
            title: t.visualGrid.elements[1].title,
            subtitle: t.visualGrid.elements[1].subtitle,
            description: t.visualGrid.elements[1].description,
          },
          {
            image: Images.man2,
            title: t.visualGrid.elements[2].title,
            subtitle: t.visualGrid.elements[2].subtitle,
            description: t.visualGrid.elements[2].description,
          },
          {
            image: Images.man3,
            title: t.visualGrid.elements[3].title,
            subtitle: t.visualGrid.elements[3].subtitle,
            description: t.visualGrid.elements[3].description,
          },
        ]}
      />
    </main>
  );
}
