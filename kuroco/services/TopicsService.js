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
export class TopicsService {
    /**
     *
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Topics1TopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics1/${requestParam.topicsId}`,
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
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Topics1(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics1`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'custom_search_id': requestParam.customSearchId,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'contents_type[]': requestParam.contentsType,
                        'contents_type_cond': requestParam.contentsTypeCond,
                        'date': requestParam.date,
                        'using_season': requestParam.usingSeason,
                        'season': requestParam.season,
                        'ext_column_cond': requestParam.extColumnCond,
                        'exclude_topics_id': requestParam.excludeTopicsId,
                        'tag_category_id': requestParam.tagCategoryId,
                        'tag_search': requestParam.tagSearch,
                        'tag_id[]': requestParam.tagId,
                        'tag_cond': requestParam.tagCond,
                        'exclude_tag_id': requestParam.excludeTagId,
                        'my_favorite_list': requestParam.myFavoriteList,
                        'my_comment_list': requestParam.myCommentList,
                        'my_own_list': requestParam.myOwnList,
                        'order': requestParam.order,
                        'order_by_id': requestParam.orderById,
                        'id[]': requestParam.id,
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
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1Insert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics1/insert`,
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
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1UpdateTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics1/update/${requestParam.topicsId}`,
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
     * ### **Topics::delete (v1)**
     *
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1DeleteTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics1/delete/${requestParam.topicsId}`,
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
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsMultiple(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/multiple`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'custom_search_id': requestParam.customSearchId,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'contents_type[]': requestParam.contentsType,
                        'contents_type_cond': requestParam.contentsTypeCond,
                        'date': requestParam.date,
                        'using_season': requestParam.usingSeason,
                        'season': requestParam.season,
                        'ext_column_cond': requestParam.extColumnCond,
                        'exclude_topics_id': requestParam.excludeTopicsId,
                        'tag_category_id': requestParam.tagCategoryId,
                        'tag_search': requestParam.tagSearch,
                        'tag_id[]': requestParam.tagId,
                        'tag_cond': requestParam.tagCond,
                        'exclude_tag_id': requestParam.excludeTagId,
                        'my_favorite_list': requestParam.myFavoriteList,
                        'my_comment_list': requestParam.myCommentList,
                        'my_own_list': requestParam.myOwnList,
                        'order': requestParam.order,
                        'order_by_id': requestParam.orderById,
                        'id[]': requestParam.id,
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
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsMultipleTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/multiple/${requestParam.topicsId}`,
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
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/multiple/insert`,
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
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield __request({
                    headers: shouldHookToken ? { [OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/multiple/update/${requestParam.topicsId}`,
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
(function (TopicsService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(TopicsService || (TopicsService = {}));
