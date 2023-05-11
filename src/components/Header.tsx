import { Link } from 'react-router-dom'

const Header = () => (
  <header id="home" className="bg-zinc-950 text-white pt-5 pb-5">
    <div className="w-3/4 m-auto">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold uppercase text-xl text-center">
            Open the door for a spacious living
          </h2>
        </div>
        <div className="text-sm mt-3 m-auto">
          <div>
            <Link className="flex items-center" to={'/booking'}>
              Book a hotel service
              <span className="pl-16">{arrow()}</span>
            </Link>
          </div>
          <div className="border-t pt-2" />
          <div>
            <Link className="flex items-center" to={'/booking'}>
              Book a hotel service
              <span className="pl-16">{arrow()}</span>
            </Link>
          </div>
          <div className="border-t pt-2" />
          <div>
            <Link className="flex items-center" to={'/booking'}>
              Book a hotel service
              <span className="pl-16">{arrow()}</span>
            </Link>
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
