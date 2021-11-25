/*
DATA LIST
1. THEMES DATA
2. GALLERY DATA
3. TODAY'S CHOICE DATA
4. XONE's CORNER DATA
5. NEW SONGS DATA
*/

// GALLERY DATA
export const show_gallery_item = 3; //1-5 item
export const dataGallery = [
    {
        id: 1,
        img: "./assets/img/gallery/1.jpg",
        url: "#link-1"
    },
    {
        id: 2,
        img: "./assets/img/gallery/2.jpg",
        url: "#link-2"
    },
    {
        id: 3,
        img: "./assets/img/gallery/3.jpg",
        url: "#link-3"
    },
    {
        id: 4,
        img: "./assets/img/gallery/4.jpg",
        url: "#link-4"
    },
    {
        id: 5,
        img: "./assets/img/gallery/5.jpg",
        url: "#link-5"
    },
    {
        id: 6,
        img: "./assets/img/gallery/6.jpg",
        url: "#link-6"
    }
]

// TODAY'S CHOICE DATA
export const todayChoiceData = {
    title: 'Lựa Chọn Hôm Nay',
    url: '', //url section
    item_show: 5,
    button: 'hidden', //hidden or show
    slider: 'click', //auto or click
    repeat_slider: false, //true or false
    items: [
        {
            id: 1,
            title: 'Viral Hits',
            subtitle: 'Trung tâm gây "bão" và tạo nên những cơn sốt trong giới trẻ thế giới',
            url: '#playlist-1',
            img: './assets/img/todaychoice/1.webp'
        },
        {
            id: 2,
            title: 'Rap Việt Nghe Là Ghiền',
            subtitle: 'Va vào những giai điệu Rap Việt gây nghiện cực mạnh',
            url: '#playlist-2',
            img: './assets/img/todaychoice/2.webp'
        },
        {
            id: 3,
            title: 'K-Pop Daebak',
            subtitle: 'Ở đây có những ca khúc K-Pop căng đét',
            url: '#playlist-3',
            img: './assets/img/todaychoice/3.webp'
        },
        {
            id: 4,
            title: 'Weekly Choice',
            subtitle: 'Những lựa chọn không thể thiếu cho một tuần làm việc nhiều căng thẳng',
            url: '#playlist-4',
            img: './assets/img/todaychoice/4.webp'
        },
        {
            id: 5,
            title: 'Girl Krush',
            subtitle: 'Concept Girlcrush chưa bao giờ hết hot với các fans K-Pop',
            url: '#playlist-5',
            img: './assets/img/todaychoice/5.webp'
        },
    ]
}

// XONE's CORNER DATA
export const xonesCornerData = {
    title: 'XONE\'s CORNER',
    url: '', //url section
    item_show: 5,
    button: 'hidden', //hidden or show
    slider: 'click', //auto or click
    repeat_slider: false, //true or false
    items: [
        {
            id: 1,
            title: 'Justatee\'s Flavour',
            subtitle: 'Người chơi hệ Rap nghe gì?',
            url: '#xonecorner-1',
            img: './assets/img/xonecorner/1.webp'
        },
        {
            id: 2,
            title: 'ZAYN\'s Flavour',
            subtitle: 'ZAYN và top ca khúc giữ ngôi vương US - UK',
            url: '#xonecorner-2',
            img: './assets/img/xonecorner/2.webp'
        },
        {
            id: 3,
            title: 'Daily XONE\'s Picks',
            subtitle: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            url: '#xonecorner-3',
            img: './assets/img/xonecorner/3.webp'
        },
        {
            id: 4,
            title: 'Indie Hits',
            subtitle: 'Những cái tên indie nổi bật nhất',
            url: '#xonecorner-4',
            img: './assets/img/xonecorner/4.webp'
        },
        {
            id: 5,
            title: 'Asia Tune',
            subtitle: 'K-pop thống trị làng nhạc châu Á',
            url: '#xonecorner-5',
            img: './assets/img/xonecorner/5.webp'
        },
    ]
}

