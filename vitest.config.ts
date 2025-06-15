import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    // path aliases
    alias: {},
  },
  define: {
    __DEV__: true,
  },
})
