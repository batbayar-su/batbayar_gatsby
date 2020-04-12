import React from "react"
import PropTypes from "prop-types"

import "./start-icon.css"

const StartIcon = ({ src, text, link }) => (
  <div className="flex-1 px-2 sm:px-5 md:px-10 lg:px-15 xl:px-20 text-center">
    <a href={link}>
      <img
        src={src}
        alt={text}
        className="w-full h-100 sm:h-150 md:h-200 lg:h-300"
      />
      <h1 className="mt-2 xl:mt-10 text-1xl md:text-2xl experience-text">{text}</h1>
    </a>
  </div>
)

StartIcon.defaultProps = {
  src: "",
  text: "",
  link: "#",
}

StartIcon.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default StartIcon