// TOP RADIO DATA
export const topRadioData = {
    title: 'Radio Nổi Bật',
    url: '#topradio', //url section
    item_show: 7,
    button: 'show', //hidden or show
    slider: 'click', //auto or click
    repeat_slider: false, //true or false
    items: [
        {
            name_host: 'XONE Radio',
            url_host: '#xonefm',
            avatar_host: './assets/img/radio/logo/xonefm.webp',
            viewer: 975,
            programs: [
                {
                    img: './assets/img/radio/xonefm/1.webp',
                    time_start: 6, //hour
                    time_end: 9,
                },
                {
                    img: './assets/img/radio/xonefm/2.webp',
                    time_start: 9, //hour
                    time_end: 12,
                },
                {
                    img: './assets/img/radio/xonefm/3.webp',
                    time_start: 12, //hour
                    time_end: 15,
                },
                {
                    img: './assets/img/radio/xonefm/4.webp',
                    time_start: 15, //hour
                    time_end: 18,
                },
                {
                    img: './assets/img/radio/xonefm/5.webp',
                    time_start: 18, //hour
                    time_end: 20,
                },
                {
                    img: './assets/img/radio/xonefm/6.webp',
                    time_start: 20, //hour
                    time_end: 21,
                },
                {
                    img: './assets/img/radio/xonefm/7.webp',
                    time_start: 21, //hour
                    time_end: 22,
                },
                {
                    img: './assets/img/radio/xonefm/9.webp',
                    time_start: 22, //hour
                    time_end: 0,
                },
                {
                    img: './assets/img/radio/xonefm/8.webp',
                    time_start: 0, //hour
                    time_end: 6,
                },
            ]
        },
        {
            name_host: 'On Air',
            url_host: '#onair',
            avatar_host: './assets/img/radio/logo/onair.webp',
            viewer: 125,
            programs: [
                {
                    img: './assets/img/radio/onair/1.webp',
                    time_start: 6, //hour
                    time_end: 10.8,
                },
                {
                    img: './assets/img/radio/onair/2.webp',
                    time_start: 10.8, //hour
                    time_end: 15.6,
                },
                {
                    img: './assets/img/radio/onair/3.webp',
                    time_start: 15.6, //hour
                    time_end: 20.4,
                },
                {
                    img: './assets/img/radio/onair/4.webp',
                    time_start: 20.4, //hour
                    time_end: 1.2,
                },
                {
                    img: './assets/img/radio/onair/5.webp',
                    time_start: 1.2, //hour
                    time_end: 6,
                },
            ]
        },
        {
            name_host: 'Chạm',
            url_host: '#cham',
            avatar_host: './assets/img/radio/logo/cham.webp',
            viewer: 476,
            programs: [
                {
                    img: './assets/img/radio/cham/1.webp',
                    time_start: 7, //hour
                    time_end: 9.5,
                },
                {
                    img: './assets/img/radio/cham/2.webp',
                    time_start: 9.5, //hour
                    time_end: 12,
                },
                {
                    img: './assets/img/radio/cham/3.webp',
                    time_start: 12, //hour
                    time_end: 15,
                },
                {
                    img: './assets/img/radio/cham/4.webp',
                    time_start: 15, //hour
                    time_end: 17,
                },
                {
                    img: './assets/img/radio/cham/5.webp',
                    time_start: 17, //hour
                    time_end: 22.5,
                },
            ]
        },
        {
            name_host: 'V-POP',
            url_host: '#vpop',
            avatar_host: './assets/img/radio/logo/vpop.webp',
            viewer: 1008,
            programs: [
                {
                    img: './assets/img/radio/vpop/1.webp',
                    time_start: 8, //hour
                    time_end: 23,
                },
            ]
        },
        {
            name_host: 'Bolero',
            url_host: '#bolero',
            avatar_host: './assets/img/radio/logo/bolero.webp',
            viewer: 257,
            programs: [
                {
                    img: './assets/img/radio/bolero/1.webp',
                    time_start: 5.5, //hour
                    time_end: 22.5,
                },
            ]
        },
        {
            name_host: 'US-UK',
            url_host: '#usuk',
            avatar_host: './assets/img/radio/logo/usuk.webp',
            viewer: 161,
            programs: [
                {
                    img: './assets/img/radio/usuk/1.webp',
                    time_start: 7, //hour
                    time_end: 0,
                },
            ]
        },
        {
            name_host: 'K-POP',
            url_host: '#kpop',
            avatar_host: './assets/img/radio/logo/kpop.webp',
            viewer: 71,
            programs: [
                {
                    img: './assets/img/radio/kpop/1.webp',
                    time_start: 6, //hour
                    time_end: 23,
                },
            ]
        },
        {
            name_host: 'Acoustic',
            url_host: '#acoustic',
            avatar_host: './assets/img/radio/logo/acoustic.webp',
            viewer: 59,
            programs: [
                {
                    img: './assets/img/radio/acoustic/1.webp',
                    time_start: 14, //hour
                    time_end: 0,
                },
            ]
        },
        {
            name_host: 'Rap Việt',
            url_host: '#rapviet',
            avatar_host: './assets/img/radio/logo/rapviet.webp',
            viewer: 65,
            programs: [
                {
                    img: './assets/img/radio/rapviet/1.webp',
                    time_start: 8, //hour
                    time_end: 23.5,
                },
            ]
        },
        {
            name_host: 'The One Radio',
            url_host: '#theoneradio',
            avatar_host: './assets/img/radio/logo/theoneradio.webp',
            viewer: 36,
            programs: [
                {
                    img: './assets/img/radio/theoneradio/1.webp',
                    time_start: 9, //hour
                    time_end: 23,
                },
            ]
        },
    ]
}

