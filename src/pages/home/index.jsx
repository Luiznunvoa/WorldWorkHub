import { useNavigate } from "react-router";
import { Panels } from "../../components/panels";
import { Hero } from '../../components/hero';
import { Highlight } from '../../components/highlight';
import { VisualGrid } from '../../components/visualGrid';
import { Slider } from '../../components/slider';
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

      <div className="flex flex-row justify-center w-full bg-text text-text_secondary lg:text-lg font-Roboto m-1 text-sm">
        Look the Opportunities, Explore our solutions!
      </div>

      <Highlight
        highlights={[
          {
            text: "Choose where you want to work on",
            greenIcon: "usa",
            blackIcon: "tap",
            animation: "animate-float"
          },
          {
            text: "Search for better opportunities everywhere",
            greenIcon: "graph",
            blackIcon: "man",
            animation: "animate-climb"
          },
          {
            text: "Live for new and exciting experiences",
            greenIcon: "heart",
            blackIcon: "smile",
            animation: "animate-jump"
          },
          {
            text: "Explore paths that lead to your dreams and goals.",
            greenIcon: "target",
            blackIcon: "bow",
            animation: "animate-turn"
          },
        ]} 
      />

      <Panels
        icon="signs"
        title="Go Beyond"
        places={[
          {
            image: Images.houses,
            description: "Relocating for work offers access to broader job markets, top companies, and new career opportunities. It’s a chance to build skills, expand your network, and gain valuable international experience, making you more competitive job market.",
          },
          {
            image: Images.statue,
            description: "Beyond work, finding your perfect occupation can make you experience new lifestyles, and perspectives. It fosters personal growth, resilience, and adaptability while creating exciting memories and opportunities for meaningful connections.",
          }
        ]}
      />

      <Slider 
        icon="bolt"
        title="Endless possibilities"
        slides={[
          {
            image: Images.construction,
            title: "Construction Work",
            description: "The high demand for skilled labor in the construction industry values workers for their expertise and dedication.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.cleaning,
            title: "Cleaning Services",
            description: "The growing demand for reliable cleaning services in the U.S. look for workers with endurance and strong work ethic.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.gardening,
            title: "Landscaping and Gardening",
            description: "The landscaping industry appreciates workers for their creativity and ability to handle physical tasks outdoors.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.foodservice,
            title: "Food Service and Hospitality",
            description: "Restaurants and hotels value workers for their adaptability, customer service skills, and teamwork.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.logistics,
            title: "Warehouse and Logistics",
            description: "The logistics sector seeks workers who are efficient, organized, and comfortable in fast-paced environments.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.retailservice,
            title: "Retail and Customer Service",
            description: "Retail businesses value employees for their communication skills and ability to connect with customers.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.healthcare,
            title: "Home Health Care",
            description: "The growing need for home health aides emphasizes compassion, reliability, and attention to detail.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.childcare,
            title: "Childcare Services",
            description: "Parents value caregivers who are patient, responsible, and great with children.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.delivery,
            title: "Transportation and Delivery",
            description: "Delivery services appreciate workers for their punctuality and ability to navigate efficiently.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
          {
            image: Images.agriculture,
            title: "Agricultural Work",
            description: "Farms seek workers who are hardworking, consistent, and capable of handling seasonal demands.",
            button: {
              label: "View More",
              func: () => (navigate("/Register"))
            }
          },
        ]}
      />

      <VisualGrid
        icon="paperpeople"
        title="Meet our Team"
        elements={[
          {
            image: Images.man1,
            title: "Alex Martins",
            subtitle: "Operations and Finance",
            description: "Responsible for overseeing daily operations and managing financial strategies.",
          },
          {
            image: Images.woman1,
            title: "Luísa Alves",
            subtitle: "Chief of Staff",
            description: "Ensures smooth organizational operations and oversees key executive sinitiatives.",
          },
          {
            image: Images.man2,
            title: "Antônio Ribas",
            subtitle: "Investments",
            description: "Focuses on investment strategies and portfolio management to drive growth.",
          },
          {
            image: Images.man3,
            title: "Marcos Totti",
            subtitle: "Customer Relations",
            description: "Maintains strong client relationships and ensures exceptional customer service.",
          },
          {
            image: Images.man4,
            title: "Pedro Schemer",
            subtitle: "Marketing and Sales",
            description: "Leads marketing campaigns and drives sales to achieve business goals.",
          }
        ]}
      />
    </main>
  );
}