import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay, Inner, Button, Close } from './styles/player'

export const playerContext = createContext()

export default function Player ({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <playerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>
                {children}
            </Container>
        </playerContext.Provider>
    )
}

Player.Video = function PlayerVideo ( ...restProps ) {
    const { showPlayer, setShowPlayer } = useContext(playerContext);

    return showPlayer ? 
        ReactDOM.createPortal ( 
        <Overlay onClick={() => setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src="/videos/bunny.mp4" type="video/mp4" />
                </video>
                <Close/>
            </Inner>
        </Overlay>, document.body 
    ): null
}

Player.Button = function PlayerButton ({...restProps}) {
    const { showPlayer, setShowPlayer } = useContext(playerContext);

    return <Button 
                onClick={ ()=> setShowPlayer(!showPlayer) }
                {...restProps}>
                    Play
            </Button>
}