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
export class CommentsService {
    /**
     *
     * ### **Comment::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param moduleId モジュールID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param newOrderFlg To the display the newest use 1. Default: 0
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param fromDate Posted Date
     * @param toDate Posted Date
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getCommentsServiceRcmsApi1TopicsComments(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/comments`,
                    query: {
                        'module_id[]': requestParam.moduleId,
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'new_order_flg': requestParam.newOrderFlg,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'from_date': requestParam.fromDate,
                        'to_date': requestParam.toDate,
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
     * ### **Comment::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1TopicsCommentsInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/comments/insert`,
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
     * ### **Comment::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1TopicsCommentsUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/comments/update`,
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
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1TopicsCommentsDelete(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/comments/delete`,
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
}
(function (CommentsService) {
    ;
    ;
    ;
    ;
})(CommentsService || (CommentsService = {}));
