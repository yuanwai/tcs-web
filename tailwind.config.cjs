const config = {
  content: ["./src/**/*.{html,js,svelte,ts}",'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],

  darkMode: 'class',

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
            },
          },
          prose: {
            maxWidth: '120ch',
          },
        }
      },

      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      },

      height: {
        '128': '32rem',
        '196': '56rem',
      }
    },
  },


  };

  module.exports = config;
