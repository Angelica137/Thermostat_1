const startTemp = 20
function Thermostat (startTemperature = startTemp) {
  this.temperature = startTemperature;
  this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  if (this.powerSaving && (this.temperature < 25)) {
    return this.temperature++;
  } else if (!this.powerSaving && this.temperature < 32) {
    return this.temperature++;
  }
}

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature--;
  }
}

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving ? this.powerSaving = false:
  this.powerSaving = true
}

Thermostat.prototype.reset = function () {
  this.temperature = startTemp;
  console.log(1)
}