import * as React from "react"
import { graphql } from "gatsby"

const PageTemplate = ({ data } : { data: PageI }) => {
  return (
    <>
      <p>Hello</p>
      <p>This is the {data?.sanityPage.title} page</p>
      <p>{data?.sanityPage.slug?.current}</p>
    </>
  )
}

export const data = graphql`
  query GetSinglePage ($id: String) {
    sanityPage(id: {eq: $id}) {
      slug {
        current
      }
      title
      id
    }
  }
  `

  export default PageTemplate