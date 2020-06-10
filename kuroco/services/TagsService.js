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
export class TagsService {
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @param groupBy Grouping List by (module_id / category)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1Tags(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tags`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'order[]': requestParam.order,
                        'pageID': requestParam.pageId,
                        'id[]': requestParam.id,
                        'category_id[]': requestParam.categoryId,
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
    static postTagsServiceRcmsApi1TagsInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/tags/insert`,
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
     * ### **Tag::delete (v1)**
     *
     *
     * @param tagId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagsDeleteTagId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/tags/delete/${requestParam.tagId}`,
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
(function (TagsService) {
    ;
    ;
    ;
})(TagsService || (TagsService = {}));
