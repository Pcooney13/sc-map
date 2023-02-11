function Sidebar() {
	return(
		<div
          className="fixed top-16 bottom-0 hidden w-72 overflow-auto py-8 pl-8 pr-6 lg:block"
        >
          <nav>
            <ul>
              <li className="mb-6">
                <div className="mb-2 block font-bold lg:text-sm">
                  Getting Started
                </div>
                <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/start/overview"
                  >Feature Overview
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/start/tutorial"
                  >Tutorial
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/start/examples"
                  >Examples
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm bg-slate-50 font-semibold text-red-brand dark:bg-slate-800"
                  href="/en/main/start/faq"
                  >FAQs
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/start/concepts"
                  >Main Concepts
                </a>
              </li>
              <li className="mb-6">
                <div className="mb-2 block font-bold lg:text-sm">Upgrading</div>
                <a
                  	className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  	href="/en/main/upgrading/v5"
                >
					Upgrading from v5
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/upgrading/reach"
                  >Migrating from @reach/router
                </a>
              </li>
              <li className="mb-6">
                <div className="mb-2 block font-bold lg:text-sm">Routers</div>
                <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/routers/picking-a-router"
                  >Picking a Router 🆕</a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/routers/create-browser-router"
                  >createBrowserRouter 🆕</a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/routers/create-hash-router"
                  >createHashRouter 🆕</a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/routers/create-memory-router"
                  >createMemoryRouter 🆕</a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/routers/router-provider"
                  >RouterProvider 🆕</a>
              </li>
              <li className="mb-6">
                <div className="mb-2 block font-bold lg:text-sm">
                  Router Components
                </div>
                <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/router-components/browser-router"
                  >BrowserRouter
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/router-components/hash-router"
                  >HashRouter
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/router-components/memory-router"
                  >MemoryRouter
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/router-components/native-router"
                  >NativeRouter
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/router-components/router"
                  >Router
				</a>
				<a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/router-components/static-router"
                  >StaticRouter
                </a>
              </li>
              <li className="mb-6">
                <div className="mb-2 block font-bold lg:text-sm">Route</div>
                <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/route/route"
                  >Route 🆕
				  </a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/route/action"
                  >action 🆕
				  </a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/route/error-element"
                  >errorElement 🆕
				  </a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/route/loader"
                  >loader 🆕
				  </a>
				  <a
                  className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                  href="/en/main/route/should-revalidate"
                  >shouldRevalidate 🆕</a>
              </li>

            </ul>
          </nav>
        </div>
	)
}

export default Sidebar