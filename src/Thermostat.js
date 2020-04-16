function Thermostat () {
  this.startTemperature = 20;
  this.temperature = this.startTemperature
  this.powerSaving = true
};

Thermostat.prototype.up = function() {
  if (this.powerSaving === true && this.temperature < 25) {
    this.temperature++;
  } else if (this.powerSaving === true && this.temperature === 25) {
    this.temperature = 25;
  } else if (this.temperature < 32) {
    this.temperature++;
  } else {
    this.temperature = 32;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature--;
  }
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving ? this.powerSaving = false:
  this.powerSaving = true
}