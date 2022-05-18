
import logo from "../assets/brand.png";
import "./Sidebar.css";

import { connect } from "react-redux"
import { openSidebar } from "../redux/actionsCreators"

const Sidebar = ( {openSidebar, fnOpenSidebar} ) => {
    const sidebarClass = (openSidebar) ?"sidebar sidebar--open": "sidebar"

    return (
        <aside className={sidebarClass}>
            <a href="./" className="sidebar__brand">
                <img className="sidebar__image" src={logo} alt="Foxbel Music" />
            </a>
            <button className="sidebar__navigation" onClick={() => fnOpenSidebar(false)}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <nav className="sidebar__content">
                <h3 className="sidebar__subtitle">Mi libreria</h3>
                <ul className="sidebar__list">
                    <li>
                        <a
                            className="sidebar__link sidebar__link--active"
                            href="./"
                        >
                            Recientes
                        </a>
                    </li>
                    <li>
                        <a className="sidebar__link" href="./">
                            Artistas
                        </a>
                    </li>
                    <li>
                        <a className="sidebar__link" href="./">
                            Albuns
                        </a>
                    </li>
                    <li>
                        <a className="sidebar__link" href="./">
                            Canciones
                        </a>
                    </li>
                    <li>
                        <a className="sidebar__link" href="./">
                            Estaciones
                        </a>
                    </li>
                </ul>
                <h3 className="sidebar__subtitle">Playlist</h3>
                <ul className="sidebar__list">
                    <li>
                        <a href="./">Metal</a>
                    </li>
                    <li>
                        <a href="./">Para bailar</a>
                    </li>
                    <li>
                        <a href="./">Rock 90s</a>
                    </li>
                    <li>
                        <a href="./">Baladas</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
    
};

const mapStateToProps = state => (
    {
        openSidebar: state.openSidebar
    }
)
const mapDispatchToProps = dispatch => ({
    fnOpenSidebar(bool) {
        dispatch(openSidebar(bool))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
