"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginToken = exports.login = exports.confirm = exports.insertUser = exports.conectUserDataBase = exports.hashearWSaltEspecifico = exports.hashear = exports.usuarios = void 0;
var DBFunctions_1 = require("./DBFunctions");
var sha512_crypt_ts_1 = require("sha512-crypt-ts");
var user_1 = require("../../models/user");
var mongoDB = __importStar(require("mongodb"));
var jwt = __importStar(require("jsonwebtoken"));
exports.usuarios = {};
var COLLECTION_NAME = "Users";
function hashear(psswrd) {
    var salt = Date.now() + "" + Date.now();
    salt = salt.slice(0, salt.length - 10);
    var hash = sha512_crypt_ts_1.sha512.crypt(psswrd, salt);
    console.log(hash);
    var shalt = { "hash": hash, "salt": salt };
    return shalt;
}
exports.hashear = hashear;
function hashearWSaltEspecifico(psswrd, salt) {
    var hash = sha512_crypt_ts_1.sha512.crypt(psswrd, salt);
    console.log(hash);
    var shalt = { "hash": hash, "salt": salt };
    return shalt;
}
exports.hashearWSaltEspecifico = hashearWSaltEspecifico;
function conectUserDataBase() {
    return __awaiter(this, void 0, void 0, function () {
        var client, db, usersCollection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new mongoDB.MongoClient(DBFunctions_1.DB_CONN_STRING);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    db = client.db(DBFunctions_1.DB_NAME);
                    usersCollection = db.collection(COLLECTION_NAME);
                    exports.usuarios.Users = usersCollection;
                    console.log("Successfully connected to database: ".concat(db.databaseName, " and collection: ").concat(usersCollection.collectionName));
                    return [2 /*return*/, db];
            }
        });
    });
}
exports.conectUserDataBase = conectUserDataBase;
function insertUser(name, psswrd) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var packet, hash, salt, existeUser, newUser;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    packet = hashear(psswrd);
                    hash = packet.hash;
                    salt = packet.salt;
                    return [4 /*yield*/, ((_a = exports.usuarios.Users) === null || _a === void 0 ? void 0 : _a.findOne({ nombre: name }))];
                case 1:
                    existeUser = _c.sent();
                    console.log(existeUser);
                    if (existeUser) {
                        return [2 /*return*/, false];
                    }
                    newUser = new user_1.user(name, hash, salt);
                    return [4 /*yield*/, ((_b = exports.usuarios.Users) === null || _b === void 0 ? void 0 : _b.insertOne(newUser))];
                case 2: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.insertUser = insertUser;
function confirm(name, db) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ((_a = exports.usuarios.Users) === null || _a === void 0 ? void 0 : _a.findOne({ nombre: name }))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.confirm = confirm;
/*
pruebaDeInsert()*/
function pruebaDeInsert() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, conectUserDataBase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, insertUser("ValentinoGarcia", "nigger")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function compareHash(hash, DocUsuario) {
    return __awaiter(this, void 0, void 0, function () {
        var usuario;
        return __generator(this, function (_a) {
            usuario = new user_1.user(DocUsuario.nombre, DocUsuario.hash, DocUsuario.salt);
            console.log(usuario.hash);
            console.log(hash);
            if (hash == usuario.hash) {
                return [2 /*return*/, usuario];
            }
            return [2 /*return*/, false];
        });
    });
}
function login(name, psswrd, db) {
    return __awaiter(this, void 0, void 0, function () {
        var DocUsuario, salt, hash, foundUser, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, confirm(name, db)];
                case 1:
                    DocUsuario = _a.sent();
                    if (!DocUsuario) {
                        console.log("no existe el usuario");
                        return [2 /*return*/, false];
                    }
                    salt = DocUsuario.salt;
                    console.log(salt);
                    hash = hashearWSaltEspecifico(psswrd, salt);
                    console.log(hash);
                    return [4 /*yield*/, compareHash(hash.hash, DocUsuario)];
                case 2:
                    foundUser = _a.sent();
                    if (foundUser) {
                        token = jwt.sign({ name: foundUser.nombre, hash: hash }, "cambiarPorUnaVariable", {
                            expiresIn: '2 days'
                        });
                        return [2 /*return*/, { "Auth": { token: token } }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function pruebaLogin() {
    return __awaiter(this, void 0, void 0, function () {
        var borrardsp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, conectUserDataBase()];
                case 1:
                    borrardsp = _a.sent();
                    login("ValentinoGarcia", "nigger", borrardsp);
                    return [2 /*return*/];
            }
        });
    });
}
function loginToken(token, db) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, jwt.verify(token, "cambiarPorUnaVariable")
                //    if(typeof(pack)!="string"){console.log("pack: "+ pack.payload);}
                //return pack
                //if(foundUser){return true}else{return false}
            ];
        });
    });
}
exports.loginToken = loginToken;
/*
pruebaLogin()*/ 
