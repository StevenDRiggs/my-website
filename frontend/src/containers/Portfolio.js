import { Link } from 'react-router-dom'

import { ReactComponent as CIL } from '../images/caterpillar.svg'

import BASE_URL from '../BASE_URL'

import './Portfolio.css'


const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className='thumbnail'>
        <Link to='#'> {/* to=`${BASE_URL}/portfolio/CIL` */}
          {/* eslint-disable-next-line no-console */}
          <CIL className='thumbnail-image' alt='Calapitter Image Library' viewBox='-20 0 280 300' />
          <p className='thumbnail-p'>Calapitter Image Library</p>
        </Link>
        <div className='github'>
          <a href='https://github.com/StevenDRiggs/featured-projects.git' target='_blank' rel='noopen noreferrer'>
            <img src='https://github.githubassets.com/favicons/favicon.svg' alt='See Calapitter Image Library on GitHub' />
          </a>
        </div>
      </div>
      <div className='thumbnail'>
        <Link to='#'> {/* to=`${BASE_URL}/portfolio/RecipeCalculator` */}
          {/* <RecipeCalculator className='thumbnail-image' alt='Recipe Calculator' viewBox='-20 0 280 300' /> */}
          <img src='https://picsum.photos/200?random=1' alt='' className='thumbnail-image' />
          <p className='thumbnail-p'>Recipe Calculator</p>
        </Link>
        <div className='github'>
          <a href='https://github.com/StevenDRiggs/featured-projects.git' target='_blank' rel='noopen noreferrer'>
            <img src='https://github.githubassets.com/favicons/favicon.svg' alt='See Recipe Calculator on GitHub' />
          </a>
        </div>
      </div>
      <div className='thumbnail'>
        <Link to='#'> {/* to=`${BASE_URL}/portfolio/RuledMeWebScraper` */}
          {/* <RuledMeWebScraper className='thumbnail-image' alt='Ruled.me Recipe Web Scraper' viewBox='-20 0 280 300' /> */}
          <img src='https://picsum.photos/200?random=2' alt='' className='thumbnail-image' />
          <p className='thumbnail-p'>Ruled.me Recipe Web Scraper</p>
        </Link>
        <div className='github'>
          <a href='https://github.com/StevenDRiggs/featured-projects.git' target='_blank' rel='noopen noreferrer'>
            <img src='https://github.githubassets.com/favicons/favicon.svg' alt='See Ruled.me Recipe Web Scraper on GitHub' />
          </a>
        </div>
      </div>
      <div className='thumbnail'>
        <Link to='#'> {/* to=`${BASE_URL}/portfolio/STH` */}
          {/* <STH className='thumbnail-image' alt='Seed, Time and Harvest Database' viewBox='-20 0 280 300' /> */}
          <img src='https://picsum.photos/200?random=3' alt='' className='thumbnail-image' />
          <p className='thumbnail-p'>Ruled.me Recipe Web Scraper</p>
        </Link>
        <div className='github'>
          <a href='https://github.com/StevenDRiggs/featured-projects.git' target='_blank' rel='noopen noreferrer'>
            <img src='https://github.githubassets.com/favicons/favicon.svg' alt='See Seed, Time and Harvest Database on GitHub' />
          </a>
        </div>
      </div>
      <div className='thumbnail'>
        <Link to='#'> {/* to=`${BASE_URL}/portfolio/Yeti` */}
          {/* <STH className='thumbnail-image' alt='Yeti The Bookclub App' viewBox='-20 0 280 300' /> */}
          <img src='https://picsum.photos/200?random=4' alt='' className='thumbnail-image' />
          <p className='thumbnail-p'>Yeti The Bookclub App</p>
        </Link>
        <div className='github'>
          <a href='https://github.com/StevenDRiggs/featured-projects.git' target='_blank' rel='noopen noreferrer'>
            <img src='https://github.githubassets.com/favicons/favicon.svg' alt='See Yeti The Bookclub App on GitHub' />
          </a>
        </div>
      </div>
    </div>
  )
}


export default Portfolio
