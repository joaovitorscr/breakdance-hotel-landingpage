import banner from '../assets/image/heroBanner.png'
import services from '../assets/image/services.png'
import user1 from '../assets/image/user1.png'
import user2 from '../assets/image/user2.png'
import user3 from '../assets/image/user3.png'

const Services = () => (
  <section id="services" className="w-3/4 m-auto pt-40 mb-24">
    <ul className="flex justify-between max-w-4xl m-auto text-gray-500">
      <li className="flex items-center font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          fill="none"
        >
          <circle cx="37" cy="37" r="37" fill="#FF7500" fillOpacity=".04" />
          <path
            stroke="#FF7500"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M27.436 42.466h21.351m-21.695-4.018h22.04m.734-8.564L48.258 48.64c-.178 2.074-.267 3.111-.728 3.896a4.017 4.017 0 0 1-1.732 1.59c-.821.393-1.862.393-3.944.393H34.37c-2.082 0-3.124 0-3.945-.392a4.017 4.017 0 0 1-1.733-1.591c-.46-.785-.55-1.822-.727-3.896l-1.608-18.756c-.104-1.21-.156-1.816.048-2.283.18-.41.49-.75.884-.963.448-.243 1.056-.243 2.27-.243h17.104c1.215 0 1.823 0 2.27.243.394.214.705.552.884.963.203.467.151 1.072.048 2.283Zm-1.213-3.489H27.57c-1.81 0-2.716 0-3.242-.379a2.009 2.009 0 0 1-.823-1.419c-.069-.644.381-1.43 1.28-3.003.671-1.175 1.007-1.762 1.478-2.19a4.016 4.016 0 0 1 1.46-.847c.605-.197 1.281-.197 2.634-.197h15.509c1.353 0 2.03 0 2.635.197a4.015 4.015 0 0 1 1.459.847c.47.428.807 1.015 1.478 2.19.898 1.572 1.348 2.359 1.28 3.003a2.008 2.008 0 0 1-.823 1.42c-.526.378-1.432.378-3.243.378Z"
          />
        </svg>
        <span className="ml-5">
          Welcome <br /> Drinks
        </span>
      </li>
      <li className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          fill="none"
        >
          <circle cx="37" cy="37" r="37" fill="#FF7500" fillOpacity=".04" />
          <path
            stroke="#FF6B00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 33h36m-2 12V34.358c0-.507 0-.76-.031-1.01a4.012 4.012 0 0 0-.14-.654c-.072-.24-.175-.472-.381-.935l-3.093-6.958c-.611-1.376-.917-2.064-1.4-2.568a3.997 3.997 0 0 0-1.532-.996C45.766 21 45.013 21 43.507 21H30.492c-1.505 0-2.258 0-2.915.237a4 4 0 0 0-1.532.996c-.483.504-.79 1.192-1.4 2.568l-3.093 6.958c-.206.463-.31.695-.382.935a4.01 4.01 0 0 0-.139.654c-.031.25-.031.503-.031 1.01V45m32 0H21m32 0v2a4 4 0 0 1-8 0v-2m-24 0v2a4 4 0 0 0 8 0v-2"
          />
        </svg>
        <span className="ml-5">
          Car <br /> Rental
        </span>
      </li>
      <li className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          fill="none"
        >
          <circle cx="37" cy="37" r="37" fill="#FF7500" fillOpacity=".04" />
          <path
            fill="#FF6B00"
            fillRule="evenodd"
            d="M35.83 18.79a3.982 3.982 0 0 1 2.34 0l5.971 1.835a33.444 33.444 0 0 1 8.782 4.18c2.106 1.41 1.108 4.695-1.427 4.695H22.504c-2.535 0-3.534-3.286-1.427-4.696a33.444 33.444 0 0 1 8.782-4.178l5.971-1.836Zm1.458 2.868a.983.983 0 0 0-.576 0l-5.972 1.835a30.442 30.442 0 0 0-6.739 3.007H50a30.442 30.442 0 0 0-6.74-3.007l-5.97-1.835Z"
            clipRule="evenodd"
          />
          <path
            fill="#FF6B00"
            d="M21.5 56a1.5 1.5 0 0 1 1.5-1.5h28a1.5 1.5 0 0 1 0 3H23a1.5 1.5 0 0 1-1.5-1.5ZM25.5 48a1.5 1.5 0 1 0 3 0V36a1.5 1.5 0 0 0-3 0v12ZM37 49.5a1.5 1.5 0 0 1-1.5-1.5V36a1.5 1.5 0 0 1 3 0v12a1.5 1.5 0 0 1-1.5 1.5ZM45.5 48a1.5 1.5 0 1 0 3 0V36a1.5 1.5 0 0 0-3 0v12Z"
          />
        </svg>
        <span className="ml-5">
          Resort & <br /> Spa
        </span>
      </li>
      <li className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          fill="none"
        >
          <circle cx="37" cy="37" r="37" fill="#FF7500" fillOpacity=".04" />
          <path
            stroke="#FF6B00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M30.686 42.18a10 10 0 0 1 14.58-.05m-18.967-6.042a16 16 0 0 1 23.327-.081m-29.179-5.375a24 24 0 0 1 34.99-.122M38 51a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
          />
        </svg>
        <span className="ml-5">
          Free <br /> WI-FI
        </span>
      </li>
    </ul>
    <div className="mt-36 text-center">
      <h2 className="font-bold text-5xl text-zinc-800">
        Why You Should <span className="text-orange-500">Stay Here</span>
      </h2>
      <p className="font-medium pt-4 max-w-md m-auto text-zinc-400">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat.
      </p>
    </div>
    <div className="mt-24 flex relative">
      <div className="mr-72 max-w-lg">
        <div className="mb-16">
          <span className="bg-orange-500 text-white py-3 px-5 rounded-full font-semibold text-2xl">
            1
          </span>
          <h3 className="text-zinc-800 font-bold mt-6 text-2xl">
            Provide the best choice of Room
          </h3>
          <p className="text-zinc-400 font-medium mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>
        </div>
        <div className="mb-16">
          <span className="bg-orange-500 text-white py-3 px-5 rounded-full font-semibold text-2xl">
            2
          </span>
          <h3 className="text-zinc-800 font-bold mt-6 text-2xl">
            Low price with Best Quality
          </h3>
          <p className="text-zinc-400 font-medium mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>
        </div>
        <div className="mb-16">
          <span className="bg-orange-500 text-white py-3 px-5 rounded-full font-semibold text-2xl">
            3
          </span>
          <h3 className="text-zinc-800 font-bold mt-6 text-2xl">
            Restaurant Service
          </h3>
          <p className="text-zinc-400 font-medium mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>
        </div>
      </div>
      <div>
        <img src={services} alt="Services" />
        <img className="max-w-md absolute top-56" src={banner} alt="banner" />
      </div>
      <div className="bg-white flex items-center rounded-xl absolute top-32 right-80 shadow-2xl shadow-gray-500">
        <img className="py-3 px-3" src={user1} alt="Person picture" />
        <div className="pr-14">
          <h4 className="text-zinc-800 font-bold text-sm">Robert Flores</h4>
          <p className="text-gray-400 text-sm">
            give rating <span className="text-orange-500">4.5</span>
          </p>
        </div>
      </div>
      <div className="bg-white flex items-center rounded-xl absolute right-32 -top-2 shadow-2xl shadow-gray-500">
        <img className="py-3 px-3" src={user2} alt="Person picture" />
        <div className="pr-14">
          <h4 className="text-zinc-800 font-bold text-sm">Cody Fischer</h4>
          <p className="text-gray-400 text-sm">
            give rating <span className="text-orange-500">4.5</span>
          </p>
        </div>
      </div>
      <div className="bg-white flex items-center rounded-xl absolute -bottom-5 right-40 shadow-2xl shadow-gray-500">
        <img className="py-3 px-3" src={user3} alt="Person picture" />
        <div className="pr-14">
          <h4 className="text-zinc-800 font-bold text-sm">Devon Lane</h4>
          <p className="text-gray-400 text-sm">
            give rating <span className="text-orange-500">4.5</span>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Services
