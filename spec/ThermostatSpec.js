describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starting temperature', function() {
    it('starts thermostat with temperature of 20 degrees', function() {
      expect(thermostat.startTemperature).toEqual(20)
    }); 
  });

  describe('.up', function() {
    it('when .powerSaving is on does not increase temperature above 25', function() {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.temperature).toBe(25);
    });
    it('when .powerSaving is off does not increase temperature above 32', function() {
      thermostat.powerSavingSwitch();
      thermostat.temperature = 32;
      thermostat.up();
      expect(thermostat.temperature).toBe(32);
    });

  });

  describe('.down', function() {
    it('decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(thermostat.startTemperature - 1);
    });
    it('will not decrease the temperature below 10 degrees', function() {
      thermostat.temperature = 10;
      thermostat.down();
      expect(thermostat.temperature).toBe(10)
    });
  });

  describe('.powerSaving', function() {
    it('Switches the power saving mode off when it is on', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toBe(false);
    });
  });

});

