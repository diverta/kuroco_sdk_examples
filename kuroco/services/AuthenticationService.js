/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';
export class AuthenticationService {
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
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
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
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
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
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
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
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
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
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
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
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
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
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
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
                result = yield import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
            }
            catchGenericError(result);
            return result.body;
        });
    }
}
(function (AuthenticationService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(AuthenticationService || (AuthenticationService = {}));
