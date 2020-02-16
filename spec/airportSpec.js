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
      expect(airport.land(plane)).toEqual(plane);
    });
  });

  describe('takeOff', function() {
    it('instructs a plane to take off', function() {
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
  });

  describe('Capacity', function() {
    it('will not let a plane land when at capacity', function() {
      for (var i = 0; i < 20; i++) {
        airport.land(plane)
      }
      expect(function() {airport.land(plane)}).toThrowError("cannot land plane: airport is full");
    });
  });
});
