/**
 * Module dependencies
 */

var Sails = require('sails').Sails;

describe('Acceptance tests', function () {

    var sails;

    beforeEach(function () {
        // Hook will timeout in 10 seconds
        this.timeout(10000);

        // Attempt to lift sails
        Sails().lift({
            hooks: {
                // Load the hook
                "version-configurator": require('../../'),
                // Skip grunt
                "grunt": false
            },
            log: {level: "info"}
        }, function (err, _sails) {
            if (err) return err;
            _sails.log.info("App version is now " + sails.config.version);
            return done();
        });
    });

    afterEach(function () {
        if (sails) {
            sails.lower();
        }
        //return done();
    });

    it('sails loads version-configurator hook and does not crash', function () {
        return true
    });

});
