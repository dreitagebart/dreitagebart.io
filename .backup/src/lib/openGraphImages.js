const fs = require('fs')
const matter = require('gray-matter')
const path = require('path')
const { createCanvas, loadImage, registerFont } = require('canvas')

const width = 1200
const height = 630
const maxWidth = 900
const lineHeight = 90
const paddingLeft = 50
const sourcePath = path.join(__dirname, '../../public/blog')

const fileExists = (filePath) =>
  new Promise((resolve, reject) => {
    fs.access(filePath, fs.F_OK, (err) => {
      if (err) return reject(err)
      return resolve()
    })
  })

const generateOgImage = async (title, dest) => {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  const baseImage = await loadImage(
    path.join(__dirname, '../assets/images/og-base-image.png')
  )
  context.drawImage(baseImage, 0, 0, width, height)

  registerFont(
    path.join(
      __dirname,
      '../assets/fonts/Albert_Sans/AlbertSans-VariableFont_wght.ttf'
    ),
    { family: 'Albert Sans' }
  )

  context.fillStyle = '#b0bac8'
  context.font = '64px Albert Sans'

  const words = title.split(' ')
  let line = ''
  let y = lineHeight / 2
  const headlines = []

  words.forEach((w, i) => {
    const testLine = `${line}${w} `
    const metrics = context.measureText(testLine)
    if (metrics.width > maxWidth && i > 0) {
      headlines.push({ text: line, y })
      line = `${w} `
      y += lineHeight
    } else {
      line = testLine
    }
  })
  headlines.push({ text: line, y })

  const startPosY = (height - lineHeight * headlines.length) / 2
  headlines.forEach((l) =>
    context.fillText(l.text, paddingLeft, startPosY + l.y)
  )

  context.fillStyle = '#22B8CF'
  context.fillRect(paddingLeft, startPosY - lineHeight / 2 - 10, 100, 5)

  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(path.join(dest), buffer)
}

process.stdout.write('generating images ')
fs.readdir(sourcePath, (err, files) => {
  files.forEach(async (folder) => {
    const stat = fs.statSync(`${sourcePath}/${folder}`)
    if (stat && stat.isDirectory()) {
      try {
        await fileExists(`${sourcePath}/${folder}/content.mdx`)

        const { data: post } = matter.read(
          `${sourcePath}/${folder}/content.mdx`
        )

        generateOgImage(post.title, `${sourcePath}/${folder}/featured.png`)

        process.stdout.write('✔')
      } catch (error) {
        process.stdout.write('x')
      }

      // english
      // try {
      //   await fileExists(`${dir}/${folder}/index.en.md`)
      //   const { data: enPost } = matter.read(`${dir}/${folder}/index.en.md`)
      //   generateOgImage(
      //     enPost.title,
      //     enPost.tags,
      //     `${dir}/${folder}/feature-image.en.png`
      //   )
      //   process.stdout.write('✔')
      // } catch (error) {
      //   process.stdout.write('x')
      // }
    }
  })
})
