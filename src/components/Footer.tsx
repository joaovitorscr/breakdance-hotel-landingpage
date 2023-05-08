import twitter from '../assets/image/twitter.png'
import facebook from '../assets/image/facebook.png'
import youtube from '../assets/image/youtube.png'

const Footer = () => (
  <footer id="contact" className="bg-zinc-950 text-white">
    <div className="w-3/4 m-auto">
      <div className="flex justify-between">
        <div className="mt-24 font-normal">
          <h3 className="font-semibold text-xl mb-6">Quick Link</h3>
          <nav>
            <ul>
              <li className="mb-5">
                <a href="#">Home</a>
              </li>
              <li className="mb-5">
                <a href="#">Services</a>
              </li>
              <li className="mb-5">
                <a href="#">About us</a>
              </li>
              <li className="mb-5">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 w-96 text-center mb-28">
          <h2 className="uppercase font-semibold text-3xl">Get in touch</h2>
          <p className="font-medium text-neutral-700 mt-2 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <form className="mt-7 bg-neutral-900 rounded-md">
            <div className="flex border-2 border-neutral-700 rounded-sm hover:border-white">
              <input
                className="w-full p-5 bg-neutral-900 placeholder-neutral-700 outline-none"
                type="email"
                placeholder="Enter e-mail"
              />
              <button
                onClick={(e) => e.preventDefault()}
                type="submit"
                className="p-5 bg-orange-500 rounded-sm hover:bg-orange-400 hover:text-zinc-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-24 text-end font-normal">
          <h3 className="font-semibold text-xl mb-6">Useful</h3>
          <nav>
            <ul>
              <li className="mb-5">
                <a href="#">Privacy policy</a>
              </li>
              <li className="mb-5">
                <a href="#">Legal</a>
              </li>
              <li className="mb-5">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-5">
                <a href="#">Blogs</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-neutral-700 h-px" />
      <div className="pt-7 pb-10 flex justify-between items-center">
        <p className="m-auto">Copywrite goes to - Breakdance.com</p>
        <ul className="flex">
          <li className="mr-6">
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li className="mr-6">
            <a href="#">
              <img src={youtube} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
