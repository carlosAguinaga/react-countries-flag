import React from 'react'
import  '../styles/Flag.css'
import {useHistory} from 'react-router-dom'

const Flag = ({name, img}) => {

    const history = useHistory()

    return (
        <div className="flag-container">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <button onClick={()=> history.push(`/detail/${name}`) }>Ver detalle</button>
        </div>
    )
}

export default Flag
