import { connect } from "react-redux"
import { playMusic } from "../../redux/actionsCreators"
import "./Album.css"

const Album = ({picture_medium, title, name, link,listLink, fnPlayMusic}) => {
    return (
        <article className="album">
            <picture className="playicon" onClick={ ()=> fnPlayMusic({link,listLink, name, picture_medium, title})}>
                <img className="album__cover" src={picture_medium} alt={name} />
            </picture>
            <span className="album__title">{title}</span>
            <span className="album__name">{name}</span>
        </article>
    )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    fnPlayMusic({link,listLink , name, picture_medium, title}){
        dispatch(playMusic({link,listLink , name, picture_medium, title}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Album)