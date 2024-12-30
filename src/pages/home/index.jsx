import { useNavigate } from "react-router";
import { Panels } from "../../components/panels";
import { Hero } from "../../components/hero";
import { Highlight } from "../../components/highlight";
import { VisualGrid } from "../../components/visualGrid";
import { Slider } from "../../components/slider";
import { TextGrid } from "../../components/textGrid";
import * as Images from "../../assets";

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center">
      <Hero
        title="Make your way to your dream job!"
        subtitle="WWH. can help you get there..."
        image={Images.person}
        button={{
          label: "Start Now!",
          func: () => navigate("/Register"),
        }}
      />

      <div className="m-1 flex w-full flex-row justify-center bg-text font-Roboto text-sm text-text_secondary lg:text-lg">
        Look the Opportunities, Explore our solutions!
      </div>

      <Highlight
        highlights={[
          {
            text: "Choose where you want to work on",
            greenIcon: "usa",
            blackIcon: "tap",
            animation: "animate-float",
          },
          {
            text: "Search for better opportunities everywhere",
            greenIcon: "graph",
            blackIcon: "man",
            animation: "animate-climb",
          },
          {
            text: "Live for new and exciting experiences",
            greenIcon: "heart",
            blackIcon: "smile",
            animation: "animate-jump",
          },
          {
            text: "Explore paths that lead to your dreams and goals.",
            greenIcon: "target",
            blackIcon: "bow",
            animation: "animate-turn",
          },
        ]}
      />

      <Panels
        icon="signs"
        title="Go Beyond"
        places={[
          {
            image: Images.houses,
            description:
              "Relocating for work offers access to broader job markets, top companies, and new career opportunities. It’s a chance to build skills, expand your network, and gain valuable international experience, making you more competitive job market.",
          },
          {
            image: Images.statue,
            description:
              "Beyond work, finding your perfect occupation can make you experience new lifestyles, and perspectives. It fosters personal growth, resilience, and adaptability while creating exciting memories and opportunities for meaningful connections.",
          },
        ]}
      />

      <Slider
        icon="bolt"
        title="Endless possibilities"
        slides={[
          {
            image: Images.construction,
            title: "Construction Work",
            description:
              "The high demand for skilled labor in the construction industry values workers for their expertise and dedication.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.cleaning,
            title: "Cleaning Services",
            description:
              "The growing demand for reliable cleaning services in the U.S. look for workers with endurance and strong work ethic.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.gardening,
            title: "Landscaping and Gardening",
            description:
              "The landscaping industry appreciates workers for their creativity and ability to handle physical tasks outdoors.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.foodservice,
            title: "Food Service and Hospitality",
            description:
              "Restaurants and hotels value workers for their adaptability, customer service skills, and teamwork.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.logistics,
            title: "Warehouse and Logistics",
            description:
              "The logistics sector seeks workers who are efficient, organized, and comfortable in fast-paced environments.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.retailservice,
            title: "Retail and Customer Service",
            description:
              "Retail businesses value employees for their communication skills and ability to connect with customers.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.healthcare,
            title: "Home Health Care",
            description:
              "The growing need for home health aides emphasizes compassion, reliability, and attention to detail.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.childcare,
            title: "Childcare Services",
            description:
              "Parents value caregivers who are patient, responsible, and great with children.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.delivery,
            title: "Transportation and Delivery",
            description:
              "Delivery services appreciate workers for their punctuality and ability to navigate efficiently.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.agriculture,
            title: "Agricultural Work",
            description:
              "Farms seek workers who are hardworking, consistent, and capable of handling seasonal demands.",
            button: {
              label: "View More",
              func: () => navigate("/Register"),
            },
          },
        ]}
      />

      <TextGrid
        icon="info"
        title="How We Can Help You!"
        elements={[
          {
            icon: "suitcase",
            title: "Job Prospecting",
            description:
              "Using our best technics of job prospecting we can help you find the best opportunities in the market.",
          },
          {
            icon: "calendar",
            title: "Time Organization",
            description:
              "Our team will organize all your work schedule for you, giving you time to focus on what you does best.",
          },
          {
            icon: "man",
            title: "Account Management",
            description:
              "By leting we manage your various job network accounts you will maximize you chances of getting your job.",
          },
          {
            icon: "support",
            title: "Ongoing Support",
            description:
              "We provide continuous assistance to address your concerns and ensure your professional success in the long term.",
          },
        ]}
      />

      <VisualGrid
        icon="paperpeople"
        title="Lives Transformed"
        elements={[
          {
            image: Images.man1,
            title: "Alex Martins",
            subtitle: "Construction Worker",
            description:
              "After 1 year of moving to America was able to find his first job to give a better life for his kids.",
          },
          {
            image: Images.woman1,
            title: "Luísa Alves",
            subtitle: "Nurse Assistant",
            description:
              "Found a stable job in the healthcare industry and is now supporting her family and pursuing her dreams.",
          },
          {
            image: Images.man2,
            title: "Carlos Mota",
            subtitle: "Truck Driver",
            description:
              "Transitioned to a new career in logistics, enabling him to secure financial stability for his loved ones.",
          },
          {
            image: Images.man3,
            title: "Marcos Totti",
            subtitle: "Chef",
            description:
              "Started a career in a renowned restaurant, showcasing his culinary talent and building a brighter future.",
          },
        ]}
      />
    </main>
  );
}
