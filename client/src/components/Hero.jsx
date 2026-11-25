import { assets, cities } from "../assets/assets"

const Hero = () => {
  return (
    <div className='hero bg-[url("/src/assets/heroImage.png")] bg-center bg-no-repeat bg-cover h-screen flex flex-col items-center md:items-start justify-center px-6 md:px-16 lg:px-24 text-white'>
      <p className="bg-[#49B9FF]/50 rounded-full py-1 px-3.5 md:mt-20">The Ultimate Hotel Experience</p>
      <h1 className="family-playfair text-2x1 text-[24px] md:text-5x1 md:text-[54px] max-w-xl md:leading-[56px] font-bold md:font-extra-bold mt-4">Discover Your Perfect Gateway Destination</h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">Unparalleled luxury and confort await at the world's most exclusive hotels and resorts. Start your journey today.</p>

      <form className="form bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calender-icon" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input list="destinations" id="destinationInput" type="text" className="rounded  border border-gray-200 px-3 py-1.5 outline-none mt-1.5 text-sm" placeholder="Type here" required />
          <datalist id='destinations'>
            {cities.map((city, index)=>(
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calender-icon" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input type="date" className="rounded border border-gray-200 py-1.5 px-3 mt-1.5 text-sm outline-none" />
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calender-icon" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input type="date" className="rounded border border-gray-200 py-1.5 px-3 mt-1.5 text-sm outline-none" />
        </div>

        <button className="bg-black flex items-center justify-center gap-1 rounded-md py-3 px-4 my-auto cursor-pointer text-white max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="search-icon" className="h-7" />
          <span>Search</span>
        </button>

      </form>

    </div>
  )
}
export default Hero