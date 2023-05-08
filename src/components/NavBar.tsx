import { Link as LinkRouter } from 'react-router-dom'
import { Link } from 'react-scroll'

const NavBar = () => (
  <div className="bg-zinc-950 pt-14 pb-4 text-white sticky top-0 z-10 ">
    <div className="flex justify-between items-center w-3/4 m-auto">
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="35"
          fill="none"
        >
          <path
            fill="#fff"
            d="M10.692 1.526V3.92H6.93V14H4.122V3.92H.36V1.526h10.332ZM12.317 14V.464l2.682-.432v4.536c.18-.06.408-.114.684-.162.288-.06.564-.09.828-.09.768 0 1.404.108 1.908.324.516.204.924.498 1.224.882.312.384.528.84.648 1.368.132.528.198 1.116.198 1.764V14h-2.682V8.978c0-.864-.114-1.476-.342-1.836-.216-.36-.624-.54-1.224-.54-.24 0-.468.024-.684.072a5.55 5.55 0 0 0-.558.126V14h-2.682Zm10.15-4.662c0-.84.125-1.572.377-2.196.264-.636.606-1.164 1.026-1.584.42-.42.9-.738 1.44-.954a4.606 4.606 0 0 1 1.692-.324c1.344 0 2.406.414 3.186 1.242.78.816 1.17 2.022 1.17 3.618 0 .156-.006.33-.018.522-.012.18-.024.342-.036.486H25.22c.06.552.318.99.774 1.314.456.324 1.068.486 1.836.486.492 0 .972-.042 1.44-.126.48-.096.87-.21 1.17-.342l.36 2.178a3.704 3.704 0 0 1-.576.216 6.29 6.29 0 0 1-.81.18c-.288.06-.6.108-.936.144a9.455 9.455 0 0 1-1.008.054c-.852 0-1.596-.126-2.232-.378a4.499 4.499 0 0 1-1.566-1.026 4.356 4.356 0 0 1-.918-1.566 6.345 6.345 0 0 1-.288-1.944Zm6.3-1.026a2.514 2.514 0 0 0-.127-.666 1.485 1.485 0 0 0-.306-.576 1.509 1.509 0 0 0-.522-.414c-.204-.108-.462-.162-.774-.162-.3 0-.558.054-.774.162a1.504 1.504 0 0 0-.54.396 1.926 1.926 0 0 0-.342.594 4.148 4.148 0 0 0-.162.666h3.546ZM5.597 34.162c-.684 0-1.368-.024-2.052-.072a13.608 13.608 0 0 1-2.106-.288V21.706a16.591 16.591 0 0 1 1.89-.234c.684-.06 1.32-.09 1.908-.09.792 0 1.518.06 2.178.18.672.108 1.248.3 1.728.576.48.276.852.642 1.116 1.098.276.444.414.996.414 1.656 0 .996-.48 1.782-1.44 2.358.792.3 1.332.708 1.62 1.224a3.52 3.52 0 0 1 .432 1.746c0 1.308-.48 2.292-1.44 2.952-.948.66-2.364.99-4.248.99Zm-1.422-5.598v3.222c.204.024.426.042.666.054.24.012.504.018.792.018.84 0 1.518-.12 2.034-.36.516-.24.774-.684.774-1.332 0-.576-.216-.984-.648-1.224-.432-.252-1.05-.378-1.854-.378H4.176Zm0-2.142h1.368c.864 0 1.482-.108 1.854-.324.372-.228.558-.588.558-1.08 0-.504-.192-.858-.576-1.062-.384-.204-.948-.306-1.692-.306-.24 0-.498.006-.774.018-.276 0-.522.012-.738.036v2.718Zm14.884.486c-.24-.06-.522-.12-.846-.18a4.807 4.807 0 0 0-1.044-.108 4.23 4.23 0 0 0-.612.054 3.038 3.038 0 0 0-.522.09V34h-2.682v-8.964c.48-.168 1.044-.324 1.692-.468a9.556 9.556 0 0 1 2.196-.234c.144 0 .318.012.522.036.204.012.408.036.612.072.204.024.408.06.612.108.204.036.378.084.522.144l-.45 2.214Zm1.262 2.43c0-.84.126-1.572.378-2.196.264-.636.606-1.164 1.026-1.584.42-.42.9-.738 1.44-.954a4.606 4.606 0 0 1 1.692-.324c1.344 0 2.406.414 3.186 1.242.78.816 1.17 2.022 1.17 3.618 0 .156-.006.33-.018.522-.012.18-.024.342-.036.486h-6.084c.06.552.318.99.774 1.314.456.324 1.068.486 1.836.486.492 0 .972-.042 1.44-.126.48-.096.87-.21 1.17-.342l.36 2.178a3.704 3.704 0 0 1-.576.216 6.29 6.29 0 0 1-.81.18c-.288.06-.6.108-.936.144a9.455 9.455 0 0 1-1.008.054c-.852 0-1.596-.126-2.232-.378a4.499 4.499 0 0 1-1.566-1.026 4.356 4.356 0 0 1-.918-1.566 6.345 6.345 0 0 1-.288-1.944Zm6.3-1.026a2.514 2.514 0 0 0-.126-.666 1.485 1.485 0 0 0-.306-.576 1.509 1.509 0 0 0-.522-.414c-.204-.108-.462-.162-.774-.162-.3 0-.558.054-.774.162a1.504 1.504 0 0 0-.54.396 1.926 1.926 0 0 0-.342.594 4.148 4.148 0 0 0-.162.666h3.546Zm8.28 3.816c.263 0 .515-.006.755-.018.24-.012.432-.03.576-.054v-2.034a4.952 4.952 0 0 0-.486-.072 5.412 5.412 0 0 0-.594-.036c-.252 0-.492.018-.72.054a1.698 1.698 0 0 0-.576.162c-.168.084-.3.198-.396.342a.953.953 0 0 0-.144.54c0 .42.138.714.414.882.288.156.678.234 1.17.234Zm-.217-7.848c.792 0 1.452.09 1.98.27.528.18.948.438 1.26.774a2.8 2.8 0 0 1 .684 1.224c.132.48.198 1.014.198 1.602v5.58c-.384.084-.918.18-1.602.288-.684.12-1.512.18-2.484.18-.612 0-1.17-.054-1.674-.162a3.718 3.718 0 0 1-1.278-.522 2.498 2.498 0 0 1-.828-.972c-.192-.396-.288-.882-.288-1.458 0-.552.108-1.02.324-1.404.228-.384.528-.69.9-.918a3.88 3.88 0 0 1 1.278-.486c.48-.108.978-.162 1.494-.162.348 0 .654.018.918.054.276.024.498.06.666.108v-.252c0-.456-.138-.822-.414-1.098-.276-.276-.756-.414-1.44-.414a8.42 8.42 0 0 0-1.35.108c-.444.06-.828.15-1.152.27l-.342-2.16a6.68 6.68 0 0 1 .576-.144c.24-.06.498-.108.774-.144.276-.048.564-.084.864-.108a8.16 8.16 0 0 1 .936-.054Zm9.23 3.672c.264-.288.534-.588.81-.9.288-.312.564-.618.828-.918.264-.312.51-.606.738-.882.24-.276.444-.516.612-.72h3.186c-.636.732-1.26 1.434-1.872 2.106-.6.66-1.26 1.344-1.98 2.052.36.324.732.714 1.116 1.17.384.444.756.906 1.116 1.386A20.592 20.592 0 0 1 50.215 34h-3.078a28.174 28.174 0 0 0-.666-1.026c-.24-.384-.498-.762-.774-1.134-.276-.384-.57-.75-.882-1.098-.3-.348-.6-.642-.9-.882V34h-2.682V20.464l2.682-.432v7.92Zm9.377 1.242c0 .828.186 1.494.558 1.998.372.504.924.756 1.656.756.24 0 .462-.006.666-.018.204-.024.372-.048.504-.072V26.98a2.323 2.323 0 0 0-.666-.27 3.065 3.065 0 0 0-.81-.108c-1.272 0-1.908.864-1.908 2.592Zm6.066 4.5c-.24.072-.516.144-.828.216-.312.06-.642.114-.99.162-.336.048-.684.084-1.044.108a9.801 9.801 0 0 1-1.008.054c-.78 0-1.476-.114-2.088-.342a4.254 4.254 0 0 1-1.548-.972 4.467 4.467 0 0 1-.972-1.548c-.216-.612-.324-1.296-.324-2.052 0-.768.096-1.458.288-2.07.192-.624.468-1.152.828-1.584.36-.432.798-.762 1.314-.99.528-.228 1.128-.342 1.8-.342a4.1 4.1 0 0 1 .99.108c.3.072.6.174.9.306v-4.284l2.682-.432v13.662Zm6.13-1.566c.263 0 .515-.006.755-.018.24-.012.432-.03.576-.054v-2.034a4.952 4.952 0 0 0-.486-.072 5.412 5.412 0 0 0-.594-.036c-.252 0-.492.018-.72.054a1.698 1.698 0 0 0-.576.162c-.168.084-.3.198-.396.342a.953.953 0 0 0-.144.54c0 .42.138.714.414.882.288.156.678.234 1.17.234Zm-.217-7.848c.792 0 1.452.09 1.98.27.528.18.948.438 1.26.774a2.8 2.8 0 0 1 .684 1.224c.132.48.198 1.014.198 1.602v5.58c-.384.084-.918.18-1.602.288-.684.12-1.512.18-2.484.18-.612 0-1.17-.054-1.674-.162a3.718 3.718 0 0 1-1.278-.522 2.498 2.498 0 0 1-.828-.972c-.192-.396-.288-.882-.288-1.458 0-.552.108-1.02.324-1.404.228-.384.528-.69.9-.918a3.88 3.88 0 0 1 1.278-.486c.48-.108.978-.162 1.494-.162.348 0 .654.018.918.054.276.024.498.06.666.108v-.252c0-.456-.138-.822-.414-1.098-.276-.276-.756-.414-1.44-.414a8.42 8.42 0 0 0-1.35.108c-.444.06-.828.15-1.152.27l-.342-2.16a6.68 6.68 0 0 1 .576-.144c.24-.06.498-.108.774-.144.276-.048.564-.084.864-.108a8.16 8.16 0 0 1 .936-.054Zm6.548.576a14.016 14.016 0 0 1 1.764-.36c.72-.12 1.476-.18 2.268-.18.804 0 1.47.108 1.998.324.54.204.966.498 1.278.882.312.384.534.84.666 1.368.132.528.198 1.116.198 1.764V34h-2.682v-5.022c0-.864-.114-1.476-.342-1.836-.228-.36-.654-.54-1.278-.54-.192 0-.396.012-.612.036a6.77 6.77 0 0 0-.576.054V34h-2.682v-9.144Zm10.15 4.41c0-.684.107-1.326.323-1.926.228-.612.552-1.14.972-1.584.42-.456.93-.816 1.53-1.08.6-.264 1.284-.396 2.052-.396.504 0 .966.048 1.386.144.42.084.828.21 1.224.378l-.558 2.142a6.76 6.76 0 0 0-.828-.252 4.327 4.327 0 0 0-1.008-.108c-.792 0-1.386.246-1.782.738-.384.492-.576 1.14-.576 1.944 0 .852.18 1.512.54 1.98.372.468 1.014.702 1.926.702.324 0 .672-.03 1.044-.09s.714-.156 1.026-.288l.378 2.196a6.292 6.292 0 0 1-1.17.342 7.718 7.718 0 0 1-1.548.144c-.864 0-1.608-.126-2.232-.378-.624-.264-1.14-.618-1.548-1.062a4.28 4.28 0 0 1-.882-1.566 6.988 6.988 0 0 1-.27-1.98Zm8.542.072c0-.84.126-1.572.378-2.196.264-.636.606-1.164 1.026-1.584.42-.42.9-.738 1.44-.954a4.606 4.606 0 0 1 1.692-.324c1.344 0 2.406.414 3.186 1.242.78.816 1.17 2.022 1.17 3.618 0 .156-.006.33-.018.522-.012.18-.024.342-.036.486h-6.084c.06.552.318.99.774 1.314.456.324 1.068.486 1.836.486.492 0 .972-.042 1.44-.126.48-.096.87-.21 1.17-.342l.36 2.178a3.704 3.704 0 0 1-.576.216 6.29 6.29 0 0 1-.81.18c-.288.06-.6.108-.936.144a9.455 9.455 0 0 1-1.008.054c-.852 0-1.596-.126-2.232-.378a4.499 4.499 0 0 1-1.566-1.026 4.356 4.356 0 0 1-.918-1.566 6.345 6.345 0 0 1-.288-1.944Zm6.3-1.026a2.514 2.514 0 0 0-.126-.666 1.485 1.485 0 0 0-.306-.576 1.509 1.509 0 0 0-.522-.414c-.204-.108-.462-.162-.774-.162-.3 0-.558.054-.774.162a1.504 1.504 0 0 0-.54.396 1.926 1.926 0 0 0-.342.594 4.148 4.148 0 0 0-.162.666h3.546ZM41 9a1 1 0 1 0 0 2V9Zm8.667 1a5.333 5.333 0 1 0 10.666 0 5.333 5.333 0 0 0-10.666 0ZM41 11h14V9H41v2Z"
          />
        </svg>
      </h1>
      <nav className="flex items-center font-medium">
        <ul className="flex">
          <li className="mr-11">
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li className="mr-11">
            <Link activeClass="active" smooth spy to="services">
              Services
            </Link>
          </li>
          <li className="mr-11">
            <Link activeClass="active" smooth spy to="room">
              Room
            </Link>
          </li>
          <li className="mr-11">
            <Link activeClass="active" smooth spy to="about">
              About us
            </Link>
          </li>
          <li className="mr-11">
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <LinkRouter
        to={'/booking'}
        className="py-4 px-12 font-semibold border-white border-2"
      >
        Book Now
      </LinkRouter>
    </div>
  </div>
)

export default NavBar
