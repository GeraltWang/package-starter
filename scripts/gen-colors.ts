import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { geekblue, gold, green, red } from '@ant-design/colors'

let colors = ''

geekblue.forEach((color, index) => {
  colors += `--uu-color-primary-${index + 1}: ${color};\n`
})

colors += `\n`

green.forEach((color, index) => {
  colors += `--uu-color-success-${index + 1}: ${color};\n`
})

colors += `\n`

gold.forEach((color, index) => {
  colors += `--uu-color-warning-${index + 1}: ${color};\n`
})

colors += `\n`

red.forEach((color, index) => {
  colors += `--uu-color-error-${index + 1}: ${color};\n`
})

const baseUrl = fileURLToPath(new URL('../', import.meta.url))

const cssFile = path.resolve(baseUrl, 'packages/unknown-ui/src/style/theme/colors.scss')

fs.writeFileSync(cssFile, `:root {\n${colors}}\n`)

console.log('gen colors success!', colors)
