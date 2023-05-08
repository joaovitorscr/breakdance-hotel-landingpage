import NavBarBooking from '../components/NavBarBooking'

const Booking = () => (
  <div className="bg-white text-zinc-900">
    <NavBarBooking />
    <div className="w-3/4 m-auto mt-8 mb-8">
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-2">
          Booking a room was never that easy
        </h2>
        <p className="font-medium text-neutral-400">
          Fill the form down below and you&apos;re good to go
        </p>
      </div>
      <div className="bg-neutral-400 shadow-md shadow-neutral-900 max-w-xs m-auto px-4 py-6 rounded-lg">
        <form className="flex flex-col">
          <input
            className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
            type="text"
            placeholder="Full name"
          />
          <input
            className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
            type="email"
            placeholder="Your best e-mail"
          />
          <input
            className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
            type="tel"
            placeholder="+00 000-000-000"
          />
          <button
            className="p-4 bg-orange-500 text-white rounded-md w-1/2 m-auto mt-2"
            type="submit"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  </div>
)

export default Booking
