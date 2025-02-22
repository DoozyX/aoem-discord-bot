/**
 * MOEPP CITES API
 * MOEPP CITES API docs
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PageMetaDto {
    'page': number;
    'limit': number;
    'itemCount': number;
    'pageCount': number;
    'hasPreviousPage': boolean;
    'hasNextPage': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "itemCount",
            "baseName": "itemCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasPreviousPage",
            "baseName": "hasPreviousPage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasNextPage",
            "baseName": "hasNextPage",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PageMetaDto.attributeTypeMap;
    }

    public constructor() {
    }
}
