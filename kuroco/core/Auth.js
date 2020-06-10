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
import { OpenAPI } from './OpenAPI';
import { ApiError } from './ApiError';
import { LocalStorage } from './LocalStorage';
// @ts-ignore-end
import { AuthenticationService } from '../services/AuthenticationService';
export const SpecialOperations = {
    login: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
    logout: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
    token: AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
};
export class Auth {
    static login(param) {
        return __awaiter(this, void 0, void 0, function* () {
            LocalStorage.deleteAccessToken();
            LocalStorage.deleteRefreshToken();
            if (!SpecialOperations.login) {
                return Promise.resolve();
            }
            const res = yield SpecialOperations.login(param);
            const { grant_token, errors } = res;
            if (errors && Array.isArray(errors) && errors.length > 0) {
                return Promise.reject(errors);
            }
            yield Auth.createToken({ requestBody: { grant_token } });
            return res.member_id;
        });
    }
    static logout(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SpecialOperations.logout(param).finally(() => {
                LocalStorage.deleteAccessToken();
                LocalStorage.deleteRefreshToken();
            });
        });
    }
    static createToken(param) {
        return __awaiter(this, void 0, void 0, function* () {
            if (OpenAPI.SECURITY['Token-Auth']) {
                const res = yield SpecialOperations.token(param);
                const { access_token, refresh_token } = res;
                if (access_token) {
                    LocalStorage.setAccessToken(access_token);
                }
                if (refresh_token) {
                    LocalStorage.setRefreshToken(refresh_token);
                }
                return res;
            }
            return Promise.resolve();
        });
    }
    static retryRequest(requestFn, result) {
        return __awaiter(this, void 0, void 0, function* () {
            // throws error when refresh_token is empty
            if (!LocalStorage.getRefreshToken()) {
                LocalStorage.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            yield Auth.createToken({ requestBody: { refresh_token: LocalStorage.getRefreshToken() } }).catch(() => __awaiter(this, void 0, void 0, function* () {
                LocalStorage.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }));
            // retry with refreshed token
            result = yield requestFn().catch(() => __awaiter(this, void 0, void 0, function* () {
                LocalStorage.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }));
            return result;
        });
    }
}
(function (Auth) {
    Auth.onErrorHandler = result => Promise.reject();
})(Auth || (Auth = {}));
