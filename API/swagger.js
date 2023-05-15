"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'API Documentation',
            version: "1.0.0"
        },
        components: { securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            { bearerAuth: [] },
        ]
    },
    apis: ['./index.ts']
};
var swaggerSpec = (0, swagger_jsdoc_1["default"])(options);
function swaggerDocs(app, port) {
    app.use('/docs', swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swaggerSpec));
    app.get("docs.json", function (_req, _res) {
        _res.setHeader("Content-Type", "application/json");
    });
}
exports["default"] = swaggerDocs;
