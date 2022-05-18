import { OPEN_SIDEBAR, PLAY_MUSIC, SEARCH_MUSIC } from "./actions";

const searchMusic = (input) => ({
    type: SEARCH_MUSIC,
    data: input
});

const openSidebar = (value) => ({
    type: OPEN_SIDEBAR,
    data: value,
});

const playMusic = ({link,listLink, name, picture_medium, title}) => ({
    type: PLAY_MUSIC,
    data: {link,listLink, name, picture_medium, title},
});

export {  searchMusic, openSidebar, playMusic };