// NEW SONG DATA
export const newSongsData = {
    title: 'Nhạc Mới Mỗi Ngày',
    url: '', //url section
    item_show: 5,
    button: 'hidden', //hidden or show
    slider: 'click', //auto or click
    repeat_slider: false, //true or false
    items: [
        {
            id: 1,
            title: 'V-Pop Tháng 11/2021',
            subtitle: '<a href="#vucattuong">Vũ Cát Tường</a>, <a href="#erik">ERIK</a>, <a href="#bichphuong">Bích Phương</a>...',
            url: '#newsongs-1',
            img: './assets/img/newsongs/1.webp'
        },
        {
            id: 2,
            title: 'US-UK Tháng 11/2021',
            subtitle: '<a href="#adele">Adele</a>, <a href="#taylorswift">Taylor Swift</a>, <a href="#postmalone">Post Malone</a>...',
            url: '#newsongs-2',
            img: './assets/img/newsongs/2.webp'
        },
        {
            id: 3,
            title: 'K-Pop Tháng 11/2021',
            subtitle: '<a href="#WekiMeki">Weki Meki</a>, <a href="#ONEUS">ONEUS</a>, <a href="#HwaSa">Hwa Sa</a>...',
            url: '#newsongs-3',
            img: './assets/img/newsongs/3.webp'
        },
        {
            id: 4,
            title: 'C-Pop Tháng 11/2021',
            subtitle: '<a href="#chuocyeu">Chước Yêu</a>, <a href="#tieudien">Tiểu Điền Âm Nhạc Xã</a>, <a href="#lay">Lay</a>...',
            url: '#newsongs-4',
            img: './assets/img/newsongs/4.webp'
        },
        {
            id: 5,
            title: 'Indie Việt Tháng 11/2021',
            subtitle: '<a href="#PixelNeko">Pixel Neko</a>, <a href="#Tuimi">Tuimi</a>, <a href="#Lemese">Lemese</a>...',
            url: '#newsongs-5',
            img: './assets/img/newsongs/5.webp'
        },
    ]
}


// THEMES DATA
export const themesGroupsData = [
    {
        heading: 'Dynamic',
        items: [
            {
                name: 'Sáng Tối',
                img: './assets/img/themes/dynamic/light.jpg',
            },
            {
                name: 'London',
                img: './assets/img/themes/dynamic/london.png',
            },
            {
                name: 'Xanh Da Trời',
                img: './assets/img/themes/dynamic/blue.jpg',
            },
            {
                name: 'Hồng',
                img: './assets/img/themes/dynamic/pink.jpg',
            },
            {
                name: 'Nâu',
                img: './assets/img/themes/dynamic/brown.jpg',
            },
        ]
    },
    {
        heading: 'Chủ Đề',
        items: [
            {
                name: 'Zing Music Awards',
                img: './assets/img/themes/theme/zma.jpg',
            },
            {
                name: 'Tháp Eiffel',
                img: './assets/img/themes/theme/eiffel.jpg',
            },
        ]
    },
    {
        heading: 'Nghệ Sĩ',
        items: [
            {
                name: 'UI',
                img: './assets/img/themes/celeb/iu.jpg',
            },
            {
                name: 'Ji Chang Wook',
                img: './assets/img/themes/celeb/ji-chang-wook.jpg',
            },
            {
                name: 'Lisa',
                img: './assets/img/themes/celeb/lisa.jpg',
            },
            {
                name: 'Jennie Kim',
                img: './assets/img/themes/celeb/jennie.jpg',
            },
            {
                name: 'Jisoo',
                img: './assets/img/themes/celeb/jisoo.jpg',
            },
            {
                name: 'Rosé',
                img: './assets/img/themes/celeb/rose.jpg',
            },
        ]
    },
    {
        heading: 'Màu Tối',
        items: [
            {
                name: 'Tối',
                img: './assets/img/themes/dark/dark.jpg',
            },
            {
                name: 'Tím',
                img: './assets/img/themes/dark/purple.jpg',
            },
            {
                name: 'Xanh Đậm',
                img: './assets/img/themes/dark/blue.jpg',
            },
            {
                name: 'Xanh Biển',
                img: './assets/img/themes/dark/blue-light.jpg',
            },
            {
                name: 'Xanh Lá',
                img: './assets/img/themes/dark/green.jpg',
            },
            {
                name: 'Nâu',
                img: './assets/img/themes/dark/brown.jpg',
            },
            {
                name: 'Hồng',
                img: './assets/img/themes/dark/pink.jpg',
            },
            {
                name: 'Đỏ',
                img: './assets/img/themes/dark/red.jpg',
            },
        ]
    },
    {
        heading: 'Màu Sáng',
        items: [
            {
                name: 'Sáng',
                img: './assets/img/themes/light/light.jpg',
            },
            {
                name: 'Xám',
                img: './assets/img/themes/light/gray.jpg',
            },
            {
                name: 'Xanh Nhạt',
                img: './assets/img/themes/light/green-light.jpg',
            },
            {
                name: 'Hồng Cánh Sen',
                img: './assets/img/themes/light/pink-light.jpg',
            },
        ]
    },
]