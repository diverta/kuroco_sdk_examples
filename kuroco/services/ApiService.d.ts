export declare class ApiService {
    /**
     *
     * ### **Api::request_api (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Slack(requestParam: ApiService.getApiServiceRcmsApi1SlackRequest): Promise<any>;
    /**
     *
     * ### **Api::request_api (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Test2(requestParam: ApiService.getApiServiceRcmsApi1Test2Request): Promise<any>;
    /**
     *
     * ### **Api::request_api (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Sendmail(requestParam: ApiService.getApiServiceRcmsApi1SendmailRequest): Promise<any>;
}
export declare namespace ApiService {
    interface getApiServiceRcmsApi1SlackRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1SlackResponse = any;
    interface getApiServiceRcmsApi1Test2Request {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1Test2Response = any;
    interface getApiServiceRcmsApi1SendmailRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1SendmailResponse = any;
}
