import { useState } from 'react'
import NavBarBooking from '../components/NavBarBooking'
import Success from '../components/Success'

const Booking = () => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')

  const register = () => {
    if (name.length >= 0) {
      setError(true)
      return false
    } else {
      return setSuccess(true)
    }
  }

  return (
    <div className="text-zinc-900 bg-neutral-200 h-full pb-2">
      <NavBarBooking />
      {success ? (
        <div className="justify-center align-middle mt-20 flex h-full pb-32">
          <Success name={name} />
        </div>
      ) : (
        <>
          <div className="text-center mb-10 mt-20">
            <h2 className="font-bold text-3xl mb-2">
              Booking a room was never that easy
            </h2>
            <p className="font-medium text-neutral-400">
              Fill the form down below and you&apos;re good to go
            </p>
          </div>
          {error ? (
            <>
              <p className="font-semibold text-zinc-900 text-center mb-5">
                <span className="text-zinc-950 underline">ERROR:</span> Verify
                your data and try again
              </p>
            </>
          ) : (
            <></>
          )}
          <div className="bg-neutral-400 shadow-md shadow-neutral-900 max-w-xs m-auto px-4 py-6 rounded-lg mb-20 ">
            <form className="flex flex-col">
              <input
                className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
                type="text"
                placeholder="Full name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
                minLength={14}
              />
              <input
                className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
                type="email"
                placeholder="Your best e-mail"
                id="email"
                required
                minLength={22}
              />
              <input
                className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
                type="tel"
                placeholder="000-000-000"
                id="tel"
                required
                minLength={9}
              />
              <select
                required
                placeholder="Select a room"
                className="cursor-pointer mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
              >
                <option className="cursor-pointer" value="luxury">
                  Luxury Room
                </option>
                <option className="cursor-pointer" value="appartment">
                  Appartment
                </option>
                <option className="cursor-pointer" value="withView">
                  Room with View
                </option>
                <option className="cursor-pointer" value="midium">
                  Midium Room
                </option>
                <option className="cursor-pointer" value="small">
                  Small Room
                </option>
              </select>
              <button
                className={
                  'p-4 bg-orange-500 text-white rounded-md w-1/2 m-auto mt-2 disabled:bg-orange-200 disabled:text-black'
                }
                type="submit"
                onClick={(e) => {
                  e.preventDefault
                  setError(false)
                  register()
                }}
              >
                Book
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default Booking
