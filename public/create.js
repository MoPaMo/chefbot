Vue.component("delete", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: "",
});
Vue.component("move", {
  template:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="width:0.9rem"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"/></svg>`
  ,
});
let vm = new Vue({
  el: "#app",

  data: {
    loadfinish: false,
    colOne: [],
    addtext: "",
    name: "New Recipe",
    list:[],
    listin:""
  },
  methods: {
    onClick: function () {
      alert();
    },
    write: function () {
      if (this.addtext.trim() != "") {
        this.colOne.push(this.addtext);
        this.addtext = "";
      }
    },
    remove: function (i) {
      alert(i);
    },
    finish: function () {},
  },
  watch: {
    name: function () {
      document.title = this.name + " | formulator | chefbot";
    },
  },
  mounted: function () {
    this.loadfinish = true;
  },
});
