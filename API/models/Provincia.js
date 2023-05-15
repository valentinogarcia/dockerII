"use strict";
exports.__esModule = true;
exports.Provincia = void 0;
var Provincia = /** @class */ (function () {
    function Provincia(inNombre, inCiudades) {
        this.nombre = inNombre;
        this.ciudades = inCiudades || new Array();
    }
    return Provincia;
}());
exports.Provincia = Provincia;
