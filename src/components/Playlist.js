import "./Playlist.css";
import { useEffect, useState } from "react";
import Banner from "./cards/Banner";
import Album from "./cards/Album";
import { connect } from "react-redux";

const Playlist = ({ inputSearch }) => {
    const [albumList, setAlbumList] = useState(null);
    let print = false;
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "f8082f32d2msh6baf02f823f41d2p1cffddjsn1123f75e3925",
            },
        };

        fetch(
            "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputSearch,
            options
        )
            .then((response) => response.json())
            .then((response) => setAlbumList(response.data))
            .catch((err) => console.error(err));
    }, [inputSearch]);
    
    if (albumList){
        albumList.forEach(element => {
            const linkList = albumList.map((link) => link.preview)
            element['linkList'] = linkList
        });
        print = true;
    }
    return (
        <div className="playlist">
            {print ? (
                <Banner
                    image={albumList[0].artist.picture_medium}
                    imgBanner={albumList[0].artist.picture_medium}
                    listLink = {albumList[0].linkList}
                    album={albumList[0].title}
                    author={albumList[0].artist.name}
                    rank={albumList[0].rank}
                    link={albumList[0].preview}
                />
            ) : (
                <span>Cargando...</span>
            )}
            <h3>Resultados de busqueda</h3>
            {albumList ? (
                <section className="playlist__content">
                    {albumList.map((c) => (
                        <Album
                            key={c.id}
                            listLink = {c.linkList}
                            picture_medium={c.artist.picture_medium}
                            name={c.artist.name}
                            title={c.title}
                            link={c.preview}
                        />
                    ))}
                </section>
            ) : (
                <span>Cargando...</span>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    inputSearch: state.inputSearch,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
