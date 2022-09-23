const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '家后',
        artist: '江蕙',
	url:'https://m704.music.126.net/20220924033032/5d107b5db7006cf1b06b8d7c40ab7e64/jdyyaac/005c/545d/045f/76aa00530fc7752e9b6b35b325445622.m4a?authSecret=000001836bbd9e5f04910aaba0b519ac',
        cover: 'https://p2.music.126.net/nLnXSnnvHt8ovLxbfX5kXA==/89060441862577.jpg?param=130y130'
    }, 
	]
});

