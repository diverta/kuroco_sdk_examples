"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPI = void 0;
exports.OpenAPI = {
    SAML_URL: 'https://picol.kuroco.app/direct/login/saml_login/?spid=1',
    BASE: 'https://picol.kuroco.app',
    VERSION: '1.0',
    TOKEN: '',
    SECURITY: {
        'Token-Auth': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'X-RCMS-API-ACCESS-TOKEN',
        },
    }
};
