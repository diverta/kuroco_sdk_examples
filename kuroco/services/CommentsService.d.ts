export declare class CommentsService {
    /**
     *
     * ### **Comment::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **groupBy** `module_id`
     *
     * > **groupAs** `array`
     *
     * > **module_type** `topics`
     *
     * > **new_order_flg** `1`
     *
     * @param moduleId モジュールID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param newOrderFlg To the display the newest use 1. Default: 0
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param fromDate Posted Date
     * @param toDate Posted Date
     * @result any
     * @throws ApiError
     */
    static getCommentsServiceRcmsApi1Comments(requestParam: CommentsService.getCommentsServiceRcmsApi1CommentsRequest): Promise<any>;
    /**
     *
     * ### **Comment::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1CommentCreate(requestParam: CommentsService.postCommentsServiceRcmsApi1CommentCreateRequest): Promise<any>;
    /**
     *
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1CommentDelete(requestParam: CommentsService.postCommentsServiceRcmsApi1CommentDeleteRequest): Promise<any>;
}
export declare namespace CommentsService {
    interface getCommentsServiceRcmsApi1CommentsRequest {
        moduleId: Array<number>;
        outputFormat?: string;
        lang?: string;
        charset?: string;
        newOrderFlg?: number;
        cnt?: number;
        pageId?: number;
        fromDate?: string;
        toDate?: string;
    }
    type getCommentsServiceRcmsApi1CommentsResponse = any;
    interface postCommentsServiceRcmsApi1CommentCreateRequest {
        requestBody: {
            /**
             * モジュールID
             */
            module_id: number;
            /**
             * Name
             */
            name: string;
            /**
             * Mail
             */
            mail?: string;
            /**
             * URL
             */
            url?: string;
            /**
             * Comments
             */
            note: string;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postCommentsServiceRcmsApi1CommentCreateResponse = any;
    interface postCommentsServiceRcmsApi1CommentDeleteRequest {
        requestBody: {
            /**
             * コメントID
             */
            comment_id: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postCommentsServiceRcmsApi1CommentDeleteResponse = any;
}
