# Mission2move

Create an Alexa skill

"Alexa, Play Mission To Move" -> "Playing Mission to Move"
31 classrooms, ten times a day each (~310 calls per day at least)

Autoplayer (to pause and resume)
SSML (cannot but can play short audio files)

create s3 bucket to play mp3 file using lambda function (need free tier account AWS)
Client needs to attach card to create

AWS region us-east2 (Ohio which is where she is, lucky)

$pip install awscli
$aws configure
$ask init
$(cd lambda && npm install)
$npm install -g typescript

Code changes before deployment
1)./skill.json]
2)lambda

sfh62989

convert wav file to mp3
sudo apt install ffmpeg
ffmpeg -i Mission\ to\ Move\ Mastered\ 24bit.wav  -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 m2m.mp3
sudo apt install sox
play m2m.pm3
