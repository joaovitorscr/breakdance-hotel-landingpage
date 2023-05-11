import roomWithView from '../assets/image/roomWithView.png'
import smallRoom from '../assets/image/smallRoom.png'
import luxuryRoom from '../assets/image/luxuryRoom.png'
import appartment from '../assets/image/appartment.png'
import mediumRoom from '../assets/image/mediumRoom.png'

const Room = () => (
  <section id="room" className="mb-24 w-3/4 m-auto">
    <div className="text-center text-zinc-800">
      <h3 className="font-bold text-xl">Our Room</h3>
      <h2 className="font-bold text-3xl mt-4">
        A World of <span className="text-orange-500">Choice</span>
      </h2>
      <p className="mt-5 text-md font-medium text-gray-500 max-w-md m-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat.
      </p>
    </div>
    <div className="mt-11">
      <div className="">
        <img className="mb-6" src={roomWithView} alt="" />
        <img src={smallRoom} alt="" />
      </div>
      <div className="mb-6">
        <img src={luxuryRoom} alt="" />
      </div>
      <div className="">
        <img className="mb-6" src={mediumRoom} alt="" />
        <img src={appartment} alt="" />
      </div>
    </div>
  </section>
)

export default Room
