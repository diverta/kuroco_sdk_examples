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
exports.MembersService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const Auth_1 = require("../core/Auth");
class MembersService {
    /**
     *
     * ### **Member::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **group_id** `1`
     *
     * @param memberId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1MembersMemberId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/members/${requestParam.memberId}`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
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
     * ### **Member::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **subData_flg** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param id Member ID
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param sName Member search
     * @param sEmail Member search
     * @param sTel Member search
     * @param sAddress Member search
     * @param sTdfkCd Member search
     * @param groupId Member search
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1Members(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/members`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'id[]': requestParam.id,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        's_name': requestParam.sName,
                        's_email': requestParam.sEmail,
                        's_tel': requestParam.sTel,
                        's_address': requestParam.sAddress,
                        's_tdfk_cd': requestParam.sTdfkCd,
                        'group_id': requestParam.groupId,
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * > **unuse_columns** `email`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MemberUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/member/update`,
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
}
exports.MembersService = MembersService;
(function (MembersService) {
    ;
    ;
    ;
})(MembersService = exports.MembersService || (exports.MembersService = {}));
