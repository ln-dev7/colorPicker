new Vue({
  el: "#app",
  data: {
    green: 0,
    blue: 0,
    red: 0,
    squares: [],
    selectedSquare: ''
  },
  methods: {
    resetColor() {
      this.red = 0;
      this.blue = 0;
      this.green = 0;
    },
    saveSquare() {
      this.squares.push(`rgb(${this.red}, ${this.green}, ${this.blue})`);
      this.resetColor();
    },
    reset() {
      this.squares = [];
      this.resetColor();
    },
  },
  computed: {
    nbrOfSquare() {
      return this.squares.length;
    },
  },
});
