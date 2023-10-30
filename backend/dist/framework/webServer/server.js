"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const serverConfig = (server) => {
    const startServer = () => {
        const port = parseInt(config_1.configKey.PORT, 10);
        server.listen(port, "0.0.0.0", () => {
            console.log(`Server started on http://localhost:${config_1.configKey.PORT}`);
        });
    };
    return startServer();
};
exports.default = serverConfig;
