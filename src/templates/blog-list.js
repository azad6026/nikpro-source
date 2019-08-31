import React from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
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
            <article
              key={node.fields.slug}
              style={{
                backgroundImage: `url(${node.frontmatter.image})`,
                background: `rgba(255,255,255,.8)`,
                boxShadow: `0px 0px 10px #505050`,
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
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </article>
          )
        })}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            background: `#0c0904`,
            padding: `1rem`,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Newer Posts
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
              Older Posts →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image
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
