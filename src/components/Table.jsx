import { useState } from 'react'

function Table({ hospitalData, usaState, setUsaState, thestateCode, setThestateCode }) {
    let [sort, setSort] = useState('state')
    hospitalData.states &&
        hospitalData.states.sort((a, b) => {
            console.log(sort)
            if (sort === 'state') {
                return a.state?.localeCompare(b.state)
            } else if (sort === 'state: desc') {
                return b.state?.localeCompare(a.state)
            } else if (sort === 'total_hospitals') {
                return b.total_hospitals - a.total_hospitals
            } else if (sort === 'total_hospitals: desc') {
                return a.total_hospitals - b.total_hospitals
            } else if (sort === 'members') {
                return b.total_members - a.total_members
            } else if (sort === 'members: desc') {
                return a.total_members - b.total_members
            } else if (sort === 'readDate') {
                return a.joined?.localeCompare(b.joined)
            } else if (sort === 'readDate: desc') {
                return b.joined?.localeCompare(a.joined)
            }
        })

    return (
        <div className="w-full">
            <div className="">
                <div className="flex flex-col">
                    <div className="relative rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5">
                        <div className="inline-block min-w-full relative">
                            <div className="relative">
                                <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-800">
                                    <thead className="bg-slate-100 dark:bg-slate-800">
                                        <tr>
                                            <SortableColumn
                                                sort={sort}
                                                onClick={(sort) => {
                                                    setSort(sort)
                                                }
                                                }
                                                prop="state"
                                            >
                                                Name
                                            </SortableColumn>
                                            <SortableColumn
                                                sort={sort}
                                                onClick={(sort) =>
                                                    setSort(sort)
                                                }
                                                prop="total_hospitals"
                                            >
                                                Hospitals
                                            </SortableColumn>
                                            <SortableColumn
                                                sort={sort}
                                                onClick={(sort) =>
                                                    setSort(sort)
                                                }
                                                prop="members"
                                            >
                                                Members
                                            </SortableColumn>
                                            <SortableColumn
                                                sort={sort}
                                                onClick={(sort) =>
                                                    setSort(sort)
                                                }
                                                prop="readDate"
                                            >
                                                First Joined
                                            </SortableColumn>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200 dark:bg-slate-700 dark:divide-slate-800">
                                        {hospitalData.states &&
                                            hospitalData.states.map(
                                                (state, i) => (
                                                    <tr key={state.state}>
                                                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 leading-4 whitespace-nowrap sm:pl-6">
                                                            <button
                                                                onClick={() => {setUsaState(state.state)}}
                                                                className="hover:text-emerald-500 flex items-center gap-x-2"
                                                            >
                                                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                                                    {state.abbreviation}
                                                                </div>
                                                                <div>
                                                                    {
                                                                        state.state
                                                                    }
                                                                </div>
                                                            </button>
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-slate-500/75 whitespace-nowrap">
                                                            {
                                                                state.total_hospitals
                                                            }
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-slate-500/75 whitespace-nowrap">
                                                            {state.total_members ? state.total_members : 0}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-slate-500/75 whitespace-nowrap">
                                                            <em>
                                                                { state.joined ? convertDate(state.joined) : '--'}
                                                            </em>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function convertDate(date) {
    if (date === '--') {
        return date
    }
    let d = new Date(date)
    let v = d.toLocaleString('default', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }) 
    return v.toString()
}

function SortableColumn({ sort, prop, onClick, children }) {
    let newSort
    if (sort === prop) {
        newSort = `${prop}: desc`
    } else {
        newSort = prop
    }
    return (
        <th
            scope="col"
            className="py-3.5 px-3 first:pl-4 text-left text-sm text-slate-900 first:sm:pl-6"
        >
            <button
                onClick={() => onClick(newSort)}
                className="inline-flex font-semibold group"
            >
                {children}
                <span className="bg-slate-200 group-hover:bg-slate-300 invisible text-slate-400 group-hover:visible flex-none ml-2 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </button>
        </th>
    )
}

export default Table
