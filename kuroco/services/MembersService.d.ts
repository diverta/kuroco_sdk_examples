export declare class MembersService {
    /**
     *
     * ### **Member::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **group_id** `1`
     *
     * @param memberId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1MembersMemberId(requestParam: MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest): Promise<any>;
    /**
     *
     * ### **Member::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **subData_flg** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param id Member ID
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param sName Member search
     * @param sEmail Member search
     * @param sTel Member search
     * @param sAddress Member search
     * @param sTdfkCd Member search
     * @param groupId Member search
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1Members(requestParam: MembersService.getMembersServiceRcmsApi1MembersRequest): Promise<any>;
    /**
     *
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * > **unuse_columns** `email`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MemberUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MemberUpdateRequest): Promise<any>;
}
export declare namespace MembersService {
    interface getMembersServiceRcmsApi1MembersMemberIdRequest {
        memberId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getMembersServiceRcmsApi1MembersMemberIdResponse = any;
    interface getMembersServiceRcmsApi1MembersRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        id?: Array<number>;
        cnt?: number;
        pageId?: number;
        sName?: string;
        sEmail?: string;
        sTel?: string;
        sAddress?: string;
        sTdfkCd?: string;
        groupId?: number;
    }
    type getMembersServiceRcmsApi1MembersResponse = any;
    interface postMembersServiceRcmsApi1MemberUpdateRequest {
        requestBody: {
            /**
             * Nickname
             */
            nickname?: string;
            /**
             * Image1
             */
            member_photo?: {
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
                extension?: ('jpg' | 'gif' | 'png');
            };
            /**
             * Password
             */
            login_pwd?: string;
            /**
             * /label/group_id
             */
            group_id?: Array<(1 | 2 | 101 | 102)>;
            /**
             * /label/open_flg
             */
            open_flg?: (0 | 1);
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MemberUpdateResponse = any;
}
