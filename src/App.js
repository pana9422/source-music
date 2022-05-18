import "./App.css";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import Sidebar from "./components/Sidebar";
import Audio from "./components/Audio";

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <Navbar />
            <Playlist />
            <Audio  />
        </div>
    );
};

export default App;
