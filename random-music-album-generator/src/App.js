import { useState } from "react";
import "./App.css";
import axios from "axios";
import Button from "./components/Button";

const App = () => {
  const [albumName, setAlbumName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, SetActiveUser] = useState(false);
  const [albumImage, setAlbumImage] = useState([]);
  const [albumYear, setAlbumYear] = useState([]);
  const [Artist, setArtist] = useState("");

  const SpotifyAPI = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fb6f37ac4emshcd46ed697a7070bp197964jsn925c270ab616",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const onClickHandler = () => {
    setLoading(true);
    axios
      .get(
        "https://spotify81.p.rapidapi.com/search?q=albums&type=albums&offset=0&limit=100&numberOfTopResults=2",
        SpotifyAPI
      )
      .then((response) => {
        const maxItems = response.data.albums.items.length;
        let randomElement = Math.floor(Math.random() * 50); // Random element in here
        console.log(response.data.albums.items[randomElement].data);

        const albumData = response.data.albums.items[randomElement].data;
        setAlbumName(albumData.name);
        setAlbumImage(albumData.coverArt.sources[2].url);
        setAlbumYear(albumData.date.year)
        setArtist(albumData.artists.items[0].profile.name);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        SetActiveUser(true);
      });
  };
  return (
    <div className="App">
      <h1 className="title">Random Music Album Generator App</h1>
      <p>For when you don't know what music album to listen</p>
      <Button isActive={activeUser} clicked={onClickHandler} />
      {loading ? (
        <h1>Loading...</h1>
      ) : Artist ? (
        <div className="app__user">
          <img src={albumImage} alt="#" />
          <div className="app__detail">
            <h1>{albumName}</h1>
            <h2>{Artist}</h2>
            <h3>{albumYear}</h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
