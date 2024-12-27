import { useNavigate } from "react-router";
import { Places } from '../../components/places';
import { Hero } from '../../components/hero';
import { Highlight } from '../../components/highlight';
import { Team } from '../../components/team';
import { Possibilities } from '../../components/possibilities';
import { 
  personPNG, 
  city1JPG, 
  city2JPG, 
  wfhJPG, 
  ttwJPG, 
  man1JPG,
  woman1JPG,
  man2JPG,
  man3JPG,
  man4JPG
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
            text: "Choose the country where you want to work on",
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
        places={[
          {
            description: "Relocating for work offers access to broader job markets, top companies, and new career opportunities. It’s a chance to build skills, expand your network, and gain valuable international experience, making you more competitive in a global job market.",
            image: city1JPG
          },
          {
            description: "Beyond work, moving allows you to experience new cultures, lifestyles, and perspectives. It fosters personal growth, resilience, and adaptability while creating exciting memories and opportunities for meaningful connections.",
            image: city2JPG
          }
        ]}
      />

      <Possibilities 
        possibilities={[
          {
            image: wfhJPG,
            title: "Work from Home!",
            description: "With WWH. you can find jobs abroad to work completely from home"
          },
          {
            image: ttwJPG,
            title: "Travel to Work!",
            description: "We can help plan the travel to your travel dream job"
          },
        ]} 
      />

      <Team 
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
            description: "Ensures smooth organizational operations and oversees key executive initiatives.",
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