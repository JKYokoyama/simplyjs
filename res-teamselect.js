var UI = {};

UI.Flow = {};

var TeamSelect = {};

var players = [{
    name: 'Jonathan'
}, {
    name: 'Duy'
}, {
    name: 'Huy'
}];

TeamSelect.update = function() {
  var list = [];
  for (var i = 0; i < players.length ; ++i) {    
    var player = players[i];
    var marker = player.isLeader? 'L': ' ';
    if (i == TeamSelect.cursorIndex) {
      marker = 'o';
    }
    if (i == TeamSelect.selectedIndex) {
      marker = 'x';
    }
    list.push('[' + marker + ']' + ' ' + player.name);
  }
  list.push('done');
  simply.body(list.join('\n'));
};

TeamSelect.show = function() {
  simply.title('Team Select');
  TeamSelect.update();
};

TeamSelect.show();