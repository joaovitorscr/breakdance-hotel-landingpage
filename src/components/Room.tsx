import roomWithView from '../assets/image/roomWithView.png'
import smallRoom from '../assets/image/smallRoom.png'
import luxuryRoom from '../assets/image/luxuryRoom.png'
import appartment from '../assets/image/appartment.png'
import mediumRoom from '../assets/image/mediumRoom.png'

const Room = () => (
  <section id="room" className="mb-24 pt-36">
    <div className="text-center text-zinc-800">
      <h3 className="font-bold text-2xl">Our Room</h3>
      <h2 className="font-bold text-5xl mt-4">
        A World of <span className="text-orange-500">Choice</span>
      </h2>
      <p className="mt-5 font-medium text-gray-500 max-w-md m-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat.
      </p>
    </div>
    <div className="mt-11 flex justify-center">
      <div className="flex-col">
        <img className="mb-8" src={roomWithView} alt="" />
        <img src={smallRoom} alt="" />
      </div>
      <div className="mx-10">
        <img src={luxuryRoom} alt="" />
      </div>
      <div className="flex-col">
        <img className="mb-8" src={mediumRoom} alt="" />
        <img src={appartment} alt="" />
      </div>
    </div>
  </section>
)

export default Room
