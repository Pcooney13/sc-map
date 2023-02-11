import Graph from '../Graph'
import Table from '../Table'

function Prose() {
  return(
    <div className="px-4 pt-8 pb-4 lg:ml-72 lg:pr-8 lg:pl-12  xl:flex-grow">
      <div className="markdown w-full pb-[33vh]">
        <div className="md-prose space-y-10">
					<Graph/>
          {/* Users */}
					<div className="space-y-2">
            <h1 id="users" className="text-xl font-semibold text-slate-700 scroll-mt-24">
              <a href="#users" aria-hidden="true" tabIndex="-1">
								<span className="icon icon-link"></span>
							</a>
							Users
            </h1>
            <p className="text-slate-600 leading-7">
            	A list of all the users in your account including their name,
            	title and email. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex incidunt corrupti dolorum cum quia voluptate optio laboriosam? Quibusdam id aperiam tempora nisi alias praesentium fugiat hic animi doloremque voluptas.
            </p>
					</div>
      		<Table />
          {/* Product */}
          <div className="space-y-2">
            <h1 id="about-our-product" className="text-xl font-semibold text-slate-700 scroll-mt-24">
              <a href="#faqs" aria-hidden="true" tabIndex="-1">
								<span className="icon icon-link"></span>
							</a>
							About Our Product
            </h1>
            <p className="text-slate-600 leading-7">
              Here are some questions that people commonly have about
              React Router v6. You might also find what you're looking for
              in the <a className="text-emerald-500 hover:underline hover:decoration-slate-600" href="#">examples</a>.
            </p>
            <h4 className="text-slate-700 leading-7 pt-2"><strong>Answers To <em>Those</em> Questions</strong></h4>
            <p className="text-slate-600 leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officia dignissimos quisquam beatae laborum dolor, explicabo magnam id vel eligendi? Nisi eveniet cupiditate consequuntur fugiat quisquam voluptas, omnis in dolorem?</p>
            <p className="text-slate-600 leading-7">Sequi totam amet doloremque quam, atque ipsa eveniet laborum nesciunt? Suscipit sunt itaque, sed similique dolores excepturi magni quidem quod modi! Cum quibusdam esse obcaecati harum dolorem iure explicabo laborum. Expedita ex doloremque corrupti vero modi, nulla suscipit nihil quam fuga totam! Magni porro minus rerum, optio ipsam magnam dignissimos, sed placeat a ut aperiam corporis ab nulla doloremque? Totam.</p>
            <h4 className="text-slate-700 leading-7 pt-2"><strong>What About This Other Thing?</strong></h4>
            <p className="text-slate-600 leading-7">Dolor a ullam doloremque nulla error ab accusamus. Inventore nobis fuga illum odit sint tenetur saepe vitae, sit et, amet mollitia accusamus ratione nam velit, voluptatum molestias aut doloribus officia. Nulla unde a optio ipsa, beatae consectetur iure dicta, cupiditate maxime quae eligendi illum repellat saepe tempore ea laborum adipisci reiciendis architecto sed natus officiis ratione voluptates perspiciatis vel! Omnis.</p>
					</div>
          <div className="@container">
            <div class="aspect-video w-full @lg:bg-blue-200 @xl:bg-yellow-400"></div>
          </div>
          <img className="aspect-video object-cover w-full rounded-lg" src="https://sandlot.launchpaddev.com/app/uploads/2022/06/ty-finck-3eHyQiy7ebk-unsplash-768x512.jpg"/>          
          {/* FAQs */}
					<div className="space-y-2">
            <h1 id="faqs" className="text-xl font-semibold text-slate-700 scroll-mt-24">
              <a href="#faqs" aria-hidden="true" tabIndex="-1">
								<span className="icon icon-link"></span>
							</a>
							FAQs
            </h1>
            <p className="text-slate-600 leading-7">
              Here are some questions that people commonly have about
              React Router v6. You might also find what you're looking for
              in the <a className="text-emerald-500 hover:underline hover:decoration-slate-600" href="#">Check our documentation</a>.
            </p>
            <h4 className="text-slate-700 leading-7 pt-2"><strong>Answers To <em>Those</em> Questions</strong></h4>
            <p className="text-slate-600 leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officia dignissimos quisquam beatae laborum dolor, explicabo magnam id vel eligendi? Nisi eveniet cupiditate consequuntur fugiat quisquam voluptas, omnis in dolorem?</p>
            <h4 className="text-slate-700 leading-7 pt-2"><strong>What About This Other Thing?</strong></h4>
            <p className="text-slate-600 leading-7">Dolor a ullam doloremque nulla error ab accusamus. Inventore nobis fuga illum odit sint tenetur saepe vitae, sit et, amet mollitia accusamus ratione nam velit, voluptatum molestias aut doloribus officia. Nulla unde a optio ipsa, beatae consectetur iure dicta, cupiditate maxime quae eligendi illum repellat saepe tempore ea laborum adipisci reiciendis architecto sed natus officiis ratione voluptates perspiciatis vel! Omnis.</p>
					</div>
          <div className="grid grid-cols-2 gap-4">
            <img className="aspect-video object-cover w-full rounded-lg" src="https://sandlot.launchpaddev.com/app/uploads/2022/06/nasa-dCgbRAQmTQA-unsplash-e1653403831973-768x342.jpg"/>
            <img className="aspect-video object-cover w-full rounded-lg" src="https://sandlot.launchpaddev.com/app/uploads/2022/06/ae40628f-9fec-3c43-94f9-08887c1db656.jpg"/>
          </div>
          <div className="space-y-4">
            <h1 id="additional-resources" className="text-xl font-semibold text-slate-700 scroll-mt-24">
              <a href="#additional-resources" aria-hidden="true" tabIndex="-1">
								<span className="icon icon-link"></span>
							</a>
							Additional Resources
            </h1>
            <a href="#" className="block overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg p-2 pr-4 hover:bg-slate-50 group">
              <h4 className="text-slate-700 leading-7 flex items-center gap-2 group-hover:text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-emerald-500 w-4 h-4 opacity-75 group-hover:opacity-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <strong>How 'Bout Them Apples</strong>
                <div>
                  <span className="text-[0.65rem] text-green-600 bg-emerald-100 p-0.5 px-1 rounded opacity-75 group-hover:opacity-100">PDF</span>
                </div>
              </h4>
              <p className="text-slate-400 leading-6 pl-6 text-sm group-hover:text-slate-500">Dolor a ullam doloremque nulla error ab accusamus. Inventore nobis fuga illum odit sint tenetur saepe vitae, sit et, amet mollitia accusamus ratione nam velit voluptatum molestias aut doloribus.</p>
            </a>
            <a href="https://laravel-news.com/model-json-export-for-laravel" target="_blank" className="block overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg p-2 pr-4 hover:bg-slate-50 group">
              <h4 className="text-slate-700 leading-7 flex items-center gap-2 group-hover:text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="text-emerald-500 w-4 h-4 opacity-75 group-hover:opacity-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <strong>Export Eloquent Models to JSON Files</strong>
                <div>
                  <span className="text-xs text-green-600 bg-emerald-100 p-0.5 px-1 rounded opacity-75 group-hover:opacity-100">laravel-news.com</span>
                </div>
              </h4>
              <p className="text-slate-400 leading-6 pl-6 text-sm group-hover:text-slate-500"><strong>Paul Redmond</strong> • Model JSON for Laravel is a package that allows you to easily export data from specific models in your Laravel application to JSON format.</p>
            </a>
            <a href="https://www.youtube.com/watch?v=a7_WFUlFS94" target="_blank" className="block overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg p-2 pr-4 hover:bg-slate-50 group">
              <h4 className="text-slate-700 leading-7 flex items-center gap-2 group-hover:text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-emerald-500 w-4 h-4 opacity-75 group-hover:opacity-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <strong>PHP in 100 Seconds</strong>
                <div>
                  <span className="text-xs text-green-600 bg-emerald-100 p-0.5 px-1 rounded opacity-75 group-hover:opacity-100">Youtube</span>
                </div>
              </h4>
              <p className="text-slate-400 leading-6 pl-6 text-sm group-hover:text-slate-500">
                <strong>Fireship</strong> • PHP Hypertext Preprocessor is a scripting language for building dynamic websites on the server. It remains one of the most popular programming languages in the world, powering tools like Wordpress, Laravel, and Symfony.</p>
            </a>
          </div>
          {/* <iframe className="w-full aspect-video rounded-lg" src="https:youtube.com/embed/4ERvAaQh2J8"></iframe> */}
          {/* <div className="relative">
            <div className="bg-gradient-to-t from-black w-full h-full absolute"></div>
            <img className="aspect-[12/5] object-cover w-full rounded-lg" src="https://img.youtube.com/vi/4ERvAaQh2J8/0.jpg"/>
          </div> */}
          <img className="aspect-[10/5] object-cover w-full rounded-lg" src="https://img.youtube.com/vi/4ERvAaQh2J8/maxresdefault.jpg"/>          
        </div>
      </div>
    </div>
  )
}

export default Prose