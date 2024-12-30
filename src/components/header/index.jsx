import { useState } from "react";
import { SVG } from "../svg";
import { useNavigate } from "react-router";

export function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let navigate = useNavigate();

  return (
    <header className="flex w-full items-center justify-between border-b-[0.1rem] border-solid border-gray-500 bg-white p-4">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="font-kanit-thin text-3xl font-bold italic">
          WorldWorkHub.
        </h1>
      </span>

      <span
        className="mr-12 cursor-pointer"
        onClick={() => setDropdownVisible((prevVisible) => !prevVisible)}
      >
        <SVG className="h-5 w-5 fill-text" type="bar" />
      </span>

      {dropdownVisible && (
        <div className="absolute right-5 top-14 rounded-lg bg-white p-4 shadow-md">
          <ul className="list-none">
            <li className="font-space-mono-regular w-20 cursor-pointer p-2 text-sm hover:font-bold">
              About
            </li>
            <li className="font-space-mono-regular w-20 cursor-pointer p-2 text-sm hover:font-bold">
              Contact
            </li>
            <li className="font-space-mono-regular w-20 cursor-pointer p-2 text-sm hover:font-bold">
              License
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
