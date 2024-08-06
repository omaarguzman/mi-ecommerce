import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { withMT } from '@material-tailwind/react/utils/withMT'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mi-ecommerce',
  plugins: [react()],
})

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });