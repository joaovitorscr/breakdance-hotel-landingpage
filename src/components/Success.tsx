type Props = {
  name: string
}

const Success = ({ name }: Props) => (
  <div className="text-center font-medium">
    <h2 className="font-semibold text-4xl text-neutral-900 mb-3 pb-px">
      <span className="text-orange-500">Congratulations {name}!</span> <br />
      You have booked a room
    </h2>
    <p className="text-lg mb-3">
      We from The Breakdance are so happy to receive you in ours dependecies
    </p>
    <p className="text-md text-neutral-500">
      If you need any help our have questions about your room get in touch
    </p>
  </div>
)

export default Success
