/**
 * 2077 Districts & Locations
 * @see https://cyberpunk.fandom.com/wiki/Night_City#2077_Distribution
 */
export const Districts = ['City Center', 'Heywood', 'Pacifica', 'Santo Domingo', 'Watson', 'Westbrook', 'Badlands', 'Del Coronado Bay'] as const;
export type District = (typeof Districts)[number];
export const Areas = [
	'Corpo Plaza',
	'Downtown',
	'The Glen',
	'Vista del Ray',
	'Wellsprings',
	'Coastview',
	'Combat Zone',
	'West Wind Estate',
	'Arroyo',
	'Rancho Coronado',
	'Arasaka Waterfront',
	'Kabuki',
	'Little China',
	'Northside',
	'Charter Hill',
	'Japantown',
	'North Oak',
	'Eastern Wastelands',
	'Laguna Bend',
	'Northern Oilfields',
	'Southern Desert',
	'Morro Rock'
] as const;
export type Area = (typeof Areas)[number];
export const Locations = {
	'City Center': ['Corpo Plaza', 'Downtown'],
	Heywood: ['The Glen', 'Vista del Ray', 'Wellsprings'],
	Pacifica: ['Coastview', 'Combat Zone', 'West Wind Estate'],
	'Santo Domingo': ['Arroyo', 'Rancho Coronado'],
	Watson: ['Arasaka Waterfront', 'Kabuki', 'Little China', 'Northside'],
	Westbrook: ['Charter Hill', 'Japantown', 'North Oak'],
	Badlands: ['Eastern Wastelands', 'Laguna Bend', 'Northern Oilfields', 'Southern Desert'],
	'Del Coronado Bay': ['Morro Rock']
} as const;
