import Prose from './components/Prose'
import QuickLinks from './components/QuickLinks'
import MobileQuickLinks from './components/MobileQuickLinks'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Nav from './components/Nav'
import MobileSidebar from './components/MobileNav'

function App() {
  	return (
    	<div className="lg:m-auto lg:max-w-[90rem]">
      		<div className="sticky top-0 z-20">
        		<Nav />
        		<MobileSidebar/>
      		</div>
      		<div className="">
				<Sidebar/>
        		<div className="min-h-[80vh]">
          			<div className="xl:flex xl:w-full xl:gap-8">
            			<MobileQuickLinks/>
						<QuickLinks/>
            			<Prose/>
      				</div>
    			</div>
				<Footer />
    		</div>
    	</div>
  	)
}

export default App