// tslint:disable
// eslint-disable
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
import { exists } from '../runtime';
export function InlineObject5FromJSON(json) {
    return InlineObject5FromJSONTyped(json, false);
}
export function InlineObject5FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'moduleType': json['module_type'],
        'moduleId': json['module_id'],
        'pageSysnm': !exists(json, 'page_sysnm') ? undefined : json['page_sysnm'],
    };
}
export function InlineObject5ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'module_type': value.moduleType,
        'module_id': value.moduleId,
        'page_sysnm': value.pageSysnm,
    };
}
//# sourceMappingURL=InlineObject5.js.map