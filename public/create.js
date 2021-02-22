let vm = new Vue({
  el: "#wrapper",
  data: {
    colOne: ["hi", "you"],
    addtext: "",
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
  },
});
