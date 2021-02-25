let vm = new Vue({
  el: "#app",
  
  data: {
    colOne: [],
    addtext: "",
    name:"New Recipe",
    list:""
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
    },
    finish:function(){

    }
  },
  watch:{
      name:function(){
          document.title=this.name+" | formulator | chefbot"
      }
  }
});
