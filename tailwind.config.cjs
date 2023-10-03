const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: [
      'index.html',
      './dist/assets/**/*.{html,js}',
      './src/**/*.{html,js}'
   ],
   theme: {
      screens: {
         'mobile': '360px',
         // 'smartphone': '480px',
         'tablet': '768px',
         'laptop': '1024px',
         'desktop': '1280px',
         'full': '1576px',
      },
      extend: {
         colors: {
            // Custom colors
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'black': '#181818',
         },
         fontFamily: {
            satisfy: ['Satisfy', ...defaultTheme.fontFamily.sans],
            domine: ['Domine', ...defaultTheme.fontFamily.serif],
            rubik: ['Rubik Pixels', ...defaultTheme.fontFamily.serif],
            //TODO: Add default font family [ sans, serif or mono ]
         },
         spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
         },
         borderRadius: {
            '4xl': '2rem',
         }
      },
      container: {
         center: true,
         padding: {
            mobile: '12px',
            tablet: '24px',
            laptop: '48px',
            desktop:  '120px',
         },
      }
   }
}
