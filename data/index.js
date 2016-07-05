const fs = require("fs"),
    yaml = require("js-yaml");

function jsonify(file) {
    return yaml.safeLoad(fs.readFileSync(`${__dirname}/${file}`, "utf8"));
}

module.exports = {
    "panel_boxes": jsonify("panel_boxes.yml"),
    "timesheets": jsonify("timesheets.yml"),
    "messages": jsonify("messages.yml"),
    "sidebar": jsonify("sidebar.yml"),
    "navigation": jsonify("navigation.yml"),
    "notifications": jsonify("notifications.yml"),
    "timeline": jsonify("timeline.yml")
};
