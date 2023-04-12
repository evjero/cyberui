import { District } from './location';

/**
 * Gangs in 2077
 * @see https://cyberpunk.fandom.com/wiki/Gang
 * @see https://cyberpunk.fandom.com/wiki/Category:Cyberpunk_2077_Gangs
 */
export const GangNames = ['6th Street', 'Maelstrom', 'The Mox', 'Animals', 'Valentinos', 'Tyger Claws', 'Voodoo Boys', 'Scavengers'] as const;
export type GangName = (typeof GangNames)[number];
export type Gang = {
	/** Name of Gang */
	name: string;
	/** Name of Gang Leader(s) */
	currentLeader: string | string[];
	/** Number of members, known exact or range, or unknown */
	size: number | [number, number] | undefined;
	/** Controlled location(s) */
	territories: District[];
	/** Descriptive notable attributes */
	characteristics: string[];
};
