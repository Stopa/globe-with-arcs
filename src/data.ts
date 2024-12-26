interface Airport {
	latitude: number;
	longitude: number;
	name: string;
	iata: string;
	country: string;
}

interface Flight {
	from_iata: string;
	to_iata: string;
	code: string; // like 'AY04' or whatever
	time: string;
	airline: string;
	// seconds
	duration?: number;
}

export const airports: Record<Airport['iata'], Omit<Airport, 'iata'>> = {
	TLL: {
		latitude: 59.41329956049999,
		longitude: 24.832799911499997,
		name: 'Lennart Meri Tallinn Airport',
		country: 'Estonia',
	},
	HEL: {
		latitude: 60.317199707031,
		longitude: 24.963300704956,
		name: 'Helsinki Vantaa Airport',
		country: 'Finland',
	},
	BKK: {
		latitude: 13.681099891662598,
		longitude: 100.74700164794922,
		name: 'Suvarnabhumi Airport',
		country: 'Thailand',
	},
	DMK: {
		latitude: 13.9125995636,
		longitude: 100.607002258,
		name: 'Don Mueang International Airport',
		country: 'Thailand',
	},
	TST: {
		latitude: 7.508739948272705,
		longitude: 99.6166000366211,
		name: 'Trang Airport',
		country: 'Thailand',
	},
	KUL: {
		latitude: 2.745579957962,
		longitude: 101.70999908447,
		name: 'Kuala Lumpur International Airport',
		country: 'Malaysia',
	},
	JFK: {
		latitude: 40.63980103,
		longitude: -73.77890015,
		name: 'John F Kennedy International Airport',
		country: 'United States',
	},
	ARN: {
		latitude: 59.651901245117,
		longitude: 17.918600082397,
		name: 'Stockholm-Arlanda Airport',
		country: 'Sweden',
	},
	WAW: {
		latitude: 52.1656990051,
		longitude: 20.967100143399996,
		name: 'Warsaw Chopin Airport',
		country: 'Poland',
	},
	ICN: {
		latitude: 37.46910095214844,
		longitude: 126.45099639892578,
		name: 'Incheon International Airport',
		country: 'South Korea',
	},
	MUC: {
		latitude: 48.353802,
		longitude: 11.7861,
		name: 'Munich Airport',
		country: 'Germany',
	},
	MXP: {
		latitude: 45.6306,
		longitude: 8.72811,
		name: 'Malpensa International Airport',
		country: 'Italy',
	},
	PMI: {
		latitude: 39.551700592,
		longitude: 2.73881006241,
		name: 'Palma De Mallorca Airport',
		country: 'Spain',
	},
	CPH: {
		latitude: 55.617900848389,
		longitude: 12.656000137329,
		name: 'Copenhagen Kastrup Airport',
		country: 'Denmark',
	},
	LGW: {
		latitude: 51.148102,
		longitude: -0.190278,
		name: 'London Gatwick Airport',
		country: 'United Kingdom',
	},
};

