import React from "react"

import CenteredLayout from "../components/layouts/centered"
import SEO from "../components/seo"
import StartIcon from "../components/start-icon"
import chatbot from "../images/chatbot.svg"
import terminal from "../images/terminal.svg"
import webpage from "../images/webpage.svg"
import style from "./index.module.scss"

const IndexPage = () => {
  return (
    <CenteredLayout>
      <SEO title="Home" />
      <div className={`flex flex-col h-screen items-center ${style.baseColorBg}`}>
        <h1 className={`text-2xl md:text-4xl pt-20 ${style.chooseExperienceText}`}>
          Choose
        </h1>
        <div className="flex flex-grow w-full items-center justify-between -mt-20">
          <StartIcon src={terminal} text="Terminal" link="/terminal" />
          <StartIcon src={webpage} text="Webpage" link="https://batbayar-su.github.io/" />
          <StartIcon src={chatbot} text="Chatbot" />
        </div>
      </div>
    </CenteredLayout>
  )
}

export default IndexPage
