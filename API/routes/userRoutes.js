"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UserRoutes = void 0;
var userControllers_1 = __importDefault(require("../controllers/userControllers"));
function UserRoutes(app) {
    app.post('/register', userControllers_1["default"].userRegister);
    app.post('/login', userControllers_1["default"].userLogin);
}
exports.UserRoutes = UserRoutes;
