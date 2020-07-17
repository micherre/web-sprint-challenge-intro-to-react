import App from './App'
import axios from 'axios'
import style from 'styled-components'
import React from 'react'

const ImgContainer = style.div`
border: 2px solid darkgrey;
margin: .2rem;
width: 38%;
padding: .7rem 0rem;
border-radius: 6px;
box-shadow: 10px 5px 5px black;
background-color: white;`

const CenteringDiv = style.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 3rem;`

function Character(props){
    const {url, name} = props

    return (
        <CenteringDiv>
            <ImgContainer>
                <img src={url} alt={"Image of character named " + name + " on the show Rick and Morty"}/>
            </ImgContainer>
        </CenteringDiv>
    )
}


export default Character