const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: 'none !important'
              },
              '&::after': {
                content: 'none !important',
              },
              background: '#eee',
            },

            p: {
              '&::before': {
                content: 'none !important'
              },
              '&::after': {
                content: 'none !important'
              },
            },

            blockquote: {
              background: '#f7f8f9',
            },

            ul: {
              background: '#faf9f9',
            },

            table: {
              thead: {
                th: {
                  background: '#eeeeee',
                }
              }
            }
          }
        }
      },
    },
  },

    plugins: [
      require('@tailwindcss/typography')
    ],
  };

  module.exports = config;
