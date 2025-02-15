import { useNavigate } from "react-router";
export function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex z-20 justify-between items-center p-4 w-full bg-white border-b-2 border-solid border-outline">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="text-3xl italic font-bold font-kanit-thin">
          WorldWorkHub.
        </h1>
      </span>
    </header>
  );
}
