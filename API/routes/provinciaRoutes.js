"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.provinciasRoutes = void 0;
var provinciaControllers_1 = __importDefault(require("../controllers/provinciaControllers"));
var auth_1 = require("../utilities/DataBaseFunctions/auth");
function provinciasRoutes(app) {
    app.get('/paises/:pais/provincias/:provincia', provinciaControllers_1["default"].getProvincia);
    app.post('/paises/:pais/provincias', auth_1.auth, provinciaControllers_1["default"].addProvincia);
    app.put('/paises/:pais/provincias/:provincia', auth_1.auth, provinciaControllers_1["default"].updateProvincia);
    app.patch('/paises/:pais/provincias/:provincia', auth_1.auth, provinciaControllers_1["default"].changeProvincia);
    app["delete"]('/paises/provincias', auth_1.auth, provinciaControllers_1["default"].deleteProvincia);
    app.get('/temperaturaPromedio/paises/:pais/provincias/:provincia', provinciaControllers_1["default"].getTemperaturaProvincia);
}
exports.provinciasRoutes = provinciasRoutes;
