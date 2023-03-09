import { IGrad } from '../app/grad';

export let gradovi: IGrad[] = [
  {
    name: 'Skopje',
    type: 'city',
    lat: 41.9981,
    lon: 21.4254,
    img: 'https://pix10.agoda.net/geo/city/10189/1_10189_02.jpg?ca=6&ce=1&s=1920x822',
    bgImage:
      'https://i0.wp.com/www.discoveringmacedonia.com/wp-content/uploads/2014/06/visit-skopje-3.jpg?resize=2000%2C964&ssl=1',
    desc: 'With all of its perfections and flaws, Skopje is a city like no other. We grew up here, we live here, we work here.. All of our memories with the people we care the most about are created on the streets of Skopje. We are proud of the city with inexhaustible energy. The city that almost never sleeps. The wonderful squares, the biggest monument on the Balkan Peninsula, the City Park, Vodno and Matka, the Vrelo caves, the way Vardar cuts it in half, the Millenium cross, the Old town bazaar, the Kale fortress .. all of these represent a certain period and tell a different story of the capital city of the land of the sun.',

    sights: [
      'Old Bazaar',
      'Matka Canyon',
      'Skopje Fortress',
      'Millenium Cross',
    ],
    accommodation: [
      'Doubletree Hilton',
      'Marriott Hotel',
      'Hotel City Park',
      'Hotel Karpos',
    ],
  },
  {
    name: 'Bitola',
    type: 'city',
    lat: 41.0297,
    lon: 21.3292,
    img: 'https://lp-cms-production.imgix.net/features/2016/06/Bitola-Macedonia-CS.jpg',
    bgImage:
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bitola_05.JPG',
    desc: 'Bitola offers you absolute zero stress and a spirit of well-being. This is a warm invite to feel the mixture of the East and the West, to reinvent your term of taste due to the culinary delights that city restaurants offer, and to be part of a very typical and vibrant local lifestyle.',
  },
  {
    name: 'Ohrid',
    type: 'city',
    lat: 41.1231,
    lon: 20.8016,
    img: 'https://journication.de/wp-content/uploads/sites/110/2020/04/ohrid-north-macedonia-nordmazedonien-travel-tips-city-trip-sehenswuerdigkeiten-church-holy-kapelle-orthodox-kaneo-famous-panoramic-panorama-mountains.jpg',
    bgImage:
      'https://i0.wp.com/www.thebalkansandbeyond.com/wp-content/uploads/2021/07/Things-to-do-in-Ohrid-View.png?fit=2240%2C1260&ssl=1',
    desc: `Sublime Ohrid is North Macedonia's most seductive destination. It sits on the edge of serene Lake Ohrid, with an atmospheric old quarter that cascades down steep streets, dotted with beautiful churches and topped by the bones of a medieval castle. Traditional restaurants and lakeside cafes liven up the cobblestone streets, which in high summer can be very lively indeed.`,
  },
  {
    name: 'Mavrovo',
    type: 'city',
    lat: 41.6549,
    lon: 20.7339,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211372208.jpg?k=0eba18fae0e649d25715c67feb33515d7951461337fe068cce392f4326ba53cd&o=&hp=1',
    bgImage:
      'https://www.wallpaperflare.com/static/973/319/739/entre-neige-et-brouillard-wallpaper.jpg',
    desc: `Discovering the beauties of nature and exploring impeccable scenery, Macedonian customs, and traditional cuisine, you find yourself in Mavrovo .Set in the breathtaking scenery, amid grassy plateaus and snowy peaks of the mountainous region of western Macedonia, it is the frosting of the cake called the Macedonian outdoor experience.`,
  },
  {
    name: 'Dojran',
    type: 'city',
    lat: 41.1811,
    lon: 22.7227,
    img: 'https://pix10.agoda.net/geo/city/665594/1_665594_04.jpg?ca=7&ce=1&s=1920x822',
    bgImage:
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dojran_Lake_50.jpg',
    desc: '',
  },
  {
    name: 'Prespa',
    type: 'city',
    lat: 40.8833,
    lon: 21.0222,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Lake_Prespa_from_Slivnica_Monastery_01.JPG',
    bgImage:
      'https://upload.wikimedia.org/wikipedia/commons/9/97/54_1_%D0%BE%D0%B7%D0%B5%D1%80%D0%BE_%D0%9F%D1%80%D0%B5%D1%81%D0%BF%D0%B0.jpg',
    desc: '',
  },
  {
    name: 'Old Bazaar',
    type: 'sight',
    img: 'https://macedonia-timeless.com/img/old_bazaar_skopje.jpg',
    desc: 'In Skopje, the Old Skopje Bazaar is over the Stone Bridge on the left side of Vardar. This is a part of the city with various and rich history, tradition, culture and architecture, nowadays there has been made a connection between the old and new, economy and trade, culture and tradition. Due to the historical, developing and time occasions, culture of organization and tradition of living there are a large number of well preserved and functional objects from Ottoman period also new built objects as a feature of the modern period in the Old Skopje Bazaar.',
  },
  {
    name: 'Matka Canyon',
    type: 'sight',
    img: 'https://www.mywanderlust.pl/wp-content/uploads/2020/06/matka-canyon-1.jpg',
    desc: 'If the exceptional beauty of Matka Canyon is not enough for you there are a few more reasons to visit the place. This is one of the most popular recreational areas near Skopje, attracting both locals and visitors all year long. You can do here numerous activities, like hiking, fishing or kayaking. You can also find some old monasteries in the area.',
  },
  {
    name: 'Skopje Fortress',
    type: 'sight',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/%D0%A1%D0%9A_Old_Bridge%2C_Skopje_%2833745349220%29.jpg',
    desc: 'Kale fortress has the dominant place in Skopje. It was built of stone blocks from the ruins of the city of Scupi, during the rule of the Byzantium Emperor Justinijan the 1st.',
  },
  {
    name: 'Millenium Cross',
    type: 'sight',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Aerial_View_of_The_Millennium_Cross.jpg',
    desc: 'The Millennium Cross in Skopje is a must-see attraction for anyone visiting the city. Standing tall at 66 meters, the cross is located on top of Vodno Mountain and offers panoramic views of the city and the surrounding area.',
  },
  {
    name: 'Doubletree Hilton',
    type: 'accommodation',
    img: 'https://doubletree-by-hilton-skopje.booked.net/data/Photos/OriginalPhoto/12838/1283892/1283892400/Doubletree-By-Hilton-Skopje-Hotel-Exterior.JPEG',
    desc: 'Located along the river Vardar, DoubleTree by Hilton Skopje offers 5-star accommodations within a 10 minute drive of the city center, featuring luxuriously furnished rooms and suites, large indoor swimming pool with fitness and spa and an elegant roof bar with a relaxing view.',
    link: 'https://www.booking.com/hotel/mk/doubletree-by-hilton-skopje.html',
  },
  {
    name: 'Marriott Hotel',
    type: 'accommodation',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b3/21/b1/exterior.jpg?w=700&h=-1&s=1',
    desc: 'Skopje Marriot Hotel is set in Skopje, 100 m from Macedonia Square and 200 from Stone Bridge. The hotel offers a spa center with an indoor pool and facilities such as hot tub, massage and steam room.',
    link: 'https://www.booking.com/hotel/mk/skopje-marriott.en-gb.html',
  },
  {
    name: 'Hotel City Park',
    type: 'accommodation',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/%D0%A1%D0%9A_Old_Bridge%2C_Skopje_%2833745349220%29.jpg',
    desc: 'With all of its perfections and flaws, Skopje is a city like no other. We grew up here, we live here, we work here.. All of our memories with the people we care the most about are created on the streets of Skopje. We are proud of the city with inexhaustible energy. The city that almost never sleeps. The wonderful squares, the biggest monument on the Balkan Peninsula, the City Park, Vodno and Matka, the Vrelo caves, the way Vardar cuts it in half, the Millenium cross, the Old town bazaar, the Kale fortress .. all of these represent a certain period and tell a different story of the capital city of the land of the sun.',
  },
  {
    name: 'Hotel Karpos',
    type: 'accommodation',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/%D0%A1%D0%9A_Old_Bridge%2C_Skopje_%2833745349220%29.jpg',
    desc: 'With all of its perfections and flaws, Skopje is a city like no other. We grew up here, we live here, we work here.. All of our memories with the people we care the most about are created on the streets of Skopje. We are proud of the city with inexhaustible energy. The city that almost never sleeps. The wonderful squares, the biggest monument on the Balkan Peninsula, the City Park, Vodno and Matka, the Vrelo caves, the way Vardar cuts it in half, the Millenium cross, the Old town bazaar, the Kale fortress .. all of these represent a certain period and tell a different story of the capital city of the land of the sun.',
  },
];
