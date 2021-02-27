Vue.component("delete", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: "",
});
let vm = new Vue({
  el: "#app",

  data: {
    loadfinish: false,
    colOne: [],
    addtext: "",
    name: "New Recipe",
    list:[],
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
