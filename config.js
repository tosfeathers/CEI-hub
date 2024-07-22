var config = {
    style: 'mapbox://styles/tfeathers/clyvpaobp00ga01nxhup96bff',
    accessToken: 'pk.eyJ1IjoidGZlYXRoZXJzIiwiYSI6ImNreXgzZndwbjBlcm8yb28yZzBkbG5kMnEifQ.vMbTXMXZTHSXeY9FHfoWAg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/s
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: "Oregon's Toxic Time Bomb",
    subtitle: "Oregon is due for a massive earthquake. When it comes, it will likely cause a toxic fuel spill as bad as Deepwater Horizon.",
    byline: 'By Todd Feathers',
    footer: 'Source: Data from the Oregon Department of Geology and Mineral Industries, the City of Portland, Multnomah County, the U.S. Geological Service, and Portland State University. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Megathrust',
            description: 'On January 26, 1700, the tectonic Pacific Plate abruptly slipped further beneath the Juan de Fuca Plate, causing a "megathrust" earthquake about 70 miles off the West Coast of Oregon. The quake, which geological evidence suggests was around 8.7 to 9.2 magnitude on the Richter scale, destroyed low lying settlements, dropped the coastline of Oregon by several feet, and created a tsunami that reached Japan. It was the last earthquake to occur on the 700 mile-long Cascadia Subduction Zone fault line. But seismologists say the next megathrust is coming due, with some simulations estimating a 37 percent chance it will occur in the next 50 years.',
            location: {
                center: [-129.48465, 46.84087],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            description: 'A magnitude 9.0 earthquake orginiating at the Cascadia Subduction Zone would cause destruction across the Pacific Northwest. The Oregon Department of Geology and Mineral Industries has <a href="https://www.multco.us/em/dogami-study-estimates-cascadia-earthquake-impacts-portland-region">estimated</a> it could result in $37 billion in damages, displace 85,000 people, and cause 27,000 casualties, ranging from minor injuries to deaths. About 150 miles east from the fault line, in the city of Portland, the worst shaking will likely be along the banks of the Willamette River, where peak ground velocity could reach 44 centimeters per second, liquifying the soil.',
            location: {
                center: [-122.90501, 45.60760],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'groundAcceleration',
                    opacity: 0.5,
                    duration: 1000
                }
            ],
            onChapterExit: [
                    {
                    layer: 'groundAcceleration',
                    opacity: 0,
                    duration: 1000
                    }    
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: 'In the Mocks Bottom and Swan Island neighborhoods, as many as 77 percent of the buildings would be extensively damaged or completely destroyed. Across the Willamette River, in the Northwest Industrial District, 47 percent of the buildings will likely be extensively damaged or destroyed as the shaking turns the already wet soil beneath them into a liquid.',
            location: {
                center: [-122.75195, 45.55684],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'buildingLoss',
                    opacity: 0.5,
                    duration: 1000
                },
            ],
            onChapterExit: [
                {
                    layer: 'buildingLoss',
                    opacity: 0,
                    duration: 1000
                },
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            description: "Sitting above this liquifaction zone is Oregon's Critical Energy Infrastructure Hub, which houses 630 tanks that store a variety of fuel and hazardous material. A 2022 study estimates that under the conditions caused by a megathrust earthquake, 397 of those tanks would fail, releasing between 94.6 million and 193.7 million gallons of gasoline, crude oil, and other toxic liquids into the ground and the Willamette River.",
            location: {
                center: [-122.75195, 45.55684],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'fuelTerminals',
                    opacity: 0.4,
                    duration: 1000
                }
            ],
            onChapterExit: [
                    {
                    layer: 'fuelTerminals',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            image: 'tanks.png',
            description: "Much of the fuel will flow into and down Willamette River, causing a spill on par with the Deepwater Horizon disaster—the worst fuel spill in American history. The chemicals will create a toxic cloud that will likely spread across the Portland region. And the state's ability to respond to the compounding disasters will be severely limited. The CEI hub holds 90 percent of Oregon's fuel supply and 100 percent of the fuel supply for the Portland International Airport, meaning rescue operations and emergency vehicles will have to run on fuel shipped in expensively and inconveniently from out-of-state.",
            location: {
                center: [-122.74211, 45.57431],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fuelTerminals',
                    opacity: 0.4,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'fuelTerminals',
                    opacity: 0,
                    duration: 1000
                }
            ]
        }
    ]
};
