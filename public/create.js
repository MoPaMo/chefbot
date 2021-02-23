let vm = new Vue({
  el: "#app",
  
  data: {
    colOne: ["hi", "you"],
    addtext: "",
    name:"New Recipe"
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
    remove:function(i){
        alert(i)
    }
  },
  watch:{
      name:function(){
          document.title=this.name+" | formulator | chefbot"
      }
  }
});
