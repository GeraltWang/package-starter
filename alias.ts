import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^unknown-ui/,
    replacement: path.resolve(baseUrl, 'packages/unknown-ui/src'),
  },
  {
    find: /^@unknown-ui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@unknown-ui\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
]
