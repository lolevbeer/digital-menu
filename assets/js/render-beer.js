new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    beers: []
  },
  methods: {
    loadData: function () {
      fetch('https://lolev.beer/menu.json')
        .then(response =>
          response.json()
        )
        .then(data =>
          this.beers = data
        );
    },
    changeColors: function () {
      let items = document.querySelectorAll('article');
      for (let i = 0; i < items.length; i++) {
        items[i].style.color = randomColor({ luminosity: "light" });
      }
    }
  },
  mounted: function () {
    this.loadData();
    setInterval(function () {
      this.changeColors();
    }.bind(this), 5000);
  }
});
