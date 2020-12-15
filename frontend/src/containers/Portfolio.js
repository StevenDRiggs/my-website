import { Link } from 'react-router-dom'

//import CIL from '../images/CIL.svg'

import BASE_URL from '../BASE_URL'


const Portfolio = () => {
  return (
    <div>
      <Link to='#'> {/* to=`${BASE_URL}/portfolio/CIL` */}
        <img src='https://picsum.photos/256' alt='Calapitter Image Library' /> {/* src={CIL} */}
      </Link>
    </div>
  )
}


export default Portfolio
