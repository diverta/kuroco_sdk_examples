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
    static postFilesServiceRcmsApi1FilesUpload(requestParam: FilesService.postFilesServiceRcmsApi1FilesUploadRequest): Promise<any>;
}
export declare namespace FilesService {
    interface postFilesServiceRcmsApi1FilesUploadRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        requestBody?: any;
    }
    type postFilesServiceRcmsApi1FilesUploadResponse = any;
}
//# sourceMappingURL=FilesService.d.ts.map