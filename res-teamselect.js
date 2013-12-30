var UI = {};

UI.Flow = {};

var TeamSelect = {};

var players = [{
    name: 'Jonathan',
    isLeader: true
}, {
    name: 'Duy'
}, {
    name: 'Huy'
}];

TeamSelect.update = function() {
  var list = [];
  for (var i = 0; i < players.length ; ++i) {    
    var player = players[i];
    var marker = ' ';
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
  simply.style('mono');
  simply.title('Team Select', true);
  TeamSelect.update();
};

TeamSelect.show();