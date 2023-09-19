
async function start() {
  await require('esbuild').build({
    entryPoints: ['src/extension.ts'],
    bundle: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV === 'development',
    mainFields: ['module', 'main'],
    external: ['coc.nvim', 'chokidar'],
    platform: 'node',
    target: 'node14.14',
    outfile: 'lib/index.js'
  })
}

start().catch(e => {
  console.error(e)
})