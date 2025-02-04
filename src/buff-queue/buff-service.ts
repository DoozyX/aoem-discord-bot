import { BuffType } from '@app/buff-queue/enums';

export interface BuffInfo {
    channeld: string;
    queue: string[];
}

export class Guild {
    private buffs: Map<BuffType, BuffInfo> = new Map<BuffType, BuffInfo>();

    constructor(private guildId: string) {}

    public getBuff(buffType: BuffType): BuffInfo {
        return this.buffs.get(buffType) as BuffInfo;
    }

    public registerChannel(buffType: BuffType, channelId: string): void {
        this.buffs.set(buffType, { channeld: channelId, queue: [] });
    }
}

export class BuffService {
    private guilds: Map<string, Guild> = new Map();

    public registerGuild(guildId: string): void {
        this.guilds.set(guildId, new Guild(guildId));
    }

    public registerChannel(guildId: string, buffType: BuffType, channelId: string): void {
        const guild = this.guilds.get(guildId);
        if (!guild) {
            throw new Error('Guild not registered');
        }

        guild.registerChannel(buffType, channelId);
    }
}
