export declare class TopicsService {
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * > **cnt** `9`
     *
     * > **tag_cond** `AND`
     *
     * > **tag_search** `1`
     *
     * > **order** `ymd:desc,topics_id:desc`
     *
     * > **get_comment_cnt** `1`
     *
     * > **get_favorite_cnt** `1`
     *
     * > **add_my_favorite_flg** `1`
     *
     * > **get_tag_flg** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Feeds(requestParam: TopicsService.getTopicsServiceRcmsApi1FeedsRequest): Promise<any>;
    /**
     *
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1FeedCreate(requestParam: TopicsService.postTopicsServiceRcmsApi1FeedCreateRequest): Promise<any>;
    /**
     *
     * ### **Topics::delete (v1)**
     *
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1FeedDeleteTopicsId(requestParam: TopicsService.postTopicsServiceRcmsApi1FeedDeleteTopicsIdRequest): Promise<any>;
    /**
     *
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1FeedUpdateTopicsId(requestParam: TopicsService.postTopicsServiceRcmsApi1FeedUpdateTopicsIdRequest): Promise<any>;
    /**
     *
     * ### **TopicsGroup::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Tg(requestParam: TopicsService.getTopicsServiceRcmsApi1TgRequest): Promise<any>;
    /**
     *
     * ### **TopicsGroup::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * > **ext_config_flg** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1FeedGroup(requestParam: TopicsService.getTopicsServiceRcmsApi1FeedGroupRequest): Promise<any>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `5`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Infos(requestParam: TopicsService.getTopicsServiceRcmsApi1InfosRequest): Promise<any>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `6`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1PreInfo(requestParam: TopicsService.getTopicsServiceRcmsApi1PreInfoRequest): Promise<any>;
}
export declare namespace TopicsService {
    interface getTopicsServiceRcmsApi1FeedsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
    }
    type getTopicsServiceRcmsApi1FeedsResponse = any;
    interface postTopicsServiceRcmsApi1FeedCreateRequest {
        requestBody: {
            /**
             * Topic title
             */
            subject: string;
            /**
             * Category ID
             * * 1 => フィード
             */
            contents_type?: (1);
            /**
             * Date
             */
            ymd?: string;
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Display all topics to logged in members, regardless ther public/hidden status
             */
            topics_flg?: (0 | 1);
            /**
             * Season
             */
            season?: number;
            /**
             * Contents
             */
            contents?: string;
            /**
             * display up
             */
            regular_flg?: number;
            /**
             * Display method
             */
            link_flg?: number;
            /**
             * Link
             */
            link_url?: string;
            /**
             * タグID
             * * 75 => 推しキャラ(Favorite character)
             * * 76 => いい感じの何か(good stuff)
             * * 67 => 近況(Now)
             * * 68 => ランチ(Lunch)
             * * 69 => おやつ(Snack)
             * * 70 => 仕事関係
             * * 71 => ただしい(Do right)
             * * 72 => たのしい(Delight)
             * * 73 => ジレンマ(dilemma)
             * * 74 => めでたい
             * * 162 => おやつ
             * * 163 => sakura
             * * 164 => 桜
             * * 166 => 景色
             * * 171 => 重要なお知らせ
             * * 173 => ここにタグを設置できます
             * * 174 => MalaysiaOffice
             * * 175 => 近況
             */
            tag_id?: Array<(75 | 76 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 162 | 163 | 164 | 166 | 171 | 173 | 174 | 175)>;
            /**
             * 動画
             */
            ext_col_06?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * コメント
             */
            ext_col_02?: string;
            /**
             * GCSファイル
             */
            ext_col_04?: Array<{
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1FeedCreateResponse = any;
    interface postTopicsServiceRcmsApi1FeedDeleteTopicsIdRequest {
        topicsId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1FeedDeleteTopicsIdResponse = any;
    interface postTopicsServiceRcmsApi1FeedUpdateTopicsIdRequest {
        topicsId: number;
        requestBody: {
            /**
             * Topic title
             */
            subject?: string;
            /**
             * Category ID
             * * 1 => フィード
             */
            contents_type?: (1);
            /**
             * Date
             */
            ymd?: string;
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Display all topics to logged in members, regardless ther public/hidden status
             */
            topics_flg?: (0 | 1);
            /**
             * Season
             */
            season?: number;
            /**
             * Contents
             */
            contents?: string;
            /**
             * display up
             */
            regular_flg?: number;
            /**
             * Display method
             */
            link_flg?: number;
            /**
             * Link
             */
            link_url?: string;
            /**
             * タグID
             * * 75 => 推しキャラ(Favorite character)
             * * 76 => いい感じの何か(good stuff)
             * * 67 => 近況(Now)
             * * 68 => ランチ(Lunch)
             * * 69 => おやつ(Snack)
             * * 70 => 仕事関係
             * * 71 => ただしい(Do right)
             * * 72 => たのしい(Delight)
             * * 73 => ジレンマ(dilemma)
             * * 74 => めでたい
             * * 162 => おやつ
             * * 163 => sakura
             * * 164 => 桜
             * * 166 => 景色
             * * 171 => 重要なお知らせ
             * * 173 => ここにタグを設置できます
             * * 174 => MalaysiaOffice
             * * 175 => 近況
             */
            tag_id?: Array<(75 | 76 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 162 | 163 | 164 | 166 | 171 | 173 | 174 | 175)>;
            /**
             * 動画
             */
            ext_col_06?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * コメント
             */
            ext_col_02?: string;
            /**
             * GCSファイル
             */
            ext_col_04?: Array<{
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1FeedUpdateTopicsIdResponse = any;
    interface getTopicsServiceRcmsApi1TgRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getTopicsServiceRcmsApi1TgResponse = any;
    interface getTopicsServiceRcmsApi1FeedGroupRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getTopicsServiceRcmsApi1FeedGroupResponse = any;
    interface getTopicsServiceRcmsApi1InfosRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
    }
    type getTopicsServiceRcmsApi1InfosResponse = any;
    interface getTopicsServiceRcmsApi1PreInfoRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
    }
    type getTopicsServiceRcmsApi1PreInfoResponse = any;
}
