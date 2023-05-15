"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ciudadesRoutes = void 0;
var ciudadControllers_1 = __importDefault(require("../controllers/ciudadControllers"));
var auth_1 = require("../utilities/DataBaseFunctions/auth");
function ciudadesRoutes(app) {
    app.get('/paises/:pais/provincias/:provincia/ciudades/:ciudad', ciudadControllers_1["default"].getCiudad);
    app.post('/paises/:pais/provincias/:provincia/ciudades', auth_1.auth, ciudadControllers_1["default"].addCiudad);
    app.put('/paises/:pais/provincias/:provincia/ciudades/:ciudad', auth_1.auth, ciudadControllers_1["default"].updateCiudad);
    app.patch('/paises/:pais/provincias/:provincia/ciudades/:ciudad', auth_1.auth, ciudadControllers_1["default"].changeCiudad);
    app["delete"]('/paises/:pais/provincias/:provincia/ciudades', auth_1.auth, ciudadControllers_1["default"].deleteCiudad);
    app.get('/temperaturaPromedio/paises/:pais/provincias/:provincia', ciudadControllers_1["default"].getTemperaturaProvincia);
}
exports.ciudadesRoutes = ciudadesRoutes;
