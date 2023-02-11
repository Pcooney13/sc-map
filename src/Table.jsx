import { faker } from '@faker-js/faker';
import {useState} from 'react';
import { format, compareAsc } from 'date-fns'

let today = new Date()
console.log(format(today, 'yyyyMMdd'))

faker.seed(17);

let people = faker.datatype.array(20).map(() => {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let name = `${firstName} ${lastName}`;
    let email = faker.internet.email(firstName, lastName).toLowerCase();
    let date =  faker.date.between('2022-10-01', '2023-02-10')

  return {
    avatar: faker.image.avatar(),
    firstName,
    lastName,
    title: faker.name.jobTitle(),
    email,
    date,
    readDate: format(new Date(date), 'yyyyMMdd')
  };
});

function Chart() {
    let [sort, setSort] = useState(null);
    let [sortProp, desc] = sort?.split(":") ?? [];
    let sortedPeople = people.sort ((a, b) => {
        return desc
            ? b[sortProp]?. localeCompare (a [sortProp]) 
            : a[sortProp]?. localeCompare(b [sortProp]);
    })

  return (
    <div className="w-full">
      <div className="">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative overflow-hidden">
            <div className="absolute z-20 w-full h-[400px] -bottom-4 bg-gradient-to-t from-white">
              <p className="absolute text-center w-full bg-gradient-to-t from-white via-white bottom-0 mb-8 left-0 font-medium text-slate-500 right-0 hover:text-emerald-500 cursor-pointer">Expand</p>
            </div>
            <div className="inline-block min-w-full py-2 relative">
              <div className="overflow-hidden ring-1 relative h-[500px] ring-black ring-opacity-5 rounded-lg">                
                <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-800">
                  <thead className="bg-slate-50 dark:bg-slate-800">
                    <tr>
                      <SortableColumn sort={sort} onClick={(sort) => setSort(sort)} prop="lastName">Name</SortableColumn>
                      <SortableColumn sort={sort} onClick={(sort) => setSort(sort)} prop="email">Email</SortableColumn>
                      <SortableColumn sort={sort} onClick={(sort) => setSort(sort)} prop="readDate">Last Online</SortableColumn>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200 dark:bg-slate-700 dark:divide-slate-800">
                    
                    {sortedPeople.map((person) => (
                      <tr key={person.email}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 leading-4 whitespace-nowrap sm:pl-6 flex items-center gap-x-2">
                          <img className="w-8 h-8 rounded-full" src={person.avatar}/>
                          <div>{person.firstName} {person.lastName}<br/>
                          <span className="font-normal text-slate-500/75">{person.title}</span>
                          </div>
                        </td>
                        {/* <td className="px-3 py-4 text-sm text-slate-500 whitespace-nowrap">
                          {person.title}
                        </td> */}
                        <td className="px-3 py-4 text-sm text-slate-500/75 whitespace-nowrap">
                          <a href="#" className="hidden sm:inline md:hidden xl:inline hover:text-emerald-500">{person.email}</a>
                          <svg className="w-4 h-4 md:block xl:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </td>
                        <td className="px-3 py-4 text-sm text-slate-500/75 whitespace-nowrap">
                          <em>{format(new Date(person.date), 'MMMM dd, yyyy')}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SortableColumn({ sort, prop, onClick, children }) {
let newSort;
if (!sort) {
    newSort = prop;
} else if (sort === prop) {
    newSort = `${prop}: desc`
}
  return (
    <th
      scope="col"
      className="py-3.5 px-3 first:pl-4 text-left text-sm text-slate-900 first:sm:pl-6"
    >
      <button onClick={() => onClick(newSort)}
        className="inline-flex font-semibold group"
      >
        {children}
        <span className="text-slate-900 bg-slate-200 group-hover:bg-slate-300 invisible text-slate-400 group-hover:visible flex-none ml-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </span>
      </button>
    </th>
  );
}

export default Chart