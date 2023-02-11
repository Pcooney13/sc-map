function Nav() {
	return (
		<div className="relative z-20 flex h-16 w-full items-center justify-between border-b border-slate-50 bg-white px-4 py-3 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 lg:px-8">
			<div className="flex w-full items-center justify-between gap-8 md:w-auto">
            	<a
              		className="flex items-center gap-1 text-slate-900 dark:text-white"
              		href="/en/main"
              	>	
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
					</svg>
              		<div className="hidden font-bold text-2xl md:block">
                		Beekr
                	</div>
            	</a>
            	<div className="flex items-center gap-2">
              		<details className="relative cursor-pointer">
                		<summary className="_no-triangle focus:border-200 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-transparent bg-slate-100 hover:bg-slate-200 focus:border focus:border-slate-100 focus:bg-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:border-slate-400 dark:focus:bg-slate-700">
                  			<svg className="hidden h-[24px] w-[24px] dark:inline">
                    			<use href="/build/_assets/icons-UIZOAPCC.svg#moon"></use>
							</svg>
							<svg className="h-[24px] w-[24px] dark:hidden">
	                    		<use href="/build/_assets/icons-UIZOAPCC.svg#sun"></use>
                  			</svg>
                		</summary>
                		<div className="absolute right-0 z-20 md:left-0">
                  			<div className="relative top-1 w-40 rounded-lg border border-slate-100 bg-white py-2 shadow-lg dark:border-slate-400 dark:bg-slate-800 ">
                    			
                      				<input
                        				type="hidden"
                        				name="returnTo"
                        				value="/en/main/start/faq"
                      				/>
									<button
										onClick={() => document.documentElement.classList.remove('dark')}
                        				value="light"
                        				name="colorScheme"
                        				className="flex w-full items-center gap-4 py-1 px-4 hover:bg-slate-50 active:text-red-brand dark:hover:bg-slate-700 dark:active:text-red-brand"
                      				>
                        				<svg className="h-[18px] w-[18px]">
                          					<use href="/build/_assets/icons-UIZOAPCC.svg#sun"></use>
                        				</svg>
                        				Light
									</button>
                      				<button
										onClick={() => document.documentElement.classList.add('dark')}
                        				value="dark"
                        				name="colorScheme"
                        				className="flex w-full items-center gap-4 py-1 px-4 hover:bg-slate-50 active:text-red-brand dark:hover:bg-slate-700 dark:active:text-red-brand"
                      				>
                        				<svg className="h-[18px] w-[18px]">
                          					<use href="/build/_assets/icons-UIZOAPCC.svg#moon"></use>
                        				</svg>
                        				Dark
									</button>
									<button
										onClick={() => (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')}

                        				value="system"
                        				name="colorScheme"
                        				disabled=""
                        				className="flex w-full items-center gap-4 py-1 px-4 text-red-brand"
                      				>
                        				<svg className="h-[18px] w-[18px]">
                          					<use href="/build/_assets/icons-UIZOAPCC.svg#setting"></use>
                        				</svg>
						                System
                      				</button>
                  			</div>
                		</div>
              		</details>
            	</div>
          	</div>
			<div className="flex items-center gap-4">
            	<a
              		href="https://github.com/remix-run/react-router"
              		className="hidden text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 md:block"
              		title="View code on GitHub"
              	>
					<svg
                		aria-label="GitHub octocat logo in a circle"
                		style={{width: "24px", height: "24px"}}
              		>
                		<use href="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"></use>
					</svg>
				</a>
				<a
              		href="https://rmx.as/discord"
              		className="hidden text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 md:block"
              		title="Chat on Discord"
              	>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  						<path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
					</svg>
				</a>
            	<a
              		href="https://remix.run"
              		className="hidden text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 md:block"
              	>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  						<path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
					</svg>
            	</a>
        	</div>
		</div>
	)
}
export default Nav