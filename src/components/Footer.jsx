function Footer() {
	return(
		<div className="px-4 pt-8 pb-4 lg:ml-72 lg:pr-8 lg:pl-12">
        	<div className="-ml-8 mt-16 flex justify-between border-t border-t-slate-50 pl-8 pt-4 text-sm text-slate-400 dark:border-slate-800">
            	<div className="lg:flex lg:items-center">
              		<div className="pr-4">
                		<a className="hover:underline" href="https://remix.run">Pat Cooney</a>
              		</div>
              		<div className="hidden lg:block">•</div>
              		<div className="pr-4 lg:pl-4">
                		<a className="hover:underline" href="https:github.com/Pcooney13">Github</a>
              		</div>
              		<div className="hidden lg:block">•</div>
              		<div className="pr-4 lg:pl-4">
                		Docs and examples
                		<a
                  			className="hover:underline"
                  			href="https://creativecommons.org/licenses/by/4.0/"
                  		>
							CC 4.0
						</a>
              		</div>
            	</div>
          	</div>
    	</div>
	)
}

export default Footer