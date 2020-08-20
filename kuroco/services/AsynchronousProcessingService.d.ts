import { Result } from '../core/Result';
export declare class AsynchronousProcessingService {
    /**
     *
     * ### **Batch::kickbat (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAsynchronousProcessingServiceRcmsApi1Batch(requestParam: AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1BatchRequest): Promise<Result<any>>;
}
export declare namespace AsynchronousProcessingService {
    interface postAsynchronousProcessingServiceRcmsApi1BatchRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAsynchronousProcessingServiceRcmsApi1BatchResponse = any;
}
//# sourceMappingURL=AsynchronousProcessingService.d.ts.map