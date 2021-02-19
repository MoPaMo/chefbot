Vue.config.ignoredElements = [/^sl-/];
let vm=new Vue({
  el:"#app",
  data: {
      name: 0,
      data:[
        "hi",
        "how are u",
        "i'm fine"
      ],
          enabled: true,

      dragging: false


  },
  methods: {

  }
})
