import React from "react"
import Helmet from "react-helmet"

interface Props {
  keywords?: string
}

export const SEO: React.FC<Props> = ({ keywords }) => {
  return (
    <Helmet>
      {keywords && <meta name="keywords" content={keywords}></meta>}
    </Helmet>
  )
}
