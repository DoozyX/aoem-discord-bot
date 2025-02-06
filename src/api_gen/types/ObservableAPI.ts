import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * @param authConfirmEmailDto
     */
    public authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerConfirmEmail(authConfirmEmailDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerConfirmEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authConfirmEmailDto
     */
    public authControllerConfirmEmail(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Observable<void> {
        return this.authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerForgotPassword(authForgotPasswordDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerForgotPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPassword(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Observable<void> {
        return this.authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLoginWithHttpInfo(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Observable<HttpInfo<LoginResponseType>> {
        const requestContextPromise = this.requestFactory.authControllerLogin(authEmailLoginDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLogin(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Observable<LoginResponseType> {
        return this.authControllerLoginWithHttpInfo(authEmailLoginDto, _options).pipe(map((apiResponse: HttpInfo<LoginResponseType>) => apiResponse.data));
    }

    /**
     */
    public authControllerLogoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerLogout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLogoutWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerLogout(_options?: Configuration): Observable<void> {
        return this.authControllerLogoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public authControllerMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.authControllerMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerMeWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerMe(_options?: Configuration): Observable<User> {
        return this.authControllerMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public authControllerRefreshWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RefreshResponseType>> {
        const requestContextPromise = this.requestFactory.authControllerRefresh(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRefreshWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerRefresh(_options?: Configuration): Observable<RefreshResponseType> {
        return this.authControllerRefreshWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RefreshResponseType>) => apiResponse.data));
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegisterWithHttpInfo(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerRegister(authRegisterLoginDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRegisterWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegister(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Observable<void> {
        return this.authControllerRegisterWithHttpInfo(authRegisterLoginDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public authControllerResendVerifyMailWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerResendVerifyMail(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerResendVerifyMailWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerResendVerifyMail(_options?: Configuration): Observable<void> {
        return this.authControllerResendVerifyMailWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPasswordWithHttpInfo(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerResetPassword(authResetPasswordDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerResetPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPassword(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Observable<void> {
        return this.authControllerResetPasswordWithHttpInfo(authResetPasswordDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdateWithHttpInfo(authUpdateDto: AuthUpdateDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.authControllerUpdate(authUpdateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdate(authUpdateDto: AuthUpdateDto, _options?: Configuration): Observable<User> {
        return this.authControllerUpdateWithHttpInfo(authUpdateDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

import { BuffsApiRequestFactory, BuffsApiResponseProcessor} from "../apis/BuffsApi";
export class ObservableBuffsApi {
    private requestFactory: BuffsApiRequestFactory;
    private responseProcessor: BuffsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BuffsApiRequestFactory,
        responseProcessor?: BuffsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BuffsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BuffsApiResponseProcessor();
    }

    /**
     * @param createBuffDto
     */
    public buffsControllerCreateWithHttpInfo(createBuffDto: CreateBuffDto, _options?: Configuration): Observable<HttpInfo<Buff>> {
        const requestContextPromise = this.requestFactory.buffsControllerCreate(createBuffDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createBuffDto
     */
    public buffsControllerCreate(createBuffDto: CreateBuffDto, _options?: Configuration): Observable<Buff> {
        return this.buffsControllerCreateWithHttpInfo(createBuffDto, _options).pipe(map((apiResponse: HttpInfo<Buff>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAllWithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<HttpInfo<Array<Buff>>> {
        const requestContextPromise = this.requestFactory.buffsControllerFindAll(guildUid, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAll(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<Array<Buff>> {
        return this.buffsControllerFindAllWithHttpInfo(guildUid, type, _options).pipe(map((apiResponse: HttpInfo<Array<Buff>>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     * @param position
     */
    public buffsControllerRemoveAtWithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Observable<HttpInfo<Buff>> {
        const requestContextPromise = this.requestFactory.buffsControllerRemoveAt(guildUid, type, position, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerRemoveAtWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     * @param position
     */
    public buffsControllerRemoveAt(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Observable<Buff> {
        return this.buffsControllerRemoveAtWithHttpInfo(guildUid, type, position, _options).pipe(map((apiResponse: HttpInfo<Buff>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerRemoveFirstWithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<HttpInfo<Buff>> {
        const requestContextPromise = this.requestFactory.buffsControllerRemoveFirst(guildUid, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerRemoveFirstWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerRemoveFirst(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<Buff> {
        return this.buffsControllerRemoveFirstWithHttpInfo(guildUid, type, _options).pipe(map((apiResponse: HttpInfo<Buff>) => apiResponse.data));
    }

}

import { ChannelsApiRequestFactory, ChannelsApiResponseProcessor} from "../apis/ChannelsApi";
export class ObservableChannelsApi {
    private requestFactory: ChannelsApiRequestFactory;
    private responseProcessor: ChannelsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChannelsApiRequestFactory,
        responseProcessor?: ChannelsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChannelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChannelsApiResponseProcessor();
    }

    /**
     * @param createChannelDto
     */
    public channelsControllerCreateWithHttpInfo(createChannelDto: CreateChannelDto, _options?: Configuration): Observable<HttpInfo<Channel>> {
        const requestContextPromise = this.requestFactory.channelsControllerCreate(createChannelDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createChannelDto
     */
    public channelsControllerCreate(createChannelDto: CreateChannelDto, _options?: Configuration): Observable<Channel> {
        return this.channelsControllerCreateWithHttpInfo(createChannelDto, _options).pipe(map((apiResponse: HttpInfo<Channel>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOneWithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<HttpInfo<Channel>> {
        const requestContextPromise = this.requestFactory.channelsControllerFindOne(guildUid, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelsControllerFindOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOne(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<Channel> {
        return this.channelsControllerFindOneWithHttpInfo(guildUid, type, _options).pipe(map((apiResponse: HttpInfo<Channel>) => apiResponse.data));
    }

}

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class ObservableFilesApi {
    private requestFactory: FilesApiRequestFactory;
    private responseProcessor: FilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilesApiResponseProcessor();
    }

    /**
     * @param [file]
     */
    public filesLocalControllerUploadFileWithHttpInfo(file?: HttpFile, _options?: Configuration): Observable<HttpInfo<FileType>> {
        const requestContextPromise = this.requestFactory.filesLocalControllerUploadFile(file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesLocalControllerUploadFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [file]
     */
    public filesLocalControllerUploadFile(file?: HttpFile, _options?: Configuration): Observable<FileType> {
        return this.filesLocalControllerUploadFileWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<FileType>) => apiResponse.data));
    }

}

import { GuildsApiRequestFactory, GuildsApiResponseProcessor} from "../apis/GuildsApi";
export class ObservableGuildsApi {
    private requestFactory: GuildsApiRequestFactory;
    private responseProcessor: GuildsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GuildsApiRequestFactory,
        responseProcessor?: GuildsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GuildsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GuildsApiResponseProcessor();
    }

    /**
     * @param createGuildDto
     */
    public guildsControllerCreateWithHttpInfo(createGuildDto: CreateGuildDto, _options?: Configuration): Observable<HttpInfo<Guild>> {
        const requestContextPromise = this.requestFactory.guildsControllerCreate(createGuildDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.guildsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createGuildDto
     */
    public guildsControllerCreate(createGuildDto: CreateGuildDto, _options?: Configuration): Observable<Guild> {
        return this.guildsControllerCreateWithHttpInfo(createGuildDto, _options).pipe(map((apiResponse: HttpInfo<Guild>) => apiResponse.data));
    }

    /**
     */
    public guildsControllerFindAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Guild>>> {
        const requestContextPromise = this.requestFactory.guildsControllerFindAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.guildsControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public guildsControllerFindAll(_options?: Configuration): Observable<Array<Guild>> {
        return this.guildsControllerFindAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Guild>>) => apiResponse.data));
    }

}

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class ObservableHealthApi {
    private requestFactory: HealthApiRequestFactory;
    private responseProcessor: HealthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthApiResponseProcessor();
    }

    /**
     */
    public healthControllerCheckWithHttpInfo(_options?: Configuration): Observable<HttpInfo<HealthControllerCheck200Response>> {
        const requestContextPromise = this.requestFactory.healthControllerCheck(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthControllerCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public healthControllerCheck(_options?: Configuration): Observable<HealthControllerCheck200Response> {
        return this.healthControllerCheckWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HealthControllerCheck200Response>) => apiResponse.data));
    }

}

import { HomeApiRequestFactory, HomeApiResponseProcessor} from "../apis/HomeApi";
export class ObservableHomeApi {
    private requestFactory: HomeApiRequestFactory;
    private responseProcessor: HomeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HomeApiRequestFactory,
        responseProcessor?: HomeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HomeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HomeApiResponseProcessor();
    }

    /**
     */
    public homeControllerAppInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.homeControllerAppInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.homeControllerAppInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public homeControllerAppInfo(_options?: Configuration): Observable<void> {
        return this.homeControllerAppInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * @param id
     * @param activateUserDto
     */
    public usersControllerActivateWithHttpInfo(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerActivate(id, activateUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerActivateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param activateUserDto
     */
    public usersControllerActivate(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerActivateWithHttpInfo(id, activateUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreateWithHttpInfo(createUserDto: CreateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerCreate(createUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreate(createUserDto: CreateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerCreateWithHttpInfo(createUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerCreateIndividual(createIndividualUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerCreateIndividualWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividual(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAllWithHttpInfo(queryUserDto: QueryUserDto, _options?: Configuration): Observable<HttpInfo<UsersControllerFindAll200Response>> {
        const requestContextPromise = this.requestFactory.usersControllerFindAll(queryUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAll(queryUserDto: QueryUserDto, _options?: Configuration): Observable<UsersControllerFindAll200Response> {
        return this.usersControllerFindAllWithHttpInfo(queryUserDto, _options).pipe(map((apiResponse: HttpInfo<UsersControllerFindAll200Response>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public usersControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerFindOne(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerFindOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public usersControllerFindOne(id: string, _options?: Configuration): Observable<User> {
        return this.usersControllerFindOneWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public usersControllerStatisticsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserStatistics>> {
        const requestContextPromise = this.requestFactory.usersControllerStatistics(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerStatisticsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersControllerStatistics(_options?: Configuration): Observable<UserStatistics> {
        return this.usersControllerStatisticsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserStatistics>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdateWithHttpInfo(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerUpdate(id, updateUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdate(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerUpdateWithHttpInfo(id, updateUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}
