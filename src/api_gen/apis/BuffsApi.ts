// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Buff } from '../models/Buff';
import { CreateBuffDto } from '../models/CreateBuffDto';

/**
 * no description
 */
export class BuffsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param createBuffDto 
     */
    public async buffsControllerCreateV1(createBuffDto: CreateBuffDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createBuffDto' is not null or undefined
        if (createBuffDto === null || createBuffDto === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerCreateV1", "createBuffDto");
        }


        // Path Params
        const localVarPath = '/api/v1/buffs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBuffDto, "CreateBuffDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param guildUid 
     * @param type 
     */
    public async buffsControllerFindAllV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'guildUid' is not null or undefined
        if (guildUid === null || guildUid === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerFindAllV1", "guildUid");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerFindAllV1", "type");
        }


        // Path Params
        const localVarPath = '/api/v1/buffs/{guildUid}/{type}'
            .replace('{' + 'guildUid' + '}', encodeURIComponent(String(guildUid)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param guildUid 
     * @param type 
     * @param position 
     */
    public async buffsControllerRemoveAtV1(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'guildUid' is not null or undefined
        if (guildUid === null || guildUid === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerRemoveAtV1", "guildUid");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerRemoveAtV1", "type");
        }


        // verify required parameter 'position' is not null or undefined
        if (position === null || position === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerRemoveAtV1", "position");
        }


        // Path Params
        const localVarPath = '/api/v1/buffs/{guildUid}/{type}/{position}'
            .replace('{' + 'guildUid' + '}', encodeURIComponent(String(guildUid)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)))
            .replace('{' + 'position' + '}', encodeURIComponent(String(position)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param guildUid 
     * @param type 
     */
    public async buffsControllerRemoveFirstV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'guildUid' is not null or undefined
        if (guildUid === null || guildUid === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerRemoveFirstV1", "guildUid");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("BuffsApi", "buffsControllerRemoveFirstV1", "type");
        }


        // Path Params
        const localVarPath = '/api/v1/buffs/{guildUid}/{type}'
            .replace('{' + 'guildUid' + '}', encodeURIComponent(String(guildUid)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class BuffsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buffsControllerCreateV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buffsControllerCreateV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Buff >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Buff = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Buff", ""
            ) as Buff;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Buff = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Buff", ""
            ) as Buff;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buffsControllerFindAllV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buffsControllerFindAllV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Buff> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Buff> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Buff>", ""
            ) as Array<Buff>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid data provided", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Buff> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Buff>", ""
            ) as Array<Buff>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buffsControllerRemoveAtV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buffsControllerRemoveAtV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Buff >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Buff = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Buff", ""
            ) as Buff;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid data provided", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Buff = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Buff", ""
            ) as Buff;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buffsControllerRemoveFirstV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buffsControllerRemoveFirstV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Buff >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Buff = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Buff", ""
            ) as Buff;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid data provided", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Buff = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Buff", ""
            ) as Buff;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
