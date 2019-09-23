import React from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BackgroundImage
              Tag="article"
              className="bg-image"
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              backgroundColor={`#fff`}
            >
              <div
                className="post-box"
                key={node.fields.slug}
                style={{
                  transition: `transform 250ms cubic- bezier(0.4, 0, 0.2, 1), box - shadow 250ms cubic - bezier(0.4, 0, 0.2, 1), padding 250ms cubic - bezier(0.4, 0, 0.2, 1)`,
                  // background: `rgba(255,255,255,.85)`,
                  // background: `-moz - linear - gradient(left, rgba(255, 255, 255, 1) 0 %, rgba(255, 255, 255, 0) 100 %)`,
                  // background: `-webkit - linear - gradient(left, rgba(255, 255, 255,1) 0 %, rgba(255, 255, 255, 0) 100 %)`,
                  // background: `linear-gradient(to right, rgba(255, 255, 255, 1) 0 %, rgba(255, 255, 255, 0) 100 %)`,
                  background: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, .7) 50%, rgba(255, 255, 255, 0) 100%)`,
                  // filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8ffffff', endColorstr='#00ffffff',GradientType=1 )`,
                  boxShadow: `rgba(12, 9, 4, 0.43) 7px 7px 0rem`,
                  padding: `1rem 3rem`,
                  margin: `1rem auto`,
                  transition: `all .5s`,
                }}
              >
                <h3>
                  <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <time
                  datetime={node.frontmatter.date}
                  style={{ color: `#ad5100` }}
                >
                  {node.frontmatter.date}
                  <span> by Azadeh, {node.timeToRead} min</span>
                </time>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </BackgroundImage>
          )
        })}
        <nav
          className="pagination-menu"
          style={{
            padding: `1rem`,
            margin: `1rem auto`,
          }}
        >
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
              padding: 0,
              padding: `1rem`,
            }}
          >
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Newer Articles
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                  display: `none`,
                }}
              >
                <Link
                  to={`/${i === 0 ? "" : i + 1}`}
                  style={{
                    textDecoration: "none",
                    color: i + 1 === currentPage ? "#ffffff" : "",
                    background: i + 1 === currentPage ? "#007acc" : "",
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Older Articles →
              </Link>
            )}
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
// {
//     gallery: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
//         edges {
//             node {
//                 name
//                 childMarkdownRemark {
//                     frontmatter {
//                         image
//                         permalink
//                         categories
//                         tags
//                     }
//                     wordCount {
//                         words
//                     }
//                 }
//             }
//         }
//     }
// }
