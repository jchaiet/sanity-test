import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'mpy31hfj',
    dataset: 'production'
  },
  graphql: [
    {
      playground: false,
      tag: 'experiment',
      workspace: 'default',
      id: 'schema-experiment',
    },
  ]
})
