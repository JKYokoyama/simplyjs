var UI = {};

var client = {};

client.sendVote = function(vote) {
  simply.body(vote);
};

var VoteDialog = {};

VoteDialog.show = function() {
  simply.text({
    subtitle: 'Authorize Team',
    body: ['Accept', 'Reject'].join('\n')
  });
  simply.on('singleClick', VoteDialog.onSingleClick);
};

VoteDialog.onSingleClick = function(e) {
  simply.body(e.button);
  return;
  var vote;
  if (e.button === 'up') {
    vote = 'accept';
  } else if (e.button === 'down') {
    vote = 'reject';
  }
  if (vote) {
    client.sendVote(vote, UI.Flow.onAuthResults);
    simply.off('singleClick', VoteDialog.onSingleClick);
  }
};

UI.VoteDialog = VoteDialog;

VoteDialog.show();
