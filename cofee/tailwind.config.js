/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
primary: "#f19509",
primaryDark:"#e86f00",
lightOrange:"#f1dabf",
lightGray:"272c35",
darkGray:"#1a1f25",

                        },
    container:{
center:true,
padding:{
DEFAULT:"1rem",
sm:"2rem",
}

    }
    
    
                      },
  },
  plugins: [],
};
