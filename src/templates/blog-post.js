import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const ArticleWrapper = styled.div`
  background: #fff;
`
const ArticleTitle = styled.h1`
  margin-bottom: 1rem;
`
const ArticleHeader = styled.header`
  margin-bottom: 1.5rem;
`
const ArticleTime = styled.time`
  color: rgb(173, 81, 0);
`

const ArticleAuthor = styled.span``

const ArticleInnerWrapper = styled.div`
  padding: 1rem 3rem;
`
const PaginationMenu = styled.nav`
  padding: 1rem;
  margin: 1rem auto;
`

const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 1rem;
`

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ArticleWrapper>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <ArticleInnerWrapper>
          <ArticleHeader>
            <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
            <ArticleTime datetime={post.frontmatter.date}>
              {post.frontmatter.date}
              <ArticleAuthor> by Azadeh, {post.timeToRead} min</ArticleAuthor>
            </ArticleTime>
          </ArticleHeader>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer></footer>
        </ArticleInnerWrapper>
      </ArticleWrapper>

      <PaginationMenu>
        <PaginationList>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← Older Articles{previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}Newer Articles →
              </Link>
            )}
          </li>
        </PaginationList>
      </PaginationMenu>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
