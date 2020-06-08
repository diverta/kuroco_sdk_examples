"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialOperationInfo = void 0;
const AuthenticationService_1 = require("../services/AuthenticationService");
exports.SpecialOperationInfo = {
    login: {
        path: '/rcms-api/1/login',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1Login',
        class: AuthenticationService_1.AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1Login,
        methodName: 'postAuthenticationServiceRcmsApi1Login',
        auth: 'LOGIN',
    },
    logout: {
        path: '/rcms-api/1/logout',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1Logout',
        class: AuthenticationService_1.AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1Logout,
        methodName: 'postAuthenticationServiceRcmsApi1Logout',
        auth: 'LOGOUT',
    },
    token: {
        path: '/rcms-api/1/token',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1Token',
        class: AuthenticationService_1.AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1Token,
        methodName: 'postAuthenticationServiceRcmsApi1Token',
        auth: 'TOKEN',
    },
};
