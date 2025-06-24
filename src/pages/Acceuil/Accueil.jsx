import { useState } from 'react'
import { Link } from 'react-router'
import './Accueil.scss'
import onLoadedData from '../../Data/data'
import OverImage from '../../utils/OverImage/OverImage';



function Accueil() {
  const [data, setData] = useState([]);
  onLoadedData((d) => {
    setData(d);
  })

  return (
    <>
    <OverImage height="20vh" img={"src/assets/AccueilBgImg.png"}>
      <h2 className='OverImage-Mid acc-OverImage'>Chez vous, partout et ailleurs</h2>
    </OverImage>
      <div className="grid">
        {data.map(d => {
          return (
            <Link to={"logement/" + d.id} className='gridImg' key={d.id}>
              <img src={d.cover} alt={d.description} />
              <div><h3>{d.title}</h3></div>
            </Link>)
        })}
      </div >
    </>
  )
}

export default Accueil