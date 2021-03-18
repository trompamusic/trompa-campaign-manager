// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // use this function to check if running on mobile, using the profile variable results in inconsistencies
    isMobile: function(isMobile) {
      this.usePlaywrightTo('to check if device is mobile', async ({ context }) => {
        await context._parent._options.isMobile && isMobile();
      });
    },

  });
};
