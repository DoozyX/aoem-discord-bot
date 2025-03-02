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
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authConfirmEmailDto
     */
    public authControllerConfirmEmailV1WithHttpInfo(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerConfirmEmailV1WithHttpInfo(authConfirmEmailDto, _options);
        return result.toPromise();
    }

    /**
     * @param authConfirmEmailDto
     */
    public authControllerConfirmEmailV1(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerConfirmEmailV1(authConfirmEmailDto, _options);
        return result.toPromise();
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPasswordV1WithHttpInfo(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerForgotPasswordV1WithHttpInfo(authForgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPasswordV1(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerForgotPasswordV1(authForgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLoginV1WithHttpInfo(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Promise<HttpInfo<LoginResponseType>> {
        const result = this.api.authControllerLoginV1WithHttpInfo(authEmailLoginDto, _options);
        return result.toPromise();
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLoginV1(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Promise<LoginResponseType> {
        const result = this.api.authControllerLoginV1(authEmailLoginDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerLogoutV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerLogoutV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerLogoutV1(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerLogoutV1(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMeV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.authControllerMeV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMeV1(_options?: Configuration): Promise<User> {
        const result = this.api.authControllerMeV1(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerRefreshV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<RefreshResponseType>> {
        const result = this.api.authControllerRefreshV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerRefreshV1(_options?: Configuration): Promise<RefreshResponseType> {
        const result = this.api.authControllerRefreshV1(_options);
        return result.toPromise();
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegisterV1WithHttpInfo(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerRegisterV1WithHttpInfo(authRegisterLoginDto, _options);
        return result.toPromise();
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegisterV1(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerRegisterV1(authRegisterLoginDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerResendVerifyMailV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerResendVerifyMailV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerResendVerifyMailV1(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerResendVerifyMailV1(_options);
        return result.toPromise();
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPasswordV1WithHttpInfo(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerResetPasswordV1WithHttpInfo(authResetPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPasswordV1(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerResetPasswordV1(authResetPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdateV1WithHttpInfo(authUpdateDto: AuthUpdateDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.authControllerUpdateV1WithHttpInfo(authUpdateDto, _options);
        return result.toPromise();
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdateV1(authUpdateDto: AuthUpdateDto, _options?: Configuration): Promise<User> {
        const result = this.api.authControllerUpdateV1(authUpdateDto, _options);
        return result.toPromise();
    }


}



import { ObservableBuffsApi } from './ObservableAPI';

import { BuffsApiRequestFactory, BuffsApiResponseProcessor} from "../apis/BuffsApi";
export class PromiseBuffsApi {
    private api: ObservableBuffsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BuffsApiRequestFactory,
        responseProcessor?: BuffsApiResponseProcessor
    ) {
        this.api = new ObservableBuffsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createBuffDto
     */
    public buffsControllerCreateV1WithHttpInfo(createBuffDto: CreateBuffDto, _options?: Configuration): Promise<HttpInfo<Buff>> {
        const result = this.api.buffsControllerCreateV1WithHttpInfo(createBuffDto, _options);
        return result.toPromise();
    }

    /**
     * @param createBuffDto
     */
    public buffsControllerCreateV1(createBuffDto: CreateBuffDto, _options?: Configuration): Promise<Buff> {
        const result = this.api.buffsControllerCreateV1(createBuffDto, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAllV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<HttpInfo<Array<Buff>>> {
        const result = this.api.buffsControllerFindAllV1WithHttpInfo(guildUid, type, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAllV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<Array<Buff>> {
        const result = this.api.buffsControllerFindAllV1(guildUid, type, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     * @param position
     */
    public buffsControllerRemoveAtV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Promise<HttpInfo<Buff>> {
        const result = this.api.buffsControllerRemoveAtV1WithHttpInfo(guildUid, type, position, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     * @param position
     */
    public buffsControllerRemoveAtV1(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Promise<Buff> {
        const result = this.api.buffsControllerRemoveAtV1(guildUid, type, position, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerRemoveFirstV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<HttpInfo<Buff>> {
        const result = this.api.buffsControllerRemoveFirstV1WithHttpInfo(guildUid, type, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerRemoveFirstV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<Buff> {
        const result = this.api.buffsControllerRemoveFirstV1(guildUid, type, _options);
        return result.toPromise();
    }


}



import { ObservableChannelsApi } from './ObservableAPI';

import { ChannelsApiRequestFactory, ChannelsApiResponseProcessor} from "../apis/ChannelsApi";
export class PromiseChannelsApi {
    private api: ObservableChannelsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChannelsApiRequestFactory,
        responseProcessor?: ChannelsApiResponseProcessor
    ) {
        this.api = new ObservableChannelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createChannelDto
     */
    public channelsControllerCreateV1WithHttpInfo(createChannelDto: CreateChannelDto, _options?: Configuration): Promise<HttpInfo<Channel>> {
        const result = this.api.channelsControllerCreateV1WithHttpInfo(createChannelDto, _options);
        return result.toPromise();
    }

    /**
     * @param createChannelDto
     */
    public channelsControllerCreateV1(createChannelDto: CreateChannelDto, _options?: Configuration): Promise<Channel> {
        const result = this.api.channelsControllerCreateV1(createChannelDto, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOneV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<HttpInfo<Channel>> {
        const result = this.api.channelsControllerFindOneV1WithHttpInfo(guildUid, type, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOneV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<Channel> {
        const result = this.api.channelsControllerFindOneV1(guildUid, type, _options);
        return result.toPromise();
    }


}



import { ObservableFilesApi } from './ObservableAPI';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class PromiseFilesApi {
    private api: ObservableFilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [file]
     */
    public filesLocalControllerUploadFileV1WithHttpInfo(file?: HttpFile, _options?: Configuration): Promise<HttpInfo<FileType>> {
        const result = this.api.filesLocalControllerUploadFileV1WithHttpInfo(file, _options);
        return result.toPromise();
    }

    /**
     * @param [file]
     */
    public filesLocalControllerUploadFileV1(file?: HttpFile, _options?: Configuration): Promise<FileType> {
        const result = this.api.filesLocalControllerUploadFileV1(file, _options);
        return result.toPromise();
    }


}



import { ObservableGuildsApi } from './ObservableAPI';

import { GuildsApiRequestFactory, GuildsApiResponseProcessor} from "../apis/GuildsApi";
export class PromiseGuildsApi {
    private api: ObservableGuildsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GuildsApiRequestFactory,
        responseProcessor?: GuildsApiResponseProcessor
    ) {
        this.api = new ObservableGuildsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createGuildDto
     */
    public guildsControllerCreateV1WithHttpInfo(createGuildDto: CreateGuildDto, _options?: Configuration): Promise<HttpInfo<Guild>> {
        const result = this.api.guildsControllerCreateV1WithHttpInfo(createGuildDto, _options);
        return result.toPromise();
    }

    /**
     * @param createGuildDto
     */
    public guildsControllerCreateV1(createGuildDto: CreateGuildDto, _options?: Configuration): Promise<Guild> {
        const result = this.api.guildsControllerCreateV1(createGuildDto, _options);
        return result.toPromise();
    }

    /**
     */
    public guildsControllerFindAllV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Guild>>> {
        const result = this.api.guildsControllerFindAllV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public guildsControllerFindAllV1(_options?: Configuration): Promise<Array<Guild>> {
        const result = this.api.guildsControllerFindAllV1(_options);
        return result.toPromise();
    }


}



import { ObservableHealthApi } from './ObservableAPI';

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class PromiseHealthApi {
    private api: ObservableHealthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public healthControllerCheckV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<HealthControllerCheckV1200Response>> {
        const result = this.api.healthControllerCheckV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public healthControllerCheckV1(_options?: Configuration): Promise<HealthControllerCheckV1200Response> {
        const result = this.api.healthControllerCheckV1(_options);
        return result.toPromise();
    }


}



import { ObservableHomeApi } from './ObservableAPI';

import { HomeApiRequestFactory, HomeApiResponseProcessor} from "../apis/HomeApi";
export class PromiseHomeApi {
    private api: ObservableHomeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HomeApiRequestFactory,
        responseProcessor?: HomeApiResponseProcessor
    ) {
        this.api = new ObservableHomeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public homeControllerAppInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.homeControllerAppInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public homeControllerAppInfo(_options?: Configuration): Promise<void> {
        const result = this.api.homeControllerAppInfo(_options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     * @param activateUserDto
     */
    public usersControllerActivateV1WithHttpInfo(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerActivateV1WithHttpInfo(id, activateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param activateUserDto
     */
    public usersControllerActivateV1(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerActivateV1(id, activateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividualV1WithHttpInfo(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerCreateIndividualV1WithHttpInfo(createIndividualUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividualV1(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerCreateIndividualV1(createIndividualUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreateV1WithHttpInfo(createUserDto: CreateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerCreateV1WithHttpInfo(createUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreateV1(createUserDto: CreateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerCreateV1(createUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAllV1WithHttpInfo(queryUserDto: QueryUserDto, _options?: Configuration): Promise<HttpInfo<UsersControllerFindAllV1200Response>> {
        const result = this.api.usersControllerFindAllV1WithHttpInfo(queryUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAllV1(queryUserDto: QueryUserDto, _options?: Configuration): Promise<UsersControllerFindAllV1200Response> {
        const result = this.api.usersControllerFindAllV1(queryUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public usersControllerFindOneV1WithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerFindOneV1WithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public usersControllerFindOneV1(id: string, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerFindOneV1(id, _options);
        return result.toPromise();
    }

    /**
     */
    public usersControllerStatisticsV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserStatistics>> {
        const result = this.api.usersControllerStatisticsV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersControllerStatisticsV1(_options?: Configuration): Promise<UserStatistics> {
        const result = this.api.usersControllerStatisticsV1(_options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdateV1WithHttpInfo(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerUpdateV1WithHttpInfo(id, updateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdateV1(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerUpdateV1(id, updateUserDto, _options);
        return result.toPromise();
    }


}



