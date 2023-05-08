const Header = () => (
  <header id="home" className="pt-14 bg-zinc-950 text-white ">
    <div className="w-3/4 m-auto">
      <div className="mt-20 pb-28 flex justify-between">
        <div>
          <h2 className="font-bold text-5xl max-w-xl uppercase">
            Open the door for a spacious living
          </h2>
        </div>
        <div className="w-60">
          <div>
            <a href="#" className="flex items-center">
              Book a hotel service
              <span className="pl-16">{arrow()}</span>
            </a>
          </div>
          <div className="border-t pt-2" />
          <div>
            <a href="#" className="flex items-center">
              Book a hotel service
              <span className="pl-16">{arrow()}</span>
            </a>
          </div>
          <div className="border-t pt-2" />
          <div>
            <a href="#" className="flex items-center">
              Book a hotel service
              <span className="pl-16">{arrow()}</span>
            </a>
          </div>
          <div className="border-t pt-2" />
        </div>
      </div>
    </div>
  </header>
)

const arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="none">
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1.02 1.542 5.98 6.5l-4.96 4.958"
    />
  </svg>
)

export default Header
