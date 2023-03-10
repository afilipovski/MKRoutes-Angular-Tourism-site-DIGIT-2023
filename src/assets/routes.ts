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
    sights: ["Bigorski Monastery", "St Nicholas"],
    accommodation: ["Hotel Makpetrol", "Hotel Bistra", "Hotel Radika"]
  },
  {
    name: 'Bigorski Monastery',
    type: 'sight',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/%D0%9F%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0_%D0%BD%D0%B0_%D0%91%D0%B8%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B8_%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80.jpg',
    desc: 'The Monastery of Saint Jovan Bigorski is a Macedonian Orthodox monastery located in the western part of North Macedonia, near the road connecting the towns of Debar and Gostivar. The monastery church is dedicated to St. John the Baptist.',
},
{
  name: 'St Nicholas',
  type: 'sight',
  img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3f/f8/2e/sinkin-church.jpg?w=1200&h=1200&s=1',
  desc: `St Nicholas is the former main village church of the village Mavrovo, which today is mainly submerged in the waters of the Mavrovo Lake. It was built in 1850. In 1953, with the construction of the hydro system "Mavrovo" and Mavrovo Lake, the church was under water. More recently, in periods of drought, the church is located on dry land and it can be visited.`
},
{
  name: 'Hotel Radika',
  type: 'accommodation',
  img: 'https://s-travel.mk/wp-content/uploads/2020/08/Hotel_Radika_Mavrovo_1.jpg',
  desc: `A mountain resort in Mavrovo National Park in Western Macedonia, 9 km from the Mavrovo Ski Resort, Hotel Radika enjoys a scenic location surrounded by pristine forests and just above Mavrovo Lake. The spacious rooms at the Radika Hotel come in a modern or Baroque style. They feature a digital TV with over 80 channels, a minibar, air conditioning, and a bathroom. Free WiFi is available in all areas.`,
  link: 'https://www.booking.com/Share-W3vj8kN',
},
{
  name: 'Hotel Bistra',
  type: 'accommodation',
  img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/60/4d/f9/hotel-bistra-mavrovo.jpg?w=700&h=-1&s=1',
  desc: `Hotel Bistra, Resort Mavrovo is located in National Park Mavrovo, at the foot of the Bistra Mountain and features an indoor swimming pool, fitness centre and sauna. All rooms at Hotel Bistra, Resort Mavrovo include a private bathroom, satellite TV, free Wi-Fi. Some have spa baths and a balcony with mountain views.`,
  link: 'https://www.booking.com/Share-V48ACB',
},
{
  name: 'Hotel Makpetrol',
  type: 'accommodation',
  img: 'https://www.hotel-board.com/picture/-hotel-1385507.jpg',
  desc: 'Dotted with restaurants and bars, about a 12-minute stroll from Ski Lift "Plavi", this 3-star Hotel Makpetrol Mavrovo comprises 42 rooms. Boasting snow skiing, hiking and horse riding together with an aperitif bar, the hotel is located near Ski Mavrovo.',
  link: 'http://hotels.makpetrol.com.mk/',
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
  {
    name: 'Kratovo',
    type: 'city',
    lat: 42.0794,
    lon: 22.1799,
    img: 'https://www.mywanderlust.pl/wp-content/uploads/2021/02/kratovo-macedonia-32.jpg',
    bgImage:
      'https://www.mywanderlust.pl/wp-content/uploads/2021/02/kratovo-macedonia-34.jpg',
    desc: `Kratovo is a small town in North Macedonia. It is the seat of Kratovo Municipality. It lies on the western slopes of Mount Osogovo at an altitude of 600 metres above sea level. Having a mild and pleasant climate, it is located in the crater of an extinct volcano. It is known for its bridges and towers.`,
    sights: ["Clock Tower", "Kratovo Museum", "Medieval Bridge", "Kuklica"],
    accommodation: ["Hotel Kratis","Etno House"],
  },
  {
    name: 'Clock Tower',
    type: 'sight',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Saat-Kula-Kratovo-MK.JPG',
    desc: `The Clock Tower of Kratovo is a clock tower in the town of Kratovo, one of the six towers remaining from the town's medieval and Ottoman period. Since 2008, the tower belongs under the jurisdiction of the Museum of Kratovo.`,
  },
  {
    name: 'Kratovo Museum',
    type: 'sight',
    img: 'https://museu.ms/remote.jpg.ashx?width=1000&height=450&format=jpg&mode=crop&scale=both&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL21rbWdrci8yODAzMi9DaXR5JTIwTXVzZXVtJTIwb2YlMjBLcmF0b3ZvLnBuZw&hmac=mgFH1cgGjdo',
    desc: 'National Museum - Kratovo was founded in 1993 from a museum collection. The museum consists of four departments, which include: archaeological, historical, ethnological and conservation. The museum has so far implemented two permanent exhibitions, including: setting 200 ethnological objects, opened 2004 and historical setting "Kratovo through the centuries", opened in 2007.',
  },
  {
    name: 'Medieval Bridge',
    type: 'sight',
    img: 'https://pbs.twimg.com/media/DjWg0hrX0AAQncM.jpg',
    desc: `Kratovo is featured by an old-city Macedonian architecture, it's famous for its towers and medieval stone bridges which connect the left and the right part of the city. The most famous of all is Radin Bridge (Radin Most), but also other bridges enchant with their beauty. The Bridge is over Manceva river, it's erected in 1833 on two towers, one of which is 28 meters high and other 29 meters high.`,
  },
  {
    name: 'Kuklica',
    type: 'sight',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Kuklici.jpg?download',
    desc: 'Kuklica is a small village in the municipality of Kratovo, North Macedonia. It is known for the hundreds of naturally formed stone pillars that resemble humans. There are two main legends surrounding the formation of the strange stone pillars in Kuklica. The most famous legend is that of a man who could not decide which of two women he should marry. So, the man planned to marry each woman on the same day at different times. When the first wedding was in progress, the woman to marry the man second went to see who was getting married on the same day as she. When she saw her future husband marrying another woman, she cursed all in attendance at the wedding and turned them into stone.',
  },
  {
    name: 'Hotel Kratis',
    type: 'accommodation',
    img: 'https://www.hotelkratis.mk/app/images/6n.jpg',
    desc: 'Centrally located in Kratovo, Hotel Kratis offers air-conditioned rooms with free WiFi. Free private parking is possible on site. Each room features a flat-screen TV with cable channels. A minibar is provided as well. Some units come with a seating area with a sofa. The en-suite bathroom is fitted with a shower and free toiletries.',
    link: 'https://www.booking.com/Share-4vQsSnw',
  },
  {
    name: 'Etno House',
    type: 'accommodation',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/282951833.jpg?k=982b72c39ce528fa246a4fa30b8858693bbca186c75372e78d3a925be36f94f0&o=&hp=1',
    desc: 'Located in Kratovo, 17 km from Aquapark Macedonia, Etno House Shancheva provides accommodation with a shared lounge, free private parking, a garden and barbecue facilities. Featuring family rooms, this property also provides guests with a terrace. The accommodation offers a 24-hour front desk.',
    link: 'https://www.booking.com/Share-PeowEk',
},

];
