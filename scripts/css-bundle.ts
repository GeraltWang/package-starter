import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import fs from 'fs-extra'
import * as sass from 'sass'

const uiDir = fileURLToPath(new URL('../packages/unknown-ui', import.meta.url))

const scssFiles = fg.sync(['src/**/style/index.scss', '!src/style'], {
  cwd: uiDir,
})

function compileCss() {
  for (const file of scssFiles) {
    const filePath = path.resolve(uiDir, file)
    const cssCode = sass.compile(filePath, {
      style: 'compressed',
    })

    const esDir = path.resolve(uiDir, `./es${file.slice(3, -4)}css`)
    const libDir = path.resolve(uiDir, `./lib${file.slice(3, -4)}css`)
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}

compileCss()
