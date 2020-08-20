import { Result } from '../core/Result';
export declare class TablesService {
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesSimple(requestParam: TablesService.getTablesServiceRcmsApi1TablesSimpleRequest): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesMatrix(requestParam: TablesService.getTablesServiceRcmsApi1TablesMatrixRequest): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `3`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesDate(requestParam: TablesService.getTablesServiceRcmsApi1TablesDateRequest): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `4`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesChecksheet(requestParam: TablesService.getTablesServiceRcmsApi1TablesChecksheetRequest): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `5`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index
     * @param valueIdx Value index
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesInvalid(requestParam: TablesService.getTablesServiceRcmsApi1TablesInvalidRequest): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * > **key_idx** `1`
     *
     * > **value_idx** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesSimpleKey1Value2(requestParam: TablesService.getTablesServiceRcmsApi1TablesSimpleKey1Value2Request): Promise<Result<any>>;
}
export declare namespace TablesService {
    interface getTablesServiceRcmsApi1TablesSimpleRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    type getTablesServiceRcmsApi1TablesSimpleResponse = any;
    interface getTablesServiceRcmsApi1TablesMatrixRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    type getTablesServiceRcmsApi1TablesMatrixResponse = any;
    interface getTablesServiceRcmsApi1TablesDateRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    type getTablesServiceRcmsApi1TablesDateResponse = any;
    interface getTablesServiceRcmsApi1TablesChecksheetRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    type getTablesServiceRcmsApi1TablesChecksheetResponse = any;
    interface getTablesServiceRcmsApi1TablesInvalidRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    type getTablesServiceRcmsApi1TablesInvalidResponse = any;
    interface getTablesServiceRcmsApi1TablesSimpleKey1Value2Request {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    type getTablesServiceRcmsApi1TablesSimpleKey1Value2Response = any;
}
//# sourceMappingURL=TablesService.d.ts.map