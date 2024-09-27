/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    fontFamily : {
      karla : ['karla', 'sans']
    },
    fontSize : {
      'preset-1': ['24px', {
        lineHeight: '28px', 
        letterSpacing: '-0.3px',
        fontWeight: '700',  
      }],
      'preset-2': ['18px', {
        lineHeight: '21px', 
        letterSpacing: '-0.22px',
        fontWeight: '700',  
      }],
      'preset-3': ['16px', {
        lineHeight: '26px', 
        letterSpacing: '-0.2px',
        fontWeight: '500',  
      }],
      'preset-4': ['14px', {
        lineHeight: '20px', 
        letterSpacing: '-0.17px',
        fontWeight: '400',  
      }],
      'preset-5': ['32px', {
        lineHeight: '37px', 
        letterSpacing: '-0.4px', 
        fontWeight: '700',  
      }],

    },
    colors : {
      cyan : '#2AB3B1',
      brightYellow : '#C0DF33',
      LightGray : '#2AB3B1',
      graylishblue : '#9AA7BE',
      bgg : '#E6EFF5',
      white : '#FFF',
    },
    extend: {
      spacing : {
        18 : '18px',
        26 : '26px',
        237 : '237px',
        635 : '635px',
      },
      borderRadius : {
        5 : '5px',
      },
    },
  },
  plugins: [],
}

