import { useNavigate } from "react-router";

export function Header() {
  let navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 w-full bg-white border-gray-500 border-solid border-b-[0.1rem]">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="text-3xl italic font-bold font-kanit-thin">
          WorldWorkHub.
        </h1>
      </span>
    </header>
  );
}
