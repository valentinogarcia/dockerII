"use strict";
exports.__esModule = true;
exports.Pais = void 0;
var Pais = /** @class */ (function () {
    function Pais(inNombre, inProvincias) {
        this.nombre = inNombre;
        this.provincias = inProvincias || new Array();
    }
    Pais.prototype.getProvincia = function (nombre) {
        return this.provincias.find(function (provincia) { return provincia.nombre.toLowerCase() === nombre.toLowerCase(); });
    };
    return Pais;
}());
exports.Pais = Pais;
