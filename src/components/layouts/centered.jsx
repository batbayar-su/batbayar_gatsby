import React from "react"
import PropTypes from "prop-types"

const CenteredLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <main>{children}</main>
    </div>
  )
}

CenteredLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenteredLayout
