import { createStore } from "redux";
import { OPEN_SIDEBAR, PLAY_MUSIC, SEARCH_MUSIC } from "./actions";

const initialStore = {
    openSidebar : false,
    inputSearch: "a",
    linkMusic: {
        link: '',
        listLink: [],
        name: 'Nombre del artista',
        picture_medium: 'https://www.suzukijember.com/gallery/gambar_product/default.jpg',
        title: 'Titulo de la canciòn'
    }
}


const rootReduce  = (state = initialStore, action) => {
    if (action.type === OPEN_SIDEBAR) {
        return {
            ...state,
            openSidebar: action.data
        }
    } else if (action.type === SEARCH_MUSIC) {
        return {
            ...state,
            inputSearch: action.data
        }
    } else if (action.type === PLAY_MUSIC) {
        return {
            ...state,
            linkMusic: action.data
        }
    }
    return state
}

export default createStore(rootReduce)