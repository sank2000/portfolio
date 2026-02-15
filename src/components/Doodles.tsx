export default function Doodles() {
  return (
    <div className='bg-doodles' aria-hidden='true'>
      <svg className='doodle-top' viewBox='0 0 200 200'>
        <path d='M100,20 C150,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 50,20 100,20' />
      </svg>
      <svg className='doodle-bottom' viewBox='0 0 200 200'>
        <path d='M30,100 A70,70 0 1,0 170,100 A70,70 0 1,0 30,100' />
      </svg>
    </div>
  )
}
