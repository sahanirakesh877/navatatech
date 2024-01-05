/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
//       colors: {
//         primary: '#1A5D1A',  
// secondary:'#DF2E38', 
// third:'#072541',
// texcol:"white"

//       }

colors: {
  primary: '#A01F62',
  sec: '#FBB016',
  third:"#EE7214"
},
    },
  },
  plugins: [],
}
