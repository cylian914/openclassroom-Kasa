import { useState } from 'react'
import onLoadedData from './data'
import { useNavigate, useParams} from 'react-router';
import SlideShow from '../utils/SlideShow';
import "./Logement.scss"
import Collapse from '../../utils/Colapse/Collapse';



function Logment() {
    const [data, setData] = useState(Object);

    let navigates = useNavigate();

    let parms = useParams();

    onLoadedData((d) => {
        let f = d.find((ele) => ele.id === parms.id);
        if (f===undefined) {
            navigates("/err")
            return;
        }
        setData(f);
    })


    return (<>
        {data.id === undefined ?
            null
            : 
            <>
                <SlideShow images={data.pictures} height={"415px"} />
                <div className='Logement-info'>
                    <div className='Logement-info-loc'>
                        <h1>{data.title}</h1>
                        <h2 className='Logement-info-loc-sub'>{data.location}</h2>
                        <ul className='Logement-info-loc-tags'>
                            {data.tags.map((d) => {
                                return (
                                    <li key={d} className='Logement-info-loc-tags-tag'><h3>{d}</h3></li>

                                )
                            })}
                        </ul>
                    </div>
                    <div className='Logement-info-host'>
                        <div className='Logement-info-host-info'>
                            <h3 className='Logement-ingo-host-info-txt'>{data.host.name}</h3>
                            <img className="Logement-info-host-info-img" src={data.host.picture} />
                        </div>
                        <div className='Logement-info-host-rating'>
                            {calcRating(data.rating)}
                        </div>

                    </div>
                </div>
                <div className='Logement-text'>
                    <Collapse title="Description" ><h3>{data.description}</h3></Collapse>
                    <Collapse title="Équipements" ><ul>
                        {data.equipments.map((d) => {
                            return (
                                <li key={d}><h3>{d}</h3></li>
                            )
                        })}
                    </ul></Collapse>
                </div>
            </>}
    </>)
}

function calcRating(rating) {
    const ret= []
    let i = 0
    for (; i < rating; i++) {
        ret.push(<div key={"rating_"+i} className='center'><i className="fa-xs fa-solid fa-star fa-2xl" aria-hidden="true"></i></div>)
    }

    for (; i < 5; i++) {
        ret.push(<div key={"rating_"+i} className='center'><i className="fa-xs fa-solid fa-star neutral-star fa-2xl" aria-hidden="true"></i></div>)
    }
    return ret;
}

export default Logment