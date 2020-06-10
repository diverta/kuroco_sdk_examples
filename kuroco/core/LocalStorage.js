/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
export class LocalStorage {
    /** get */
    static getAccessToken() {
        const token = localStorage.getItem(LocalStorage.TokenKeys.accessToken);
        return !!token ? token : '';
    }
    static getRefreshToken() {
        const token = localStorage.getItem(LocalStorage.TokenKeys.refreshToken);
        return !!token ? token : '';
    }
    /** set */
    static setAccessToken(token) {
        localStorage.setItem(LocalStorage.TokenKeys.accessToken, token);
    }
    static setRefreshToken(token) {
        localStorage.setItem(LocalStorage.TokenKeys.refreshToken, token);
    }
    /** delete */
    static deleteAccessToken() {
        localStorage.removeItem(LocalStorage.TokenKeys.accessToken);
    }
    static deleteRefreshToken() {
        localStorage.removeItem(LocalStorage.TokenKeys.refreshToken);
    }
    static deleteTokens() {
        localStorage.removeItem(LocalStorage.TokenKeys.accessToken);
        localStorage.removeItem(LocalStorage.TokenKeys.refreshToken);
    }
}
(function (LocalStorage) {
    let TokenKeys;
    (function (TokenKeys) {
        TokenKeys["accessToken"] = "accessToken";
        TokenKeys["refreshToken"] = "refreshToken";
    })(TokenKeys = LocalStorage.TokenKeys || (LocalStorage.TokenKeys = {}));
})(LocalStorage || (LocalStorage = {}));
