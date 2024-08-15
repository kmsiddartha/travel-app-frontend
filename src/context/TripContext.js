import React, { createContext, useState } from 'react';
import kashmirImage from '../images/kashmir.avif';
import himachalImage from '../images/himachal.jpg';
import uttarakhandImage from '../images/uk.jpg';

import uk1 from '../images/uk1.jpg';
import uk2 from '../images/uk2.jpg';
import uk3 from '../images/uk3.avif';

import himachal1 from '../images/himachal1.jpg';
import himachal2 from '../images/himachal2.jpg';
import himachal3 from '../images/himachal3.jpg';

import kashmir1 from '../images/kashmir1.avif';
import kashmir2 from '../images/kashmir1.avif';
import kashmir3 from '../images/kashmir3.jpg';

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips] = useState([
    {
      id: 1,
      name: 'Kashmir',
      image: kashmirImage,
      description:
        'Kashmir, often referred to as "Paradise on Earth," is renowned for its breathtaking landscapes and serene beauty. Nestled in the northernmost part of India, it is celebrated for its snow-capped mountains, lush green valleys, and pristine lakes. The famous Dal Lake in Srinagar, with its traditional houseboats and Shikara rides, provides a picturesque experience that draws visitors from around the world. The regions rich cultural heritage, combined with its stunning natural scenery, makes Kashmir a sought-after destination for travelers and nature enthusiasts alike',
      details:
        "Culturally, Kashmir is a melting pot of diverse traditions and ethnicities, with a history that reflects a blend of Persian, Central Asian, and Indian influences. Its vibrant crafts, including Pashmina shawls and intricate woodwork, are well-known. The local cuisine, featuring dishes like Rogan Josh and Yakhni, showcases the region's unique culinary heritage. Despite its political challenges, Kashmir remains a symbol of natural splendor and cultural richness, offering an unparalleled experience for those who visit.",
      images: [kashmir1, kashmir2, kashmir3],
    },
    {
      id: 2,
      name: 'Himachal Pradesh',
      image: himachalImage,
      description:
        "Himachal Pradesh, located in the western Himalayas, is a haven for nature lovers and adventure seekers. Known for its diverse landscapes, from lush green meadows to rugged snow-covered peaks, the state offers a range of outdoor activities such as trekking, skiing, and paragliding. Popular destinations like Manali, Shimla, and Dharamshala provide stunning views of the mountains and are well-regarded for their pleasant climates and charming colonial architecture. The state's picturesque beauty, combined with its adventure sports, makes it a popular choice for both relaxation and thrill.",
      details:
        'In addition to its natural attractions, Himachal Pradesh has a rich cultural heritage that is reflected in its festivals, traditions, and local handicrafts. The region is home to a variety of indigenous communities, each with their unique customs and festivals. The local cuisine, characterized by its use of fresh ingredients and distinctive flavors, adds to the states appeal. Himachal Pradeshs blend of scenic beauty, cultural diversity, and adventure makes it a unique destination in India.',
      images: [himachal1, himachal2, himachal3],
    },
    {
      id: 3,
      name: 'Uttarakhand',
      image: uttarakhandImage,
      description:
        'Uttarakhand, often referred to as "The Land of Gods," is a state in northern India known for its spiritual significance and natural beauty. It is home to some of the most revered Hindu pilgrimage sites, including Haridwar and Rishikesh, which attract thousands of devotees and spiritual seekers annually. The states landscape features a dramatic mix of lush forests, majestic mountains, and tranquil rivers. The Ganges, one of the holiest rivers in India, flows through Uttarakhand, adding to its spiritual allure.',
      details:
        'Beyond its religious significance, Uttarakhand is a popular destination for adventure enthusiasts. The states diverse topography supports activities such as trekking, rafting, and skiing. Popular spots like Nainital, Mussoorie, and Ranikhet offer breathtaking views and a serene atmosphere, ideal for relaxation and rejuvenation. The local cuisine, influenced by both Garhwali and Kumaoni traditions, provides a delightful culinary experience. Uttarakhands combination of spiritual heritage, natural beauty, and adventure opportunities makes it a captivating destination for visitors.',
      images: [uk1, uk2, uk3],
    },
  ]);

  return (
    <TripContext.Provider value={{ trips }}>{children}</TripContext.Provider>
  );
};
