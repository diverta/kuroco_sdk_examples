export declare class AuthenticationService {
    /**
     *
     * ### **Login::login_challenge (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1Login(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1LoginRequest): Promise<any>;
    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_refresh_token** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1Token(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1TokenRequest): Promise<any>;
    /**
     *
     * ### **Login::logout (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1Logout(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1LogoutRequest): Promise<any>;
    /**
     *
     * ### **Login::profile (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **basic_info** `nickname,member_photo`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getAuthenticationServiceRcmsApi1Profile(requestParam: AuthenticationService.getAuthenticationServiceRcmsApi1ProfileRequest): Promise<any>;
    /**
     *
     * ### **Login::firebaseToken (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1FirebaseToken(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1FirebaseTokenRequest): Promise<any>;
    /**
     *
     * ### **Login::gcs_info (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1GcsInfo(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1GcsInfoRequest): Promise<any>;
}
export declare namespace AuthenticationService {
    interface postAuthenticationServiceRcmsApi1LoginRequest {
        requestBody: {
            /**
             * Login ID
             */
            email?: string;
            /**
             * Password
             */
            password?: string;
            /**
             * Log in automatically next time
             */
            login_save?: (0 | 1);
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1LoginResponse = any;
    interface postAuthenticationServiceRcmsApi1TokenRequest {
        requestBody: {
            /**
             * Resource grant token
             */
            grant_token?: string;
            /**
             * Refresh token
             */
            refresh_token?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1TokenResponse = any;
    interface postAuthenticationServiceRcmsApi1LogoutRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1LogoutResponse = any;
    interface getAuthenticationServiceRcmsApi1ProfileRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getAuthenticationServiceRcmsApi1ProfileResponse = any;
    interface postAuthenticationServiceRcmsApi1FirebaseTokenRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1FirebaseTokenResponse = any;
    interface postAuthenticationServiceRcmsApi1GcsInfoRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1GcsInfoResponse = any;
}
