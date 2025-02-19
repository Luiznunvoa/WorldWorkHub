import { useNavigate } from "react-router";
import PropTypes from "prop-types";

export function Header({ children }) {
  const navigate = useNavigate();

  return (
    <header className="flex z-20 justify-between items-center p-4 w-full bg-white border-b-2 border-solid border-outline">
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="text-3xl italic font-bold font-kanit-thin">
          WorldWorkHub.
        </h1>
      </span>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

