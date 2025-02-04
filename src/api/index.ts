import {
    AuthApi,
    ChannelsApi,
    Configuration,
    createConfiguration,
    FilesApi,
    GuildsApi,
    LoginResponseType,
    server2,
    UsersApi,
} from '@app/api_gen';

export class AuthCredentials {
    constructor(
        public email: string,
        public password: string
    ) {}
}

export class Api {
    public auth!: AuthApi;
    public files!: FilesApi;
    public users!: UsersApi;
    public guilds!: GuildsApi;
    public channels!: ChannelsApi;

    public loginUser: LoginResponseType | undefined;

    constructor() {
        const config = this.createBaseConfig();
        this.setupApis(config);
    }

    static async withLogin(auth: AuthCredentials): Promise<Api> {
        const api = new Api();
        await api.login(auth);
        return api;
    }

    static withToken(token: string): Api {
        const api = new Api();
        const authConfig = api.getBearerConfig(token);
        api.setupApis(authConfig);
        return api;
    }

    public async login({ email, password }: AuthCredentials): Promise<void> {
        const authResponse = await this.auth.authControllerLogin({ email, password });
        this.loginUser = authResponse;

        const authConfig = this.getBearerConfig(authResponse.token);

        this.setupApis(authConfig);
    }

    private setupApis(config: Configuration): void {
        this.files = new FilesApi(config);
        this.users = new UsersApi(config);
        this.auth = new AuthApi(config);
        this.guilds = new GuildsApi(config);
        this.channels = new ChannelsApi(config);
    }

    public getBearerConfig(token: string): Configuration {
        return createConfiguration({
            baseServer: server2,
            middleware: [],
            authMethods: {
                bearer: { tokenProvider: { getToken: () => token } },
            },
        });
    }

    private createBaseConfig(): Configuration {
        return createConfiguration({
            baseServer: server2,
            middleware: [],
            authMethods: {},
        });
    }
}
