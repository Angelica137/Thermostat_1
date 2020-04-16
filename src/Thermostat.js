
function Thermostat () {
  this.startTemperature = 20
  this.temperature = this.startTemperature;
  this.powerSaving = true;
  this.usage = 'medium-usage'
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
  this.temperature = this.startTemperature;
  this.powerSaving = true;
}

Thermostat.prototype.getUsage = function () {
  if (this.temperature < 18) {
    this.usage = 'low-usage';
  } else if (this.temperature > 25) {
    this.usage = 'high-usage';
  }
}