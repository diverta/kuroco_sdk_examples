import { AuthenticationService } from '../services/AuthenticationService';
export declare const SpecialOperationInfo: {
    login: {
        path: string;
        httpMethod: string;
        class: typeof AuthenticationService;
        className: string;
        method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1Login;
        methodName: string;
        auth: string;
    };
    logout: {
        path: string;
        httpMethod: string;
        class: typeof AuthenticationService;
        className: string;
        method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1Logout;
        methodName: string;
        auth: string;
    };
    token: {
        path: string;
        httpMethod: string;
        class: typeof AuthenticationService;
        className: string;
        method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1Token;
        methodName: string;
        auth: string;
    };
};
