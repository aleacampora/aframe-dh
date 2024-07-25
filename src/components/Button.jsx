export const Button = ({onClick, message}) => {
  return (
    <button className='btn-hp' onClick={onClick}>
      {message}
    </button>
  )
}