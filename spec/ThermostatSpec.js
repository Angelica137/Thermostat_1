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
      expect(thermostat.temperature).toBe(19);
    });
    it('will not decrease the temperature below 10 degrees', function() {
      thermostat.temperature = 10;
      thermostat.down();
      expect(thermostat.temperature).toBe(10);
    });
  });

  describe('.powerSaving', function() {
    it('Switches the power saving mode off when it is on', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toBe(false);
    });
  });

  describe('.reset', function() {
    it('Resets the temperature back to 20', function() {
      thermostat.temperature = 10;
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });

    it('Sets the pawer saving mode on', function() {
      thermostat.powerSaving = false;
      thermostat.reset();
      expect(thermostat.powerSaving).toBe(true);
    });
  });

  describe('.getUsage', function() {
    //asuming temeprature is returned in intergers
    it('displays low-usage if temperature is under 18', function() {
      thermostat.temperature = 17;
      thermostat.getUsage();
      expect(thermostat.usage).toBe('low-usage');
    });
    it('displays medium-usage if temperature bwtween under 18 and 25 inclusive', function() {
      thermostat.temperature = 18;
      thermostat.getUsage();
      expect(thermostat.usage).toBe('medium-usage');
    });
    it('displays high-usage if temeprature is greater than 25', function() {
      thermostat.temperature = 32;
      thermostat.getUsage();
      expect(thermostat.usage).toBe('high-usage');
    })
  });

});

