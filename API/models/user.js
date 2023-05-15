"use strict";
exports.__esModule = true;
exports.user = void 0;
var user = /** @class */ (function () {
    function user(InNombre, InHash, salt) {
        this.nombre = InNombre;
        this.hash = InHash;
        this.salt = salt;
    }
    return user;
}());
exports.user = user;
