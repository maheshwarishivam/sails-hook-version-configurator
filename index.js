module.exports = function (sails) {

    return {

        /**
         * Default configuration
         *
         * We do this in a function since the configuration key for
         * the hook is itself configurable, so we can't just return
         * an object.
         */
        defaults: {
            version: '0.0.0'
        },

        /**
         * Initialize the hook
         * @param  {Function} done Callback for when we're done initializing
         */
        initialize: function (done) {
            const {version: appVersion} = require(sails.config.appPath + '/package');
            sails.config.version = appVersion;
            sails.log.verbose("App is now at version " + sails.config.version);
            return done();
        }

    };
};
