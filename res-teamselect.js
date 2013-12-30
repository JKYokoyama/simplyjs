UI.initTeamSelect = function() {
  UI.showGameState = function()  {
    simply.setText({title: 'Team Select'});
  }
  var list = [];
    for (var i == 0 ; i < players.length ; ++i){    
      var player = players[i];
      var marker = player.isLeader? 'L': ' ';
      if(i==showGameState.cursorIndex){
        marker = 'o';
      }
      if(i==showGameState.selectedIndex){
        marker = 'x';
      }
      list.push('[' + marker + ']' + ' ' + player.name)
    }
  list.push('done');
  simply.setText({
    body: list.join('\n')
  });
};
