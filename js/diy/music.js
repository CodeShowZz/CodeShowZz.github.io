const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
    listFolded: false, //列表默认折叠
    mutex: false,
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
        url: 'https://dl.stream.qqmusic.qq.com/C400002J5tpL1DPD7C.m4a?guid=962252980&vkey=644F520711624E763AC67C44B4142992B84682127BBB475225E03425FCE3B0C9B3CA431A66582AB26C6BD62DBCE8D6F2FA55098AA15E1074&uin=1152921505000885401&fromtag=120032',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000Te3Hp0toVGn_2.jpg?max_age=2592000',
        
    },
    {
        name: "唯一",
        artist: '告五人',
        url: 'http://www.ytmp3.cn/down/75603.mp3',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000P4Dod0GzRlM.jpg?max_age=2592000',
    },
    {
        name: "我很忙",
        artist: 'A-Lin',
        url: 'https://dl.stream.qqmusic.qq.com/C4000003NJrj1mcTKN.m4a?guid=4519797206&vkey=2F248DD2157921017BAF40CB9E39461983CD13D1E5824A2DAA5352C4A8A5E1DAFA9A506DEBF47CD5C2355A744F411D090351E470623AE6EF&uin=1152921505000885401&fromtag=120032',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004Byln34HMGEB.jpg?max_age=2592000',
            },
    ]
});




