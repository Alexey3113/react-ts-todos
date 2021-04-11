import React from 'react'
import { useHistory } from 'react-router'

export const JavascriptPage: React.FC = () => {
    const history = useHistory()
    return (
        <div>
            <h2>JavaScript</h2>
            <p>JavaScript - это мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript.</p>
            <button className="btn" onClick={() => history.push("/")}>К задачам</button>
            <button className="btn mgl20" onClick={() => history.push("/about")}>О нас</button>
        </div>
    )
}
