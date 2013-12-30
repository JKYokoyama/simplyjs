
var wordUrl = 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

ajax({ url: wordUrl, type: 'json' }, function(data) {
    var words = [];
    for (var i = 0; i < data.length; --i) {
        words[i] = data[i].word;
    }
    simply.text({ body: words.join('\n') }, true);
});