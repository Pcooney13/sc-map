import * as d3 from "d3";
import useMeasure from "react-use-measure";

let dummyData = [[0, 20],[10, 30],[20, 75],[30, 60],[40, 100],[50, 22],[60, 70],[70, 15],[80, 80],[90, 60],[100, 105],[110, 80],[120, 70]];
let dummyData2 = [[0, 53],[10, 25],[20, 45],[30, 5],[40, 40],[50, 101],[60, 40],[70, 75],[80, 40],[90, 30],[100, 50],[110, 33],[120, 90]];

function Graph() {
    let [ref, bounds] = useMeasure()
    return (
        // <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[12/5] max-w-5xl w-full text-emerald-400" ref={ref}>
                {bounds.width > 0 && (
                    <div className="flex flex-col gap-4">                        
                        <ChartInner dummyData={dummyData} color={"text-"} width={bounds.width} height={bounds.height} />
                        {/* <ChartInner dummyData={dummyData2} width={bounds.width} height={bounds.height} /> */}
                    </div>
                )}
            </div>
        // </div>
    )
}

function ChartInner({ dummyData, width, height }) {

  let margin = {
    left: "48",
    right: "24",
    top: "16",
    bottom: "32",
  }

  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(dummyData.map(data => data[0])))
    .range([margin.left, width - margin.right])
  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(dummyData.map(data => data[1])))
    .range([height - margin.bottom, margin.top])
  let line = d3
    .line()
    .curve(d3.curveCatmullRom)
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]));
  let d = line(dummyData);
  let cRadius = 5

  return (
    <div className="overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg">
      <svg className="bg-slate-50 overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg transition-all duration-300 ease-in dark:bg-slate-700" viewBox={`0 0 ${width} ${height}`}>
        
        {yScale.ticks(6).map(max => 
          <g 
            transform={`translate(0, ${yScale(max)})`} 
            className="text-sm font-light text-slate-400 dark:text-slate-200" 
            key={max}
          >
            <line 
              x1={margin.left} 
              x2={width-(margin.right-4)} 
              stroke="currentColor"
              strokeDasharray="3, 6"
              strokeWidth="0.5"
            />
            <text 
              alignmentBaseline="middle"
              fill="currentColor" 
              x="16"
            >
              {max}
            </text>
          </g>
        )}
        {xScale.ticks().map(max => 
          <g 
            transform={`translate(${xScale(max)}, ${height - 8})`} 
            className="text-sm font-light text-slate-400 dark:text-slate-200" 
            key={max}
          >
            <text textAnchor="middle" fill="currentColor">{max}</text>
          </g>
        )}
        <path d={d} fill="none" stroke="currentColor" strokeWidth={2}/> 
        
        {dummyData.map(d => (
          <g key={d[0]+9} className="group" transform={`translate(${xScale(d[0])}, ${yScale(d[1])})`} >
            <circle 
              className="stroke-2 stroke-slate-100 dark:stroke-slate-700 group-hover:stroke-none transition-all duration-300"
              fill="currentColor"
              r={cRadius}
              // cx={xScale(d[0])} 
              // cy={yScale(d[1])} 
              
            >
            </circle>
            <text 
              className="opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300"
            >
              {d[1]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default Graph