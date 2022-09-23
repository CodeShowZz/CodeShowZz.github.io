const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false, //自动播放
    listFolded: true, //列表默认折叠
    //lrcType: 3, //歌词传递方式
    mutex: true,
    audio: [
    {
        name: "家后",
        artist: '江蕙',
        url: 'https://m704.music.126.net/20220924051333/4874589dd3f17e4f789c88419cb28030/jdyyaac/005c/545d/045f/76aa00530fc7752e9b6b35b325445622.m4a?authSecret=000001836c1bed2e0c0b0aaba0a20bcf',
        cover: 'https://p1.music.126.net/nLnXSnnvHt8ovLxbfX5kXA==/89060441862577.jpg?param=130y130',
        
    },
    {
        name: "唯一",
        artist: '告五人',
        url: 'http://www.ytmp3.cn/down/75603.mp3',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000P4Dod0GzRlM.jpg?max_age=2592000',
    },
    ]
});
