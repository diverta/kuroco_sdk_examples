/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
export const OpenAPI = {
    SAML_URL: 'https://kuroco-dev.a.kuroco.app/direct/login/saml_login/?spid=1',
    BASE: 'https://kuroco-dev.a.kuroco.app',
    VERSION: '1',
    TOKEN: '',
    SECURITY: {
        'Token-Auth': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'X-RCMS-API-ACCESS-TOKEN',
        },
    }
};
