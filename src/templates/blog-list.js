import React from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"

const ArticleBackgroundWrapper = styled(props => (
  <BackgroundImage {...props} />
))``

const ArticleWrapper = styled.div`
  transition: all 0.5s ease 0s;
  background: linear-gradient(
    to right,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: rgba(12, 9, 4, 0.43) 7px 7px 0rem;
  padding: 1rem 3rem;
  margin: 1rem auto;
`
const ArticleTitle = styled.h3``
const ArticleTitleLink = styled(props => <Link {...props} />)`
  box-shadow: none;
  color: var(--primary-dark-color);
  background: -webkit-linear-gradient(#a39d9d, #120f0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  :hover {
    color: #a74e00;
    background: -webkit-linear-gradient(#ea8b39, #120f0f);
    color: #a74e00;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const ArticleTime = styled.time`
  color: rgb(173, 81, 0);
`

const ArticleAuthor = styled.span``

const ArticleExcert = styled.p``

const ArticleReadMoreLink = styled(props => <Link {...props} />)``

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
            <ArticleBackgroundWrapper
              Tag="article"
              className="bg-image"
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            >
              <ArticleWrapper>
                <ArticleTitle>
                  <ArticleTitleLink to={node.fields.slug}>
                    {title}
                  </ArticleTitleLink>
                </ArticleTitle>
                <ArticleTime datetime={node.frontmatter.date}>
                  {node.frontmatter.date}
                  <ArticleAuthor>
                    by Azadeh, {node.timeToRead} min
                  </ArticleAuthor>
                </ArticleTime>
                <ArticleExcert
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
                <ArticleReadMoreLink to={node.fields.slug}>
                  Continue reading{" "}
                </ArticleReadMoreLink>
              </ArticleWrapper>
            </ArticleBackgroundWrapper>
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
