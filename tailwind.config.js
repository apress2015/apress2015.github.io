module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth:{
      "max":"1500px",
    },
    colors: {
      "white":"#fff",
      "primary":"#373131",
      'black': '#0D0807',
      "green": '#2BAC76',
      'red': '#CD2553',
      "purple":"#9DA6FA",
      "magnolia":"#F4F5FF",
      "gray":{
        "light":"#F8F9FF",
        "medium":"#E1E1E1",
      },
      "transparent":"transparent",
      "darkBlue": "#374957",
      "blackBg": "#2C2C2C",
      "grayBorder": "#606060",
      "darkBorder": "#363853",
      "imageOnlyBText": "#545650",
      "footerBgC": "#2C2C2C",
    },
    borderWidth:{
      "1":"1px",
      "2":"2px",
    },

    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '1.875rem',
      '32': '2.25rem',
      '36': '36px',
      '40': '40px',
      '48': '48px',
      '56': ["56px","64px"],
      '64': '64px',
      '72': '72px',
      '96': '96px',
      '120': '120px',
    },
    borderRadius: {
      'none': '0',
      "8" : "8px",
      "10" : "10px",
      "12" : "12px",
      "16" : "16px",
      "full":"100%",
    },
    screens:{
      'sm': '640px',
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
      "fhd":"1920px"
    }
    ,


    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
