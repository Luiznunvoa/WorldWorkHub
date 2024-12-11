import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header 
      className="w-screen flex items-center justify-between bg-white border-solid border-b-[0.1rem] border-gray-500 p-4">
      <h1 className="text-3xl font-bold italic font-kanit-thin">WorldWorkHub.</h1>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="mr-12 text-text cursor-pointer"
        onClick={() => setDropdownVisible((prevVisible) => !prevVisible)}
      />
      <div
        className={
          `absolute top-14 right-5 bg-white shadow-md rounded-lg p-4 
          ${dropdownVisible ? 'block' : 'hidden'}
        `}>
        <ul className="list-none">
          <li className="w-20 text-sm cursor-pointer p-2 hover:font-bold font-space-mono-regular">
            About
          </li>
          <li className="w-20 text-sm cursor-pointer p-2 hover:font-bold font-space-mono-regular">
            Contact
          </li>
          <li className="w-20 text-sm cursor-pointer p-2 hover:font-bold font-space-mono-regular">
            License
          </li>
        </ul>
      </div>
    </header>
  );
}