import { useNavigate } from "react-router-dom";
import { Panels } from "./ui/panels";
import { Hero } from "./ui/hero";
import { ElementsArray } from "./ui/elementsArray";
import { Slider } from "./ui/slider";
import { TextGrid } from "./ui/textGrid";
import { AnimatedIcons } from "./ui/AnimatedIcons";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 items-center mb-20">
      {/* Main Banner */}
      <Hero
        image="https://i.postimg.cc/wBQbnHRp/person.png"
        divider="Look the Opportunities, Explore our solutions!"
        hero={(
          <div className="flex flex-col justify-center items-center w-full h-1/2 lg:h-full lg:w-[56rem]">
            <h1 className="text-5xl italic text-center sm:text-6xl lg:mt-40 xl:text-8xl font-archivo-black-regular">
              Make your way to your dream job!
            </h1>

            <p className="mt-5 text-lg text-center font-Roboto">
              WWH. can help you get there...
            </p>

            <button
              onClick={() => navigate("/login")}
              className="mt-10 w-1/2 h-16 font-bold border-solid transition duration-150 ease-in-out hover:shadow-2xl hover:scale-105 border-[0.1rem] border-outline bg-text font-kanit-thin text-text_secondary hover:outline hover:outline-8 hover:outline-offset-2 hover:outline-green"
            >
              Start Now!
            </button>
          </div>
        )}
      />

      {/* Array of animated SVGs with text labels*/}
      <ElementsArray
        array={[
          {
            element: (
              <AnimatedIcons
                label="Choose where you want to work"
                blackIcon="tap"
                greenIcon="usa"
                animationClass="animate-float"
              />
            ),
          },
          {
            element: (
              <AnimatedIcons
                label="Search for better opportunities everywhere"
                blackIcon="man"
                greenIcon="graph"
                animationClass="animate-climb"
              />
            ),
          },
          {
            element: (
              <AnimatedIcons
                blackIcon="smile"
                greenIcon="heart"
                animationClass="animate-jump"
              />
            ),
          },
          {
            element: (
              <AnimatedIcons
                label="Explore paths that lead to your dreams and goals"
                blackIcon="bow"
                greenIcon="target"
                animationClass="animate-turn"
              />
            ),
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
              icon: "profile",
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
