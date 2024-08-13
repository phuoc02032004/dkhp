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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var API_URL = 'https://sv.vaa.edu.vn/dang-ky-hoc-phan.html';
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://sv.vaa.edu.vn',
    'Referer': 'https://sv.vaa.edu.vn/dang-ky-hoc-phan.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
    'X-Requested-With': 'XMLHttpRequest',
    'Cookie': 'ASC.AUTH=281E389B18FA683FB83127126EA388D16A442670FD77F96EB5E0BC2FAAE2552420AD5298869649660D50D1AA6D5191F39354E1ACA01AB9B457EA6259A9EF7AA06679D0247019ADD3D44B93B9D7631E1370B3A513547E0DA1D174B6F9A36F60986190F3076B4E3CBB34FBDD134BBE9884190EC98AC26DA815A66C7AEBEEC578FA; ASP.NET_SessionId=xmdql22axbi14hmdguzensu2',
};
var danhSachLopHocPhan = [
    {
        'param[IDDotDangKy]': 43,
        'param[IDLoaiDangKy]': 1,
        'param[GuidIDLopHocPhan]': '5-xwpJZaQVxetejOz8O_RA',
        'param[IDNhomThucHanh]': '',
    },
    {
        'param[IDDotDangKy]': 43,
        'param[IDLoaiDangKy]': 1,
        'param[GuidIDLopHocPhan]': 'bOhm0CEA6rzvmlwSxZ7QRg',
        'param[IDNhomThucHanh]': '',
    },
    {
        'param[IDDotDangKy]': 43,
        'param[IDLoaiDangKy]': 1,
        'param[GuidIDLopHocPhan]': 'Fa6jkHlr88_yWPD3yUG3Lw',
        'param[IDNhomThucHanh]': '',
    },
    {
        'param[IDDotDangKy]': 43,
        'param[IDLoaiDangKy]': 1,
        'param[GuidIDLopHocPhan]': 'x7Mkx5PFUVI7_P4JYFZKYA',
        'param[IDNhomThucHanh]': '',
    },
    {
        'param[IDDotDangKy]': 43,
        'param[IDLoaiDangKy]': 1,
        'param[GuidIDLopHocPhan]': 'Gc9MnKKzax81J_dgB-54FQ',
        'param[IDNhomThucHanh]': '',
    },
];
function dangKyLopHocPhan(lopHocPhan) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post(API_URL, lopHocPhan, { headers: headers })];
                case 1:
                    response = _a.sent();
                    // Kiểm tra trường "Code" trong response
                    if (response.data.Code === '00') {
                        console.log("\u0110\u0103ng k\u00FD l\u1EDBp ".concat(lopHocPhan['param[GuidIDLopHocPhan]'], " th\u00E0nh c\u00F4ng!"));
                    }
                    else {
                        console.error("\u0110\u0103ng k\u00FD l\u1EDBp ".concat(lopHocPhan['param[GuidIDLopHocPhan]'], " th\u1EA5t b\u1EA1i: ").concat(response.data.ExceptionMessage));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("\u0110\u0103ng k\u00FD l\u1EDBp ".concat(lopHocPhan['param[GuidIDLopHocPhan]'], " th\u1EA5t b\u1EA1i:"), error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function dangKyHangLoat() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, danhSachLopHocPhan_1, lopHocPhan;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, danhSachLopHocPhan_1 = danhSachLopHocPhan;
                    _a.label = 1;
                case 1:
                    if (!(_i < danhSachLopHocPhan_1.length)) return [3 /*break*/, 4];
                    lopHocPhan = danhSachLopHocPhan_1[_i];
                    return [4 /*yield*/, dangKyLopHocPhan(lopHocPhan)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
dangKyHangLoat();
