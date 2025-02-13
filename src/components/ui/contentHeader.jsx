import PropTypes from "prop-types"
import { Icon } from "./icon"

export function ContentHeader({ icon, title }) {
  return (
    <section className="flex flex-row gap-5 items-center">
      {icon && <Icon icon={icon} className="w-10 h-10 fill-text" />}
      {title && (
        <h2 className="text-3xl font-bold text-center font-kanit-thin">
          {title}
        </h2>
      )}
    </section>
  )
}

ContentHeader.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
}
