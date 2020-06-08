"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const Auth_1 = require("../core/Auth");
class FavoritesService {
    /**
     *
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoriteCreate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/favorite/create`,
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
                result = yield Auth_1.Auth.retryRequest(request, result);
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
    }
    /**
     *
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoriteDelete(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/favorite/delete`,
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
                result = yield Auth_1.Auth.retryRequest(request, result);
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
    }
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **groupBy** `module_id`
     *
     * > **groupAs** `array`
     *
     * > **module_type** `topics`
     *
     * > **order** `inst_ymdhi:desc`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param memberId Member ID
     * @param rcmsid rcmsid
     * @result any
     * @throws ApiError
     */
    static getFavoritesServiceRcmsApi1Favorites(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/favorites`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'module_id[]': requestParam.moduleId,
                        'member_id[]': requestParam.memberId,
                        'rcmsid[]': requestParam.rcmsid,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Auth_1.Auth.retryRequest(request, result);
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
    }
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * > **cnt** `10`
     *
     * > **order** `inst_ymdhi:desc`
     *
     * > **my_list** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getFavoritesServiceRcmsApi1FavoritesMylist(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/favorites/mylist`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'module_id[]': requestParam.moduleId,
                        'groupBy': requestParam.groupBy,
                        'groupAs': requestParam.groupAs,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Auth_1.Auth.retryRequest(request, result);
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
    }
}
exports.FavoritesService = FavoritesService;
(function (FavoritesService) {
    ;
    ;
    ;
    ;
})(FavoritesService = exports.FavoritesService || (exports.FavoritesService = {}));
