const fs = require("fs"),
    yaml = require("js-yaml");

function jsonify(file) {
    return yaml.safeLoad(fs.readFileSync(`${__dirname}/${file}`, "utf8"));
}

module.exports = {
    "sidebar": jsonify("sidebar.yml"),
    "navigation": jsonify("navigation.yml"),
    "todos": jsonify("todos.yml")
};
