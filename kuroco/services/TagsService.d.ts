export declare class TagsService {
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **groupBy** `module_id`
     *
     * > **groupAs** `array`
     *
     * @param moduleId module_id
     * @param moduleType Module type
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1Tags(requestParam: TagsService.getTagsServiceRcmsApi1TagsRequest): Promise<any>;
    /**
     *
     * ### **Tag::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagCreate(requestParam: TagsService.postTagsServiceRcmsApi1TagCreateRequest): Promise<any>;
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **groupBy** `category`
     *
     * > **groupAs** `array`
     *
     * > **order** `category_weight:desc`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1TagsCategoryGrouped(requestParam: TagsService.getTagsServiceRcmsApi1TagsCategoryGroupedRequest): Promise<any>;
}
export declare namespace TagsService {
    interface getTagsServiceRcmsApi1TagsRequest {
        moduleId: Array<number>;
        moduleType: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
        order?: Array<string>;
        pageId?: number;
        id?: Array<number>;
        categoryId?: Array<number>;
    }
    type getTagsServiceRcmsApi1TagsResponse = any;
    interface postTagsServiceRcmsApi1TagCreateRequest {
        requestBody: {
            /**
             * Title
             */
            tag_nm: string;
            /**
             * Category ID
             */
            tag_category_id?: number;
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Sort
             */
            weight?: number;
            /**
             * ext_col_01
             */
            ext_col_01?: string;
            /**
             * ext_col_02
             */
            ext_col_02?: string;
            /**
             * ext_col_03
             */
            ext_col_03?: string;
            /**
             * ext_col_04
             */
            ext_col_04?: string;
            /**
             * ext_col_05
             */
            ext_col_05?: string;
            /**
             * ext_col_06
             */
            ext_col_06?: string;
            /**
             * ext_col_07
             */
            ext_col_07?: string;
            /**
             * ext_col_08
             */
            ext_col_08?: string;
            /**
             * ext_col_09
             */
            ext_col_09?: string;
            /**
             * ext_col_10
             */
            ext_col_10?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTagsServiceRcmsApi1TagCreateResponse = any;
    interface getTagsServiceRcmsApi1TagsCategoryGroupedRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        order?: Array<string>;
        pageId?: number;
        id?: Array<number>;
        categoryId?: Array<number>;
    }
    type getTagsServiceRcmsApi1TagsCategoryGroupedResponse = any;
}
