exports.geolocationIps = [
  {
    matcherID: 'NorthAmericaWest',
    address: '65.49.22.66',
  },
  {
    matcherID: 'NorthAmericaEast',
    address: '206.71.50.230',
  },
  {
    matcherID: 'SouthAmerica',
    address: '131.255.7.26',
  },
  {
    matcherID: 'Europe',
    address: '95.142.107.181',
  },
  {
    matcherID: 'MiddleEast',
    address: '185.229.226.83',
  },
  {
    matcherID: 'Australia',
    address: '223.252.19.130',
  },
  {
    matcherID: 'Japan',
    address: '110.50.243.6',
  },
];

exports.regionCodes = {
  NorthAmericaWest: 'NW',
  NorthAmericaEast: 'NE',
  SouthAmerica: 'SA',
  Europe: 'EU',
  MiddleEast: 'ME',
  Australia: 'AU',
  Japan: 'JP',
};

// exports.nearbyRegions = {
//   : ['NW', 'AU'],

// };
// if the user is in Japan, look in the American west coast & Australia
// if the user is in Australia, look in Japan and ME
// if the user is in ME, look in EU
// if the user is in EU, look in ME and NE
// if the user is in SA, look in NW and NE
// if the user is in NE, look in NW and EU
// if the user is in NW, look in NE and Japan