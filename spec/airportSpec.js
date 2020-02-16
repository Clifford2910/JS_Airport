describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport(20);
    plane = new Plane();
  });

  describe('Staring values', function() {
    it('has no planes by default', function() {
      expect(airport.planes).toEqual([]);
    });

    it('knows its capacity', function() {
      expect(airport.capacity).toEqual(20);
    });
  });

  describe('Land', function() {
    it('instructs a plane to land', function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      expect(airport.land(plane)).toEqual(plane);
    });
  });

  describe('takeOff', function() {
    it('instructs a plane to take off', function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      expect(airport.takeOff(plane)).toEqual(plane);
    });
  });

  describe("isStormy", function() {
    it("makes the weather stormy", function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(airport.isStormy()).toEqual(true);
    });

    it("makes the weather not stormy", function(){
      spyOn(airport, 'isStormy').and.returnValue(false);
      expect(airport.isStormy()).toEqual(false);
    });

    it('raises an error when asked to land a plane when stormy', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() {airport.land(plane)}).toThrowError("cannot land the plane: weather is stormy!");
    })

    it('raises an error when asked to take off when stormy', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() {airport.takeOff(plane)}).toThrowError("cannot take off: weather is stormy!");
    })
  });

  describe('Capacity', function() {
    it('will not let a plane land when at capacity', function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      for (var i = 0; i < 20; i++) {
        airport.land(plane)
      }
      expect(function() {airport.land(plane)}).toThrowError("cannot land the plane: airport at capacity!");
    });

    it('overwrite defaultCapacity', function() {
      expect(airport.capacity = 30).toEqual(30);
    })
  });
});
