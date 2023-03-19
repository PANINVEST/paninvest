
import './App.css'

function App() {

  return (
    <div>
    <div className={'flex justify-between px-10 py-5 border-b-2 border-b-black'}>
            <div className={'cursor-pointer text-2xl'}>PanInvest</div>
            <div className={''}>
                <li className={'flex gap-5 text-lg'}>
                <ul className={'cursor-pointer'}>Home</ul>
                <ul className={'cursor-pointer'}>Startup</ul>
                <ul className={'cursor-pointer'}>Ideas</ul>
                <ul className={'cursor-pointer'}>Founders</ul>
            </li>
            </div>
            <div><a href="" className={'py-2.5 bg-black text-white rounded-sm px-4'}>Signup</a></div>
        </div>
        <div className={'grid grid-cols-2 p-10 place-items-center'}>
        <div>
            <h1 className={'text-6xl pb-10'}>The new Way to invest</h1>
            <p className={'pr-10 mb-10'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <a href="#" className={'py-2.5 bg-black text-white rounded-sm px-4 mt-5'}>Call to Action (CTA)</a>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/7414273/pexels-photo-7414273.jpeg?auto=compress&cs=tinysrgb&w=1200" className={''} alt=""/>
        </div>
        </div>
</div>
  )
}

export default App
