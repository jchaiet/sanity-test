const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`src/templates/page-template.tsx`)

  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
            title
            id
          }
        }
      }
    }
  `)

  result.data?.allSanityPage?.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug.current || '/'}`,
      component: pageTemplate,
      context: {
        id: edge.node.id,
        title: edge.node.title,
        slug: edge.node.slug.current || '/'
      }
    })
  })
}