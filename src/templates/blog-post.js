import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          style={{
            background: `#fff`,
          }}
        >
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          <div
            class="inner-article"
            style={{
              padding: `1rem 3rem`,
            }}
          >
            <header
              style={{
                marginBottom: `1.5rem`,
              }}
            >
              <h1
                style={{
                  marginBottom: `1rem`,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <time
                datetime={post.frontmatter.date}
                style={{ color: `#ad5100` }}
              >
                {post.frontmatter.date}
                <span> by Azadeh, {post.timeToRead} min</span>
              </time>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer></footer>
          </div>
        </article>

        <nav
          className="pagination-menu"
          style={{
            padding: `1rem`,
            margin: `1rem auto`,
          }}
        >
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
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
          </ul>
        </nav>
      </Layout>
    )
  }
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
