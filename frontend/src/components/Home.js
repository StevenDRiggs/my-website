import { Row, Column } from 'simple-flexbox'

import photo from '../images/Steven_Riggs_photo.jpg'

import './Home.css'


const Home = () => {
  return (
    <div id='home'>
      <Row id='home-flexbox' vertical='center'>
        <Column id='photo-div' width='1fr'>
          <img id='photo' src={photo} alt='My photograph' width='100%' />
        </Column>
        <Column id='home-intro' width='1fr'>
          <h1>Hi, I'm Steven!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Universa enim illorum ratione cum tota vestra confligendum puto. Age, inquies, ista parva sunt. Maximeque eos videre possumus res gestas audire et legere velle, qui a spe gerendi absunt confecti senectute. Duo Reges: constructio interrete. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; Tum ille: Ain tandem? Frater et T. Nemo nostrum istius generis asotos iucunde putat vivere.</p>
        </Column>
      </Row>
    </div>
  )
}


export default Home
