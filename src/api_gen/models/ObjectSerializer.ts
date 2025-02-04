export * from '../models/ActivateUserDto';
export * from '../models/AuthConfirmEmailDto';
export * from '../models/AuthEmailLoginDto';
export * from '../models/AuthForgotPasswordDto';
export * from '../models/AuthRegisterLoginDto';
export * from '../models/AuthResetPasswordDto';
export * from '../models/AuthUpdateDto';
export * from '../models/Buff';
export * from '../models/Channel';
export * from '../models/CreateBuffDto';
export * from '../models/CreateChannelDto';
export * from '../models/CreateGuildDto';
export * from '../models/CreateIndividualUserDto';
export * from '../models/CreateUserDto';
export * from '../models/ErrorResponse';
export * from '../models/FileType';
export * from '../models/FilterUserDto';
export * from '../models/Guild';
export * from '../models/HealthControllerCheck200Response';
export * from '../models/HealthControllerCheck200ResponseInfoValue';
export * from '../models/HealthControllerCheck503Response';
export * from '../models/LoginResponseType';
export * from '../models/PageDto';
export * from '../models/PageMetaDto';
export * from '../models/QueryUserDto';
export * from '../models/RefreshResponseType';
export * from '../models/SortUserDto';
export * from '../models/UpdateUserDto';
export * from '../models/User';
export * from '../models/UserStatistics';
export * from '../models/UsersControllerFindAll200Response';

import { ActivateUserDto, ActivateUserDtoStatusEnum    } from '../models/ActivateUserDto';
import { AuthConfirmEmailDto } from '../models/AuthConfirmEmailDto';
import { AuthEmailLoginDto } from '../models/AuthEmailLoginDto';
import { AuthForgotPasswordDto } from '../models/AuthForgotPasswordDto';
import { AuthRegisterLoginDto  , AuthRegisterLoginDtoLanguageEnum   } from '../models/AuthRegisterLoginDto';
import { AuthResetPasswordDto } from '../models/AuthResetPasswordDto';
import { AuthUpdateDto } from '../models/AuthUpdateDto';
import { Buff      , BuffTypeEnum    } from '../models/Buff';
import { Channel       , ChannelTypeEnum   } from '../models/Channel';
import { CreateBuffDto , CreateBuffDtoTypeEnum    } from '../models/CreateBuffDto';
import { CreateChannelDto  , CreateChannelDtoTypeEnum   } from '../models/CreateChannelDto';
import { CreateGuildDto } from '../models/CreateGuildDto';
import { CreateIndividualUserDto  , CreateIndividualUserDtoRoleEnum  , CreateIndividualUserDtoStatusEnum  , CreateIndividualUserDtoLanguageEnum   } from '../models/CreateIndividualUserDto';
import { CreateUserDto  , CreateUserDtoRoleEnum  , CreateUserDtoStatusEnum  , CreateUserDtoLanguageEnum   } from '../models/CreateUserDto';
import { ErrorResponse } from '../models/ErrorResponse';
import { FileType } from '../models/FileType';
import { FilterUserDto, FilterUserDtoRolesEnum  , FilterUserDtoStatusesEnum    } from '../models/FilterUserDto';
import { Guild } from '../models/Guild';
import { HealthControllerCheck200Response } from '../models/HealthControllerCheck200Response';
import { HealthControllerCheck200ResponseInfoValue } from '../models/HealthControllerCheck200ResponseInfoValue';
import { HealthControllerCheck503Response } from '../models/HealthControllerCheck503Response';
import { LoginResponseType } from '../models/LoginResponseType';
import { PageDto } from '../models/PageDto';
import { PageMetaDto } from '../models/PageMetaDto';
import { QueryUserDto } from '../models/QueryUserDto';
import { RefreshResponseType } from '../models/RefreshResponseType';
import { SortUserDto, SortUserDtoOrderByEnum  , SortUserDtoOrderEnum   } from '../models/SortUserDto';
import { UpdateUserDto  , UpdateUserDtoRoleEnum  , UpdateUserDtoStatusEnum  , UpdateUserDtoLanguageEnum    } from '../models/UpdateUserDto';
import { User     , UserRoleEnum  , UserStatusEnum   , UserLanguageEnum   } from '../models/User';
import { UserStatistics } from '../models/UserStatistics';
import { UsersControllerFindAll200Response } from '../models/UsersControllerFindAll200Response';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "ActivateUserDtoStatusEnum",
    "AuthRegisterLoginDtoLanguageEnum",
    "BuffTypeEnum",
    "ChannelTypeEnum",
    "CreateBuffDtoTypeEnum",
    "CreateChannelDtoTypeEnum",
    "CreateIndividualUserDtoRoleEnum",
    "CreateIndividualUserDtoStatusEnum",
    "CreateIndividualUserDtoLanguageEnum",
    "CreateUserDtoRoleEnum",
    "CreateUserDtoStatusEnum",
    "CreateUserDtoLanguageEnum",
    "FilterUserDtoRolesEnum",
    "FilterUserDtoStatusesEnum",
    "SortUserDtoOrderByEnum",
    "SortUserDtoOrderEnum",
    "UpdateUserDtoRoleEnum",
    "UpdateUserDtoStatusEnum",
    "UpdateUserDtoLanguageEnum",
    "UserRoleEnum",
    "UserStatusEnum",
    "UserLanguageEnum",
]);

let typeMap: {[index: string]: any} = {
    "ActivateUserDto": ActivateUserDto,
    "AuthConfirmEmailDto": AuthConfirmEmailDto,
    "AuthEmailLoginDto": AuthEmailLoginDto,
    "AuthForgotPasswordDto": AuthForgotPasswordDto,
    "AuthRegisterLoginDto": AuthRegisterLoginDto,
    "AuthResetPasswordDto": AuthResetPasswordDto,
    "AuthUpdateDto": AuthUpdateDto,
    "Buff": Buff,
    "Channel": Channel,
    "CreateBuffDto": CreateBuffDto,
    "CreateChannelDto": CreateChannelDto,
    "CreateGuildDto": CreateGuildDto,
    "CreateIndividualUserDto": CreateIndividualUserDto,
    "CreateUserDto": CreateUserDto,
    "ErrorResponse": ErrorResponse,
    "FileType": FileType,
    "FilterUserDto": FilterUserDto,
    "Guild": Guild,
    "HealthControllerCheck200Response": HealthControllerCheck200Response,
    "HealthControllerCheck200ResponseInfoValue": HealthControllerCheck200ResponseInfoValue,
    "HealthControllerCheck503Response": HealthControllerCheck503Response,
    "LoginResponseType": LoginResponseType,
    "PageDto": PageDto,
    "PageMetaDto": PageMetaDto,
    "QueryUserDto": QueryUserDto,
    "RefreshResponseType": RefreshResponseType,
    "SortUserDto": SortUserDto,
    "UpdateUserDto": UpdateUserDto,
    "User": User,
    "UserStatistics": UserStatistics,
    "UsersControllerFindAll200Response": UsersControllerFindAll200Response,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
