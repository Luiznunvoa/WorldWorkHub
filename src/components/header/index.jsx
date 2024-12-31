import { useNavigate } from "react-router";

export function Header() {
  let navigate = useNavigate();
  
  return (
    <header className="flex w-full items-center justify-between border-b-[0.1rem] border-solid border-gray-500 bg-white p-4">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="font-kanit-thin text-3xl font-bold italic">
          WorldWorkHub.
        </h1>
      </span>
    </header>
  );
}
