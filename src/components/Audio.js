import { useRef } from "react";
import { connect } from "react-redux";
import "./Audio.css";

const Audio = ({ linkMusic }) => {
    const player = useRef()
    const player_range = useRef()
    const player_button = useRef()

    const indexNow = [0]
    let musicNow= Number(indexNow[0]);
    let nextMusic = 0
    let prevMusic = 0

    const fnControlSound = (range) => {
        player.current.volume = range / 100
    }
    const fnMutedSound = ( bool ) => {
        player.current.muted = bool
    }
    const fnMusicPlay = () => {
        if(player.current.paused || player.current.ended){
            player.current.play()
            player_button.current.querySelector('.fa-solid').classList.replace("fa-play","fa-pause")
            
        } else { 
            player.current.pause()
            player_button.current.querySelector('.fa-solid').classList.replace("fa-pause","fa-play")
        }
    }
    const fnMusicLoad =( link, listLink ) =>{
        player.current.src= link
        indexNow[0]= listLink.indexOf( link)
        player.current.load()
    }
    const fnMusicNext = (listLink) => {  
        musicNow = nextMusic = (listLink.length === (musicNow+1))? 0 : musicNow + 1
        fnMusicLoad(listLink[nextMusic], listLink);
        player.current.play()
        indexNow[0]= nextMusic
    }
    const fnMusicPrev = (listLink) => {  
        musicNow = prevMusic = (musicNow===0) ? listLink.length - 1 : musicNow - 1
        fnMusicLoad(listLink[prevMusic], listLink);
        player.current.play()
        indexNow[0]= prevMusic
    }



    return (
        <section className="player">
            <audio
                ref={player}
                className="player__audio"
                src={linkMusic.link}
                controls
                autoPlay
            ></audio>
            <div className="player__mask">
                <div className="player__music">
                    <img
                        className="player__image"
                        src={linkMusic.picture_medium}
                        alt={linkMusic.name}
                    />
                    <span className="player__name">{linkMusic.title}</span>
                    <span className="player__author">{linkMusic.name}</span>
                </div>
                <div className="player__controls">
                    <button className="player__button player__button--back" onClick={ ()=> fnMusicPrev(linkMusic.listLink) }>
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    <button ref={player_button} className="player__button player__button--play"  onClick={ ()=> fnMusicPlay() }>
                        <i className="fa-solid fa-pause"></i>
                    </button>
                    <button className="player__button player__button--next" onClick={ ()=> fnMusicNext(linkMusic.listLink) }>
                        <i className="fa-solid fa-forward-step"></i>
                    </button>
                </div>
                <div className="player__sound">
                    <button className="player__button player__muted" onClick={ ()=> fnMutedSound(true) }>
                        <i className="player__sound-on fa-solid fa-volume-xmark"></i>
                    </button>
                    <input
                        ref={player_range}
                        onInput={ ()=> fnControlSound(player_range.current.value) } onChange={ ()=> fnControlSound(player_range.current.value) }
                        className="player__range"
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                    />
                    <button className="player__button player__muted" onClick={ ()=> fnMutedSound(false) }>
                        <i className="player__sound-off fa-solid fa-volume-off"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => ({
    linkMusic: state.linkMusic,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
