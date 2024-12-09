import { useState } from 'react';
import { StyledHeader } from './index.styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <StyledHeader>
      <h1>WorldWork Hub</h1>
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        onClick={() => setDropdownVisible((prevVisible) => !prevVisible)} 
      />
      <div style={{ display: dropdownVisible ? 'block' : 'none' }}>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>License</li>
        </ul>
      </div>
    </StyledHeader>
  );
}