export declare class FavoritesService {
    /**
     *
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoriteCreate(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoriteCreateRequest): Promise<any>;
    /**
     *
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoriteDelete(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoriteDeleteRequest): Promise<any>;
    /**
     *
     * ### **Favorite::list (v1)**
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
     * > **order** `inst_ymdhi:desc`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param memberId Member ID
     * @param rcmsid rcmsid
     * @result any
     * @throws ApiError
     */
    static getFavoritesServiceRcmsApi1Favorites(requestParam: FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest): Promise<any>;
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * > **cnt** `10`
     *
     * > **order** `inst_ymdhi:desc`
     *
     * > **my_list** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getFavoritesServiceRcmsApi1FavoritesMylist(requestParam: FavoritesService.getFavoritesServiceRcmsApi1FavoritesMylistRequest): Promise<any>;
}
export declare namespace FavoritesService {
    interface postFavoritesServiceRcmsApi1FavoriteCreateRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: string;
            /**
             * module_id
             */
            module_id: number;
            /**
             * ページシステム名
             */
            page_sysnm?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postFavoritesServiceRcmsApi1FavoriteCreateResponse = any;
    interface postFavoritesServiceRcmsApi1FavoriteDeleteRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: string;
            /**
             * module_id
             */
            module_id: number;
            /**
             * ページシステム名
             */
            page_sysnm?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postFavoritesServiceRcmsApi1FavoriteDeleteResponse = any;
    interface getFavoritesServiceRcmsApi1FavoritesRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        moduleId?: Array<number>;
        memberId?: Array<number>;
        rcmsid?: Array<string>;
    }
    type getFavoritesServiceRcmsApi1FavoritesResponse = any;
    interface getFavoritesServiceRcmsApi1FavoritesMylistRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        moduleId?: Array<number>;
        groupBy?: string;
        groupAs?: string;
    }
    type getFavoritesServiceRcmsApi1FavoritesMylistResponse = any;
}
