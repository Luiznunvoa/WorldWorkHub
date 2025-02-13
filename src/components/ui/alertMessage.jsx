import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { Icon } from "./icon"

export function AlertMessage({ message }) {
  const navigate = useNavigate()

  if (!message) return null

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-96">
      <div className="flex flex-row gap-7 justify-center items-center">
        <Icon icon={message.icon} className="w-32 h-32 stroke-4" />
        <p className="text-4xl font-bold font-kanit-thin">{message.text}</p>
      </div>
      <button
        className="text-xl font-bold text-blue-400 cursor-pointer hover:underline font-Roboto"
        onClick={() => navigate(message.link.path)}
      >
        {message.link.text}
      </button>
    </div>
  )
}

AlertMessage.propTypes = {
  message: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
