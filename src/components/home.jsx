import { Panels } from "./ui/panels";
import { Hero } from "./ui/hero";
import { Highlight } from "./ui/highlight";
import { Slider } from "./ui/slider";
import { TextGrid } from "./ui/textGrid";

export function Home() {
  return (
    <div className="flex flex-col gap-10 items-center">
      {/* Main Banner */}
      <Hero
        hero={{
          title: "Make your way to your dream job!",
          subtitle: "WWH. can help you get there...",
          image: "https://i.postimg.cc/wBQbnHRp/person.png",
          divider: "Look the Opportunities, Explore our solutions!",
          button: {
            label: "Start Now!",
            path: "/register",
          },
        }}
      />

      {/* Array of animated SVGs with text labels*/}
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
            animation: " animate-climb ",
          },
          {
            text: "Live for new and exciting experiences",
            greenIcon: "heart",
            blackIcon: "smile",
            animation: "animate-jump",
          },
          {
            text: "Explore paths that lead to your dreams and goals",
            greenIcon: "target",
            blackIcon: "bow",
            animation: "animate-turn",
          },
        ]}
      />

      {/* Array of image Panels with text labels */}
      <Panels
        panels={{
          places: [
            {
              image: "https://i.postimg.cc/Y92yHVQm/houses.jpg",
              description:
                "Relocating for work offers access to broader job markets, top companies, and new career opportunities. It’s a chance to build skills, expand your network, and gain valuable international experience, making you more competitive in the job market.",
            },
            {
              image: "https://i.postimg.cc/C1vrLN4r/america.jpg",
              description:
                "Beyond work, finding your perfect occupation can make you experience new lifestyles, and perspectives. It fosters personal growth, resilience, and adaptability while creating exciting memories and opportunities for meaningful connections.",
            },
          ],
        }}
      />

      {/* Slider with slides containing a image, a title and a description */}
      <Slider
        slider={{
          slides: [
            {
              title: "Construction Work",
              image: "https://i.postimg.cc/j2qjbsjY/construction-guy.jpg",
              description:
                "The high demand for skilled labor in the construction industry values workers for their expertise and dedication.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Cleaning Services",
              image: "https://i.postimg.cc/50ysXzyP/cleaning-girl.jpg",
              description:
                "The growing demand for reliable cleaning services in the U.S. looks for workers with endurance and strong work ethic.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Landscaping and Gardening",
              image: "https://i.postimg.cc/sg1P9zsX/gardeneer.jpg",
              description:
                "The landscaping industry appreciates workers for their creativity and ability to handle physical tasks outdoors.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Food Service and Hospitality",
              image: "https://i.postimg.cc/h4p7CYC7/foodservice-girl.jpg",
              description:
                "Restaurants and hotels value workers for their adaptability, customer service skills, and teamwork.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Warehouse and Logistics",
              image: "https://i.postimg.cc/PrJv0McV/warehouse-guy.jpg",
              description:
                "The logistics sector seeks workers who are efficient, organized, and comfortable in fast-paced environments.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Retail and Customer Service",
              image: "https://i.postimg.cc/WzWFhDD7/costumer-service-girl.jpg",
              description:
                "Retail businesses value employees for their communication skills and ability to connect with customers.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Home Health Care",
              image: "https://i.postimg.cc/9McrbPZp/healtcare-girl.jpg",
              description:
                "The growing need for home health aides emphasizes compassion, reliability, and attention to detail.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Childcare Services",
              image: "https://i.postimg.cc/QxzKDTZ8/childcare-girl.jpg",
              description:
                "Parents value caregivers who are patient, responsible, and great with children.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Transportation and Delivery",
              image: "https://i.postimg.cc/52FY22fw/delivery-guy.jpg",
              description:
                "Delivery services appreciate workers for their punctuality and ability to navigate efficiently.",
              button: { label: "View More!", path: "" },
            },
            {
              title: "Agricultural Work",
              image: "https://i.postimg.cc/7L8CGrLj/agriculture-guy.jpg",
              description:
                "Farms seek workers who are hardworking, consistent, and capable of handling seasonal demands.",
              button: { label: "View More!", path: "" },
            },
          ],
        }}
      />

      {/* A grid of text cards with icons */}
      <TextGrid
        textGrid={{
          icon: "paperpeople",
          title: "How We Can Help You?",
          elements: [
            {
              icon: "suitcase",
              title: "Job Prospecting",
              description:
                "Using our best techniques of job prospecting, we can help you find the best opportunities in the market.",
            },
            {
              icon: "calendar",
              title: "Time Organization",
              description:
                "Our team will organize all your work schedule for you, giving you time to focus on what you do best.",
            },
            {
              icon: "man",
              title: "Account Management",
              description:
                "By letting us manage your various job network accounts, you will maximize your chances of getting your job.",
            },
            {
              icon: "support",
              title: "Ongoing Support",
              description:
                "We provide continuous assistance to address your concerns and ensure your professional success in the long term.",
            },
          ],
        }}
      />

    </div>
  );
}
