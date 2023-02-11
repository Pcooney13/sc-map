function MobileQuickLinks() {
	return (
		<details className="group flex h-full flex-col lg:ml-80 lg:mt-4 xl:hidden">
            <summary className="_no-triangle flex cursor-pointer select-none items-center gap-2 border-b border-slate-50 bg-white px-2 py-3 text-sm font-medium hover:bg-slate-50 active:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:active:bg-slate-700">
                <div className="flex items-center gap-2">
                  	<svg aria-hidden="true" className="h-5 w-5 group-open:hidden">
                    	<use href="/build/_assets/icons-UIZOAPCC.svg#chevron-r"></use>
					</svg>
					<svg
                    	aria-hidden="true"
                    	className="hidden h-5 w-5 group-open:block"
                  	>
                    	<use href="/build/_assets/icons-UIZOAPCC.svg#chevron-d"></use>
                  	</svg>
                </div>
                <div className="whitespace-nowrap">On this page</div>
            </summary>
            <ul className="pl-9">
                <li>
                  	<a
                    	href="#users"
                    	className="block py-2 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    	>Users</a>
                </li>
                <li>
                  	<a
                    	href="#about-our-product"
                    	className="block py-2 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    	>About Our Product</a>
                </li>
                <li>
                  	<a
                    	href="#faqs"
                    	className="block py-2 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    	>FAQs</a>
                </li>
                <li>
                  	<a
                    	href="#additional-resources"
                    	className="block py-2 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    	>Additional Resources</a>
                </li>
            </ul>
        </details>
	)
}

export default MobileQuickLinks