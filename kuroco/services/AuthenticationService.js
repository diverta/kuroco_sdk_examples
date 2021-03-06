"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class AuthenticationService {
    /**
     *
     * ### **Login::login_challenge (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1AuthLogin(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({}).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/auth/login`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Login::logout (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1AuthLogout(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/auth/logout`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_refresh_token** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1AuthToken(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({}).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/auth/token`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Login::reminder (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1MePwReminder(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/me/pw/reminder`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Login::reset_password (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1MePwReset(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/me/pw/reset`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Login::profile (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getAuthenticationServiceRcmsApi1MeProfile(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/me/profile`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Login::firebaseToken (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1FirebaseToken(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/firebase_token`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
}
exports.AuthenticationService = AuthenticationService;
(function (AuthenticationService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(AuthenticationService = exports.AuthenticationService || (exports.AuthenticationService = {}));
