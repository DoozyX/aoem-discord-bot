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
    public authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto, _options);
        return result.toPromise();
    }

    /**
     * @param authConfirmEmailDto
     */
    public authControllerConfirmEmail(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerConfirmEmail(authConfirmEmailDto, _options);
        return result.toPromise();
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPassword(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerForgotPassword(authForgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLoginWithHttpInfo(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Promise<HttpInfo<LoginResponseType>> {
        const result = this.api.authControllerLoginWithHttpInfo(authEmailLoginDto, _options);
        return result.toPromise();
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLogin(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Promise<LoginResponseType> {
        const result = this.api.authControllerLogin(authEmailLoginDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerLogoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerLogoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerLogout(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerLogout(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.authControllerMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMe(_options?: Configuration): Promise<User> {
        const result = this.api.authControllerMe(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerRefreshWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RefreshResponseType>> {
        const result = this.api.authControllerRefreshWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerRefresh(_options?: Configuration): Promise<RefreshResponseType> {
        const result = this.api.authControllerRefresh(_options);
        return result.toPromise();
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegisterWithHttpInfo(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerRegisterWithHttpInfo(authRegisterLoginDto, _options);
        return result.toPromise();
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegister(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerRegister(authRegisterLoginDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerResendVerifyMailWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerResendVerifyMailWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerResendVerifyMail(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerResendVerifyMail(_options);
        return result.toPromise();
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPasswordWithHttpInfo(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerResetPasswordWithHttpInfo(authResetPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPassword(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerResetPassword(authResetPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdateWithHttpInfo(authUpdateDto: AuthUpdateDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.authControllerUpdateWithHttpInfo(authUpdateDto, _options);
        return result.toPromise();
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdate(authUpdateDto: AuthUpdateDto, _options?: Configuration): Promise<User> {
        const result = this.api.authControllerUpdate(authUpdateDto, _options);
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
    public buffsControllerCreateWithHttpInfo(createBuffDto: CreateBuffDto, _options?: Configuration): Promise<HttpInfo<Buff>> {
        const result = this.api.buffsControllerCreateWithHttpInfo(createBuffDto, _options);
        return result.toPromise();
    }

    /**
     * @param createBuffDto
     */
    public buffsControllerCreate(createBuffDto: CreateBuffDto, _options?: Configuration): Promise<Buff> {
        const result = this.api.buffsControllerCreate(createBuffDto, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAllWithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<HttpInfo<Array<Buff>>> {
        const result = this.api.buffsControllerFindAllWithHttpInfo(guildUid, type, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAll(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<Array<Buff>> {
        const result = this.api.buffsControllerFindAll(guildUid, type, _options);
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
    public channelsControllerCreateWithHttpInfo(createChannelDto: CreateChannelDto, _options?: Configuration): Promise<HttpInfo<Channel>> {
        const result = this.api.channelsControllerCreateWithHttpInfo(createChannelDto, _options);
        return result.toPromise();
    }

    /**
     * @param createChannelDto
     */
    public channelsControllerCreate(createChannelDto: CreateChannelDto, _options?: Configuration): Promise<Channel> {
        const result = this.api.channelsControllerCreate(createChannelDto, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOneWithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<HttpInfo<Channel>> {
        const result = this.api.channelsControllerFindOneWithHttpInfo(guildUid, type, _options);
        return result.toPromise();
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOne(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Promise<Channel> {
        const result = this.api.channelsControllerFindOne(guildUid, type, _options);
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
    public filesLocalControllerUploadFileWithHttpInfo(file?: HttpFile, _options?: Configuration): Promise<HttpInfo<FileType>> {
        const result = this.api.filesLocalControllerUploadFileWithHttpInfo(file, _options);
        return result.toPromise();
    }

    /**
     * @param [file]
     */
    public filesLocalControllerUploadFile(file?: HttpFile, _options?: Configuration): Promise<FileType> {
        const result = this.api.filesLocalControllerUploadFile(file, _options);
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
    public guildsControllerCreateWithHttpInfo(createGuildDto: CreateGuildDto, _options?: Configuration): Promise<HttpInfo<Guild>> {
        const result = this.api.guildsControllerCreateWithHttpInfo(createGuildDto, _options);
        return result.toPromise();
    }

    /**
     * @param createGuildDto
     */
    public guildsControllerCreate(createGuildDto: CreateGuildDto, _options?: Configuration): Promise<Guild> {
        const result = this.api.guildsControllerCreate(createGuildDto, _options);
        return result.toPromise();
    }

    /**
     */
    public guildsControllerFindAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Guild>>> {
        const result = this.api.guildsControllerFindAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public guildsControllerFindAll(_options?: Configuration): Promise<Array<Guild>> {
        const result = this.api.guildsControllerFindAll(_options);
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
    public healthControllerCheckWithHttpInfo(_options?: Configuration): Promise<HttpInfo<HealthControllerCheck200Response>> {
        const result = this.api.healthControllerCheckWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public healthControllerCheck(_options?: Configuration): Promise<HealthControllerCheck200Response> {
        const result = this.api.healthControllerCheck(_options);
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
    public usersControllerActivateWithHttpInfo(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerActivateWithHttpInfo(id, activateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param activateUserDto
     */
    public usersControllerActivate(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerActivate(id, activateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreateWithHttpInfo(createUserDto: CreateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerCreateWithHttpInfo(createUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreate(createUserDto: CreateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerCreate(createUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividual(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerCreateIndividual(createIndividualUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAllWithHttpInfo(queryUserDto: QueryUserDto, _options?: Configuration): Promise<HttpInfo<UsersControllerFindAll200Response>> {
        const result = this.api.usersControllerFindAllWithHttpInfo(queryUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAll(queryUserDto: QueryUserDto, _options?: Configuration): Promise<UsersControllerFindAll200Response> {
        const result = this.api.usersControllerFindAll(queryUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public usersControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerFindOneWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public usersControllerFindOne(id: string, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerFindOne(id, _options);
        return result.toPromise();
    }

    /**
     */
    public usersControllerStatisticsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserStatistics>> {
        const result = this.api.usersControllerStatisticsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersControllerStatistics(_options?: Configuration): Promise<UserStatistics> {
        const result = this.api.usersControllerStatistics(_options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdateWithHttpInfo(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerUpdateWithHttpInfo(id, updateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdate(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerUpdate(id, updateUserDto, _options);
        return result.toPromise();
    }


}



