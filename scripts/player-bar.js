{

//PLAY AND PAUSE BUTTON
  $('button#play-pause').click( 'click', function() {
    player.playPause();
    $(this).attr('playState', player.playState); 
  });

//NEXT BUTTON
  $('button#next').click( 'click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying)
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if (nextSongIndex >= album.songs.length){ return; }
    player.playPause(nextSong);
  });

  //PREVIOUS BUTTON
  $('button#previous').click( 'click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying)
    const prevSongIndex = currentSongIndex - 1; 
    const prevSong = album.songs[prevSongIndex]; 
    player.playPause(prevSong); 
  });

  $('#time-control input').on('input', function(event) {
    player.skipTo(event.target.value)
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control input').val(percent);
    $('#time-control .current-time').text(player.prettyTime(currentTime);
    $('#time-control input').val(percent); 
    $('#time-control .total-time').text(duration);
    }, 1000);


  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value)
  });

}
