import { connect } from "react-redux";
import { playMusic } from "../../redux/actionsCreators"
import "./Banner.css";
const Banner = ({
    image,
    imgBanner,
    album,
    author,
    rank,
    link,
    fnPlayMusic
}) => {
    function formatNumber(numb) {
        let str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    return (
        <article className="banner">
            <picture className="playicon" onClick={ ()=> fnPlayMusic({link, name: author, picture_medium: image, title: album })}>
                <img className="banner__cover" src={image} alt={author} />
            </picture>
            <div className="banner__detail">
                <img
                    className="banner__background"
                    src={imgBanner}
                    alt={author}
                />
                <h2 className="banner__author">
                    {author} - {album}
                </h2>
                <span className="banner__follow">
                    Lo mejor de {author} - <small>{formatNumber(rank)} seguidores</small>
                </span>
                <p className="banner__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                </p>
                <div className="banner__group-button">
                <button onClick={ ()=> fnPlayMusic(link)} className="banner__button banner__button--primary">Reproducir</button>
                <button className="banner__button">Seguir</button>
                </div>
            </div>
        </article>
    )
};

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    fnPlayMusic({link, name, picture_medium, title}){
        dispatch(playMusic({link, name, picture_medium, title}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
