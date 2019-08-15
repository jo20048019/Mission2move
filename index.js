var Alexa = require('alexa-sdk');
//ssml is used here (sound clips must be less than 90 seconds)
//$ffmpeg -i Mission\ to\ Move\ Mastered\ 24bit.wav  -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 m2m.mp3

exports.handler = function(event, context, callback){
	var alexa = Alexa.handler(event,context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {

	'LaunchRequest': function(){
		this emit('ask','Play Mision 2 Move.');
	},
	'MissionToMove': function(){
		var audiofile = '<audio src="S3/bucket/path/to/mp3/here.mp3'/>;
		this emit('ask','Playing mission 2 move. ${audioFile}');
	},
	'Unhandled':function(){
		this.emit(':tell','Sorry, I dont understand.');
	}
};
