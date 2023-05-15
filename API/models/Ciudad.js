"use strict";
exports.__esModule = true;
exports.Ciudad = void 0;
var Ciudad = /** @class */ (function () {
    function Ciudad(InNombre, InRegistroDeTemperatura) {
        this.nombre = InNombre || "";
        this.registroDeTemperatura = InRegistroDeTemperatura || new Array();
    }
    return Ciudad;
}());
exports.Ciudad = Ciudad;
