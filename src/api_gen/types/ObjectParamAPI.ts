import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActivateUserDto } from '../models/ActivateUserDto';
import { AuthConfirmEmailDto } from '../models/AuthConfirmEmailDto';
import { AuthEmailLoginDto } from '../models/AuthEmailLoginDto';
import { AuthForgotPasswordDto } from '../models/AuthForgotPasswordDto';
import { AuthRegisterLoginDto } from '../models/AuthRegisterLoginDto';
import { AuthResetPasswordDto } from '../models/AuthResetPasswordDto';
import { AuthUpdateDto } from '../models/AuthUpdateDto';
import { Buff } from '../models/Buff';
import { Channel } from '../models/Channel';
import { CreateBuffDto } from '../models/CreateBuffDto';
import { CreateChannelDto } from '../models/CreateChannelDto';
import { CreateGuildDto } from '../models/CreateGuildDto';
import { CreateIndividualUserDto } from '../models/CreateIndividualUserDto';
import { CreateUserDto } from '../models/CreateUserDto';
import { ErrorResponse } from '../models/ErrorResponse';
import { FileType } from '../models/FileType';
import { FilterUserDto } from '../models/FilterUserDto';
import { Guild } from '../models/Guild';
import { HealthControllerCheckV1200Response } from '../models/HealthControllerCheckV1200Response';
import { HealthControllerCheckV1200ResponseInfoValue } from '../models/HealthControllerCheckV1200ResponseInfoValue';
import { HealthControllerCheckV1503Response } from '../models/HealthControllerCheckV1503Response';
import { LoginResponseType } from '../models/LoginResponseType';
import { PageDto } from '../models/PageDto';
import { PageMetaDto } from '../models/PageMetaDto';
import { QueryUserDto } from '../models/QueryUserDto';
import { RefreshResponseType } from '../models/RefreshResponseType';
import { SortUserDto } from '../models/SortUserDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { UserStatistics } from '../models/UserStatistics';
import { UsersControllerFindAllV1200Response } from '../models/UsersControllerFindAllV1200Response';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerConfirmEmailV1Request {
    /**
     * 
     * @type AuthConfirmEmailDto
     * @memberof AuthApiauthControllerConfirmEmailV1
     */
    authConfirmEmailDto: AuthConfirmEmailDto
}

export interface AuthApiAuthControllerForgotPasswordV1Request {
    /**
     * 
     * @type AuthForgotPasswordDto
     * @memberof AuthApiauthControllerForgotPasswordV1
     */
    authForgotPasswordDto: AuthForgotPasswordDto
}

export interface AuthApiAuthControllerLoginV1Request {
    /**
     * 
     * @type AuthEmailLoginDto
     * @memberof AuthApiauthControllerLoginV1
     */
    authEmailLoginDto: AuthEmailLoginDto
}

export interface AuthApiAuthControllerLogoutV1Request {
}

export interface AuthApiAuthControllerMeV1Request {
}

export interface AuthApiAuthControllerRefreshV1Request {
}

export interface AuthApiAuthControllerRegisterV1Request {
    /**
     * 
     * @type AuthRegisterLoginDto
     * @memberof AuthApiauthControllerRegisterV1
     */
    authRegisterLoginDto: AuthRegisterLoginDto
}

export interface AuthApiAuthControllerResendVerifyMailV1Request {
}

export interface AuthApiAuthControllerResetPasswordV1Request {
    /**
     * 
     * @type AuthResetPasswordDto
     * @memberof AuthApiauthControllerResetPasswordV1
     */
    authResetPasswordDto: AuthResetPasswordDto
}

