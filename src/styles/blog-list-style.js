import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const BlogListStyle = () => {
  ArticleBackgroundWrapper = styled(props => <BackgroundImage {...props} />)``

  ArticleWrapper = styled(animated.div)`
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
    :hover {
      transform: translateY(-0.25rem);
      box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08),
        0px 8px 16px rgba(71, 63, 79, 0.88);
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border-width: 0 3rem 3rem 0;
      border-style: solid;
      border-color: #0c0904 #120f0f #f08b33 #0c0904;
      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
        -1px 1px 1px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
        -1px 1px 1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
      display: block;
      width: 0;
    }
  `
  ArticleTitle = styled.h3``
  ArticleTitleLink = styled(props => <Link {...props} />)`
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
  ArticleTime = styled.time`
    color: rgb(173, 81, 0);
  `

  ArticleAuthor = styled.span``

  ArticleExcert = styled.p``

  ArticleReadMoreLink = styled(props => <Link {...props} />)``

  PaginationMenu = styled.nav`
    padding: 1rem;
    margin: 1rem auto;
  `

  PaginationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 1rem;
  `
}
export default BlogListStyle