export const flights: Flight[] = [
	// Trang trip
	{
		from_iata: 'DMK',
		to_iata: 'TST',
		code: 'FD3241',
		time: '12 January 2023 10:05 ICT',
		airline: 'Thai AirAsia',
		duration: 60 * 60 + 25 * 60, // 1h25m
	},
	{
		from_iata: 'TST',
		to_iata: 'DMK',
		code: 'FD3242',
		time: '15 January 2023 12:00 ICT',
		airline: 'Thai AirAsia',
		duration: 60 * 60 + 30 * 60, // 1h30m
	},
	// bangkok to tallinn
	{
		from_iata: 'BKK',
		to_iata: 'HEL',
		code: 'AY142',
		time: '18 January 2023 08:05 ICT',
		airline: 'Finnair',
		duration: 60 * 60 * 12 + 20 * 60, // 12h30m
	},
	{
		from_iata: 'HEL',
		to_iata: 'TLL',
		code: 'AY1023',
		time: '18 January 2023 16:23 EET',
		airline: 'Finnair',
		duration: 60 * 35, // 0h35min
	},
	// warsaw trip
	{
		from_iata: 'TLL',
		to_iata: 'WAW',
		code: 'LO788',
		time: '06 April 2023 18:10 EEST',
		airline: 'LOT Polish Airlines',
		duration: 60 * 60 + 60 * 35, // 1h35min
	},
	{
		from_iata: 'WAW',
		to_iata: 'TLL',
		code: 'LO785',
		time: '10 April 2023 10:40 CET',
		airline: 'LOT Polish Airlines',
		duration: 60 * 60 + 60 * 40, // 1h40m
	},
	// mallorca trip
	{
		from_iata: 'TLL',
		to_iata: 'MXP',
		code: 'WZZ5558',
		time: '25 April 2023 22:00 EEST',
		airline: 'Wizz Air',
		duration: 60 * 60 + 60 * 40, // 1h40m
	},
	{
		from_iata: 'MXP',
		to_iata: 'PMI',
		code: 'FR1580',
		time: '26 April 2023 21:23 CET',
		airline: 'Ryanair',
		duration: 60 * 60 + 60 * 45, // 1h45min
	},
	{
		from_iata: 'PMI',
		to_iata: 'CPH',
		code: 'VY1910',
		time: '04 May 2023 10:45 CET',
		airline: 'Vueling',
		duration: 3 * 60 * 60 + 60 * 5, // 3h5m
	},
	{
		from_iata: 'CPH',
		to_iata: 'TLL',
		code: 'BT812',
		time: '04 May 2023 15:55 CET',
		airline: 'airBaltic',
		duration: 2 * 60 * 60 + 60 * 25, // 2h25min
	},
	// london webdevcon
	{
		from_iata: 'TLL',
		to_iata: 'LGW',
		code: 'BT871',
		time: '18 July 2023 15:55 EEST',
		airline: 'airBaltic',
		duration: 3 * 60 * 60 + 60 * 5, // 3h5min
	},
	{
		from_iata: 'LGW',
		to_iata: 'TLL',
		code: 'BT872',
		time: '22 July 2023 17:45 BST',
		airline: 'airBaltic',
		duration: 2 * 60 * 60 + 45 * 60, // 2h45min
	},
	// korea
	{
		from_iata: 'TLL',
		to_iata: 'HEL',
		code: 'AY1014',
		time: '04 September 2023 10:35 EEST',
		airline: 'Finnair',
		duration: 60 * 35, // 35m
	},
	{
		from_iata: 'HEL',
		to_iata: 'MUC',
		code: 'AY1401',
		time: '05 September 2023 08:00 EEST',
		airline: 'Finnair',
		duration: 2 * 60 * 60 + 40 * 60, // 2h40m
	},
	{
		from_iata: 'MUC',
		to_iata: 'ICN',
		code: 'LH718',
		time: '05 September 2023 15:55 CET',
		airline: 'Lufthansa',
		duration: 11 * 60 * 60 + 10 * 60, // 11h10m
	},
	{
		from_iata: 'ICN',
		to_iata: 'HEL',
		code: 'AY042',
		time: '13 September 2023 23:00 KST',
		airline: 'Finnair',
		duration: 13 * 60 * 60 + 40 * 60, // 13h40m
	},
	{
		from_iata: 'HEL',
		to_iata: 'TLL',
		code: 'AY1011',
		time: '14 September 2023 07:25 EEST',
		airline: 'Finnair',
		duration: 35 * 60, // 35m
	},
	// NYC webdevcon
	{
		from_iata: 'TLL',
		to_iata: 'HEL',
		code: 'AY1016',
		time: '13 October 2023 12:55 EEST',
		airline: 'Finnair',
		duration: 35 * 60, // 35min
	},
	{
		from_iata: 'HEL',
		to_iata: 'JFK',
		code: 'AY015',
		time: '13 October 2023 16:55 EEST',
		airline: 'Finnair',
		duration: 9 * 60 * 60, // 9h
	},
	{
		from_iata: 'JFK',
		to_iata: 'HEL',
		code: 'AY016',
		time: '20 October 2023 22:45 EDT',
		airline: 'Finnair',
		duration: 8 * 60 * 60 + 10 * 60, // 8h10m
	},
	{
		from_iata: 'HEL',
		to_iata: 'TLL',
		code: 'AY1023',
		time: '21 October 2023 16:25 EEST',
		airline: 'Finnair',
		duration: 35 * 60, // 35m
	},
	// to thailand
	{
		from_iata: 'TLL',
		to_iata: 'HEL',
		code: 'AY1028',
		time: '23 October 2023 20:55 EET',
		airline: 'Finnair',
		duration: 35 * 60, // 35min
	},
	{
		from_iata: 'HEL',
		to_iata: 'BKK',
		code: 'AY141',
		time: '24 October 2023 13:55 EET',
		airline: 'Finnair',
		duration: 11 * 60 * 60 + 20 * 60, // 11h20m
	},
	// kuala lumpur trip
	{
		from_iata: 'DMK',
		to_iata: 'KUL',
		code: 'FD311',
		time: '30 October 2023 06:40 ICT',
		airline: 'Thai AirAsia',
		duration: 2 * 60 * 60 + 15 * 60, // 2h15m
	},
	{
		from_iata: 'KUL',
		to_iata: 'DMK',
		code: 'AK896',
		time: '03 November 2023 20:15 MYT',
		airline: 'AirAsia',
		duration: 2 * 60 * 60 + 20 * 60, // 2h20m
	},
	// back home
	{
		from_iata: 'BKK',
		to_iata: 'HEL',
		code: 'AY142',
		time: '30 November 2023 08:05 ICN',
		airline: 'Finnair',
		duration: 12 * 60 * 60 + 24 * 60,
	},
	{
		from_iata: 'HEL',
		to_iata: 'TLL',
		code: 'AY1025',
		time: '30 November 2023 17:25 EET',
		airline: 'Finnair',
		duration: 24 * 60, // 24m
	},
];

/**
 * for https://github.com/vasturiano/globe.gl/blob/master/example/random-arcs/index.html
 * 
 * will need to play with dash to animate it i suppose
 * https://github.com/vasturiano/globe.gl/blob/master/example/emit-arcs-on-click/index.html
 * 
 * probably use https://www.npmjs.com/package/three-globe
 * 
 * as for potential remotion integ - yeah just need an effect listening to frame etc probably?
 */
export const arcData = flights.map(flight => {
  const startAirport = airports[flight.from_iata];
  const endAirport = airports[flight.to_iata];

  return {
    startLat: startAirport.latitude,
    startLng: startAirport.longitude,
    endLat: endAirport.latitude,
    endLng: endAirport.longitude,
  }
})