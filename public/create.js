Vue.component("plus", {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle cursor-pointer center-float stroke-current"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
});
Vue.component("edit", {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit  cursor-pointer"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
});
Vue.component("move", {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" class="bi bi-arrows-expand  cursor-move" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"/>
</svg>`,
});
Vue.component("trash", {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash cursor-pointer"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
});
let vm = new Vue({
  el: "#app",

  data: {
    loadfinish: false,
    colOne: [],
    addtext: "",
    name: "New Recipe",
    list: [],
    listin: "",
    sending: false,
    author: "",
  },
  methods: {
    write: function () {
      if (this.addtext.trim() != "") {
        this.colOne.push({ text: this.addtext });
        this.addtext = "";
      }
    },
    ingwrite: function () {
      if (this.listin.trim()) {
        this.list.push(this.listin);
        this.listin = "";
      }
    },
    send: function () {
      if (this.name && this.colOne.length && this.author) {
        console.log("1");
        this.sending = true;
        axios
          .post("/api/create", {
            name: this.name,
            author: this.author,
            steps: this.colOne,
            ingr: this.list,
          })
          .then(function (response) {
            console.log("2");
            open(response.data.url, "_SELF");
          })
          .catch(function (error) {
            console.log("3");

            alert(
              "An error ocurred while uploading your data, please try again \n (" +
                error +
                ")"
            );
            this.sending = false;
          });
      } else {
        alert("PLEASE FILL ALL FIELDS");
      }
    },
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
