"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.paisRoutes = void 0;
var paisControllers_1 = __importDefault(require("../controllers/paisControllers"));
var auth_1 = require("../utilities/DataBaseFunctions/auth");
//export const paisesRouter = express()
function paisRoutes(app) {
    app.get('/paises', paisControllers_1["default"].getPaises);
    app.get('/paises/:pais', paisControllers_1["default"].getPais);
    app.post('/paises', auth_1.auth, paisControllers_1["default"].addPais);
    app.put('/paises/:pais', auth_1.auth, paisControllers_1["default"].updatePais);
    app.patch('/paises/:pais', auth_1.auth, paisControllers_1["default"].changePais);
    app["delete"]('/paises', auth_1.auth, paisControllers_1["default"].deletePais);
    app.get('/temperaturaPromedio/paises', paisControllers_1["default"].getTemperaturaGlobal);
    app.get('/temperaturaPromedio/paises/:pais', paisControllers_1["default"].getTemperaturaPais);
}
exports.paisRoutes = paisRoutes;
