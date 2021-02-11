var config = {
    style: 'mapbox://styles/npontone/ckkygb9tr2prk17qo8prpezqr',
    accessToken: 'pk.eyJ1IjoibnBvbnRvbmUiLCJhIjoiY2traW92bjVvMGMyYjJ3cW50NXcxMmN0ZiJ9.-Pn1cLAop7SM5aNliAUkxQ',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    alignment: 'left',
    title: 'British Columbias Gray Wolves',
    subtitle: 'An investigation of human wolf interactions in Kootenay National Park',
    byline: 'By GEOM4001 Group 2',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Wolf-story-chapter-1',
            title: 'Chapter 1: .',
            image: 'images/Kootenay.jpeg',
            description: 'Kootenay National Park, located in southern British Columbia, was established in 1920. Located in a mountain pass used by fur traders and trappers, Kootenay is home to beautiful mountain vistas, and a variety of animal species.',
            location: {
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
            id: 'Wolf-story-chapter-2',
            title: 'Chapter 2: .',
            image: 'images/Kootenay.jpeg',
            description: '',
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
            id: 'wolf-story-chapter-2',
            title: 'Chapter 3: Wolves and the highway',
            image: './path/to/image/source.png',
            description: '<canvas id="myChart" width="400" height="400"></canvas>',
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
