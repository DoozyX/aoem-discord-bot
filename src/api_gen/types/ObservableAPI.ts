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
    public authControllerConfirmEmailV1WithHttpInfo(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerConfirmEmailV1(authConfirmEmailDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerConfirmEmailV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authConfirmEmailDto
     */
    public authControllerConfirmEmailV1(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Observable<void> {
        return this.authControllerConfirmEmailV1WithHttpInfo(authConfirmEmailDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPasswordV1WithHttpInfo(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerForgotPasswordV1(authForgotPasswordDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerForgotPasswordV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authForgotPasswordDto
     */
    public authControllerForgotPasswordV1(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Observable<void> {
        return this.authControllerForgotPasswordV1WithHttpInfo(authForgotPasswordDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLoginV1WithHttpInfo(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Observable<HttpInfo<LoginResponseType>> {
        const requestContextPromise = this.requestFactory.authControllerLoginV1(authEmailLoginDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLoginV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authEmailLoginDto
     */
    public authControllerLoginV1(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Observable<LoginResponseType> {
        return this.authControllerLoginV1WithHttpInfo(authEmailLoginDto, _options).pipe(map((apiResponse: HttpInfo<LoginResponseType>) => apiResponse.data));
    }

    /**
     */
    public authControllerLogoutV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerLogoutV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLogoutV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerLogoutV1(_options?: Configuration): Observable<void> {
        return this.authControllerLogoutV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public authControllerMeV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.authControllerMeV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerMeV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerMeV1(_options?: Configuration): Observable<User> {
        return this.authControllerMeV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public authControllerRefreshV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<RefreshResponseType>> {
        const requestContextPromise = this.requestFactory.authControllerRefreshV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRefreshV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerRefreshV1(_options?: Configuration): Observable<RefreshResponseType> {
        return this.authControllerRefreshV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RefreshResponseType>) => apiResponse.data));
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegisterV1WithHttpInfo(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerRegisterV1(authRegisterLoginDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRegisterV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authRegisterLoginDto
     */
    public authControllerRegisterV1(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Observable<void> {
        return this.authControllerRegisterV1WithHttpInfo(authRegisterLoginDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public authControllerResendVerifyMailV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerResendVerifyMailV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerResendVerifyMailV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerResendVerifyMailV1(_options?: Configuration): Observable<void> {
        return this.authControllerResendVerifyMailV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPasswordV1WithHttpInfo(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerResetPasswordV1(authResetPasswordDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerResetPasswordV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authResetPasswordDto
     */
    public authControllerResetPasswordV1(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Observable<void> {
        return this.authControllerResetPasswordV1WithHttpInfo(authResetPasswordDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdateV1WithHttpInfo(authUpdateDto: AuthUpdateDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.authControllerUpdateV1(authUpdateDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authUpdateDto
     */
    public authControllerUpdateV1(authUpdateDto: AuthUpdateDto, _options?: Configuration): Observable<User> {
        return this.authControllerUpdateV1WithHttpInfo(authUpdateDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
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
    public buffsControllerCreateV1WithHttpInfo(createBuffDto: CreateBuffDto, _options?: Configuration): Observable<HttpInfo<Buff>> {
        const requestContextPromise = this.requestFactory.buffsControllerCreateV1(createBuffDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerCreateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createBuffDto
     */
    public buffsControllerCreateV1(createBuffDto: CreateBuffDto, _options?: Configuration): Observable<Buff> {
        return this.buffsControllerCreateV1WithHttpInfo(createBuffDto, _options).pipe(map((apiResponse: HttpInfo<Buff>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAllV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<HttpInfo<Array<Buff>>> {
        const requestContextPromise = this.requestFactory.buffsControllerFindAllV1(guildUid, type, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerFindAllV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerFindAllV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<Array<Buff>> {
        return this.buffsControllerFindAllV1WithHttpInfo(guildUid, type, _options).pipe(map((apiResponse: HttpInfo<Array<Buff>>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     * @param position
     */
    public buffsControllerRemoveAtV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Observable<HttpInfo<Buff>> {
        const requestContextPromise = this.requestFactory.buffsControllerRemoveAtV1(guildUid, type, position, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerRemoveAtV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     * @param position
     */
    public buffsControllerRemoveAtV1(guildUid: string, type: 'construction' | 'research' | 'training', position: number, _options?: Configuration): Observable<Buff> {
        return this.buffsControllerRemoveAtV1WithHttpInfo(guildUid, type, position, _options).pipe(map((apiResponse: HttpInfo<Buff>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerRemoveFirstV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<HttpInfo<Buff>> {
        const requestContextPromise = this.requestFactory.buffsControllerRemoveFirstV1(guildUid, type, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buffsControllerRemoveFirstV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     */
    public buffsControllerRemoveFirstV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<Buff> {
        return this.buffsControllerRemoveFirstV1WithHttpInfo(guildUid, type, _options).pipe(map((apiResponse: HttpInfo<Buff>) => apiResponse.data));
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
    public channelsControllerCreateV1WithHttpInfo(createChannelDto: CreateChannelDto, _options?: Configuration): Observable<HttpInfo<Channel>> {
        const requestContextPromise = this.requestFactory.channelsControllerCreateV1(createChannelDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelsControllerCreateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createChannelDto
     */
    public channelsControllerCreateV1(createChannelDto: CreateChannelDto, _options?: Configuration): Observable<Channel> {
        return this.channelsControllerCreateV1WithHttpInfo(createChannelDto, _options).pipe(map((apiResponse: HttpInfo<Channel>) => apiResponse.data));
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOneV1WithHttpInfo(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<HttpInfo<Channel>> {
        const requestContextPromise = this.requestFactory.channelsControllerFindOneV1(guildUid, type, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelsControllerFindOneV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param guildUid
     * @param type
     */
    public channelsControllerFindOneV1(guildUid: string, type: 'construction' | 'research' | 'training', _options?: Configuration): Observable<Channel> {
        return this.channelsControllerFindOneV1WithHttpInfo(guildUid, type, _options).pipe(map((apiResponse: HttpInfo<Channel>) => apiResponse.data));
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
    public filesLocalControllerUploadFileV1WithHttpInfo(file?: HttpFile, _options?: Configuration): Observable<HttpInfo<FileType>> {
        const requestContextPromise = this.requestFactory.filesLocalControllerUploadFileV1(file, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesLocalControllerUploadFileV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [file]
     */
    public filesLocalControllerUploadFileV1(file?: HttpFile, _options?: Configuration): Observable<FileType> {
        return this.filesLocalControllerUploadFileV1WithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<FileType>) => apiResponse.data));
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
    public guildsControllerCreateV1WithHttpInfo(createGuildDto: CreateGuildDto, _options?: Configuration): Observable<HttpInfo<Guild>> {
        const requestContextPromise = this.requestFactory.guildsControllerCreateV1(createGuildDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.guildsControllerCreateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createGuildDto
     */
    public guildsControllerCreateV1(createGuildDto: CreateGuildDto, _options?: Configuration): Observable<Guild> {
        return this.guildsControllerCreateV1WithHttpInfo(createGuildDto, _options).pipe(map((apiResponse: HttpInfo<Guild>) => apiResponse.data));
    }

    /**
     */
    public guildsControllerFindAllV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Guild>>> {
        const requestContextPromise = this.requestFactory.guildsControllerFindAllV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.guildsControllerFindAllV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public guildsControllerFindAllV1(_options?: Configuration): Observable<Array<Guild>> {
        return this.guildsControllerFindAllV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Guild>>) => apiResponse.data));
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
    public healthControllerCheckV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<HealthControllerCheckV1200Response>> {
        const requestContextPromise = this.requestFactory.healthControllerCheckV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthControllerCheckV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public healthControllerCheckV1(_options?: Configuration): Observable<HealthControllerCheckV1200Response> {
        return this.healthControllerCheckV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HealthControllerCheckV1200Response>) => apiResponse.data));
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
    public usersControllerActivateV1WithHttpInfo(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerActivateV1(id, activateUserDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerActivateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param activateUserDto
     */
    public usersControllerActivateV1(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerActivateV1WithHttpInfo(id, activateUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividualV1WithHttpInfo(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerCreateIndividualV1(createIndividualUserDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerCreateIndividualV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createIndividualUserDto
     */
    public usersControllerCreateIndividualV1(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerCreateIndividualV1WithHttpInfo(createIndividualUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreateV1WithHttpInfo(createUserDto: CreateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerCreateV1(createUserDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerCreateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createUserDto
     */
    public usersControllerCreateV1(createUserDto: CreateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerCreateV1WithHttpInfo(createUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAllV1WithHttpInfo(queryUserDto: QueryUserDto, _options?: Configuration): Observable<HttpInfo<UsersControllerFindAllV1200Response>> {
        const requestContextPromise = this.requestFactory.usersControllerFindAllV1(queryUserDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerFindAllV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param queryUserDto
     */
    public usersControllerFindAllV1(queryUserDto: QueryUserDto, _options?: Configuration): Observable<UsersControllerFindAllV1200Response> {
        return this.usersControllerFindAllV1WithHttpInfo(queryUserDto, _options).pipe(map((apiResponse: HttpInfo<UsersControllerFindAllV1200Response>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public usersControllerFindOneV1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerFindOneV1(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerFindOneV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public usersControllerFindOneV1(id: string, _options?: Configuration): Observable<User> {
        return this.usersControllerFindOneV1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public usersControllerStatisticsV1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserStatistics>> {
        const requestContextPromise = this.requestFactory.usersControllerStatisticsV1(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerStatisticsV1WithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersControllerStatisticsV1(_options?: Configuration): Observable<UserStatistics> {
        return this.usersControllerStatisticsV1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserStatistics>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdateV1WithHttpInfo(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerUpdateV1(id, updateUserDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerUpdateV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateUserDto
     */
    public usersControllerUpdateV1(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerUpdateV1WithHttpInfo(id, updateUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}
