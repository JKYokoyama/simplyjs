var UI = {};

UI.Flow = {};

UI.Flow.onAuthResults = function(err, authResults) {
  simply.body(JSON.stringify(authResults));
};

var client = {};

client.sendVote = function(vote, callback) {
  callback(null, { outcome: vote === 'accept' ? 'passed' : 'failed' });
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
