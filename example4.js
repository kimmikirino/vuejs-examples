new Vue({
  el: '#exercise',
  data: {
    classEffect: {
      highlight: false,
      shrink: true
    },
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      let _this = this;
      setInterval(() => {
        _this.classEffect.highlight = !_this.classEffect.highlight;
        _this.classEffect.shrink = !_this.classEffect.shrink;
      }, 1000)
    },
    startProgress: function () {
      var _this = this;
      var width = 0;

      setInterval(function () {
        width = width + 10;
        _this.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
