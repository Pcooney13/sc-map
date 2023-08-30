// fetch scData here and pass to components
import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import Table from './components/Table'
// import Test from './components/Test'

const App = () => {
    const [usaState, setUsaState] = useState('Click a state for more info')
    const [hospitalData, setHospitalData] = useState([])
    const [mapScale, setMapScale] = useState(1)
    const [mapTranslate, setMapTranslate] = useState([])
    const [thestateCode, setThestateCode] = useState('0')
    useEffect(() => {
        const scJson = './src/assets/sc-hospitals.json'
        fetch(scJson).then((response) => {
            if (response.status !== 200) {
                console.error(`There was a problem: ${response.status}`)
                return
            }
            response.json().then((json) => {
                setHospitalData(json)
            })
        })
    }, [])

    return (
        <div className="max-w-3xl mx-auto pt-12 pb-24 px-4">
            <h1 className="text-slate-600 text-2xl font-bold">Our Reach</h1>
            {/* <Test hospitalData={hospitalData} /> */}
            <p className="text-lg font-light text-slate-500 leading-7 mb-8">
                Schwartz Center Healthcare Members in the United States
            </p>
            <p className="font-light text-slate-500 leading-7 mb-2">
                <em>Click a state for more info</em>
            </p>
            <Map
                hospitalData={hospitalData}
                usaState={usaState}
                setUsaState={setUsaState}
                setMapScale={setMapScale}
                mapScale={mapScale}
                thestateCode={thestateCode}
                setThestateCode={setThestateCode}
                setMapTranslate={setMapTranslate}
                mapTranslate={mapTranslate}
            />
            <div className="flex items-center gap-2">
                <p
                    className="font-medium text-slate-500 leading-8 py-2 cursor-pointer hover:text-black transition"
                    onClick={() => {
                        setMapScale(1)
                        setThestateCode(0)
                        setMapTranslate([0, 0])
                        setUsaState()
                    }}
                >
                    United States
                </p>
                <p className="text-slate-500">•</p>
                <p className="text-slate-500 leading-8 py-2">{usaState}</p>
            </div>
            <Table
                hospitalData={hospitalData}
                usaState={usaState}
                setUsaState={setUsaState}
                thestateCode={thestateCode}
                setThestateCode={setThestateCode}
            />
        </div>
    )
}

export default App
