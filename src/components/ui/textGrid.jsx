import PropTypes from "prop-types"
import { Icon } from "./icon"
import { ContentHeader } from "./contentHeader"

/**
 * TextGrid Component
 * A grid layout that displays a series of elements with icons, titles, and descriptions.
 * The elements are displayed in a flexible grid layout with hover effects.
 *
 * Props:
 * - icon (string, optional): Type of Icon icon to display alongside the title.
 * - title (string, optional): The main title of the grid.
 * - elements (array): An array of objects containing:
 *   - icon (string): Type of Icon icon to display for each element.
 *   - title (string): Title of the element.
 *   - description (string): Description of the element.
 */
export function TextGrid({ textGrid }) {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      {(textGrid.icon || textGrid.title) && (
        <ContentHeader icon={textGrid.icon} title={textGrid.title} />
      )}

      <section className="grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-2">
        {textGrid.elements.map((element, index) => (
          <div
            key={index}
            className="flex flex-row gap-5 p-10 bg-white rounded-2xl border-4 border-solid shadow-xl transition-all cursor-pointer hover:shadow-2xl hover:scale-110 border-text"
          >
            <div className="flex flex-col h-full">
              <Icon icon={element.icon} className="w-20 h-24 fill-green" />
            </div>

            <div className="flex flex-col gap-5 justify-center h-full max-w-80">
              <h3 className="text-2xl italic font-bold text-start font-kanit-thin">
                {element.title}
              </h3>

              <p className="italic text-start font-Roboto">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

TextGrid.propTypes = {
  textGrid: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,

    elements: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      }).isRequired
    ),
  }),
}
