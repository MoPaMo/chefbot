module.exports = {
  purge: ["./create.js", "../views/create.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
	backgroundColor:['odd']
},
  },
  plugins: [],
}
