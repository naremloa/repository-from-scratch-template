import { defineBuildConfig } from 'obuild/config'

export default defineBuildConfig({
  entries: [
    {
      type: 'bundle',
      input: ['./index.ts'],
      outDir: './dist',
      // minify: false,
      // stub: false,
      // rolldown: {}, // https://rolldown.rs/reference/config-options
      // dts: {}, // https://github.com/sxzz/rolldown-plugin-dts#options
    },
  ],
  hooks: {
    // start: (ctx) => {},
    // end: (ctx) => {},
    // entries: (entries, ctx) => {},
    // rolldownConfig: (config, ctx) => {},
    // rolldownOutput: (output, res, ctx) => {},
  },
})
