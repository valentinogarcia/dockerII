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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var swagger_1 = __importDefault(require("./swagger"));
var paisRoutes_1 = require("./routes/paisRoutes");
var provinciaRoutes_1 = require("./routes/provinciaRoutes");
var ciudadRoutes_1 = require("./routes/ciudadRoutes");
var tiempoRoutes_1 = require("./routes/tiempoRoutes");
var userRoutes_1 = require("./routes/userRoutes");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var port = 3000;
(0, paisRoutes_1.paisRoutes)(app);
(0, provinciaRoutes_1.provinciasRoutes)(app);
(0, ciudadRoutes_1.ciudadesRoutes)(app);
(0, tiempoRoutes_1.tiemposRoutes)(app);
(0, userRoutes_1.UserRoutes)(app);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            app.get('/', function (_req, _res) { return _res.send('Bienvenido a mi API REST!'); });
            app.listen(port, function () {
                console.log("Escuchando en el puerto ".concat(port, "!"));
                (0, swagger_1["default"])(app, port);
            });
            return [2 /*return*/];
        });
    });
}
main();
/*

npm init
npm install typescript --save --dev
// npm install ts-node --save --dev
npm install nodemon --save --dev
npm install express
npm install @types/express
npm tsc --init

npm install mongodb
npm install ts-node
npm install swagger-ui-express
npm install swagger-jsdoc

npm install jsonwebtoken bcryptjs express-jwt @types/express-jwt @types/jsonwebtoken @types/bcryptjs

npx nodemon index.ts

*/
/**
* @openapi
* paths:
*   /paises/{pais}:
*     patch:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*       tags:
*         - patch
*       summary: Reemplaza los datos del pais por los valores que no sean undefined o false del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Pais'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Pais'
*/
/**
 * @openapi
 * components:
 *  schemas:
 *    Ciudad:
 *      type: object
 *      required:
 *        -nombre
 *        -registroDeTemperatura
 *      properties:
 *        nombre:
 *          type: string
 *          default:  tiananmensquare
 *        registroDeTemperatura:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Tiempo'
 *    Tiempo:
 *      type: object
 *      required:
 *        -fecha
 *        -grados
 *      properties:
 *        fecha:
 *          type: string
 *          default:  tiananmensquare
 *        grados:
 *          type: number
 *    Provincia:
 *      type: object
 *      required:
 *        -nombre
 *        -ciudades
 *      properties:
 *        nombre:
 *          type: string
 *          default:  BSAS
 *        ciudades:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Ciudad'
 *    Pais:
 *      type: object
 *      required:
 *        -nombre
 *        -provincias
 *      properties:
 *        nombre:
 *          type: string
 *          default:  Argentina
 *        provincias:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Provincia'
 *
 *
 */
