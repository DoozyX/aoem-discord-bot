import {
    AuthApi,
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

    private setupApis(authConfig: Configuration): void {
        this.files = new FilesApi(authConfig);
        this.users = new UsersApi(authConfig);
        this.auth = new AuthApi(authConfig);
        this.guilds = new GuildsApi(authConfig);
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
