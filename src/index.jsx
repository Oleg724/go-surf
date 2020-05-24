import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Nav menu
import surfNavIcon from './assets/Nav/icon_nav-surf.svg';
import travelNavIcon from './assets/Nav/icon_travel.svg';
import sleepNavIcon from './assets/Nav/icon_camp.svg';
import shopNavIcon from './assets/Nav/icon_surf-board.svg';

// First page bg images
import westShoreImg from './assets/FirstPageBg/bg1.jpg';
import southShoreImg from './assets/FirstPageBg/bg4.jpg';
import northShoreImg from './assets/FirstPageBg/bg3.jpg';
import eastShoreImg from './assets/FirstPageBg/bg2.jpg';

// Beach slider photos
import malibu from './assets/BeachSliderPhotos/1.jpg';
import air from './assets/BeachSliderPhotos/2.jpg';
import cloud from './assets/BeachSliderPhotos/3.jpg';
import vieux from './assets/BeachSliderPhotos/4.jpg';

// Parameter icons
import surfIcon from './assets/ParametersIcons/icon_surf.svg';
import waterIcon from './assets/ParametersIcons/icon_water.svg';
import windIcon from './assets/ParametersIcons/icon_wind.svg';

// Travel slider photo
import malibuPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import puertoPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import hawaiiPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import rioPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import hosPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import capePhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import colomboPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';
import airPhoto from './assets/TravelSliderPhotos/image-airlie_beach.png';

// Fly companies logos
import logoAirFrance from './assets/FlyCompaniesLogos/logo-airfrance.png';
import logoBritishAirways from './assets/FlyCompaniesLogos/logo-british_airways1.png';
import logoFlyEmirates from './assets/FlyCompaniesLogos/logo-fly_emirates.png';
import logoLufthansa from './assets/FlyCompaniesLogos/logo-lufthansa.png';
import logoQatar from './assets/FlyCompaniesLogos/logo-qatar_airways.png';
import logoVirgin from './assets/FlyCompaniesLogos/logo-virgin.png';
import logoKlm from './assets/FlyCompaniesLogos/logo-klm.png';
import logoThai from './assets/FlyCompaniesLogos/logo-thai-airways.png';


// Fly companies plane photo
import planeImageVirgin from './assets/FlyCompaniesPlanesPhotos/image-plane_virgin.png';
import planeImageKlm from './assets/FlyCompaniesPlanesPhotos/image-plane_klm.png';
import planeImageBritishAirways from './assets/FlyCompaniesPlanesPhotos/image-plane_british_airways.png';
import planeImageAirFrance from './assets/FlyCompaniesPlanesPhotos/image-plane_airfrance.png';
import planeImageQatar from './assets/FlyCompaniesPlanesPhotos/image-plane_qatar_airways.png';
import planeImageThai from './assets/FlyCompaniesPlanesPhotos/image-plane_thai.png';
import planeImageLufthansa from './assets/FlyCompaniesPlanesPhotos/image-plane_lufthansa.png';
import planeImageFlyEmirates from './assets/FlyCompaniesPlanesPhotos/image-plane-fly-emirates.png';

// Shop surfboard images
import surfboardNugget from './assets/ShopSurfBoards/image-surfboard.png';
import surfboardKiteboarding from './assets/ShopSurfBoards/image-surfboard-21.png';
import surfboardCabrinha from './assets/ShopSurfBoards/image-surfboard-4.png';
import surfboardRipper from './assets/ShopSurfBoards/image-surfboard-6.png';

// Shop extras images
import sexWaxBlue from './assets/ShopExtrasPhotos/image-wax.png';
import puraVida from './assets/ShopExtrasPhotos/image-bracelet.png';
import sexWaxDarkPink1 from './assets/ShopExtrasPhotos/image-wax-3.png';
import puraVida1 from './assets/ShopExtrasPhotos/image-bracelet.png';
import sexWaxDarkBlue from './assets/ShopExtrasPhotos/image-wax-2.png';
import puraVida2 from './assets/ShopExtrasPhotos/image-bracelet.png';
import sexWaxDarkPink from './assets/ShopExtrasPhotos/image-wax-3.png';
import puraVida3 from './assets/ShopExtrasPhotos/image-bracelet.png';


const shores = [
  {
    type: 'surf',
    title: 'North shore',
    property: 'condition',
    description: 'Punchy',
    image: northShoreImg,
  },
  { 
    type: 'surf',
    title: 'South shore',
    property: 'condition',
    description: 'Pumping',
    image: southShoreImg,
  },
  {
    type: 'surf',
    title: 'West shore',
    property: 'condition',
    description: 'Radical',
    image: westShoreImg,
  },
  {
    type: 'surf',
    title: 'East shore',
    property: 'condition',
    description: 'Blown out',
    image: eastShoreImg,
  },
]

