import { useNavigate } from "react-router";
import { Places } from '../../components/places';
import { Hero } from '../../components/hero';
import { Highlight } from '../../components/highlight';
import { Team } from '../../components/team';
import { Slider } from '../../components/slider';
import { 
  personPNG, 
  housesJPG, 
  americaJPG, 
  man1JPG,
  woman1JPG,
  man2JPG,
  man3JPG,
  man4JPG,
  constructionJPG,
  cleaningJPG,
  gardeningJPG,
  foodserviceJPG,
  logisticsJPG,
  retailserviceJPG,
  healthcareJPG,
  childcareJPG,
  deliveryJPG,
  agricultureJPG
} from '../../assets';

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center">

      <Hero 
        title='Make your way to your dream job!'
        subtitle='WWH. can help you get there...' 
        image={personPNG}
        buttonPres={() => navigate("/Register")}
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

      <Places
        icon="signs"
        title="Go Beyond"
        places={[
          {
            description: "Relocating for work offers access to broader job markets, top companies, and new career opportunities. It’s a chance to build skills, expand your network, and gain valuable international experience, making you more competitive job market.",
            image: housesJPG
          },
          {
            description: "Beyond work, finding your perfect occupation can make you experience new lifestyles, and perspectives. It fosters personal growth, resilience, and adaptability while creating exciting memories and opportunities for meaningful connections.",
            image: americaJPG
          }
        ]}
      />

      <Slider 
        icon="bolt"
        title="Endless possibilities"
        slides={[
          {
            name: "Construction Work",
            description: "The high demand for skilled labor in the construction industry values workers for their expertise and dedication.",
            image: constructionJPG,
          },
          {
            name: "Cleaning Services",
            description: "The growing demand for reliable cleaning services in the U.S. look for workers with endurance and strong work ethic.",
            image: cleaningJPG,
          },
          {
            name: "Landscaping and Gardening",
            description: "The landscaping industry appreciates workers for their creativity and ability to handle physical tasks outdoors.",
            image: gardeningJPG,
          },
          {
            name: "Food Service and Hospitality",
            description: "Restaurants and hotels value workers for their adaptability, customer service skills, and teamwork.",
            image: foodserviceJPG,
          },
          {
            name: "Warehouse and Logistics",
            description: "The logistics sector seeks workers who are efficient, organized, and comfortable in fast-paced environments.",
            image: logisticsJPG,
          },
          {
            name: "Retail and Customer Service",
            description: "Retail businesses value employees for their communication skills and ability to connect with customers.",
            image: retailserviceJPG,
          },
          {
            name: "Home Health Care",
            description: "The growing need for home health aides emphasizes compassion, reliability, and attention to detail.",
            image: healthcareJPG,
          },
          {
            name: "Childcare Services",
            description: "Parents value caregivers who are patient, responsible, and great with children.",
            image: childcareJPG,
          },
          {
            name: "Transportation and Delivery",
            description: "Delivery services appreciate workers for their punctuality and ability to navigate efficiently.",
            image: deliveryJPG,
          },
          {
            name: "Agricultural Work",
            description: "Farms seek workers who are hardworking, consistent, and capable of handling seasonal demands.",
            image: agricultureJPG,
          },
        ]}
      />

      <Team 
        icon="paperpeople"
        title="Meet our Team"
        teamMembers={[
          {
            name: "Alex Martins",
            role: "Operations and Finance",
            image: man1JPG,
            description: "Responsible for overseeing daily operations and managing financial strategies.",
          },
          {
            name: "Luísa Alves",
            role: "Chief of Staff",
            image: woman1JPG,
            description: "Ensures smooth organizational operations and oversees key executive sinitiatives.",
          },
          {
            name: "Antônio Ribas",
            role: "Investments",
            image: man2JPG,
            description: "Focuses on investment strategies and portfolio management to drive growth.",
          },
          {
            name: "Marcos Totti",
            role: "Customer Relations",
            image: man3JPG,
            description: "Maintains strong client relationships and ensures exceptional customer service.",
          },
          {
            name: "Pedro Schemer",
            role: "Marketing and Sales",
            image: man4JPG,
            description: "Leads marketing campaigns and drives sales to achieve business goals.",
          }
        ]}
      />
    </main>
  );
}