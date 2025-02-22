import { escapeMarkdown } from 'discord.js';
import removeMarkdown from 'remove-markdown';

export class StringUtils {
    public static truncate(input: string, length: number, addEllipsis: boolean = false): string {
        if (input.length <= length) {
            return input;
        }

        let output = input.slice(0, Math.max(0, addEllipsis ? length - 3 : length));
        if (addEllipsis) {
            output += '...';
        }

        return output;
    }

    public static escapeMarkdown(input: string): string {
        return (
            escapeMarkdown(input)
                // Unescapes custom emojis
                // TODO: Update once discord.js update their escapeMarkdown()
                // See https://github.com/discordjs/discord.js/issues/8943
                .replaceAll(
                    /<(a?):(\S+):(\d{17,20})>/g,
                    (_match, animatedPrefix, emojiName, emojiId) => {
                        let emojiNameUnescaped = emojiName.replaceAll('\\', '');
                        return `<${animatedPrefix}:${emojiNameUnescaped}:${emojiId}>`;
                    }
                )
        );
    }

    public static stripMarkdown(input: string): string {
        return removeMarkdown(input);
    }

    public static Join(
        string: string | string[] | undefined,
        separator: string
    ): string | undefined {
        if (Array.isArray(string)) {
            return string.join(separator);
        }
        return string;
    }
}
