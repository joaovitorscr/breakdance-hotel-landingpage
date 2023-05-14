import coffe from '../assets/image/coffe.png'
import spa from '../assets/image/spa.png'
import bar from '../assets/image/bar.png'
import leaf from '../assets/image/leaf.png'

import aboutUsImg from '../assets/image/aboutUs.png'
import reviewAboutUs from '../assets/image/reviewAboutUs.png'

const star = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2543 10.9902C15.0194 11.2179 14.9114 11.5471 14.965 11.8701L15.7714 16.3331C15.8394 16.7114 15.6798 17.0942 15.3632 17.3128C15.0529 17.5396 14.6402 17.5668 14.3018 17.3854L10.2842 15.2899C10.1445 15.2156 9.98937 15.1757 9.83062 15.1711H9.58479C9.49952 15.1838 9.41607 15.211 9.33987 15.2528L5.3213 17.3582C5.12264 17.458 4.89767 17.4934 4.67724 17.458C4.14022 17.3564 3.78191 16.8448 3.8699 16.305L4.67724 11.842C4.73076 11.5163 4.62281 11.1852 4.38787 10.9539L1.11224 7.77895C0.838284 7.51316 0.743035 7.11402 0.868219 6.75389C0.989774 6.39467 1.30001 6.13251 1.67465 6.07355L6.18307 5.41951C6.52596 5.38413 6.82713 5.1755 6.98134 4.86707L8.96795 0.794077C9.01512 0.703365 9.07589 0.619909 9.14937 0.549153L9.23101 0.485655C9.27365 0.438484 9.32263 0.399478 9.37706 0.367728L9.47594 0.331443L9.63015 0.267944H10.012C10.3531 0.303322 10.6534 0.507426 10.8103 0.81222L12.8232 4.86707C12.9684 5.1637 13.2505 5.36962 13.5761 5.41951L18.0846 6.07355C18.4656 6.12798 18.784 6.39104 18.91 6.75389C19.0289 7.11765 18.9264 7.51679 18.647 7.77895L15.2543 10.9902Z"
      fill="#DE8F32"
    />
  </svg>
)

const About = () => (
  <section id="about">
    <div className="bg-zinc-950 text-white pt-36">
      <div className="w-3/4 m-auto md:grid md:grid-cols-2 md:gap-10">
        <div className="flex flex-col justify-center mb-10 lg:pr-56">
          <h2 className="uppercase font-bold text-4xl mb-4 text-center md:text-2xl">
            About Us
          </h2>
          <div className="bg-orange-500 h-1 w-full rounded-sm" />
          <div className="pb-9 text-neutral-700 font-medium">
            <p className="pt-9 ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim.
            </p>
            <p className="pt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>
          <button className="bg-orange-500 py-4 rounded-full md:py-2">
            Explore
          </button>
        </div>
        <div>
          <img
            className="pb-20 lg:mb-20"
            src={aboutUsImg}
            alt="Restaurant with chairs and a lot of natural light"
          />
        </div>
      </div>
    </div>

    <div className="text-zinc-800 mt-8 mb-8">
      <div className="w-3/4 m-auto md:flex">
        <div className="flex flex-col justify-center md:mr-20">
          <h2 className="uppercase font-bold text-3xl mb-7">
            Classic rooms and interior
          </h2>
          <div className="flex mb-2 md:mb-4">
            <span className="mr-2">{star()}</span>
            <span className="mr-2">{star()}</span>
            <span className="mr-2">{star()}</span>
            <span className="mr-2">{star()}</span>
            <span className="mr-2">{star()}</span>
          </div>
          <p className="text-gray-500 font-medium text-lg md:mb-5">
            Excellent 5k+ reviews
          </p>
          <img
            className="w-48"
            src={reviewAboutUs}
            alt="Persons who reviewed our hotel"
          />
          <p className="mt-5 text-gray-500 font-medium text-lg md:text-sm lg:text-lg">
            Peoples successsfully got this dream place
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-10 mb-10 md:gap-4 lg:gap-5">
          <div className="bg-white shadow-md py-2 md:p-2 lg:p-6">
            <div className="flex flex-col items-center">
              <img className="w-10 lg:w-16" src={coffe} alt="Coffe image" />
              <h3 className="uppercase font-semibold text-xs mt-4 lg:text-lg">
                Restaurant
              </h3>
            </div>
            <p className="mt-4 font-medium text-xs text-gray-500 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>
          <div className="bg-white shadow-md py-2 lg:p-6">
            <div className="flex flex-col items-center">
              <img className="w-10 lg:w-16" src={spa} alt="Coffe image" />
              <h3 className="uppercase font-semibold text-xs mt-4 lg:text-lg">
                SPA
              </h3>
            </div>
            <p className="mt-4 font-medium text-xs text-gray-500 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>
          <div className="bg-white shadow-md py-2 lg:p-6">
            <div className="flex flex-col items-center">
              <img className="w-10 lg:w-16" src={leaf} alt="Coffe image" />
              <h3 className="uppercase font-semibold text-xs mt-4 lg:text-lg">
                THE BEST ROOMS
              </h3>
            </div>
            <p className="mt-4 font-medium text-xs text-gray-500 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>
          <div className="bg-white shadow-md py-2 lg:p-6">
            <div className="flex flex-col items-center">
              <img className="w-10 lg:w-16" src={bar} alt="Coffe image" />
              <h3 className="uppercase font-semibold text-xs mt-4 lg:text-lg">
                LOUNGE BAR
              </h3>
            </div>
            <p className="mt-4 font-medium text-xs text-gray-500 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
