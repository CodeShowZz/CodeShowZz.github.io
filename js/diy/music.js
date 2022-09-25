const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false, //自动播放
    listFolded: false, //列表默认折叠
    mutex: false,
    audio: [
     {
        name: "再见小时候",
        artist: '南拳妈妈',
        url: 'https://www.ytmp3.cn/down/78225.mp3',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001nd5rE0UOHo5_2.jpg?max_age=2592000'
    },
    {
        name: "浪子回头",
        artist: '茄子蛋',
        url: 'https://www.ytmp3.cn/down/57545.mp3',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002XEXGd1zIYxB_1.jpg?max_age=2592000',
        
    },
    {
        name: "唯一",
        artist: '告五人',
        url: 'http://www.ytmp3.cn/down/75603.mp3',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000P4Dod0GzRlM.jpg?max_age=2592000',
    },
    {
        name: "看得最远的地方",
        artist: '毛不易',
        url:'https://www.ytmp3.cn/down/77644.mp3',
	cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000039nM8m1yhEnK_1.jpg?max_age=2592000',
    },
    {
       name: "再见莫妮卡",
       artist: '彭席彦、Franky弗兰奇',
       url:'https://www.ytmp3.cn/down/77951.mp3',
       cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004Byln34HMGEB.jpg?max_age=2592000',
   },
    {
       name: "有何不可",
       artist: '许嵩',
       url:'https://www.ytmp3.cn/down/77665.mp3',
       cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002KSDg90IaScI_1.jpg?max_age=2592000',
     } 	
    ]
});




