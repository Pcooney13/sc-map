// TODO:button to show colored map of sc hospitals per million ppl in state
// TODO: button for chloropleth map and toggle to show all locations

//Filter if active stateCode === countyLine stateCode add opacity-100

// examples
// https://gist.github.com/ElefHead/ebff082d41ef8b9658059c408096f782
// stackoverflow: https://stackoverflow.com/questions/62228556/reactjs-d3-how-to-zoom-in-d3-geo-world-map

// https://www.youtube.com/watch?v=9ZB1EgaJnBU
// https://stackoverflow.com/questions/38270132/topojson-d3-map-with-longitude-latitude
// https://www.youtube.com/watch?v=aNbgrqRuoiE
// https://www.worldometers.info/gdp/gdp-by-country/

import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'
import { motion } from 'framer-motion'
import { geoAlbersUsa, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'

const width = 418
const height = 220

const projection = geoAlbersUsa().scale(1050).translate([width, height])

const path = d3.geoPath().projection(projection)

const Map = ({
    hospitalData,
    usaState,
    setUsaState,
    mapScale,
    setMapScale,
    thestateCode,
    setThestateCode,
    mapTranslate,
    setMapTranslate,
}) => {
    const stateCodes = [
        {
            code: '01',
            state: 'Alabama',
            counties: [],
        },
        {
            code: '02',
            state: 'Alaska',
            counties: [],
        },
        {
            code: '04',
            state: 'Arizona',
            counties: [],
        },
        {
            code: '05',
            state: 'Arkansas',
            counties: [],
        },
        {
            code: '06',
            state: 'California',
            counties: [],
        },
        {
            code: '08',
            state: 'Colorado',
            counties: [],
        },
        {
            code: '09',
            state: 'Connecticut',
            counties: [],
        },
        {
            code: '10',
            state: 'Delaware',
            counties: [],
        },
        {
            code: '11',
            state: 'District Of Columbia',
            counties: [],
        },
        {
            code: '12',
            state: 'Florida',
            counties: [],
        },
        {
            code: '13',
            state: 'Georgia',
            counties: [],
        },
        {
            code: '15',
            state: 'Hawaii',
            counties: [],
        },
        {
            code: '16',
            state: 'Idaho',
            counties: [],
        },
        {
            code: '17',
            state: 'Illinois',
            counties: [],
        },
        {
            code: '18',
            state: 'Indiana',
            counties: [],
        },
        {
            code: '19',
            state: 'Iowa',
            counties: [],
        },
        {
            code: '20',
            state: 'Kansas',
            counties: [],
        },
        {
            code: '21',
            state: 'Kentucky',
            counties: [],
        },
        {
            code: '22',
            state: 'Louisiana',
            counties: [],
        },
        {
            code: '23',
            state: 'Maine',
            counties: [],
        },
        {
            code: '24',
            state: 'Maryland',
            counties: [],
        },
        {
            code: '25',
            state: 'Massachusetts',
            counties: [],
        },
        {
            code: '26',
            state: 'Michigan',
            counties: [],
        },
        {
            code: '27',
            state: 'Minnesota',
            counties: [],
        },
        {
            code: '28',
            state: 'Mississippi',
            counties: [],
        },
        {
            code: '29',
            state: 'Missouri',
            counties: [],
        },
        {
            code: '30',
            state: 'Montana',
            counties: [],
        },
        {
            code: '31',
            state: 'Nebraska',
            counties: [],
        },
        {
            code: '32',
            state: 'Nevada',
            counties: [],
        },
        {
            code: '33',
            state: 'New Hampshire',
            counties: [],
        },
        {
            code: '34',
            state: 'New Jersey',
            counties: [],
        },
        {
            code: '35',
            state: 'New Mexico',
            counties: [],
        },
        {
            code: '36',
            state: 'New York',
            counties: [],
        },
        {
            code: '37',
            state: 'North Carolina',
            counties: [],
        },
        {
            code: '38',
            state: 'North Dakota',
            counties: [],
        },
        {
            code: '39',
            state: 'Ohio',
            counties: [],
        },
        {
            code: '40',
            state: 'Oklahoma',
            counties: [],
        },
        {
            code: '41',
            state: 'Oregon',
            counties: [],
        },
        {
            code: '42',
            state: 'Pennsylvania',
            counties: [],
        },
        {
            code: '44',
            state: 'Rhode Island',
            counties: [],
        },
        {
            code: '45',
            state: 'South Carolina',
            counties: [],
        },
        {
            code: '46',
            state: 'South Dakota',
            counties: [],
        },
        {
            code: '47',
            state: 'Tennessee',
            counties: [],
        },
        {
            code: '48',
            state: 'Texas',
            counties: [],
        },
        {
            code: '49',
            state: 'Utah',
            counties: [],
        },
        {
            code: '50',
            state: 'Vermont',
            counties: [],
        },
        {
            code: '51',
            state: 'Virginia',
            counties: [],
        },
        {
            code: '53',
            state: 'Washington',
            counties: [],
        },
        {
            code: '54',
            state: 'West Virginia',
            counties: [],
        },
        {
            code: '55',
            state: 'Wisconsin',
            counties: [],
        },
        {
            code: '56',
            state: 'Wyoming',
            counties: [],
        },
    ]
    const [geographies, setGeographies] = useState([])
    const [countyGeographies, setCountyGeographies] = useState([])

    useEffect(() => {
        const stateJson =
            'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'
        const countyJson =
            'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json'

        fetch(stateJson)
            .then((response) => {
                if (response.status !== 200) {
                    console.error(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then((worlddata) => {
                    setGeographies(
                        feature(worlddata, worlddata.objects.states).features
                    )
                })
            })
            .then(
                fetch(countyJson).then((response) => {
                    if (response.status !== 200) {
                        console.error(`There was a problem: ${response.status}`)
                        return
                    }
                    response.json().then((worlddata) => {
                        setCountyGeographies(
                            feature(worlddata, worlddata.objects.counties)
                                .features
                        )
                    })
                })
            )
    }, [])

    function zoomToState(d) {
        const bounds = path.bounds(d)
        const dx = bounds[1][0] - bounds[0][0]
        const dy = bounds[1][1] - bounds[0][1]
        const x = (bounds[0][0] + bounds[1][0]) / 2
        const y = (bounds[0][1] + bounds[1][1]) / 2
        const scale = Math.max(
            1,
            Math.min(10.5, 1.75 / Math.max(dx / width, dy / height))
        )
        const translate = [width - scale * x, height - scale * y]
        setMapScale(scale)
        setMapTranslate([translate[0], translate[1]])
    }

    const getX = (x, y) => {
        let coords = projection([y, x])
        if (coords === null) {
            return 0
        }
        return coords[0]
    }

    const getY = (x, y) => {
        let coords = projection([y, x])
        if (coords === null) {
            return 0
        }
        return coords[1]
    }

    // const placeMarkers = (hosp) => {
    //     let state = hosp.state
    //     let markers = hosp.hospitals.map((h) => (
    //         <circle
    //             title={h.name}
    //             key={Math.random(0, 1000)}
    //             cx={getX(h.location[0], h.location[1])}
    //             cy={getY(h.location[0], h.location[1])}
    //             r={6}
    //             fill="rgba(4, 120, 87, 0.25)"
    //             stroke="rgba(4, 120, 87, 1)"
    //             strokeWidth={0.25}
    //             className={`${state} ${usaState} marker transition-all duration-700`}
    //         />
    //     ))
    //     return markers
    // }

    // Set State Color by # of Hospitals

    function getColor(d, hospitalData) {
        let number = 0
        let max = 78
        let min = 0
        let multiplier = 2.5
        if (
            hospitalData.states &&
            hospitalData.states.filter((hospital) =>
                hospital.state.toLowerCase() === d.properties.name.toLowerCase()
                    ? (number = hospital.hospitals.length)
                    : 0
            )
        ) {
            return `rgba(52, 211, 153, ${
                ((number - min) / (max - min)) * multiplier
            })`
        }
    }

    function clickedState(e, d, state) {
        console.log(d)
        zoomToState(d)
        if (state) {
            setThestateCode(d.id.substring(0, 2))
            setUsaState(
                `${state} • ${e.target.getAttribute('title')} ${
                    thestateCode === '22'
                        ? 'Parish'
                        : thestateCode === '02'
                        ? 'Borough'
                        : 'County'
                }`
            )
        } else {
            setThestateCode(d.id.substring(0, 2))
            setUsaState(`${e.target.getAttribute('title')}`)
        }
    }

    return (
        <div className="relative">
            <svg
                className="w-full aspect-[12/8] bg-white overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg"
                viewBox="0 0 800 450"
            >
                <g
                    className="transition-all duration-500 ease-in-out"
                    style={{
                        transform: `translate(${mapTranslate[0]}px, ${mapTranslate[1]}px) scale(${mapScale})`,
                    }}
                >
                    <SVGStateLinesGroup
                        mapTranslate={mapTranslate}
                        mapScale={mapScale}
                        geographies={geographies}
                        getColor={getColor}
                        hospitalData={hospitalData}
                        clickedState={clickedState}
                    />
                    <SVGCountyLinesGroup
                        mapTranslate={mapTranslate}
                        mapScale={mapScale}
                        stateCodes={stateCodes}
                        countyGeographies={countyGeographies}
                        clickedState={clickedState}
                        thestateCode={thestateCode}
                    />
                    {/* <SVGHospitalMarkers
                        mapTranslate={mapTranslate}
                        mapScale={mapScale}
                        hospitalData={hospitalData}
                        placeMarkers={placeMarkers}
                    /> */}
                </g>
            </svg>
            {/* reset */}
            <button
                aria-label="Reset Map"
                className={`${
                    mapScale === 1 ? 'opacity-0' : 'oapcity-100'
                } absolute text-slate-400 p-4 m-2 bg-white hover:text-black rounded-full transition-all text-xs duration-500 top-0 right-0 shadow-lg`}
                onClick={() => {
                    setMapScale(1)
                    setThestateCode(0)
                    setMapTranslate([0, 0])
                    setUsaState('Click a state for more info')
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                </svg>
            </button>
        </div>
    )
}

const SVGStateLinesGroup = ({
    mapTranslate,
    mapScale,
    geographies,
    getColor,
    hospitalData,
    clickedState,
}) => {
    return (
        <g
            className="states relative"
        >
            {geographies.map((d, i) => (
                <motion.path
                    whileHover={{
                        fill: 'rgba(253, 224, 71, 1)',
                    }}
                    transition={{ duration: 0.3 }}
                    title={d.properties.name}
                    id={d.id}
                    onClick={(e) => {
                        clickedState(e, d)
                    }}
                    key={`path-${i}`}
                    // data
                    d={geoPath().projection(projection)(d)}
                    className={`country text-slate-300 cursor-pointer ${
                        false && usaState === 'Click a state for more info'
                            ? 'stroke-[0.5]'
                            : 'stroke-[0.3]'
                    }`}
                    fill={getColor(d, hospitalData)}
                    stroke="currentColor"
                />
            ))}
        </g>
    )
}

const SVGCountyLinesGroup = ({
    mapTranslate,
    mapScale,
    countyGeographies,
    clickedState,
    thestateCode,
    stateCodes,
}) => {
    stateCodes.forEach((state) => {
        countyGeographies.forEach((county) => {
            if (county.id.slice(0, 2) === state.code) {
                state.counties.push(county)
            }
        })
    })

    //create a group for each state and create a path inside that group for each county in that state
    return (
        <g className={`counties pointer-events-none`}>
            {stateCodes.map((singleState, index) => {
                return (
                    <g
                        className={`${singleState.state}-counties transition ${
                            thestateCode == singleState.code
                                ? 'pointer-events-auto opacity-100'
                                : 'pointer-events-none opacity-0'
                        }`}
                        key={singleState.state}
                    >
                        {singleState.counties.map((county, index) => {
                            return (
                                <motion.path
                                    whileHover={{
                                        fill: 'rgba(253, 224, 71, 1)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                    title={county.properties.name}
                                    onClick={(e) => {
                                        let stateID = county.id.substring(0, 2)
                                        let state
                                        stateCodes.forEach((code) => {
                                            if (code.code === stateID) {
                                                state = code.state
                                                clickedState(e, county, state)
                                            }
                                        })
                                    }}
                                    key={`path-${index}`}
                                    // data
                                    d={geoPath().projection(projection)(county)}
                                    className={`stroke-[0.25] cursor-pointer text-slate-300`}
                                    fill="rgba(253, 224, 71, 0)"
                                    stroke="currentColor"
                                />
                            )
                        })}
                    </g>
                )
            })}
        </g>
    )
}

const SVGHospitalMarkers = ({
    mapTranslate,
    mapScale,
    hospitalData,
    placeMarkers,
}) => {
    return (
        <g
            className="markers"
        >
            {hospitalData.states &&
                hospitalData.states.map((h) => placeMarkers(h))}
        </g>
    )
}

export default Map