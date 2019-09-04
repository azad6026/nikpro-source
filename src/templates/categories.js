import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"

// Components
import { Link, graphql } from "gatsby"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } linked with "${category}"`

  return (
    <Layout location={data.location} title={categoryHeader}>
      <SEO
        title={categoryHeader}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <section
        style={{
          background: `rgba(255, 255, 255, 0.8)`,
          padding: `1rem 2rem`,
          margin: `1rem auto`,
        }}
      >
        <h1>{categoryHeader}</h1>
        <ul
          style={{
            marginLeft: `1.5rem`,
          }}
        >
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li
                key={slug}
                style={{
                  listStyleType: `square`,
                }}
              >
                <Link
                  to={slug}
                  style={{
                    marginBottom: `0`,
                    boxShadow: `none`,
                    textShadow: `0px 1px 1px #0c0904`,
                    color: `#d38221`,
                    letterSpacing: `2px`,
                  }}
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              We'll come back to it!
               <Link to="/categories">All Categories</Link>
            */}
      </section>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
