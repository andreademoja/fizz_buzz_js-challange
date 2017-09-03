describe('fizzBuzz - index.html', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
      loadFixtures('index.html');
      $.holdReady(false);
    });

    it ("will display fizz if a number is divisible by 3", function() {
      $('#number').val(3);
      $('#calculate').trigger('click');
      expect($('#display_message').text()).toBe('Fizz');
    });

    /**
    it("will display buzz if number is divisible by 5", function() {
      $('#number').val(5);
      $('#calculate').trigger('click');
      expect($('#display_message').text()).toBe('buzz');
    });

    it("will display fizz buzz if number is divisible by 15", function() {
        $('#number').val(15);
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('fizz buzz');
    });

    it("will display an error message if input isn't correct", function() {
        $('#number').val('n');
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('You need to write a number')
    });**/

});
