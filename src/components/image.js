import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// This is a custom image componetn that looks up for the image name and place it in.

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1200) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(edge =>
        edge.node.relativePath.includes(props.filename)
      )
      const imageSizes = image.node.childImageSharp.fluid
      if (!image) {
        return null
      }

      return <Img alt={props.alt} fluid={imageSizes} />
    }}
  />
)
export default Image
