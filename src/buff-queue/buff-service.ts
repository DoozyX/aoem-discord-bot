import { Api } from '@app/api';
import { CreateChannelDtoTypeEnum } from '@app/api_gen/models/CreateChannelDto';
import { BuffType } from '@app/buff-queue/enums';

export class BuffService {
    constructor(private api: Api) {}

    public async registerGuild(id: string, name: string): Promise<void> {
        await this.api.guilds.guildsControllerCreate({ uid: id, name });
    }

    public async registerChannel(
        guildId: string,
        buffType: BuffType,
        channelId: string
    ): Promise<void> {
        await this.api.channels.channelsControllerCreate({
            guildUid: guildId,
            type: buffType as unknown as CreateChannelDtoTypeEnum,
            uid: channelId,
        });
    }
}
