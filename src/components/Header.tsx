import { Link } from 'react-router-dom'

const Header = () => (
  <header id="home" className="bg-zinc-950 text-white pt-5 pb-5">
    <div className="w-3/4 m-auto">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:mt-5 lg:mb-2">
        <div>
          <h2 className="font-bold uppercase text-xl text-center md:text-2xl lg:text-5xl">
            Open the door for a spacious living
          </h2>
        </div>
        <div className="text-sm mt-3 m-auto md:mt-0 lg:text-lg">
          <div className="group">
            <Link
              className="flex items-center group-hover:text-neutral-300"
              to={'/booking'}
            >
              Book a hotel service
              <span className="pl-16 group-hover:stroke-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="13"
                  fill="none"
                >
                  <path
                    className="stroke-white group-hover:stroke-neutral-500"
                    stroke="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1.02 1.542 5.98 6.5l-4.96 4.958"
                  />
                </svg>
              </span>
            </Link>
            <div className="border-t pt-2 group-hover:border-neutral-400" />
          </div>
          <div className="group">
            <Link
              className="flex items-center hover:text-neutral-300"
              to={'/booking'}
            >
              Book a hotel service
              <span className="pl-16 group-hover:stroke-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="13"
                  fill="none"
                >
                  <path
                    className="stroke-white group-hover:stroke-neutral-500"
                    stroke="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1.02 1.542 5.98 6.5l-4.96 4.958"
                  />
                </svg>
              </span>
            </Link>
            <div className="border-t pt-2 group-hover:border-neutral-400" />
          </div>

          <div className="group">
            <Link
              className="flex items-center hover:text-neutral-300 "
              to={'/booking'}
            >
              Book a hotel service
              <span className="pl-16 group-hover:stroke-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="13"
                  fill="none"
                >
                  <path
                    className="stroke-white group-hover:stroke-neutral-500"
                    stroke="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1.02 1.542 5.98 6.5l-4.96 4.958"
                  />
                </svg>
              </span>
            </Link>
            <div className="border-t pt-2 group-hover:border-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  </header>
)
export default Header
