describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('Staring values', function() {
    it('has no planes by default', function() {
      expect(airport.planes).toEqual([]);
    });

    it('knows its capacity', function() {
      expect(airport.capacity).toEqual(2);
    });
  });

  describe('Land', function() {
    it('instructs a plane to land', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });

  describe('takeOff', function() {
    it('instructs a plane to take off', function() {
      expect(airport.takeOff(plane)).toEqual(plane);
    });
  });

  describe('Capacity', function() {
    it('will not let a plane land when at capacity', function() {
      for (var i = 0; i < 3; i++) {
        airport.land(plane)
      }
      expect(airport.planes).toEqual([plane, plane]);
    });
  });
});
