import { useNavigate } from "react-router";
import { useAppContext } from "../../utils";
import { portugal, uk } from "../../assets";

export function Header() {
  let navigate = useNavigate();
  const { language, toggleLanguage } = useAppContext();

  return (
    <header className="flex w-full items-center justify-between border-b-[0.1rem] border-solid border-gray-500 bg-white p-4">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="font-kanit-thin text-3xl font-bold italic">
          WorldWorkHub.
        </h1>
      </span>
      <img
        onClick={toggleLanguage}
        className="absolute h-10 w-10 object-cover top-4 right-4 cursor-pointer rounded-full"
        src={language == "en" ? uk : portugal}
      />
    </header>
  );
}
