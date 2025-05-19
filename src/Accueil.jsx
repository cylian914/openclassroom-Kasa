import { useState } from 'react'
import { Link } from 'react-router'
import './Accueil.scss'
import onLoadedData from './data'



function Accueil() {
  const [data, setData] = useState([]);
  onLoadedData((d) => {
    setData(d);
  })

  return (
    <>
      <h2 className='HeaderImageCaption'>Chez vous, partout et ailleurs</h2>
      <div className="grid">
        {data.map(d => {
          return (
            <Link to={"logement/" + d.id} className='gridImg' key={d.id}>
              <img src={d.cover} alt={d.description} />
              <h3>{d.title}</h3>
            </Link>)
        })}
      </div >
    </>
  )
}

export default Accueil