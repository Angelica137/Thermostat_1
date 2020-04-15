function Thermostat () {
  this.startTemperature = 20;
  this.temperature = this.startTemperature
};

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature--;
  } else {
    this.temperature = 10;
  }
};