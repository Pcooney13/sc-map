function MobileNav() {
	return (
		<details className="group relative flex h-full flex-col lg:hidden">
          				<summary
            				tabIndex="0"
            				className="_no-triangle flex cursor-pointer select-none items-center gap-2 border-b border-slate-50 bg-white px-2 py-3 text-sm font-medium hover:bg-slate-50 active:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:active:bg-slate-700"
          				>
            				<div className="flex items-center gap-2">
              				<svg aria-hidden="true" className="h-5 w-5 group-open:hidden">
                				<use
                  				href="/build/_assets/icons-UIZOAPCC.svg#chevron-r"
                				></use></svg>
							<svg
                				aria-hidden="true"
                				className="hidden h-5 w-5 group-open:block"
              				>
                				<use href="/build/_assets/icons-UIZOAPCC.svg#chevron-d"></use>
              				</svg>
            				</div>
            				<div className="whitespace-nowrap font-bold">FAQs</div>
          				</summary>
          				<div
            				className="absolute h-[66vh] w-full overflow-auto overscroll-contain border-b bg-white p-3 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:shadow-black"
          				>
            				<nav>
              				<ul>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">
                    				Getting Started
                  				</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/start/overview"
                    				>Feature Overview </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/start/tutorial"
                    				>Tutorial </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/start/examples"
                    				>Examples </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm bg-slate-50 font-semibold text-red-brand dark:bg-slate-800"
                    				href="/en/main/start/faq"
                    				>FAQs </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/start/concepts"
                    				>Main Concepts
                  				</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">
                    				Upgrading
                  				</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/upgrading/v5"
                    				>Upgrading from v5 </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/upgrading/reach"
                    				>Migrating from @reach/router
                  				</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">Routers</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/routers/picking-a-router"
                    				>Picking a Router 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/routers/create-browser-router"
                    				>createBrowserRouter 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/routers/create-hash-router"
                    				>createHashRouter 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/routers/create-memory-router"
                    				>createMemoryRouter 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/routers/router-provider"
                    				>RouterProvider 🆕</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">
                    				Router Components
                  				</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/router-components/browser-router"
                    				>BrowserRouter </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/router-components/hash-router"
                    				>HashRouter </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/router-components/memory-router"
                    				>MemoryRouter </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/router-components/native-router"
                    				>NativeRouter </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/router-components/router"
                    				>Router </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/router-components/static-router"
                    				>StaticRouter
                  				</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">Route</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/route/route"
                    				>Route 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/route/action"
                    				>action 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/route/error-element"
                    				>errorElement 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/route/loader"
                    				>loader 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/route/should-revalidate"
                    				>shouldRevalidate 🆕</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">
                    				Components
                  				</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/await"
                    				>Await 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/form"
                    				>Form 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/link"
                    				>Link </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/link-native"
                    				>Link (RN) </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/nav-link"
                    				>NavLink </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/navigate"
                    				>Navigate </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/outlet"
                    				>Outlet </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/route"
                    				>Route </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/routes"
                    				>Routes </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/components/scroll-restoration"
                    				>ScrollRestoration 🆕</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">Hooks</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-action-data"
                    				>useActionData 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-async-error"
                    				>useAsyncError 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-async-value"
                    				>useAsyncValue 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-before-unload"
                    				>useBeforeUnload 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-fetcher"
                    				>useFetcher 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-fetchers"
                    				>useFetchers 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-form-action"
                    				>useFormAction 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-href"
                    				>useHref </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-in-router-context"
                    				>useInRouterContext </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-link-click-handler"
                    				>useLinkClickHandler </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-link-press-handler"
                    				>useLinkPressHandler </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-loader-data"
                    				>useLoaderData 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-location"
                    				>useLocation </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-match"
                    				>useMatch </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-matches"
                    				>useMatches 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-navigate"
                    				>useNavigate </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-navigation"
                    				>useNavigation 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-navigation-type"
                    				>useNavigationType </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-outlet"
                    				>useOutlet </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-outlet-context"
                    				>useOutletContext </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-params"
                    				>useParams </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-resolved-path"
                    				>useResolvedPath </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-revalidator"
                    				>useRevalidator 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-route-error"
                    				>useRouteError 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-route-loader-data"
                    				>useRouteLoaderData 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-routes"
                    				>useRoutes </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-search-params"
                    				>useSearchParams </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-search-params-rn"
                    				>useSearchParams (RN) </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/hooks/use-submit"
                    				>useSubmit 🆕</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">
                    				Fetch Utilities
                  				</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/fetch/json"
                    				>json 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/fetch/redirect"
                    				>redirect 🆕</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">
                    				Utilities
                  				</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/create-routes-from-children"
                    				>createRoutesFromChildren </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/create-routes-from-elements"
                    				>createRoutesFromElements </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/create-search-params"
                    				>createSearchParams </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/defer"
                    				>defer 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/generate-path"
                    				>generatePath </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/is-route-error-response"
                    				>isRouteErrorResponse 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/location"
                    				>Location </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/match-path"
                    				>matchPath </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/match-routes"
                    				>matchRoutes </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/render-matches"
                    				>renderMatches </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/utils/resolve-path"
                    				>resolvePath
                  				</a>
                				</li>
                				<li className="mb-6">
                  				<div className="mb-2 block font-bold lg:text-sm">Guides</div>
                  				
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/guides/ssr"
                    				>Server-Side Rendering </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/guides/contributing"
                    				>Contributing </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/guides/data-libs"
                    				>Data Library Integration </a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/guides/deferred"
                    				>Deferred Data 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/guides/form-data"
                    				>Working With FormData 🆕</a>
                    				<a className="group my-1 flex items-center rounded-md border-transparent py-1.5 pl-4 lg:text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    				href="/en/main/guides/index-search-param"
                    				>Index Query Param 🆕</a>
                				</li>
              				</ul>
            				</nav>
          				</div>
        				</details>
	)
}

export default MobileNav