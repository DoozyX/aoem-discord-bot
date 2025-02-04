import { Api } from '@app/api';
import { CreateGuildDto } from '@app/api_gen/models/CreateGuildDto';
import { BuffType } from '@app/buff-queue/enums';

export class BuffService {
    constructor(private api: Api) {}
    public async registerGuild(id: string, name: string): Promise<void> {
        const dto = new CreateGuildDto();
        dto.uid = id;
        dto.name = name;
        await this.api.guilds.guildsControllerCreate(dto);
    }

    public registerChannel(_guildId: string, _buffType: BuffType, _channelId: string): void {}
}
