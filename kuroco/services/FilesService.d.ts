export declare class FilesService {
    /**
     *
     * ### **Files::upload (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param requestBody
     * @result any
     * @throws ApiError
     */
    static postFilesServiceRcmsApi1FileUpload(requestParam: FilesService.postFilesServiceRcmsApi1FileUploadRequest): Promise<any>;
}
export declare namespace FilesService {
    interface postFilesServiceRcmsApi1FileUploadRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        requestBody?: any;
    }
    type postFilesServiceRcmsApi1FileUploadResponse = any;
}
