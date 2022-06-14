import {createCliConfig} from 'sanity/cli'

export default createCliConfig({
  api: {
    projectId: 'uvckpdwn',
    dataset: 'production'
  },
  vite(config) {
    config.vite.plugins.push('sanity-plugin-desk')
  },
})
