import { useNavigate } from "react-router";
import { useAppContext } from "../../context/context";

export function Header() {
  let navigate = useNavigate();
  const { language, toggleLanguage } = useAppContext();

  return (
    <header className="flex justify-between items-center p-4 w-full bg-white border-gray-500 border-solid border-b-[0.1rem]">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="text-3xl italic font-bold font-kanit-thin">
          WorldWorkHub.
        </h1>
      </span>
      <img
        onClick={toggleLanguage}
        className="object-cover absolute top-4 right-4 w-10 h-10 rounded-full cursor-pointer"
        src={
          language == "en"
            ? "https://i.postimg.cc/HxwyxK5L/usa.jpg"
            : "https://i.postimg.cc/3N3DDBCF/brazil.jpg"
        }
      />
    </header>
  );
}
