const path = require('path');

module.exports = (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}