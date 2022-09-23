const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '家后',
        artist: '江蕙',
        url: 'https://m704.music.126.net/20220924024743/44db08f5243a70414ed61453325d428f/jdyyaac/005c/545d/045f/76aa00530fc7752e9b6b35b325445622.m4a?authSecret=000001836b966ba410cc0aaba50b1d6b',
        cover: 'https://p2.music.126.net/nLnXSnnvHt8ovLxbfX5kXA==/89060441862577.jpg?param=130y130'
    }, 
	]
});

