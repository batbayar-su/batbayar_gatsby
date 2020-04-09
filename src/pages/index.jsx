import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CenteredLayout from "../components/layouts/centered"
import SEO from "../components/seo"
import chatbot from '../images/chatbot.svg'
import terminal from '../images/terminal.svg'
import webpage from '../images/webpage.svg'

const IndexPage = () => {

  return <CenteredLayout>
    <SEO title="Home" />
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-6xl pt-20">Choose your way to experience</h1>
      <div className="flex flex-grow w-full items-center justify-between -mt-20">
        <div className="flex-1 px-20">
          <img src={terminal} />
        </div>
        <div className="flex-1 px-20">
          <img src={webpage} />
        </div>
        <div className="flex-1 px-20">
          <img src={chatbot} />
        </div>
      </div>
    </div>
  </CenteredLayout>
}

export default IndexPage
