import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header 
      className="w-screen flex items-center justify-between bg-white border-solid border-b-[0.1rem] border-gray-500 p-4">
      <h1 className="font-bold">WorldWork Hub</h1>
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        className="mr-11 text-gray-500 cursor-pointer"
        onClick={() => setDropdownVisible((prevVisible) => !prevVisible)}
      />
      <div
        className={
          `absolute top-14 right-5 bg-white shadow-md rounded-lg p-4 
          ${dropdownVisible ? 'block' : 'hidden'}
        `}>
        <ul className="list-none">
          <li className="cursor-pointer p-2 hover:font-bold">About Us</li>
          <li className="cursor-pointer p-2 hover:font-bold">Contact</li>
          <li className="cursor-pointer p-2 hover:font-bold">License</li>
        </ul>
      </div>
    </header>
  );
}