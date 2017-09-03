describe("fizzBuzz", function() {

  it("should return 0", function() {
    expect(hasZeroReminder(3, 3)).toBe(true);
  });

  it("should return 'Fizz' fo number divisible by 3", function (){
    expect(fizzBuzz(96)).toBe("Fizz")
  })

  it("should return 'Buzz' for number divisible by 5", function(){
    expect(fizzBuzz(5)).toBe("Buzz")
  })

  it("should return 'FizzBuzz' if number is divisible by 3 and 5", function(){
    expect(fizzBuzz(15)).toBe("FizzBuzz")
  })

  it ("should return an error if user does not put an Integer", function(){
    expect(fizzBuzz("strings")).toEqual("Enter an integer")
  })
});
