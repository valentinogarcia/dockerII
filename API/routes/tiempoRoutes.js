"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.tiemposRoutes = void 0;
var tiempoControllers_1 = __importDefault(require("../controllers/tiempoControllers"));
var auth_1 = require("../utilities/DataBaseFunctions/auth");
function tiemposRoutes(app) {
    app.post('/paises/:pais/provincias/:provincia/ciudades/:ciudad/tiempo', auth_1.auth, tiempoControllers_1["default"].addTiempo);
    app.put('/paises/:pais/provincias/:provincia/ciudades/:ciudad/tiempo/:tiempo', auth_1.auth, tiempoControllers_1["default"].updateTiempo);
    app.patch('/paises/:pais/provincias/:provincia/ciudades/:ciudad/tiempo/:tiempo', auth_1.auth, tiempoControllers_1["default"].changeTiempo);
    app["delete"]('/paises/:pais/provincias/:provincia/ciudades/:ciudad/tiempo', auth_1.auth, tiempoControllers_1["default"].deleteTiempo);
}
exports.tiemposRoutes = tiemposRoutes;
