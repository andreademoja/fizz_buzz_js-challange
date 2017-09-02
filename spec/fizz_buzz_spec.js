describe("fizzBuzz", function() {

  it("should return 0", function() {
      expect(hasZeroReminder(3, 3)).toBe(true);
  });

  it("should return 'Fizz' fo number divisible by 3", function (){
      expect(fizzBuzz(96)).toBe("Fizz")
  })

});
