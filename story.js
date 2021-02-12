var config = {
    //Dependencies
    style: 'mapbox://styles/npontone/ckkygb9tr2prk17qo8prpezqr',
    accessToken: 'pk.eyJ1IjoibnBvbnRvbmUiLCJhIjoiY2traW92bjVvMGMyYjJ3cW50NXcxMmN0ZiJ9.-Pn1cLAop7SM5aNliAUkxQ',

    //Style Selections
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,

    //Header settings.
    alignment: 'left',
    title: 'British Columbias Gray Wolves',
    subtitle: 'An investigation of human wolf interactions in Kootenay National Park',
    byline: 'By GEOM4001 Group 2',
    footer: 'Source: source citations, etc.',

    //Storymap chapters start here.
    chapters: [
        {
            id: 'Wolf-story-chapter-1',
<<<<<<< HEAD
            //Introduction to Kootenay National Park. General background information. Only additional map layer
            //used is the extent of Kootenay.
            title: 'Chapter 1: Kootenay National Park.',
            //Image of Kootenay National Park
            image: 'images/Kootenay.png',
            description: 'Kootenay National Park lies in the southeastern part of British Columbia and occupies an area of approximately 1,406 square kilometers. This area showcases many impressive landscapes including glaciers, mountains and chasms. While most visitors enjoy the scenery along Highway 93, there are various hiking trails within the park limits. Perhaps one of the most attractive activities in the park is the Radium Hot Springs where visitors can soak. Kootenay is also home to many species such as mountain goats, whitetail deer and the Northwestern Wolf. (https://www.kootenayrockies.com/partner/kootenay-national-park/)',
=======
            title: 'Chapter 1: .',
            image: 'images/Kootenay.jpeg',
            description: 'Kootenay National Park, located in southern British Columbia, was established in 1920. Located in a mountain pass used by fur traders and trappers, Kootenay is home to beautiful mountain vistas, and a variety of animal species.',
>>>>>>> 2b8c8fa87309d2125a249aee20873c713efb129d
            location: {
              // Focuses the camera on Kootenay national park. Angled as to show topography.
              center: { lon: -116.14022, lat: 50.96403 },
                        zoom: 10.56,
                        pitch: 4.00,
                        bearing: 1.02 
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
<<<<<<< HEAD
            id: 'Wolf-Story-Chapter-2',
            //Background on the species of wolf in Kootenay national park. Extent of kootenay national park,
            // and wolf location data.
            title: 'Chapter 2: Northwestern Wolves.',
            image: 'images/Wolf.png',
            description: 'Northwestern wolves (C. lupus occidentalis) are a subspecies of gray wolf in North America. There are many colour variations including black, white and tan. They are found in Alaska, to the Northwestern United States in rock mountain areas. This apex predator lives in packs of 6-12 with distinct hierarchical roles. Wolves are most active at dawn and dusk and can spend up to 10 hours of their day on the move. These animals have a varied diet including hares, caribou and beavers. Northwestern wolves are threatened due to trapping as well as habitat fragmentation.',
            //Focuses camera on an area with high wolf activity.
=======
            id: 'Wolf-story-chapter-2',
            title: 'Chapter 2: .',
            image: 'images/Kootenay.jpeg',
            description: '',
>>>>>>> 2b8c8fa87309d2125a249aee20873c713efb129d
            location: {
               center: { lon: -115.40808, lat: 54.71445 },
                      zoom: 10.17,
                      pitch: 60.00,
                      bearing: -50.14
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        {
<<<<<<< HEAD
            id: 'Wolf-Story-Chapter-3',
            //Discusses highway 93 in Kootenay.
            title: 'Highway 93 in Kootenay National Park',
            image: 'images/hwy93.png',
            description: 'Highway 93 otherwise known as the Icefields Parkway runs from Jasper, Alberta south into the Northwestern United States. This road was built parallel to the continental divide and offers almost 230 kilometers of spectacular mountainous views. The highway is fully paved with wide shoulders and a maximum speed of 90 km/hr' ,
            //Focuses camera
=======
            id: 'wolf-story-chapter-2',
            title: 'Chapter 3: Wolves and the highway',
            image: './path/to/image/source.png',
            description: '<canvas id="myChart" width="400" height="400"></canvas>',
>>>>>>> 2b8c8fa87309d2125a249aee20873c713efb129d
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
