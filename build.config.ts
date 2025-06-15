import { env } from 'node:process'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import { defineBuildConfig } from 'obuild/config'

export default defineBuildConfig({
  entries: [
    {
      type: 'bundle',
      input: ['./index.ts'],
      outDir: './dist',
      rolldown: {
        plugins: [
          replace({
            preventAssignment: true,
            values: {
              __DEV__: JSON.stringify(env.NODE_ENV !== 'production'),
            },
          }),
          alias({
            entries: [
              // path aliases
            ],
          }),
        ],
      },
    },
  ],
})
