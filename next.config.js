const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.excalidraw$/,
      use: [
        {
          loader: 'json-loader'
        }
      ]
    })

    config.module.rules.push({
      test: /\.excalidrawlib$/,
      use: [
        {
          loader: 'json-loader'
        }
      ]
    })

    // config.module.rules.push({
    //   test: /\.excalidrawlib/,
    //   use: [options.defaultLoaders.babel]
    // })

    return config
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true
}

module.exports = withMDX(nextConfig)
