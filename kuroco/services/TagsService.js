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
exports.TagsService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const Auth_1 = require("../core/Auth");
class TagsService {
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **groupBy** `module_id`
     *
     * > **groupAs** `array`
     *
     * @param moduleId module_id
     * @param moduleType Module type
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1Tags(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tags`,
                    query: {
                        'module_id[]': requestParam.moduleId,
                        'module_type': requestParam.moduleType,
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'order[]': requestParam.order,
                        'pageID': requestParam.pageId,
                        'id[]': requestParam.id,
                        'category_id[]': requestParam.categoryId,
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
     * ### **Tag::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagCreate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/tag/create`,
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
     * ### **Tag::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **groupBy** `category`
     *
     * > **groupAs** `array`
     *
     * > **order** `category_weight:desc`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1TagsCategoryGrouped(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tags/category_grouped`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'order[]': requestParam.order,
                        'pageID': requestParam.pageId,
                        'id[]': requestParam.id,
                        'category_id[]': requestParam.categoryId,
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
exports.TagsService = TagsService;
(function (TagsService) {
    ;
    ;
    ;
})(TagsService = exports.TagsService || (exports.TagsService = {}));
