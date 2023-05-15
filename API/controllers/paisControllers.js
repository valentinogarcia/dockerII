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
var DegreeCalculations_1 = require("../utilities/Degrees/DegreeCalculations");
exports["default"] = {
    getPaises: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = _res.status(200)).send;
                    _c = DBFunctions_1.ConvertColectionToPais;
                    return [4 /*yield*/, DBFunctions_1.dbPromise];
                case 1: return [4 /*yield*/, _c.apply(void 0, [_d.sent()])];
                case 2:
                    _b.apply(_a, [_d.sent()]);
                    return [2 /*return*/];
            }
        });
    }); }),
    getPais: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var paises, _a, pais;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = DBFunctions_1.ConvertColectionToPais;
                    return [4 /*yield*/, DBFunctions_1.dbPromise];
                case 1:
                    paises = _a.apply(void 0, [_b.sent()]);
                    return [4 /*yield*/, paises];
                case 2:
                    pais = (_b.sent()).find(function (p) { return p.nombre === _req.params.pais; });
                    _res.status(200).send(pais);
                    return [2 /*return*/];
            }
        });
    }); }),
    addPais: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var newPais, existePais, r, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    console.log("no bitches");
                    newPais = _req.body;
                    console.log(newPais);
                    return [4 /*yield*/, ((_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOne({ nombre: newPais.nombre }))];
                case 1:
                    existePais = _c.sent();
                    console.log("wat");
                    if (existePais) {
                        return [2 /*return*/, _res.status(400).send("Ya existe (leto no podemos poner eso)")];
                    }
                    return [4 /*yield*/, ((_b = DBFunctions_1.collections.paises) === null || _b === void 0 ? void 0 : _b.insertOne(newPais))];
                case 2:
                    r = _c.sent();
                    r
                        ? _res.status(201).send("Se creo yei ".concat(r.insertedId))
                        : _res.status(500).send("Que haces? GAAAAA");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    _res.status(400).send("hola");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }),
    updatePais: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var pais;
        var _a;
        return __generator(this, function (_b) {
            try {
                pais = _req.body;
                console.log(pais);
                (_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, pais);
                return [2 /*return*/, _res.status(200).send("mando may guey")];
            }
            catch (error) {
                _res.status(400).send("el que dice error es puto");
            }
            return [2 /*return*/];
        });
    }); }),
    changePais: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var pais, paisOriginal, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    pais = _req.body;
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    paisOriginal = _b.sent();
                    if (pais.nombre) {
                        paisOriginal.nombre = pais.nombre;
                    }
                    if (pais.provincias) {
                        paisOriginal.provincias = pais.provincias;
                    }
                    (_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.findOneAndReplace({ nombre: _req.params.pais }, paisOriginal);
                    return [2 /*return*/, _res.status(200).send("mando may guey")];
                case 2:
                    error_2 = _b.sent();
                    _res.status(400).send("el que dice error es puto");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }),
    deletePais: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var r, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, ((_a = DBFunctions_1.collections.paises) === null || _a === void 0 ? void 0 : _a.deleteOne({ nombre: _req.body.nombre }))];
                case 1:
                    r = _b.sent();
                    if (r && r.deletedCount) {
                        _res.status(202).send("Se fue a cagar! yei ");
                    }
                    else if (!r) {
                        _res.status(400).send("No!!!");
                    }
                    else if (!r.deletedCount) {
                        _res.status(404).send(" no existe geniopfsjmerg");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    _res.status(400).send("error");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }),
    getTemperaturaGlobal: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var grados, promedio, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, DegreeCalculations_1.getDegrees)()];
                case 1:
                    grados = _a.sent();
                    console.log(grados);
                    return [4 /*yield*/, (0, DegreeCalculations_1.calcGlobalSUM)(grados)];
                case 2:
                    promedio = _a.sent();
                    console.log("promedio: " + promedio);
                    if (promedio) {
                        return [2 /*return*/, _res.json({ "promedio": promedio.valueOf() / grados.length })];
                    }
                    return [2 /*return*/, _res.sendStatus(400)];
                case 3:
                    error_4 = _a.sent();
                    _res.sendStatus(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }),
    getTemperaturaPais: (function (_req, _res) { return __awaiter(void 0, void 0, void 0, function () {
        var grados_1, x, promedio_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    if (!_req.params.pais) {
                        return [2 /*return*/, _res.status(400).send("te falto el pais capo")];
                    }
                    grados_1 = new Array();
                    return [4 /*yield*/, (0, DBFunctions_1.getPais)(_req.params.pais)];
                case 1:
                    x = _b.sent();
                    x.provincias.forEach(function (provincia) { provincia.ciudades.forEach(function (c) { c.registroDeTemperatura.forEach(function (regis) { grados_1.push(regis.grados); }); }); });
                    if (!x) {
                        return [2 /*return*/, _res.status(400).send("snickers?")];
                    }
                    promedio_1 = new Number;
                    grados_1.forEach(function (celsius) { if (!promedio_1) {
                        promedio_1 = celsius.valueOf();
                    }
                    else {
                        promedio_1 = promedio_1.valueOf() + celsius.valueOf();
                    } });
                    if (promedio_1) {
                        return [2 /*return*/, _res.json({ "promedio": promedio_1.valueOf() / grados_1.length })];
                    }
                    return [2 /*return*/, _res.sendStatus(400)];
                case 2:
                    _a = _b.sent();
                    _res.sendStatus(400);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })
};
