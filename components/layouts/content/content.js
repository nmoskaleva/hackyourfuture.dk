import './content.scss'

export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      {children}
    </div>
  )
}
