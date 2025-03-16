import PropTypes from "prop-types";
import { Icon } from "./icon";

export function AnimatedIcons({ label = "", blackIcon, greenIcon, animationClass = "" }) {
  return (
    <>
      <p className="w-40 text-lg text-center font-archivo-black-regular">
        {label}
      </p>

      <div className="flex relative flex-row">
        <Icon icon={greenIcon} className="w-40 h-40 fill-green" />
        <Icon
          icon={blackIcon}
          className={`absolute mt-8 w-20 h-20 fill-tex animate-climb ${animationClass}`}
        />
      </div>
    </>
  );
}

AnimatedIcons.propTypes = {
  label: PropTypes.string,
  blackIcon: PropTypes.string.isRequired,
  greenIcon: PropTypes.string.isRequired,
  animationClass: PropTypes.string,
};
