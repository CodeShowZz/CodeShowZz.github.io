const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false, //自动播放
    listFolded: true, //列表默认折叠
    //lrcType: 3, //歌词传递方式
    mutex: true,
    audio: [
     {
        name: "Mine Mine",
        artist: '周杰伦',
        url: 'https://dl.stream.qqmusic.qq.com/C400001ZLwSy1zmXVR.m4a?guid=2561414768&vkey=AB0595E8EFF63E66F89B7BCED706AE5DB10FAD4EDDB3012DA34C25FE71A3A6EEA9E112842E53D54D0E020FA8192E45346259BBC96E4F1B48&uin=1152921505000885401&fromtag=120032',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003KNcyk0t3mwg_1.jpg?max_age=2592000'
    },
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

