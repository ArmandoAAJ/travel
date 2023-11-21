const MOCK_HOME = [
  {
    id: '01',
    title: 'Montenegro',
    emoji: '🇲🇪',
    src: 'https://scontent.cdninstagram.com/v/t51.2885-15/403688648_366691085763500_1082075124209197587_n.heic?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=ojW7bpPJSbAAX_es-g3&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfB2JTsPUv490XJ4bYK87jD3eQYbbiwZXlQHv1UC_FSzfw&oe=655F2D58&_nc_sid=10d13b',
  },
  {
    id: '02',
    title: 'Islândia',
    emoji: '🇮🇸',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/401284910_1152751269037366_3755910366811539915_n.heic?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Am-D7t-7BtcAX-JFjsi&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzNzYwOTU5NDQ3NjEyMDgzMw%3D%3D.2-ccb7-5&oh=00_AfAPqG9_RBiSs6ZIDrvmJF5KsN-9hYSO_29x0rngL-6cyA&oe=655DFEFC&_nc_sid=ee9879',
  },
  {
    id: '03',
    title: 'USA',
    emoji: '🇺🇸',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/400314056_950632579987421_931076060479823464_n.heic?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=sng7oAVwajsAX95a3gH&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzMzAwNDM3MDY4OTMxMjgyNA%3D%3D.2-ccb7-5&oh=00_AfB0MXvRG6kvtoGgDu_U8_DvpCnicYbLkj7oWXP-1SfnfQ&oe=655DBD36&_nc_sid=ee9879',
  },
  {
    id: '04',
    title: 'França',
    emoji: '🇫🇷',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/402145187_4162523873973849_5429219609582394466_n.heic?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4ODk2LnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=MeGUxxBra6IAX_wts5k&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzNjg2MzA0MjM3MTYyNDQxNw%3D%3D.2-ccb7-5&oh=00_AfCxIhOtw9G2IfmpaY22XQP--j-E1ucfYB4oqF6EDAXvNQ&oe=655D542D&_nc_sid=ee9879',
  },
  {
    id: '05',
    title: 'Suiça',
    emoji: '🇨🇭',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/402347197_2196213327400832_3247863174380192300_n.heic?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43Njh4OTYwLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=4U62y8wtA6gAX_g3eQl&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzNTM1Mzc4Nzc1MTQ2ODQxNQ%3D%3D.2-ccb7-5&oh=00_AfAXc-nQAWx7mCPXpd-3zYuUI36_RTFf9ksxlbMlKtR9fA&oe=655DAE15&_nc_sid=ee9879',
  },
  {
    id: '06',
    title: 'Suécia',
    emoji: '🇸🇪',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/403795188_1016231536304169_7885288588135595941_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Ep5qSTP_mWUAX8hw-7c&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI0MDIzOTU1ODk4MDc5OTkwNA%3D%3D.2-ccb7-5&oh=00_AfDfmTe9BG2MgDDRXGK1yCdnKptxkZVzX8nbAm5fTqSXhw&oe=655EB841&_nc_sid=ee9879',
  },
  {
    id: '07',
    title: 'Holanda',
    emoji: '🇳🇱',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/400078883_343454315024992_4856641571517591470_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43Nzh4OTYwLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pa-s-YYcrJwAX8OiHm1&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIzMTUzOTIyMzYzMDM4MzQ5Mw%3D%3D.2-ccb7-5&oh=00_AfCRSkh3PFyVP3dKHqrfHP_BjVGwbwUWlZmMSqLPRwRQ7A&oe=655ECD73&_nc_sid=b41fef',
  },
  {
    id: '08',
    title: 'Suiça',
    emoji: '🇨🇭',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/399094620_1736866646735724_6636167783252812721_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4ODYzLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=pRk0hr_LheMAX9h6J4F&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIyODUxODg2NDY1MTkxMzExMg%3D%3D.2-ccb7-5&oh=00_AfArSsVWGg5ZozL27E0vx8e2y7j4C-kt7Z6pnURoASfN5Q&oe=655F583E&_nc_sid=b41fef',
  },
  {
    id: '09',
    title: 'USA',
    emoji: '🇺🇸',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/396957374_6766494820092790_3936127963052596436_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNDkuc2RyIn0&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=NXXwXSFXp5sAX_NqFwd&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIyNzQxMjk1MDEwNzQ1NjQ1Mw%3D%3D.2-ccb7-5&oh=00_AfARbxc-34pRGhMeal8YCnko9C1jtoCZ75zU1qSFhRbgYQ&oe=655F46EC&_nc_sid=b41fef',
  },
  {
    id: '10',
    title: 'Noruega',
    emoji: '🇳🇴',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/386459617_3493358430930387_3471836158469357977_n.heic?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NTh4ODIyLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=GqUIxlqjsToAX8yaje_&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIwODYwNDQ3OTI0NTM1NTMzNA%3D%3D.2-ccb7-5&oh=00_AfDZUqJEAJqQZdrCR4bXZ5TDwGh6BMXChZSWz4DN0ZgNLA&oe=655E807B&_nc_sid=b41fef',
  },
  {
    id: '11',
    title: 'Canadá',
    emoji: '🇨🇦',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/385832154_3561613767388046_3360163153274940992_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=mN0r-V3vd_oAX_uqRlx&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIwNTUyNzY3ODUwMDc0MzAxOQ%3D%3D.2-ccb7-5&oh=00_AfA8cxY6hZorEUDl6snOUZ9ccVCpBNtamaooRja72m8qzQ&oe=655FA9B5&_nc_sid=b41fef',
  },
  {
    id: '12',
    title: 'Bélgica',
    emoji: '🇧🇪',
    src: 'https://instagram.ffbe2-1.fna.fbcdn.net/v/t51.2885-15/385034033_301657625908845_2367224282663339827_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkciJ9&_nc_ht=instagram.ffbe2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=zZwqRjbJCPMAX8QOeIr&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIwNDMzODg5Mzc3MDQwODExMw%3D%3D.2-ccb7-5&oh=00_AfBzlbZQKDO5gQO5MXf_LKAUoYhqlIgRHmzC16SbePszTQ&oe=655EE107&_nc_sid=b41fef',
  },
];

interface IHome {
  id: string;
  title: string;
  emoji: string;
  src: string;
}

export { MOCK_HOME, IHome };
