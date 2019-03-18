import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Reviews extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const reviews = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Promoviendo web performance" />
        <Bio />
        <h2>Análisis de web performance</h2>
        {reviews.map(({ node }) => {
          const title = node.frontmatter.title || node.headings[0].value || node.fields.slug
          return (
            <div key={node.fields.slug} style={{
              display: `flex`,
              marginTop: rhythm(1),
            }}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Img style={{height: 100, width: 100, flexShrink: 0, marginRight: rhythm(1 / 2)}} sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
              </Link>
              <div>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    marginTop: 0,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            </div>
          )
        })}
        <h2>Tips</h2>
        <h3><a style={{ boxShadow: `none` }} href={'https://www.youtube.com/watch?v=50DiJphbXiU'}>3rd party badges en Google Chrome</a></h3>
        <p>Un vídeo corto sobre cómo identificar peticiones de 3rd party scripts y medir su performance.</p>
        <h2>Tools</h2>
        <h3><a style={{ boxShadow: `none` }} href={'https://github.com/PerfReviews/PerfTools/tree/master/Lighthouse-Report'}>Lighthouse report</a></h3>
        <p>Cómo escribir un script para generar informes de lighthouse para un conjunto de webs automáticamente.</p>
        <h2>Colaboraciones</h2>
        <h3><a style={{ boxShadow: `none` }} href={'https://www.youtube.com/watch?v=bhSEp44mrKQ'}>Análisis del performance de sitios web con Escuela IT</a></h3>
        <p>En esta colaboración con la plataforma de aprendizaje online Escuela IT analizamos el rendimiento de 3 sitios web sugeridos por los asistentes a la sesión.</p>
        <hr style={{
          marginTop: rhythm(2.5),
          marginBottom: rhythm(2.5),
        }} />
        <p>En PerfReviews hablamos sobre web performance analizando diferentes sitios reales. Queremos divulgar sobre la importancia de crear productos que ofrezcan una buena experiencia de usuario en cualquier dispositivo. Y lo haremos desde un punto de vista práctico, con herramientas y técnicas que podéis aplicar en vuestros proyectos.</p>
        <p>Dado que los sitios web son proyectos dinámicos, es posible que los análisis mencionen aspectos que no sean reproducibles actualmente. Por ello acompañamos los vídeos con una serie de informes que permiten visualizar un “snapshot” de la web en el momento en que hicimos el estudio.
        </p>
      </Layout>
    )
  }
}

export default Reviews

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fields: {collection: {eq: "reviews"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 100) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
          headings {
            value
          }
        }
      }
    }
  }
`

/*
image {
  childImageSharp{
    sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
    }
  }
}
*/