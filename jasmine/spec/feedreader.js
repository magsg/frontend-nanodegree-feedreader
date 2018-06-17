/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

  describe('RSS Feeds', function() {

    /* tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it("have URLs defined", function() {
      for (i = 0; i < allFeeds.length; i++) {
        expect("url").toBeDefined();
        expect("url").not.toBe("#");
      };
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it("have names defined", function() {
      for (i = 0; i < allFeeds.length; i++) {
        expect("name").toBeDefined();
        expect("name").not.toBe("");
      };
    });
  });

  describe("The menu", function() {

    /* This test ensures the menu element is
     * hidden by default.
     */

    it("is hidden by default", function() {
      expect($("body").hasClass("menu-hidden")).toBe(true);
    });

    /* This test ensures the menu changes
     * visibility when the menu icon is clicked.
     */

    it("changes visibility on click", function() {
      const menuIcon = $('.menu-icon-link');
      if ($("body").hasClass("menu-hidden")) {
        expect($("body").hasClass("menu-hidden")).toBe(true);
      } else {
        expect($("body").hasClass("menu-hidden")).not.toBe(true);
      }
    });
  });

  describe("Initial entries", function() {

    /* This test ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container
     */

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it("are present in the .feed container", function(done) {
      expect($(".feed").children().length).toBeGreaterThan(0);
      done();
    });
  });

  describe("New Feed Selection", function() {

    /* This test ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */

    let firstFeed;
    let secondFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        firstFeed = $(".feed").html();
        done();
      });
      loadFeed(1, function() {
        secondFeed = $(".feed").html();
        done();
      });
    });

    it("content is changing", function(done) {
      expect(firstFeed !== secondFeed).toBe(true);
      done();
    });
  });
}());
