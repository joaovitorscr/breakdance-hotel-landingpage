import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import NavBarBooking from '../components/NavBarBooking'

type SubmitForm = {
  name: string
  email: string
  tel: number
}

const Booking = () => {
  const navigate = useNavigate()

  const validation = Yup.object().shape({
    name: Yup.string()
      .required('Full name is required')
      .min(6, 'Name must be at least 6 characters')
      .max(26, 'Username must not exceed 26 characters'),
    email: Yup.string()
      .required('E-mail is required')
      .email('E-mail is invalid'),
    tel: Yup.number()
      .required('A cellphone number is required')
      .min(9, 'Cellphone number must be at least 9 digits')
      .typeError('You must use only numbers')
  })

  const onSubmit = () => {
    navigate('/success')
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SubmitForm>({
    resolver: yupResolver(validation)
  })

  return (
    <>
      <NavBarBooking />
      <div className="w-3/4 m-auto text-zinc-900 bg-neutral-200 h-full pb-2">
        <div className="text-center mb-10 mt-20">
          <h2 className="font-bold text-3xl mb-2">
            Booking a room was never that easy
          </h2>
          <p className="font-medium text-neutral-400">
            Fill the form down below and you&apos;re good to go
          </p>
        </div>
        <div className="bg-neutral-400 shadow-md shadow-neutral-900 max-w-xs m-auto px-4 py-6 rounded-lg mb-20 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col"
          >
            <div className="flex flex-col">
              <input
                className="mb-1 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
                type="text"
                placeholder="Full name"
                {...register('name')}
              />
              <div className="text-center font-medium text-red-500 mb-2">
                {errors.name?.message}
              </div>
            </div>
            <div className="flex flex-col">
              <input
                className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
                type="email"
                placeholder="Your best e-mail"
                {...register('email')}
              />
              <div className="text-center font-medium text-red-500 mb-2">
                {errors.email?.message}
              </div>
            </div>
            <div className="flex flex-col">
              <input
                className="mb-3 rounded-md p-2 text-center shadow-md shadow-neutral-900 outline-none border-transparent border-2 focus:border-neutral-700"
                type="tel"
                placeholder="000-000-000"
                maxLength={9}
                {...register('tel')}
              />
              <div className="text-center font-medium text-red-500 mb-2">
                {errors.tel?.message}
              </div>
            </div>
            <select
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
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Booking