const beachList = [
  {
    name: 'Cloud nine',
    place: 'Kayau',
    country: 'Hawaii',
    image: cloud,
    photo: hawaiiPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ],
    airline: {
      name: 'KLM Hawaii',
      "plane-photo": planeImageKlm,
      logo: logoKlm,
    },
    information: [
      {
        destination: 'Kona',
        distance: '2,377 miles',
        'travel time': '3 hours 35 minutes',
        pricing: ['$1,227 USD', 'Round trip'],
      },
      {
        resort: 'Lind Boracay',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 45, 'USD', 'per night'],
      },
      {
        rating: 'very good',
        stars: 4,
      }
    ]
  },
  {
    name: 'Malibu beach',
    place: 'California',
    country: 'USA',
    image: malibu,
    photo: malibuPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '10 - 15',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+4.5',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '10 SE',
        name: 'wind (kts)',
      }
    ],
    airline: {
      name: 'Virgin America',
      "plane-photo": planeImageVirgin,
      logo: logoVirgin,
    },
    information: [
      {
        destination: 'Los Angeles',
        distance: '1,339 miles',
        'travel time': '2 hours 60 minutes',
        pricing: ['$1,005 USD', 'Round trip'],
      },
      {
        resort: 'Sheraton Gateway',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 57, 'USD', 'per night'],
      },
      {
        rating: 'excellent',
        stars: 5,
      }
    ]
  },
  {
    name: 'Cloud',
    place: 'Marao',
    country: 'Puerto Rico',
    image: air,
    photo: puertoPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ], 
    airline: {
      name: 'Puerto Rico British Airways',
      "plane-photo": planeImageBritishAirways,
      logo: logoBritishAirways,
    },
    information: [
      {
        destination: 'San Juan',
        distance: '3,967 miles',
        'travel time': '8 hours 20 minutes',
        pricing: ['$1,099 USD', 'Round trip'],
      },
      {
        resort: 'CasaBlanka',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 35, 'USD', 'per night'],
      },
      {
        rating: 'very good',
        stars: 4,
      }
    ]
  },
  {
    name: 'Villa Beach',
    place: 'Rio de Janeiro',
    country: 'Brazil',
    image: vieux,
    photo: rioPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ],
    airline: {
      name: 'Lufthansa no Brasil',
      "plane-photo": planeImageLufthansa,
      logo: logoLufthansa,
    },
    information: [
      {
        destination: 'Jacarepagua',
        distance: '7,947 miles',
        'travel time': '18 hours 10 minutes',
        pricing: ['$1,555 USD', 'Round trip'],
      },
      {
        resort: 'Serhs Natal',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 39, 'USD', 'per night'],
      },
      {
        rating: 'good',
        stars: 3,
      }
    ]
  },
  {
    name: 'Vieux boucau',
    place: 'Hossegor',
    country: 'France',
    image: malibu,
    photo: hosPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ],
    airline: {
      name: 'AirFrance',
      "plane-photo": planeImageAirFrance,
      logo: logoAirFrance,
    },
    information: [
      {
        destination: 'Biarritz',
        distance: '10,883 miles',
        'travel time': '20 hours 15 minutes',
        pricing: ['$1,025 USD', 'Round trip'],
      },
      {
        resort: 'Le Relais du Lac',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 32, 'USD', 'per night'],
      },
      {
        rating: 'satisfactory',
        stars: 2,
      }
    ]
  },
  {
    name: 'Cape town beach',
    place: 'Cape town',
    country: 'RSA',
    image: air,
    photo: capePhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ],
    airline: {
      name: 'Qatar Airways',
      "plane-photo": planeImageQatar,
      logo: logoQatar,
      
    },
    information: [
        {
        destination: 'Cape town',
        distance: '16,001 miles',
        'travel time': '1 day 6 hours 20 minutes',
        pricing: ['$2,998 USD', 'Round trip'],
      },
      {
        resort: 'Mojo',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 41, 'USD', 'per night'],
      },
      {
        rating: 'excellent',
        stars: 5,
      }
    ]
  },
  {
    name: 'Colombo beach',
    place: 'Colombo',
    country: 'Sri Lanka',
    image: cloud,
    photo: colomboPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ], 
    airline: {
      name: 'Thai Airways',
      "plane-photo": planeImageThai,
      logo: logoThai,
    },
    information: [
      {
        destination: 'Colombo',
        distance: '10,355 miles',
        'travel time': '1 day 2 hours 5 minutes',
        pricing: ['$2,501 USD', 'Round trip'],
      },
      {
        resort: 'Nature Camp',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 19, 'USD', 'per night'],
      },
      {
        rating: 'satisfactory',
        stars: 2,
      }
    ]
  },
  {
    name: 'Airlie beach',
    place: 'Queensland',
    country: 'Australia',
    image: vieux,
    photo: airPhoto,
    parameters: [
      {
        parameter: surfIcon,
        points: '9 - 13',
        name: 'surf (ft)',
      },
      {
        parameter: waterIcon,
        points: '+2.3',
        name: 'tide (ft)',
      },
      {
        parameter: windIcon,
        points: '4 SE',
        name: 'wind (kts)',
      }
    ], 
    airline: {
      name: 'Fly Emirates Australia',
      "plane-photo": planeImageFlyEmirates,
      logo: logoFlyEmirates,
    },
    information: [
      {
        destination: 'QueensLand',
        distance: '7,065 miles',
        'travel time': '23 hours 5 minutes',
        pricing: ['$1,976 USD', 'Round trip'],
      },
      {
        resort: 'Auberge',
        '# of nights': '',
        '# of guests': '',
        pricing: ['$', 45, 'USD', 'per night'],
      },
      {
        rating: 'excellent',
        stars: 5,
      }
    ]
  }      
];
const navIcons = [
  {
      name: 'surf',
      icon: surfNavIcon,
  },
  {
      name: 'travel',
      icon: travelNavIcon,
  },
  {
      name: 'sleep',
      icon: sleepNavIcon,
  },
  {
      name: 'shop',
      icon: shopNavIcon,
  },
];
const pageTitles = ['go surf', 'surf', 'travel', 'sleep', 'shop'];
const headlines = ['current location', 'shore', 'airline', 'resorts', 'rating', 'style'];
const links = [
  ['surf', 'go'],
  ['view', 'surf'],
  ['book', 'flight'],
  ['book', 'stay'],
  ['drop', 'in'],
  ['go', 'surf'],
];
const shop = [
  {
    name: 'North nugget TT surfboard',
    photo: surfboardNugget,
    parameters: {
      concavity: 'double concave with vee shape low point',
      rails: 'carbon fiber rails',
      fins: 'quad setup sweep fins',
    },
    stars: 5,
    price: {
      value: 799.99,
      currency: '$'
    },
    extras: [
      {
        name: 'sex wax',
        price: {
          value: 34.99,
          currency: '$',
        },
        photo: sexWaxBlue,
      },
      {
        name: 'pura vida',
        price: {
          value: 27.99,
          currency: '$', 
        },
        photo: puraVida,
      },
    ],
  },
  {
    name: 'North Kiteboarding Whip 2015 surfboard',
    photo: surfboardKiteboarding,
    parameters: {
      concavity: 'single concave',
      rails: 'carbon fiber rails',
      fins: '',
    },
    stars: 4,
    price: {
      value: 999.99,
      currency: '$',
    },
    extras: [
      {
        name: 'sex wax',
        price: {
          value: 27.99,
          currency: '$',
        },
        photo: sexWaxDarkPink1,
      },
      {
        name: 'pura vida',
        price: {
          value: 31.99,
          currency: '$',
        },
        photo: puraVida1,
      },
    ],
  },
  {
    name: 'Spade 2017 Cabrinha Surfboard',
    photo: surfboardCabrinha,
    parameters: {
      concavity: 'V concave',
      rails: 'carbon fiber rails',
      fins: 'five fin setup',
    },
    stars: 5,
    price: {
      value: 829.99,
      currency: '$',
    },
    extras: [
      {
        name: 'sex wax',
        price: {
          value: 30.99,
          currency: '$',
        },
        photo: sexWaxDarkBlue,
      },
      {
        name: 'pura vida',
        price: {
          value: 25.99,
          currency: '$',
        },
        photo: puraVida2,
      },
    ],
  },
  {
    name: 'Ripper 3 Core Waveboard',
    photo: surfboardRipper,
    parameters: {
      concavity: 'the flat bottom',
      rails: 'carbon fiber rails',
      fins: '',
    },
    stars: 3,
    price: {
      value: 839.99,
      currency: '$',
    },
    extras: [
      {
        name: 'sex wax',
        price: {
          value: 31.99,
          currency: '$',
        },
        photo: sexWaxDarkPink,
      },
      {
        name: 'pura vida',
        price: {
          value: 23.99,
          currency: '$',
        },
        photo: puraVida3,
      },
    ],
  },
];

const footerText = 'Go-surf 2018. All rights reserved.';

const appProps = {
  navIcons: navIcons, 
  shores: shores, 
  pageTitles: pageTitles, 
  headlines: headlines, 
  beachList: beachList,
  links: links,
  shop: shop,
  footerText: footerText,
};

ReactDOM.render(
  <StrictMode>
    <App { ...appProps } />
  </StrictMode>,
  document.getElementById('root')
);