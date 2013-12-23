console.log('Simply.js demo!');

/*
simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.setText({
    subtitle: 'Pressed ' + e.button + '!',
  });
});

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.setText({
    subtitle: 'Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!',
  });
});

simply.begin();
*/

var VoteDialog = {};

VoteDialog.show = function() {
  simply.setText({
    subtitle: 'Time to vote'
  });
  simply.on('singleClick', VoteDialog.onSingleClick);
};

VoteDialog.onSingleClick = function(e) {
  var voted = false;
  if (e.button === 'up') {
    voted = true;
  } else if (e.button === 'down') {
    voted = true;
  }
  if (voted) {
    simply.off('singleClick', VoteDialog.onSingleClick);
  }
};

UI.VoteDialog = VoteDialog;

simply.begin();
