"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var DBFunctions_1 = require("../utilities/DataBaseFunctions/DBFunctions");
exports["default"] = {
    addTiempo: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var tiempo, pais, provincia, ciudad, provPos, ciudadPos;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tiempo = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (prov) { return prov.nombre === _req.params.provincia; });
                    ciudad = provincia === null || provincia === void 0 ? void 0 : provincia.ciudades.find(function (c) { return c.nombre === _req.params.ciudad; });
                    if (!ciudad || !provincia) {
                        return [2 /*return*/, _res.status(400).send(null)];
                    }
                    provPos = pais.provincias.indexOf(provincia);
                    ciudadPos = provincia.ciudades.indexOf(ciudad);
                    if (!ciudad.registroDeTemperatura) {
                        return [2 /*return*/, _res.sendStatus(400)];
                    }
                    pais.provincias[provPos].ciudades[ciudadPos].registroDeTemperatura.push(tiempo);
                    (_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: pais.nombre }, pais);
                    _res.send(pais);
                    return [2 /*return*/];
            }
        });
    }); }),
    updateTiempo: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var tiempo, pais, provincia, ciudad, tiempoAux, tiempoPos, respuesta;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tiempo = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (x) { return x.nombre === _req.params.provincia; });
                    ciudad = provincia === null || provincia === void 0 ? void 0 : provincia.ciudades.find(function (x) { return x.nombre === _req.params.ciudad; });
                    if (!ciudad || ciudad === undefined) {
                        return [2 /*return*/, _res.sendStatus(400)];
                    }
                    tiempoAux = ciudad === null || ciudad === void 0 ? void 0 : ciudad.registroDeTemperatura.find(function (x) { return String(x.fecha) === _req.params.tiempo; });
                    tiempoPos = ciudad === null || ciudad === void 0 ? void 0 : ciudad.registroDeTemperatura.indexOf(tiempoAux);
                    pais.provincias[pais.provincias.indexOf(provincia)].ciudades[provincia.ciudades.indexOf(ciudad)].registroDeTemperatura[tiempoPos] = tiempo;
                    return [4 /*yield*/, ((_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais))];
                case 2:
                    respuesta = _b.sent();
                    _res.status(200).send(respuesta);
                    return [2 /*return*/];
            }
        });
    }); }),
    changeTiempo: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var tiempo, pais, provincia, ciudad, tiempoOriginal, tiempoPos, ciudadPos, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    tiempo = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (x) { return x.nombre === _req.params.provincia; });
                    ciudad = provincia.ciudades.find(function (x) { return x.nombre === _req.params.ciudad; });
                    tiempoOriginal = ciudad.registroDeTemperatura.find(function (x) { return String(x.fecha) === _req.params.fecha; });
                    tiempoPos = pais.provincias[pais.provincias.indexOf(provincia)].ciudades[provincia.ciudades.indexOf(ciudad)].registroDeTemperatura.indexOf(tiempoOriginal);
                    ciudadPos = pais.provincias[pais.provincias.indexOf(provincia)].ciudades.indexOf(ciudad);
                    if (tiempo.fecha) {
                        tiempoOriginal.fecha = tiempo.fecha;
                    }
                    if (tiempo.grados) {
                        tiempoOriginal.grados = tiempo.grados;
                    }
                    pais.provincias[pais.provincias.indexOf(provincia)].ciudades[ciudadPos].registroDeTemperatura[tiempoPos] = tiempoOriginal;
                    (_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais);
                    return [2 /*return*/, _res.status(200).send("mando may guey")];
                case 2:
                    error_1 = _b.sent();
                    _res.status(400).send("el que dice error es puto");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }),
    deleteTiempo: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var tiempo_1, pais, provincia, ciudad, tiempoAux, tiempoPos, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    tiempo_1 = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (x) { return x.nombre === _req.params.provincia; });
                    ciudad = provincia === null || provincia === void 0 ? void 0 : provincia.ciudades.find(function (x) { return x.nombre === _req.params.ciudad; });
                    tiempoAux = ciudad === null || ciudad === void 0 ? void 0 : ciudad.registroDeTemperatura.find(function (x) { return x.fecha === tiempo_1.fecha; });
                    tiempoPos = ciudad === null || ciudad === void 0 ? void 0 : ciudad.registroDeTemperatura.indexOf(tiempoAux);
                    pais.provincias[pais.provincias.indexOf(provincia)].ciudades[provincia.ciudades.indexOf(ciudad)].registroDeTemperatura.splice(tiempoPos, 1);
                    (_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais);
                    return [2 /*return*/, _res.status(200).send("mando may guey")];
                case 2:
                    error_2 = _b.sent();
                    _res.status(400).send("el que dice error es puto");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })
};
