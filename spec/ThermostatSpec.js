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
    it('increases the temperature by 1 degree', function() {
      thermostat.temperature = 40;
      thermostat.up();
      expect(thermostat.temperature).toBe(41);
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
});

