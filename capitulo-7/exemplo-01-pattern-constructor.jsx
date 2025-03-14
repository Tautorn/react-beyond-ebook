function Hero(name, power, color) {
  this.name = name;
  this.power = power;
  this.color = color;

  return {
    info:  () => `Hello my friend, my name is ${this.name}, my costume color is ${this.color} and my super power is ${this.power}`
  };
}