import { useState } from 'react';
import { SVG } from '../../assets';

export function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className="w-full flex items-center justify-between bg-white border-solid border-b-[0.1rem] border-gray-500 p-4">
      <h1 className="text-3xl font-bold italic font-kanit-thin">WorldWorkHub.</h1>

      <span className="mr-12 cursor-pointer" onClick={() => setDropdownVisible((prevVisible) => !prevVisible)}>
        <SVG className="fill-text w-5 h-5" type="bar"/>
      </span>

      { dropdownVisible &&
        <div className="absolute top-14 right-5 bg-white shadow-md rounded-lg p-4">
          <ul className="list-none">
            <li className="w-20 text-sm cursor-pointer p-2 hover:font-bold font-space-mono-regular">About</li>
            <li className="w-20 text-sm cursor-pointer p-2 hover:font-bold font-space-mono-regular">Contact</li>
            <li className="w-20 text-sm cursor-pointer p-2 hover:font-bold font-space-mono-regular">License</li>
          </ul>
        </div>
      }
    </header>
  );
}