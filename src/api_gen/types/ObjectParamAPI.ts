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
import { HealthControllerCheck200Response } from '../models/HealthControllerCheck200Response';
import { HealthControllerCheck200ResponseInfoValue } from '../models/HealthControllerCheck200ResponseInfoValue';
import { HealthControllerCheck503Response } from '../models/HealthControllerCheck503Response';
import { LoginResponseType } from '../models/LoginResponseType';
import { PageDto } from '../models/PageDto';
import { PageMetaDto } from '../models/PageMetaDto';
import { QueryUserDto } from '../models/QueryUserDto';
import { RefreshResponseType } from '../models/RefreshResponseType';
import { SortUserDto } from '../models/SortUserDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { UserStatistics } from '../models/UserStatistics';
import { UsersControllerFindAll200Response } from '../models/UsersControllerFindAll200Response';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerConfirmEmailRequest {
    /**
     * 
     * @type AuthConfirmEmailDto
     * @memberof AuthApiauthControllerConfirmEmail
     */
    authConfirmEmailDto: AuthConfirmEmailDto
}

export interface AuthApiAuthControllerForgotPasswordRequest {
    /**
     * 
     * @type AuthForgotPasswordDto
     * @memberof AuthApiauthControllerForgotPassword
     */
    authForgotPasswordDto: AuthForgotPasswordDto
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type AuthEmailLoginDto
     * @memberof AuthApiauthControllerLogin
     */
    authEmailLoginDto: AuthEmailLoginDto
}

export interface AuthApiAuthControllerLogoutRequest {
}

export interface AuthApiAuthControllerMeRequest {
}

export interface AuthApiAuthControllerRefreshRequest {
}

export interface AuthApiAuthControllerRegisterRequest {
    /**
     * 
     * @type AuthRegisterLoginDto
     * @memberof AuthApiauthControllerRegister
     */
    authRegisterLoginDto: AuthRegisterLoginDto
}

export interface AuthApiAuthControllerResendVerifyMailRequest {
}

export interface AuthApiAuthControllerResetPasswordRequest {
    /**
     * 
     * @type AuthResetPasswordDto
     * @memberof AuthApiauthControllerResetPassword
     */
    authResetPasswordDto: AuthResetPasswordDto
}

export interface AuthApiAuthControllerUpdateRequest {
    /**
     * 
     * @type AuthUpdateDto
     * @memberof AuthApiauthControllerUpdate
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
    public authControllerConfirmEmailWithHttpInfo(param: AuthApiAuthControllerConfirmEmailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerConfirmEmailWithHttpInfo(param.authConfirmEmailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerConfirmEmail(param: AuthApiAuthControllerConfirmEmailRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerConfirmEmail(param.authConfirmEmailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgotPasswordWithHttpInfo(param: AuthApiAuthControllerForgotPasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerForgotPasswordWithHttpInfo(param.authForgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgotPassword(param: AuthApiAuthControllerForgotPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerForgotPassword(param.authForgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<HttpInfo<LoginResponseType>> {
        return this.api.authControllerLoginWithHttpInfo(param.authEmailLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<LoginResponseType> {
        return this.api.authControllerLogin(param.authEmailLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogoutWithHttpInfo(param: AuthApiAuthControllerLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogout(param: AuthApiAuthControllerLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerLogout( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMeWithHttpInfo(param: AuthApiAuthControllerMeRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.authControllerMeWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMe(param: AuthApiAuthControllerMeRequest = {}, options?: Configuration): Promise<User> {
        return this.api.authControllerMe( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRefreshWithHttpInfo(param: AuthApiAuthControllerRefreshRequest = {}, options?: Configuration): Promise<HttpInfo<RefreshResponseType>> {
        return this.api.authControllerRefreshWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRefresh(param: AuthApiAuthControllerRefreshRequest = {}, options?: Configuration): Promise<RefreshResponseType> {
        return this.api.authControllerRefresh( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRegisterWithHttpInfo(param: AuthApiAuthControllerRegisterRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerRegisterWithHttpInfo(param.authRegisterLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRegister(param: AuthApiAuthControllerRegisterRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerRegister(param.authRegisterLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResendVerifyMailWithHttpInfo(param: AuthApiAuthControllerResendVerifyMailRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerResendVerifyMailWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResendVerifyMail(param: AuthApiAuthControllerResendVerifyMailRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerResendVerifyMail( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResetPasswordWithHttpInfo(param: AuthApiAuthControllerResetPasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerResetPasswordWithHttpInfo(param.authResetPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResetPassword(param: AuthApiAuthControllerResetPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerResetPassword(param.authResetPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateWithHttpInfo(param: AuthApiAuthControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.authControllerUpdateWithHttpInfo(param.authUpdateDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdate(param: AuthApiAuthControllerUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.authControllerUpdate(param.authUpdateDto,  options).toPromise();
    }

}

import { ObservableBuffsApi } from "./ObservableAPI";
import { BuffsApiRequestFactory, BuffsApiResponseProcessor} from "../apis/BuffsApi";

export interface BuffsApiBuffsControllerCreateRequest {
    /**
     * 
     * @type CreateBuffDto
     * @memberof BuffsApibuffsControllerCreate
     */
    createBuffDto: CreateBuffDto
}

export interface BuffsApiBuffsControllerFindAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BuffsApibuffsControllerFindAll
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof BuffsApibuffsControllerFindAll
     */
    type: 'construction' | 'research' | 'training'
}

export interface BuffsApiBuffsControllerRemoveAtRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BuffsApibuffsControllerRemoveAt
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof BuffsApibuffsControllerRemoveAt
     */
    type: 'construction' | 'research' | 'training'
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BuffsApibuffsControllerRemoveAt
     */
    position: number
}

export interface BuffsApiBuffsControllerRemoveFirstRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BuffsApibuffsControllerRemoveFirst
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof BuffsApibuffsControllerRemoveFirst
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
    public buffsControllerCreateWithHttpInfo(param: BuffsApiBuffsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Buff>> {
        return this.api.buffsControllerCreateWithHttpInfo(param.createBuffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerCreate(param: BuffsApiBuffsControllerCreateRequest, options?: Configuration): Promise<Buff> {
        return this.api.buffsControllerCreate(param.createBuffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerFindAllWithHttpInfo(param: BuffsApiBuffsControllerFindAllRequest, options?: Configuration): Promise<HttpInfo<Array<Buff>>> {
        return this.api.buffsControllerFindAllWithHttpInfo(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerFindAll(param: BuffsApiBuffsControllerFindAllRequest, options?: Configuration): Promise<Array<Buff>> {
        return this.api.buffsControllerFindAll(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveAtWithHttpInfo(param: BuffsApiBuffsControllerRemoveAtRequest, options?: Configuration): Promise<HttpInfo<Buff>> {
        return this.api.buffsControllerRemoveAtWithHttpInfo(param.guildUid, param.type, param.position,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveAt(param: BuffsApiBuffsControllerRemoveAtRequest, options?: Configuration): Promise<Buff> {
        return this.api.buffsControllerRemoveAt(param.guildUid, param.type, param.position,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveFirstWithHttpInfo(param: BuffsApiBuffsControllerRemoveFirstRequest, options?: Configuration): Promise<HttpInfo<Buff>> {
        return this.api.buffsControllerRemoveFirstWithHttpInfo(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public buffsControllerRemoveFirst(param: BuffsApiBuffsControllerRemoveFirstRequest, options?: Configuration): Promise<Buff> {
        return this.api.buffsControllerRemoveFirst(param.guildUid, param.type,  options).toPromise();
    }

}

import { ObservableChannelsApi } from "./ObservableAPI";
import { ChannelsApiRequestFactory, ChannelsApiResponseProcessor} from "../apis/ChannelsApi";

export interface ChannelsApiChannelsControllerCreateRequest {
    /**
     * 
     * @type CreateChannelDto
     * @memberof ChannelsApichannelsControllerCreate
     */
    createChannelDto: CreateChannelDto
}

export interface ChannelsApiChannelsControllerFindOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ChannelsApichannelsControllerFindOne
     */
    guildUid: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;construction&#39; | &#39;research&#39; | &#39;training&#39;
     * @memberof ChannelsApichannelsControllerFindOne
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
    public channelsControllerCreateWithHttpInfo(param: ChannelsApiChannelsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Channel>> {
        return this.api.channelsControllerCreateWithHttpInfo(param.createChannelDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public channelsControllerCreate(param: ChannelsApiChannelsControllerCreateRequest, options?: Configuration): Promise<Channel> {
        return this.api.channelsControllerCreate(param.createChannelDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public channelsControllerFindOneWithHttpInfo(param: ChannelsApiChannelsControllerFindOneRequest, options?: Configuration): Promise<HttpInfo<Channel>> {
        return this.api.channelsControllerFindOneWithHttpInfo(param.guildUid, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public channelsControllerFindOne(param: ChannelsApiChannelsControllerFindOneRequest, options?: Configuration): Promise<Channel> {
        return this.api.channelsControllerFindOne(param.guildUid, param.type,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiFilesLocalControllerUploadFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApifilesLocalControllerUploadFile
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
    public filesLocalControllerUploadFileWithHttpInfo(param: FilesApiFilesLocalControllerUploadFileRequest = {}, options?: Configuration): Promise<HttpInfo<FileType>> {
        return this.api.filesLocalControllerUploadFileWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesLocalControllerUploadFile(param: FilesApiFilesLocalControllerUploadFileRequest = {}, options?: Configuration): Promise<FileType> {
        return this.api.filesLocalControllerUploadFile(param.file,  options).toPromise();
    }

}

import { ObservableGuildsApi } from "./ObservableAPI";
import { GuildsApiRequestFactory, GuildsApiResponseProcessor} from "../apis/GuildsApi";

export interface GuildsApiGuildsControllerCreateRequest {
    /**
     * 
     * @type CreateGuildDto
     * @memberof GuildsApiguildsControllerCreate
     */
    createGuildDto: CreateGuildDto
}

export interface GuildsApiGuildsControllerFindAllRequest {
}

export class ObjectGuildsApi {
    private api: ObservableGuildsApi

    public constructor(configuration: Configuration, requestFactory?: GuildsApiRequestFactory, responseProcessor?: GuildsApiResponseProcessor) {
        this.api = new ObservableGuildsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public guildsControllerCreateWithHttpInfo(param: GuildsApiGuildsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Guild>> {
        return this.api.guildsControllerCreateWithHttpInfo(param.createGuildDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public guildsControllerCreate(param: GuildsApiGuildsControllerCreateRequest, options?: Configuration): Promise<Guild> {
        return this.api.guildsControllerCreate(param.createGuildDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public guildsControllerFindAllWithHttpInfo(param: GuildsApiGuildsControllerFindAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Guild>>> {
        return this.api.guildsControllerFindAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public guildsControllerFindAll(param: GuildsApiGuildsControllerFindAllRequest = {}, options?: Configuration): Promise<Array<Guild>> {
        return this.api.guildsControllerFindAll( options).toPromise();
    }

}

import { ObservableHealthApi } from "./ObservableAPI";
import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";

export interface HealthApiHealthControllerCheckRequest {
}

export class ObjectHealthApi {
    private api: ObservableHealthApi

    public constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public healthControllerCheckWithHttpInfo(param: HealthApiHealthControllerCheckRequest = {}, options?: Configuration): Promise<HttpInfo<HealthControllerCheck200Response>> {
        return this.api.healthControllerCheckWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public healthControllerCheck(param: HealthApiHealthControllerCheckRequest = {}, options?: Configuration): Promise<HealthControllerCheck200Response> {
        return this.api.healthControllerCheck( options).toPromise();
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

export interface UsersApiUsersControllerActivateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersControllerActivate
     */
    id: string
    /**
     * 
     * @type ActivateUserDto
     * @memberof UsersApiusersControllerActivate
     */
    activateUserDto: ActivateUserDto
}

export interface UsersApiUsersControllerCreateRequest {
    /**
     * 
     * @type CreateUserDto
     * @memberof UsersApiusersControllerCreate
     */
    createUserDto: CreateUserDto
}

export interface UsersApiUsersControllerCreateIndividualRequest {
    /**
     * 
     * @type CreateIndividualUserDto
     * @memberof UsersApiusersControllerCreateIndividual
     */
    createIndividualUserDto: CreateIndividualUserDto
}

export interface UsersApiUsersControllerFindAllRequest {
    /**
     * 
     * @type QueryUserDto
     * @memberof UsersApiusersControllerFindAll
     */
    queryUserDto: QueryUserDto
}

export interface UsersApiUsersControllerFindOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersControllerFindOne
     */
    id: string
}

export interface UsersApiUsersControllerStatisticsRequest {
}

export interface UsersApiUsersControllerUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersControllerUpdate
     */
    id: string
    /**
     * 
     * @type UpdateUserDto
     * @memberof UsersApiusersControllerUpdate
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
    public usersControllerActivateWithHttpInfo(param: UsersApiUsersControllerActivateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerActivateWithHttpInfo(param.id, param.activateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerActivate(param: UsersApiUsersControllerActivateRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerActivate(param.id, param.activateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateWithHttpInfo(param: UsersApiUsersControllerCreateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerCreateWithHttpInfo(param.createUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreate(param: UsersApiUsersControllerCreateRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerCreate(param.createUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateIndividualWithHttpInfo(param: UsersApiUsersControllerCreateIndividualRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerCreateIndividualWithHttpInfo(param.createIndividualUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateIndividual(param: UsersApiUsersControllerCreateIndividualRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerCreateIndividual(param.createIndividualUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindAllWithHttpInfo(param: UsersApiUsersControllerFindAllRequest, options?: Configuration): Promise<HttpInfo<UsersControllerFindAll200Response>> {
        return this.api.usersControllerFindAllWithHttpInfo(param.queryUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindAll(param: UsersApiUsersControllerFindAllRequest, options?: Configuration): Promise<UsersControllerFindAll200Response> {
        return this.api.usersControllerFindAll(param.queryUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindOneWithHttpInfo(param: UsersApiUsersControllerFindOneRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerFindOneWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindOne(param: UsersApiUsersControllerFindOneRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerFindOne(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerStatisticsWithHttpInfo(param: UsersApiUsersControllerStatisticsRequest = {}, options?: Configuration): Promise<HttpInfo<UserStatistics>> {
        return this.api.usersControllerStatisticsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerStatistics(param: UsersApiUsersControllerStatisticsRequest = {}, options?: Configuration): Promise<UserStatistics> {
        return this.api.usersControllerStatistics( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerUpdateWithHttpInfo(param: UsersApiUsersControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerUpdateWithHttpInfo(param.id, param.updateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerUpdate(param: UsersApiUsersControllerUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerUpdate(param.id, param.updateUserDto,  options).toPromise();
    }

}
