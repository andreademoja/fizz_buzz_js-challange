describe('fizzBuzz - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
        loadFixtures('index.html');
        $.holdReady(false);
      });
    })
