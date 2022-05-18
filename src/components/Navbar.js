import { useRef } from "react"
import { connect } from "react-redux"
import { searchMusic, openSidebar } from "../redux/actionsCreators"
import "./Navbar.css"

const Navbar = ( {fnOpenSidebar, fnSearchMusic}) => {
    const txtSearch = useRef()

    return (
        <nav className="navbar">
            <div className="navbar__search">
                <input ref={txtSearch} type="search" onChange={() => fnSearchMusic(txtSearch.current.value)} className="navbar__input" placeholder="Buscar" />
                <span className="navbar__icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <a href="./" className="navbar__user">
                <span className="navbar_avatar"><i className="fa-solid fa-user"></i></span>
                <span className="navbar_username">Miguel J Medina</span>
            </a>
            <button className="navbar__navigation" onClick={() => fnOpenSidebar(true)}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </nav>
    )
}
const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    
    fnSearchMusic(input){
        
        if (!!input === false)  input = "a"
        dispatch(searchMusic(input))
    },
    fnOpenSidebar(bool) {
        dispatch(openSidebar(bool))
    }
})


export default  connect(mapStateToProps, mapDispatchToProps )(Navbar)