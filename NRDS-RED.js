module.exports = function(RED) {
    "use strict";
    function NRDS_RED(n) {
        RED.nodes.createNode(this,n);
        var node = this;

        this.on("input", function(msg) {
            //msg.payload = {}
            msg.uiPort = RED.settings.uiPort
            msg.httpAdminRoot = RED.settings.httpAdminRoot
            node.send(msg)
        });
    }
    RED.nodes.registerType("NRDS_RED",NRDS_RED);
}
