/**
 * Picol API
 * Alpha testing of new RCMS API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { InlineObject5, InlineObject6 } from '../models';
export interface FavoritesApiRcmsApiFavoriteCreatePostRequest {
    inlineObject5: InlineObject5;
    outputFormat?: string;
    lang?: string;
}
export interface FavoritesApiRcmsApiFavoriteDeletePostRequest {
    inlineObject6: InlineObject6;
    outputFormat?: string;
    lang?: string;
}
export interface FavoritesApiRcmsApiFavoritesGetRequest {
    outputFormat?: string;
    lang?: string;
    cnt?: number;
    pageID?: number;
    moduleId?: Array<number>;
    memberId?: Array<number>;
    rcmsid?: Array<string>;
}
export interface FavoritesApiRcmsApiFavoritesMylistGetRequest {
    outputFormat?: string;
    lang?: string;
    cnt?: number;
    pageID?: number;
    moduleId?: Array<number>;
    groupBy?: string;
    groupAs?: string;
}
/**
 * no description
 */
export declare class FavoritesApi extends runtime.BaseAPI {
    /**
     */
    rcmsApiFavoriteCreatePost(requestParameters: FavoritesApiRcmsApiFavoriteCreatePostRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     */
    rcmsApiFavoriteDeletePost(requestParameters: FavoritesApiRcmsApiFavoriteDeletePostRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ## Controller parameters  > **groupBy** `module_id`  > **groupAs** `array`  > **module_type** `topics`  > **order** `inst_ymdhi:desc`  > **my_list** `0`
     */
    rcmsApiFavoritesGet(requestParameters: FavoritesApiRcmsApiFavoritesGetRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ## Controller parameters  > **module_type** `topics`  > **cnt** `10`  > **order** `inst_ymdhi:desc`  > **my_list** `1`
     */
    rcmsApiFavoritesMylistGet(requestParameters: FavoritesApiRcmsApiFavoritesMylistGetRequest): Promise<runtime.JSONApiResponse<any>>;
}
//# sourceMappingURL=FavoritesApi.d.ts.map