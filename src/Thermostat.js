function Thermostat () {
  this.startTemperature = 20;
  this.temperature = this.startTemperature
}

Thermostat.prototype.up = function() {
  this.temperature++;
}