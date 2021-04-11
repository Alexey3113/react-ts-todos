import React from 'react'
import { useHistory } from 'react-router'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <div>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit adipisci illo, pariatur incidunt aperiam voluptatum unde laborum itaque reiciendis ab!</p>
            <button className="btn" onClick={() => history.push("/")}>К задачам</button>
            <button className="btn mgl20" onClick={() => history.push("/javascript")}>JavaScript</button>
        </div>
    )
}
