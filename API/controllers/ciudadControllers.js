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
    getCiudad: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var paises, _a, pais, provincia, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = DBFunctions_1.ConvertColectionToPais;
                    return [4 /*yield*/, DBFunctions_1.dbPromise];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_d.sent()])];
                case 2:
                    paises = _d.sent();
                    return [4 /*yield*/, (0, DBFunctions_1.findPais)(paises, _req.params.pais)];
                case 3:
                    pais = _d.sent();
                    if (!pais) {
                        return [2 /*return*/, _res.sendStatus(400)];
                    }
                    return [4 /*yield*/, (0, DBFunctions_1.findProvincia)(pais, _req.params.provincia)];
                case 4:
                    provincia = _d.sent();
                    if (!provincia) return [3 /*break*/, 6];
                    _c = (_b = _res.status(200)).send;
                    return [4 /*yield*/, (0, DBFunctions_1.findCiudad)(provincia, _req.params.ciudad)];
                case 5: return [2 /*return*/, _c.apply(_b, [_d.sent()])];
                case 6: return [2 /*return*/, _res.sendStatus(400)];
            }
        });
    }); }),
    addCiudad: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var ciudad, pais, provincia, respuesta;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ciudad = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (prov) { return prov.nombre === _req.params.provincia; });
                    provincia === null || provincia === void 0 ? void 0 : provincia.ciudades.push(ciudad);
                    return [4 /*yield*/, ((_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais))];
                case 2:
                    respuesta = _b.sent();
                    return [2 /*return*/, _res.status(200).send(respuesta)];
            }
        });
    }); }),
    updateCiudad: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var ciudad, pais, provincia, ciudadPos, respuesta;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ciudad = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (x) { return x.nombre === _req.params.provincia; });
                    if (!provincia) {
                        return [2 /*return*/, _res.status(400).send("no")];
                    }
                    ciudadPos = provincia.ciudades.indexOf((provincia.ciudades.find(function (x) { return x.nombre === _req.params.ciudad; })));
                    pais.provincias[pais.provincias.indexOf(provincia)].ciudades[ciudadPos] = ciudad;
                    return [4 /*yield*/, ((_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais))];
                case 2:
                    respuesta = _b.sent();
                    _res.status(200).send(respuesta);
                    return [2 /*return*/];
            }
        });
    }); }),
    changeCiudad: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var ciudad, pais, provincia, ciudadOriginal, ciudadPos, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ciudad = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (x) { return x.nombre === _req.params.provincia; });
                    ciudadOriginal = provincia.ciudades.find(function (x) { return x.nombre === _req.params.ciudad; });
                    ciudadPos = pais.provincias[pais.provincias.indexOf(provincia)].ciudades.indexOf(ciudadOriginal);
                    if (ciudad.nombre) {
                        ciudadOriginal.nombre = ciudad.nombre;
                    }
                    if (ciudad.registroDeTemperatura) {
                        ciudadOriginal.registroDeTemperatura = ciudad.registroDeTemperatura;
                    }
                    pais.provincias[pais.provincias.indexOf(provincia)].ciudades[ciudadPos] = ciudadOriginal;
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
    deleteCiudad: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var ciudad_1, pais, provincia, ciudadAux, ciudadPos, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ciudad_1 = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _b.sent();
                    provincia = pais.provincias.find(function (x) { return x.nombre === _req.params.provincia; });
                    ciudadAux = provincia === null || provincia === void 0 ? void 0 : provincia.ciudades.find(function (x) { return x.nombre === ciudad_1.nombre; });
                    ciudadPos = provincia === null || provincia === void 0 ? void 0 : provincia.ciudades.indexOf(ciudadAux);
                    pais.provincias[pais.provincias.indexOf(provincia)].ciudades.splice(ciudadPos, 1);
                    (_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais);
                    return [2 /*return*/, _res.status(200).send("mando may guey")];
                case 2:
                    error_2 = _b.sent();
                    _res.status(400).send("el que dice error es puto");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }),
    getTemperaturaProvincia: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var grados, pais, x, promedio;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_req.params.pais) {
                        return [2 /*return*/, _res.status(400).send("te falto el pais capo")];
                    }
                    if (!_req.params.provincia) {
                        return [2 /*return*/, _res.status(400).send("te falto provincia capo")];
                    }
                    grados = new Array();
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    pais = _a.sent();
                    if (!pais) {
                        return [2 /*return*/, _res.status(400).send("nope")];
                    }
                    x = pais.provincias.find(function (pa) { return pa.nombre === _req.params.provincia; });
                    if (!x) {
                        return [2 /*return*/, _res.status(400).send("snickers?")];
                    }
                    x.ciudades.forEach(function (city) { city.registroDeTemperatura.forEach(function (regs) { grados.push(regs.grados); }); });
                    promedio = new Number;
                    grados.forEach(function (celsius) { if (!promedio) {
                        promedio = celsius.valueOf();
                    }
                    else {
                        promedio = promedio.valueOf() + celsius.valueOf();
                    } });
                    if (promedio) {
                        return [2 /*return*/, _res.json({ "promedio": promedio.valueOf() / grados.length })];
                    }
                    return [2 /*return*/, _res.sendStatus(400)];
            }
        });
    }); })
};
