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
export function InlineObjectFromJSON(json) {
    return InlineObjectFromJSONTyped(json, false);
}
export function InlineObjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'subject': json['subject'],
        'ymd': (new Date(json['ymd'])),
        'openType': !exists(json, 'open_type') ? undefined : json['open_type'],
        'topicsFlg': !exists(json, 'topics_flg') ? undefined : json['topics_flg'],
        'season': !exists(json, 'season') ? undefined : json['season'],
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
        'regularFlg': !exists(json, 'regular_flg') ? undefined : json['regular_flg'],
        'linkFlg': !exists(json, 'link_flg') ? undefined : json['link_flg'],
        'linkUrl': !exists(json, 'link_url') ? undefined : json['link_url'],
        'contentsType': json['contents_type'],
        'tagId': !exists(json, 'tag_id') ? undefined : json['tag_id'],
        'extCol01': !exists(json, 'ext_col_01') ? undefined : json['ext_col_01'],
        'extCol06': !exists(json, 'ext_col_06') ? undefined : json['ext_col_06'],
        'extCol02': !exists(json, 'ext_col_02') ? undefined : json['ext_col_02'],
        'extCol05': !exists(json, 'ext_col_05') ? undefined : json['ext_col_05'],
        'extCol04': !exists(json, 'ext_col_04') ? undefined : json['ext_col_04'],
        'extCol03': !exists(json, 'ext_col_03') ? undefined : json['ext_col_03'],
    };
}
export function InlineObjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'subject': value.subject,
        'ymd': (value.ymd.toISOString().substr(0, 10)),
        'open_type': value.openType,
        'topics_flg': value.topicsFlg,
        'season': value.season,
        'contents': value.contents,
        'regular_flg': value.regularFlg,
        'link_flg': value.linkFlg,
        'link_url': value.linkUrl,
        'contents_type': value.contentsType,
        'tag_id': value.tagId,
        'ext_col_01': value.extCol01,
        'ext_col_06': value.extCol06,
        'ext_col_02': value.extCol02,
        'ext_col_05': value.extCol05,
        'ext_col_04': value.extCol04,
        'ext_col_03': value.extCol03,
    };
}
/**
* @export
* @enum {string}
*/
export var InlineObjectOpenTypeEnum;
(function (InlineObjectOpenTypeEnum) {
    InlineObjectOpenTypeEnum["Open"] = "open";
    InlineObjectOpenTypeEnum["Close"] = "close";
    InlineObjectOpenTypeEnum["Default"] = "default";
})(InlineObjectOpenTypeEnum || (InlineObjectOpenTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObjectTopicsFlgEnum;
(function (InlineObjectTopicsFlgEnum) {
    InlineObjectTopicsFlgEnum[InlineObjectTopicsFlgEnum["NUMBER_0"] = 0] = "NUMBER_0";
    InlineObjectTopicsFlgEnum[InlineObjectTopicsFlgEnum["NUMBER_1"] = 1] = "NUMBER_1";
})(InlineObjectTopicsFlgEnum || (InlineObjectTopicsFlgEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObjectContentsTypeEnum;
(function (InlineObjectContentsTypeEnum) {
    InlineObjectContentsTypeEnum[InlineObjectContentsTypeEnum["NUMBER_1"] = 1] = "NUMBER_1";
    InlineObjectContentsTypeEnum[InlineObjectContentsTypeEnum["NUMBER_4"] = 4] = "NUMBER_4";
})(InlineObjectContentsTypeEnum || (InlineObjectContentsTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObjectTagIdEnum;
(function (InlineObjectTagIdEnum) {
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_75"] = 75] = "NUMBER_75";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_76"] = 76] = "NUMBER_76";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_77"] = 77] = "NUMBER_77";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_78"] = 78] = "NUMBER_78";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_79"] = 79] = "NUMBER_79";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_80"] = 80] = "NUMBER_80";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_81"] = 81] = "NUMBER_81";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_82"] = 82] = "NUMBER_82";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_83"] = 83] = "NUMBER_83";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_84"] = 84] = "NUMBER_84";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_85"] = 85] = "NUMBER_85";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_86"] = 86] = "NUMBER_86";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_87"] = 87] = "NUMBER_87";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_88"] = 88] = "NUMBER_88";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_89"] = 89] = "NUMBER_89";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_90"] = 90] = "NUMBER_90";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_91"] = 91] = "NUMBER_91";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_92"] = 92] = "NUMBER_92";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_93"] = 93] = "NUMBER_93";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_94"] = 94] = "NUMBER_94";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_95"] = 95] = "NUMBER_95";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_96"] = 96] = "NUMBER_96";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_97"] = 97] = "NUMBER_97";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_98"] = 98] = "NUMBER_98";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_99"] = 99] = "NUMBER_99";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_100"] = 100] = "NUMBER_100";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_101"] = 101] = "NUMBER_101";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_102"] = 102] = "NUMBER_102";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_103"] = 103] = "NUMBER_103";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_104"] = 104] = "NUMBER_104";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_105"] = 105] = "NUMBER_105";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_106"] = 106] = "NUMBER_106";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_107"] = 107] = "NUMBER_107";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_108"] = 108] = "NUMBER_108";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_109"] = 109] = "NUMBER_109";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_110"] = 110] = "NUMBER_110";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_111"] = 111] = "NUMBER_111";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_112"] = 112] = "NUMBER_112";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_113"] = 113] = "NUMBER_113";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_114"] = 114] = "NUMBER_114";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_115"] = 115] = "NUMBER_115";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_116"] = 116] = "NUMBER_116";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_117"] = 117] = "NUMBER_117";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_118"] = 118] = "NUMBER_118";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_119"] = 119] = "NUMBER_119";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_120"] = 120] = "NUMBER_120";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_121"] = 121] = "NUMBER_121";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_122"] = 122] = "NUMBER_122";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_123"] = 123] = "NUMBER_123";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_124"] = 124] = "NUMBER_124";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_125"] = 125] = "NUMBER_125";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_126"] = 126] = "NUMBER_126";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_127"] = 127] = "NUMBER_127";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_128"] = 128] = "NUMBER_128";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_129"] = 129] = "NUMBER_129";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_130"] = 130] = "NUMBER_130";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_131"] = 131] = "NUMBER_131";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_132"] = 132] = "NUMBER_132";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_133"] = 133] = "NUMBER_133";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_134"] = 134] = "NUMBER_134";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_135"] = 135] = "NUMBER_135";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_136"] = 136] = "NUMBER_136";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_67"] = 67] = "NUMBER_67";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_68"] = 68] = "NUMBER_68";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_69"] = 69] = "NUMBER_69";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_70"] = 70] = "NUMBER_70";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_71"] = 71] = "NUMBER_71";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_72"] = 72] = "NUMBER_72";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_73"] = 73] = "NUMBER_73";
    InlineObjectTagIdEnum[InlineObjectTagIdEnum["NUMBER_74"] = 74] = "NUMBER_74";
})(InlineObjectTagIdEnum || (InlineObjectTagIdEnum = {}));
//# sourceMappingURL=InlineObject.js.map