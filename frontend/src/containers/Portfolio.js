import { Link } from 'react-router-dom'

import { ReactComponent as CIL } from '../images/caterpillar.svg'

import BASE_URL from '../BASE_URL'

import './Portfolio.css'


const Portfolio = () => {
  return (
    <div>
      <div className='thumbnail'>
        <Link to='#'> {/* to=`${BASE_URL}/portfolio/CIL` */}
          <CIL className='thumbnail-image' alt='Calapitter Image Library' viewBox='-20 0 280 300' />
        </Link>
        <div className='github'>
          <a href='https://github.com/StevenDRiggs/featured-projects.git' target="_blank">
            <img src='https://github.githubassets.com/favicons/favicon.svg' alt='See Calapitter Image Library on GitHub' />
          </a>
        </div>
        <caption className='thumbnail-caption'>Calapitter Image Library</caption>
      </div>
    </div>
  )
}


export default Portfolio