export interface AuthApiAuthControllerUpdateV1Request {
    /**
     * 
     * @type AuthUpdateDto
     * @memberof AuthApiauthControllerUpdateV1
     */
    authUpdateDto: AuthUpdateDto
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authControllerConfirmEmailV1WithHttpInfo(param: AuthApiAuthControllerConfirmEmailV1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerConfirmEmailV1WithHttpInfo(param.authConfirmEmailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerConfirmEmailV1(param: AuthApiAuthControllerConfirmEmailV1Request, options?: Configuration): Promise<void> {
        return this.api.authControllerConfirmEmailV1(param.authConfirmEmailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgotPasswordV1WithHttpInfo(param: AuthApiAuthControllerForgotPasswordV1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerForgotPasswordV1WithHttpInfo(param.authForgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgotPasswordV1(param: AuthApiAuthControllerForgotPasswordV1Request, options?: Configuration): Promise<void> {
        return this.api.authControllerForgotPasswordV1(param.authForgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLoginV1WithHttpInfo(param: AuthApiAuthControllerLoginV1Request, options?: Configuration): Promise<HttpInfo<LoginResponseType>> {
        return this.api.authControllerLoginV1WithHttpInfo(param.authEmailLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLoginV1(param: AuthApiAuthControllerLoginV1Request, options?: Configuration): Promise<LoginResponseType> {
        return this.api.authControllerLoginV1(param.authEmailLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogoutV1WithHttpInfo(param: AuthApiAuthControllerLogoutV1Request = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerLogoutV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogoutV1(param: AuthApiAuthControllerLogoutV1Request = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerLogoutV1( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMeV1WithHttpInfo(param: AuthApiAuthControllerMeV1Request = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.authControllerMeV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMeV1(param: AuthApiAuthControllerMeV1Request = {}, options?: Configuration): Promise<User> {
        return this.api.authControllerMeV1( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRefreshV1WithHttpInfo(param: AuthApiAuthControllerRefreshV1Request = {}, options?: Configuration): Promise<HttpInfo<RefreshResponseType>> {
        return this.api.authControllerRefreshV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRefreshV1(param: AuthApiAuthControllerRefreshV1Request = {}, options?: Configuration): Promise<RefreshResponseType> {
        return this.api.authControllerRefreshV1( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRegisterV1WithHttpInfo(param: AuthApiAuthControllerRegisterV1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerRegisterV1WithHttpInfo(param.authRegisterLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRegisterV1(param: AuthApiAuthControllerRegisterV1Request, options?: Configuration): Promise<void> {
        return this.api.authControllerRegisterV1(param.authRegisterLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResendVerifyMailV1WithHttpInfo(param: AuthApiAuthControllerResendVerifyMailV1Request = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerResendVerifyMailV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResendVerifyMailV1(param: AuthApiAuthControllerResendVerifyMailV1Request = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerResendVerifyMailV1( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResetPasswordV1WithHttpInfo(param: AuthApiAuthControllerResetPasswordV1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerResetPasswordV1WithHttpInfo(param.authResetPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResetPasswordV1(param: AuthApiAuthControllerResetPasswordV1Request, options?: Configuration): Promise<void> {
        return this.api.authControllerResetPasswordV1(param.authResetPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateV1WithHttpInfo(param: AuthApiAuthControllerUpdateV1Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.authControllerUpdateV1WithHttpInfo(param.authUpdateDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateV1(param: AuthApiAuthControllerUpdateV1Request, options?: Configuration): Promise<User> {
        return this.api.authControllerUpdateV1(param.authUpdateDto,  options).toPromise();
    }

}

import { ObservableBuffsApi } from "./ObservableAPI";
import { BuffsApiRequestFactory, BuffsApiResponseProcessor} from "../apis/BuffsApi";

export interface BuffsApiBuffsControllerCreateV1Request {
    /**
     * 
     * @type CreateBuffDto
     * @memberof BuffsApibuffsControllerCreateV1
     */
    createBuffDto: CreateBuffDto
}

export interface BuffsApiBuffsControllerFindAllV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BuffsApibuffsControllerFindAllV1
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof BuffsApibuffsControllerFindAllV1
     */
    type: 'construction' | 'research' | 'training'
}

export interface BuffsApiBuffsControllerRemoveAtV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BuffsApibuffsControllerRemoveAtV1
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof BuffsApibuffsControllerRemoveAtV1
     */
    type: 'construction' | 'research' | 'training'
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BuffsApibuffsControllerRemoveAtV1
     */
    position: number
}

export interface BuffsApiBuffsControllerRemoveFirstV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BuffsApibuffsControllerRemoveFirstV1
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof BuffsApibuffsControllerRemoveFirstV1
     */
    type: 'construction' | 'research' | 'training'
}

export class ObjectBuffsApi {
    private api: ObservableBuffsApi

    public constructor(configuration: Configuration, requestFactory?: BuffsApiRequestFactory, responseProcessor?: BuffsApiResponseProcessor) {
        this.api = new ObservableBuffsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public buffsControllerCreateV1WithHttpInfo(param: BuffsApiBuffsControllerCreateV1Request, options?: Configuration): Promise<HttpInfo<Buff>> {
        return this.api.buffsControllerCreateV1WithHttpInfo(param.createBuffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerCreateV1(param: BuffsApiBuffsControllerCreateV1Request, options?: Configuration): Promise<Buff> {
        return this.api.buffsControllerCreateV1(param.createBuffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerFindAllV1WithHttpInfo(param: BuffsApiBuffsControllerFindAllV1Request, options?: Configuration): Promise<HttpInfo<Array<Buff>>> {
        return this.api.buffsControllerFindAllV1WithHttpInfo(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerFindAllV1(param: BuffsApiBuffsControllerFindAllV1Request, options?: Configuration): Promise<Array<Buff>> {
        return this.api.buffsControllerFindAllV1(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveAtV1WithHttpInfo(param: BuffsApiBuffsControllerRemoveAtV1Request, options?: Configuration): Promise<HttpInfo<Buff>> {
        return this.api.buffsControllerRemoveAtV1WithHttpInfo(param.guildUid, param.type, param.position,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveAtV1(param: BuffsApiBuffsControllerRemoveAtV1Request, options?: Configuration): Promise<Buff> {
        return this.api.buffsControllerRemoveAtV1(param.guildUid, param.type, param.position,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveFirstV1WithHttpInfo(param: BuffsApiBuffsControllerRemoveFirstV1Request, options?: Configuration): Promise<HttpInfo<Buff>> {
        return this.api.buffsControllerRemoveFirstV1WithHttpInfo(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveFirstV1(param: BuffsApiBuffsControllerRemoveFirstV1Request, options?: Configuration): Promise<Buff> {
        return this.api.buffsControllerRemoveFirstV1(param.guildUid, param.type,  options).toPromise();
    }

}

import { ObservableChannelsApi } from "./ObservableAPI";
import { ChannelsApiRequestFactory, ChannelsApiResponseProcessor} from "../apis/ChannelsApi";

export interface ChannelsApiChannelsControllerCreateV1Request {
    /**
     * 
     * @type CreateChannelDto
     * @memberof ChannelsApichannelsControllerCreateV1
     */
    createChannelDto: CreateChannelDto
}

export interface ChannelsApiChannelsControllerFindOneV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ChannelsApichannelsControllerFindOneV1
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof ChannelsApichannelsControllerFindOneV1
     */
    type: 'construction' | 'research' | 'training'
}

export class ObjectChannelsApi {
    private api: ObservableChannelsApi

    public constructor(configuration: Configuration, requestFactory?: ChannelsApiRequestFactory, responseProcessor?: ChannelsApiResponseProcessor) {
        this.api = new ObservableChannelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public channelsControllerCreateV1WithHttpInfo(param: ChannelsApiChannelsControllerCreateV1Request, options?: Configuration): Promise<HttpInfo<Channel>> {
        return this.api.channelsControllerCreateV1WithHttpInfo(param.createChannelDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public channelsControllerCreateV1(param: ChannelsApiChannelsControllerCreateV1Request, options?: Configuration): Promise<Channel> {
        return this.api.channelsControllerCreateV1(param.createChannelDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public channelsControllerFindOneV1WithHttpInfo(param: ChannelsApiChannelsControllerFindOneV1Request, options?: Configuration): Promise<HttpInfo<Channel>> {
        return this.api.channelsControllerFindOneV1WithHttpInfo(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public channelsControllerFindOneV1(param: ChannelsApiChannelsControllerFindOneV1Request, options?: Configuration): Promise<Channel> {
        return this.api.channelsControllerFindOneV1(param.guildUid, param.type,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiFilesLocalControllerUploadFileV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApifilesLocalControllerUploadFileV1
     */
    file?: HttpFile
}

export class ObjectFilesApi {
    private api: ObservableFilesApi

    public constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public filesLocalControllerUploadFileV1WithHttpInfo(param: FilesApiFilesLocalControllerUploadFileV1Request = {}, options?: Configuration): Promise<HttpInfo<FileType>> {
        return this.api.filesLocalControllerUploadFileV1WithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesLocalControllerUploadFileV1(param: FilesApiFilesLocalControllerUploadFileV1Request = {}, options?: Configuration): Promise<FileType> {
        return this.api.filesLocalControllerUploadFileV1(param.file,  options).toPromise();
    }

}

import { ObservableGuildsApi } from "./ObservableAPI";
import { GuildsApiRequestFactory, GuildsApiResponseProcessor} from "../apis/GuildsApi";

export interface GuildsApiGuildsControllerCreateV1Request {
    /**
     * 
     * @type CreateGuildDto
     * @memberof GuildsApiguildsControllerCreateV1
     */
    createGuildDto: CreateGuildDto
}

export interface GuildsApiGuildsControllerFindAllV1Request {
}

export class ObjectGuildsApi {
    private api: ObservableGuildsApi

    public constructor(configuration: Configuration, requestFactory?: GuildsApiRequestFactory, responseProcessor?: GuildsApiResponseProcessor) {
        this.api = new ObservableGuildsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public guildsControllerCreateV1WithHttpInfo(param: GuildsApiGuildsControllerCreateV1Request, options?: Configuration): Promise<HttpInfo<Guild>> {
        return this.api.guildsControllerCreateV1WithHttpInfo(param.createGuildDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public guildsControllerCreateV1(param: GuildsApiGuildsControllerCreateV1Request, options?: Configuration): Promise<Guild> {
        return this.api.guildsControllerCreateV1(param.createGuildDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public guildsControllerFindAllV1WithHttpInfo(param: GuildsApiGuildsControllerFindAllV1Request = {}, options?: Configuration): Promise<HttpInfo<Array<Guild>>> {
        return this.api.guildsControllerFindAllV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public guildsControllerFindAllV1(param: GuildsApiGuildsControllerFindAllV1Request = {}, options?: Configuration): Promise<Array<Guild>> {
        return this.api.guildsControllerFindAllV1( options).toPromise();
    }

}

import { ObservableHealthApi } from "./ObservableAPI";
import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";

export interface HealthApiHealthControllerCheckV1Request {
}

export class ObjectHealthApi {
    private api: ObservableHealthApi

    public constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public healthControllerCheckV1WithHttpInfo(param: HealthApiHealthControllerCheckV1Request = {}, options?: Configuration): Promise<HttpInfo<HealthControllerCheckV1200Response>> {
        return this.api.healthControllerCheckV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public healthControllerCheckV1(param: HealthApiHealthControllerCheckV1Request = {}, options?: Configuration): Promise<HealthControllerCheckV1200Response> {
        return this.api.healthControllerCheckV1( options).toPromise();
    }

}

import { ObservableHomeApi } from "./ObservableAPI";
import { HomeApiRequestFactory, HomeApiResponseProcessor} from "../apis/HomeApi";

export interface HomeApiHomeControllerAppInfoRequest {
}

export class ObjectHomeApi {
    private api: ObservableHomeApi

    public constructor(configuration: Configuration, requestFactory?: HomeApiRequestFactory, responseProcessor?: HomeApiResponseProcessor) {
        this.api = new ObservableHomeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public homeControllerAppInfoWithHttpInfo(param: HomeApiHomeControllerAppInfoRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.homeControllerAppInfoWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public homeControllerAppInfo(param: HomeApiHomeControllerAppInfoRequest = {}, options?: Configuration): Promise<void> {
        return this.api.homeControllerAppInfo( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersControllerActivateV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersControllerActivateV1
     */
    id: string
    /**
     * 
     * @type ActivateUserDto
     * @memberof UsersApiusersControllerActivateV1
     */
    activateUserDto: ActivateUserDto
}

export interface UsersApiUsersControllerCreateIndividualV1Request {
    /**
     * 
     * @type CreateIndividualUserDto
     * @memberof UsersApiusersControllerCreateIndividualV1
     */
    createIndividualUserDto: CreateIndividualUserDto
}

export interface UsersApiUsersControllerCreateV1Request {
    /**
     * 
     * @type CreateUserDto
     * @memberof UsersApiusersControllerCreateV1
     */
    createUserDto: CreateUserDto
}

export interface UsersApiUsersControllerFindAllV1Request {
    /**
     * 
     * @type QueryUserDto
     * @memberof UsersApiusersControllerFindAllV1
     */
    queryUserDto: QueryUserDto
}

export interface UsersApiUsersControllerFindOneV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersControllerFindOneV1
     */
    id: string
}

export interface UsersApiUsersControllerStatisticsV1Request {
}

export interface UsersApiUsersControllerUpdateV1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersControllerUpdateV1
     */
    id: string
    /**
     * 
     * @type UpdateUserDto
     * @memberof UsersApiusersControllerUpdateV1
     */
    updateUserDto: UpdateUserDto
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public usersControllerActivateV1WithHttpInfo(param: UsersApiUsersControllerActivateV1Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerActivateV1WithHttpInfo(param.id, param.activateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerActivateV1(param: UsersApiUsersControllerActivateV1Request, options?: Configuration): Promise<User> {
        return this.api.usersControllerActivateV1(param.id, param.activateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateIndividualV1WithHttpInfo(param: UsersApiUsersControllerCreateIndividualV1Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerCreateIndividualV1WithHttpInfo(param.createIndividualUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateIndividualV1(param: UsersApiUsersControllerCreateIndividualV1Request, options?: Configuration): Promise<User> {
        return this.api.usersControllerCreateIndividualV1(param.createIndividualUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateV1WithHttpInfo(param: UsersApiUsersControllerCreateV1Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerCreateV1WithHttpInfo(param.createUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateV1(param: UsersApiUsersControllerCreateV1Request, options?: Configuration): Promise<User> {
        return this.api.usersControllerCreateV1(param.createUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindAllV1WithHttpInfo(param: UsersApiUsersControllerFindAllV1Request, options?: Configuration): Promise<HttpInfo<UsersControllerFindAllV1200Response>> {
        return this.api.usersControllerFindAllV1WithHttpInfo(param.queryUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindAllV1(param: UsersApiUsersControllerFindAllV1Request, options?: Configuration): Promise<UsersControllerFindAllV1200Response> {
        return this.api.usersControllerFindAllV1(param.queryUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindOneV1WithHttpInfo(param: UsersApiUsersControllerFindOneV1Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerFindOneV1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindOneV1(param: UsersApiUsersControllerFindOneV1Request, options?: Configuration): Promise<User> {
        return this.api.usersControllerFindOneV1(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerStatisticsV1WithHttpInfo(param: UsersApiUsersControllerStatisticsV1Request = {}, options?: Configuration): Promise<HttpInfo<UserStatistics>> {
        return this.api.usersControllerStatisticsV1WithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerStatisticsV1(param: UsersApiUsersControllerStatisticsV1Request = {}, options?: Configuration): Promise<UserStatistics> {
        return this.api.usersControllerStatisticsV1( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerUpdateV1WithHttpInfo(param: UsersApiUsersControllerUpdateV1Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerUpdateV1WithHttpInfo(param.id, param.updateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerUpdateV1(param: UsersApiUsersControllerUpdateV1Request, options?: Configuration): Promise<User> {
        return this.api.usersControllerUpdateV1(param.id, param.updateUserDto,  options).toPromise();
    }

}
