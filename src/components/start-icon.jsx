import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import style from "./start-icon.module.scss"

const Content = ({ src, text }) => (
  <>
    <img
      src={src}
      alt={text}
      className="w-full h-100 sm:h-150 md:h-200 lg:h-300"
    />
    <h1
      className={`mt-2 xl:mt-10 text-1xl md:text-2xl ${style.experienceText}`}
    >
      {text}
    </h1>
  </>
)

const StartIcon = ({ src, text, link }) => (
  <div className="flex-1 px-2 sm:px-5 md:px-10 lg:px-15 xl:px-20 text-center">
    { link.startsWith('http') ? (
      <a href={link}>
        <Content src={src} text={text} />
      </a>
    ) : (
      <Link to={link}>
        <Content src={src} text={text} />
      </Link>
    )}
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