/**
* @openapi
* paths:
*   /paises/{pais}:
*     put:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*       tags:
*         - put
*       summary: Reemplaza todos los valores del pais por los recibidos
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Pais'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Pais'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}:
*     put:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*         - in: path
*           name: provincia
*           schema:
*             type: string
*             default: Pueyrredon
*           required: true
*       tags:
*         - put
*       summary: Reemplaza todos los datos de la provincia por los del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Provincia'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Provincia'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}/ciudades/{ciudad}:
*     put:
*       parameters:
*         - in: path
*           name: pais
*         - in: path
*           name: provincia
*         - in: path
*           name: ciudad
*       tags:
*         - put
*       summary: Reemplaza todos los datos de la ciudad por los del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Ciudad'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Ciudad'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}:
*     patch:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*         - in: path
*           name: provincia
*           schema:
*             type: string
*             default: Pueyrredon
*           required: true
*       tags:
*         - patch
*       summary:  Reepmlaza los datos de la provincia por los datos que no sean undefined o false del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Provincia'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Provincia'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}/ciudades/{ciudad}:
*     patch:
*       parameters:
*         - in: path
*           name: pais
*         - in: path
*           name: provincia
*         - in: path
*           name: ciudad
*       tags:
*         - patch
*       summary: Reepmlaza los datos de la ciudad por aquellos del body que no sean undefined o false
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Ciudad'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Ciudad'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}/ciudades/{ciudad}/registroDeTiempo/{fecha}:
*     patch:
*       parameters:
*         - in: path
*           name: pais
*         - in: path
*           name: provincia
*         - in: path
*           name: ciudad
*         - in: path
*           name: fecha
*       tags:
*         - patch
*       summary: Reepmlaza los datos de la fecha por aquellos del body que no sean undefined o false
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Tiempo'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Tiempo'
*/
/**
* @openapi
* paths:
*   /paises:
*     delete:
*       tags:
*         - delete
*       summary: Borra el pais cuyo nombre coincida con el enviado en el body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Pais'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Pais'
*
*/
/**
* @openapi
* paths:
*   /paises/{pais}/ciudades:
*     delete:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*       tags:
*         - delete
*       summary: Borra la provincia indicada en el body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Provincia'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Provincia'
*
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}:
*     delete:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*         - in: path
*           name: provincia
*           schema:
*             type: string
*             default: BSAS
*           required: true
*       tags:
*         - delete
*       summary: Borra la ciudad indicada en el body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Ciudad'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Ciudad'
*
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}/ciudades/{ciudad}/fechas:
*     delete:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*         - in: path
*           name: provincia
*           schema:
*             type: string
*             default: BSAS
*           required: true
*         - in: path
*           name: ciudad
*           schema:
*             type: string
*             default: CABA
*           required: true
*       tags:
*         - delete
*       summary: Borra el registro de tiempo indicado en el body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Tiempo'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Tiempo'
*
*/
/**
* @openapi
* /paises:
*   get:
*     tags:
*       - get
*     responses:
*       200:
*         description: Funcionamiento normal
*/
/**
* @openapi
* /paises/{pais}:
*   get:
*     parameters:
*       - in: path
*         name: pais
*     tags:
*       - get
*     responses:
*       200:
*         description: Funcionamiento normal
*/
/**
* @openapi
* /paises/{pais}/provincias/{provincia}:
*   get:
*     parameters:
*       - in: path
*         name: pais
*       - in: path
*         name: provincia
*     tags:
*       - get
*     responses:
*       200:
*         description: Funcionamiento normal
*/
/**
* @openapi
* /temperaturaPromedio/paises:
*   get:
*     tags:
*       - temperaturaPromedio
*     responses:
*       200:
*         description: Funcionamiento normal
*/
/**
* @openapi
* /temperaturaPromedio/paises/{pais}:
*   get:
*     parameters:
*       - in: path
*         name: pais
*     tags:
*       - temperaturaPromedio
*     responses:
*       200:
*         description: Funcionamiento normal
*/
/**
* @openapi
* /temperaturaPromedio/paises/{pais}/provincias/{provincia}:
*   get:
*     parameters:
*       - in: path
*         name: pais
*       - in: path
*         name: provincia
*     tags:
*       - temperaturaPromedio
*     responses:
*       200:
*         description: Funcionamiento normal
*/
/**
* @openapi
* /paises:
*   post:
*     tags:
*       - post
*     summary: Agrega un pais con los datos del body
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*              $ref: '#/components/schemas/Pais'
*
*     responses:
*       200:
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Pais'
*/
/**
* @openapi
* paths:
*   /paises/{pais}:
*     post:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*       tags:
*         - post
*       summary: Agrega una provincia a un pais, con los datos del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Provincia'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Provincia'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}:
*     post:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*         - in: path
*           name: provincia
*           schema:
*             type: string
*             default: Pueyrredon
*           required: true
*       tags:
*         - post
*       summary: Agrega una ciudad con los datos del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Ciudad'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Ciudad'
*/
/**
* @openapi
* paths:
*   /paises/{pais}/provincias/{provincia}/ciudades/{ciudad}/fechas:
*     post:
*       parameters:
*         - in: path
*           name: pais
*           schema:
*             type: string
*             default: Argentina
*           required: true
*         - in: path
*           name: provincia
*           schema:
*             type: string
*             default: BSAS
*           required: true
*         - in: path
*           name: ciudad
*           schema:
*             type: string
*             default: CABA
*           required: true
*       tags:
*         - post
*       summary: Agrega un registro de tiempo con los datos del body
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Tiempo'
*
*       responses:
*         200:
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Tiempo'
*/
/**
* @openapi
* /paises/{pais}/provincias/{provincia}/ciudades/{ciudad}:
*   get:
*     parameters:
*       - in: path
*         name: pais
*       - in: path
*         name: provincia
*       - in: path
*         name: ciudad
*     tags:
*       - get
*     responses:
*       200:
*         description: Funcionamiento normal
*/ 
