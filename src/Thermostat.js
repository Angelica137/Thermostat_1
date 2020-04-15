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
  } else {
    this.temperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature--;
  } else {
    this.temperature = 10;
  }
};

Thermostat.prototype.powerSavingSwitch = function() {
  if (this.powerSaving === true) {
    this.powerSaving = false;
  } else {
    true
  }
}