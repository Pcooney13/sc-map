function QuickLinks() {
	return (
		<div className="hidden xl:sticky xl:top-24 xl:order-1 xl:block xl:max-h-[calc(100vh-10rem)] xl:w-60 mr-8 xl:flex-shrink-0 xl:self-start xl:overflow-auto">
            <nav className="mb-2 text-sm font-bold">On this page</nav>
            <ul>
                <li>
                <a
                    href="#users"
                    className="block py-1 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    >Users</a>
                </li>
                <li>
                <a
                    href="#about-our-product"
                    className="block py-1 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    >About Our Product</a>
                </li>
                <li>
                <a
                    href="#faqs"
                    className="block py-1 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                    >FAQs</a>
                </li>
                <li>
                <a
                    href="#additional-resources"
                    className="block py-1 text-sm text-slate-400 hover:text-slate-900 active:text-red-brand dark:text-slate-400 dark:hover:text-slate-50 dark:active:text-red-brand"
                >
                    Additional Resources
                </a>
                </li>
            </ul>
        </div>
	)
}

export default QuickLinks