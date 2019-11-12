var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: '6c3c80f77314446e988f28469bc63f0f',
  clientSecret: '8f393f8906ce4a86a4ac51636066e398',
  redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then(function(data) {
    console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
  .then(function(data) {
    console.log(data.body);
      done();
    }, function(err) {
       console.log("Something went wrong!", err);
    });
