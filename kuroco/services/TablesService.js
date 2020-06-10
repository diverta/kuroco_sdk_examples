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
export class TablesService {
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesSimple(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/simple`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
                        'groupBy': requestParam.groupBy,
                        'groupAs': requestParam.groupAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesMatrix(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/matrix`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `3`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesDate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/date`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `4`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesChecksheet(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/checksheet`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `5`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index
     * @param valueIdx Value index
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesInvalid(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/invalid`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * > **key_idx** `1`
     *
     * > **value_idx** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesSimpleKey1Value2(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/simple/key1-value2`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
                        'groupBy': requestParam.groupBy,
                        'groupAs': requestParam.groupAs,
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
(function (TablesService) {
    ;
    ;
    ;
    ;
    ;
    ;
})(TablesService || (TablesService = {}));
