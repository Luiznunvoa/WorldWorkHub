import { useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { Panels } from "../../components/panels";
import { Hero } from "../../components/hero";
import { Highlight } from "../../components/highlight";
import { VisualGrid } from "../../components/visualGrid";
import { Slider } from "../../components/slider";
import { TextGrid } from "../../components/textGrid";
import * as Images from "../../assets";

export function Home() {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  return (
    <main className="flex flex-col items-center">

      <img
        onClick={toggleLanguage}
        className="absolute h-10 w-10 object-cover top-4 right-4 cursor-pointer rounded-full"
        src={language == "en" 
          ? Images.uk
          : Images.portugal
        }
      />
      

      <Hero
        title={language === "en"
          ? "Make your way to your dream job!" 
          : "Busque o emprego que sonha"
        }
        subtitle={language == "en"
          ? "WWH. can help you get there..."
          : "WWH. pode te ajudar a chegar.."
        }
        image={Images.person}
        button={{
          label: language == "en" 
            ? "Start Now!"
            : "Comece Agora",
          func: () => navigate("/Register"),
        }}
      />

      <div className="m-1 flex w-full flex-row justify-center bg-text font-Roboto text-sm text-text_secondary lg:text-lg">
        {language == "en"
          ? "Look the Opportunities, Explore our solutions!"
          : "Olhe as oportunidades, Explore nossas soluções!"
        }
      </div>

      <Highlight
        highlights={[
          {
            text: language === "en"
              ? "Choose where you want to work on"
              : "Escolha onde você quer trabalhar",
            greenIcon: "usa",
            blackIcon: "tap",
            animation: "animate-float",
          },
          {
            text: language === "en"
              ? "Search for better opportunities everywhere"
              : "Busque melhores oportunidades em qualquer lugar",
            greenIcon: "graph",
            blackIcon: "man",
            animation: "animate-climb",
          },
          {
            text: language === "en"
              ? "Live for new and exciting experiences"
              : "Viva experiências novas e emocionantes",
            greenIcon: "heart",
            blackIcon: "smile",
            animation: "animate-jump",
          },
          {
            text: language === "en"
              ? "Explore paths that lead to your dreams and goals."
              : "Explore caminhos que levam aos seus sonhos e objetivos.",
            greenIcon: "target",
            blackIcon: "bow",
            animation: "animate-turn",
          },
        ]}
      />

      <Panels
        icon="signs"
        title={language === "en" 
          ? "Go Beyond"
          : "Vá Além"
        }
        places={[
          {
            image: Images.houses,
            description: language === "en" 
              ? "Relocating for work offers access to broader job markets, top companies, and new career opportunities. It’s a chance to build skills, expand your network, and gain valuable international experience, making you more competitive job market."
              : "A mudança para o trabalho oferece acesso a mercados de trabalho mais amplos, empresas de ponta e novas oportunidades de carreira. É uma chance de desenvolver habilidades, expandir sua rede e ganhar uma valiosa experiência internacional, tornando você um mercado de trabalho mais competitivo."
          },
          {
            image: Images.statue,
            description: language === "en"
              ? "Beyond work, finding your perfect occupation can make you experience new lifestyles, and perspectives. It fosters personal growth, resilience, and adaptability while creating exciting memories and opportunities for meaningful connections."
              : "Além do trabalho, encontrar sua ocupação perfeita pode fazer você experimentar novos estilos de vida e perspetivas. Ele promove o crescimento pessoal, a resiliência e a adaptabilidade, ao mesmo tempo em que cria memórias emocionantes e oportunidades para conexões significativas."
          },
        ]}
      />

      <Slider
        icon="bolt"
        title={language === "en"
          ? "Endless possibilities"
          : "Possibilidades Infinitas"
        }
        slides={[
          {
            image: Images.construction,
            title: language === "en"
              ? "Construction Work"
              : "Trabalho de Construção",
            description: language === "en"
              ? "The high demand for skilled labor in the construction industry values workers for their expertise and dedication."
              : "A alta demanda por trabalho qualificado na indústria de construção civil valoriza trabalhadores por sua expertise e dedicação.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.cleaning,
            title: language === "en"
              ? "Cleaning Services"
              : "Serviços de Limpeza",
            description: language === "en"
              ? "The growing demand for reliable cleaning services in the U.S. look for workers with endurance and strong work ethic."
              : "A crescente demanda por serviços de limpeza confiáveis nos EUA busca trabalhadores com resistência e forte ética de trabalho.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.gardening,
            title: language === "en"
              ? "Landscaping and Gardening"
              : "Paisagismo e Jardinagem",
            description: language === "en"
              ? "The landscaping industry appreciates workers for their creativity and ability to handle physical tasks outdoors."
              : "A indústria de paisagismo valoriza trabalhadores por sua criatividade e habilidade em lidar com tarefas físicas ao ar livre.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.foodservice,
            title: language === "en"
              ? "Food Service and Hospitality"
              : "Serviços de Alimentação e Hospitalidade",
            description: language === "en"
              ? "Restaurants and hotels value workers for their adaptability, customer service skills, and teamwork."
              : "Restaurantes e hotéis valorizam trabalhadores por sua adaptabilidade, habilidades de atendimento ao cliente e trabalho em equipe.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.logistics,
            title: language === "en"
              ? "Warehouse and Logistics"
              : "Armazém e Logística",
            description: language === "en"
              ? "The logistics sector seeks workers who are efficient, organized, and comfortable in fast-paced environments."
              : "O setor de logística busca trabalhadores eficientes, organizados e confortáveis em ambientes dinâmicos.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.retailservice,
            title: language === "en"
              ? "Retail and Customer Service"
              : "Varejo e Atendimento ao Cliente",
            description: language === "en"
              ? "Retail businesses value employees for their communication skills and ability to connect with customers."
              : "Empresas de varejo valorizam funcionários por suas habilidades de comunicação e capacidade de se conectar com os clientes.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.healthcare,
            title: language === "en"
              ? "Home Health Care"
              : "Cuidados Domiciliares de Saúde",
            description: language === "en"
              ? "The growing need for home health aides emphasizes compassion, reliability, and attention to detail."
              : "A crescente necessidade de auxiliares de saúde domiciliar enfatiza compaixão, confiabilidade e atenção aos detalhes.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.childcare,
            title: language === "en"
              ? "Childcare Services"
              : "Serviços de Cuidado Infantil",
            description: language === "en"
              ? "Parents value caregivers who are patient, responsible, and great with children."
              : "Os pais valorizam cuidadores que são pacientes, responsáveis e ótimos com crianças.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.delivery,
            title: language === "en"
              ? "Transportation and Delivery"
              : "Transporte e Entrega",
            description: language === "en"
              ? "Delivery services appreciate workers for their punctuality and ability to navigate efficiently."
              : "Serviços de entrega valorizam trabalhadores por sua pontualidade e capacidade de navegar eficientemente.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
          {
            image: Images.agriculture,
            title: language === "en"
              ? "Agricultural Work"
              : "Trabalho Agrícola",
            description: language === "en"
              ? "Farms seek workers who are hardworking, consistent, and capable of handling seasonal demands."
              : "As fazendas buscam trabalhadores que são dedicados, consistentes e capazes de lidar com demandas sazonais.",
            button: {
              label: language === "en" ? "View More" : "Ver Mais",
              func: () => navigate("/Register"),
            },
          },
        ]}
      />

      <TextGrid
        icon="info"
        title={language === "en"
          ? "How We Can Help You!"
          : "Como Podemos Ajudar Você!"
        }
        elements={[
          {
            icon: "suitcase",
            title: language === "en"
              ? "Job Prospecting"
              : "Prospecção de Empregos",
            description: language === "en"
              ? "Using our best techniques of job prospecting, we can help you find the best opportunities in the market."
              : "Usando nossas melhores técnicas de prospecção de empregos, podemos ajudar você a encontrar as melhores oportunidades no mercado.",
          },
          {
            icon: "calendar",
            title: language === "en"
              ? "Time Organization"
              : "Organização de Tempo",
            description: language === "en"
              ? "Our team will organize all your work schedule for you, giving you time to focus on what you do best."
              : "Nossa equipe organizará toda a sua agenda de trabalho, dando a você tempo para focar no que faz de melhor.",
          },
          {
            icon: "man",
            title: language === "en"
              ? "Account Management"
              : "Gerenciamento de Contas",
            description: language === "en"
              ? "By letting us manage your various job network accounts, you will maximize your chances of getting your job."
              : "Ao nos permitir gerenciar suas diversas contas de rede de trabalho, você maximizará suas chances de conseguir um emprego.",
          },
          {
            icon: "support",
            title: language === "en"
              ? "Ongoing Support"
              : "Suporte Contínuo",
            description: language === "en"
              ? "We provide continuous assistance to address your concerns and ensure your professional success in the long term."
              : "Oferecemos assistência contínua para resolver suas preocupações e garantir seu sucesso profissional a longo prazo.",
          },
        ]}
      />

      <VisualGrid
        icon="paperpeople"
        title={language === "en"
          ? "Lives Transformed"
          : "Vidas Transformadas"
        }
        elements={[
          {
            image: Images.man1,
            title: "Alex Martins",
            subtitle: language === "en"
              ? "Construction Worker"
              : "Trabalhador da Construção",
            description: language === "en"
              ? "After 1 year of moving to America, he was able to find his first job to give a better life for his kids."
              : "Após 1 ano de mudança para os EUA, conseguiu seu primeiro emprego para dar uma vida melhor aos filhos.",
          },
          {
            image: Images.woman1,
            title: "Luísa Alves",
            subtitle: language === "en"
              ? "Nurse Assistant"
              : "Assistente de Enfermagem",
            description: language === "en"
              ? "Found a stable job in the healthcare industry and is now supporting her family and pursuing her dreams."
              : "Encontrou um emprego estável na área da saúde e agora apoia sua família enquanto persegue seus sonhos.",
          },
          {
            image: Images.man2,
            title: "Carlos Mota",
            subtitle: language === "en"
              ? "Truck Driver"
              : "Motorista de Caminhão",
            description: language === "en"
              ? "Transitioned to a new career in logistics, enabling him to secure financial stability for his loved ones."
              : "Mudou para uma nova carreira na área de logística, garantindo estabilidade financeira para sua família.",
          },
          {
            image: Images.man3,
            title: "Marcos Totti",
            subtitle: language === "en"
              ? "Chef"
              : "Chef de Cozinha",
            description: language === "en"
              ? "Started a career in a renowned restaurant, showcasing his culinary talent and building a brighter future."
              : "Iniciou uma carreira em um restaurante renomado, exibindo seu talento culinário e construindo um futuro melhor.",
          },
        ]}
      />

    </main>
  );
}
