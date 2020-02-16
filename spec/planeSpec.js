describe('Plane', function() {

  beforeEach(function() {
    plane = new Plane();
  });

  describe('landed', function() {
    it('should show airborne flase when landed', function() {
      expect(plane.airborne).toEqual(false);
    });
  });

  describe('inFlight', function() {
    it('should show airborne true when in flight', function() {
      plane.inFlight()
      expect(plane.airborne).toEqual(true);
    });
  });

});
