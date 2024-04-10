const path = require('path');

module.exports = {
    // Konfigurasi lainnya...
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
};
