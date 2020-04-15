describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starting temperature', function() {
    it('returns starting temperature of 20 degrees', function() {
      //thermostat = new Thermostat;
      expect(thermostat.startTemperature).toEqual(20)
    }); 
  });
});