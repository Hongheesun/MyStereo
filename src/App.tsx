import Main from "./component/Main/Main";
import MusicPage from "./component/MusicPage/MusicPage";
import { useRecoilValue } from "recoil";
import { videoState } from "./atoms";
function App() {
  const playVideo = useRecoilValue(videoState);

  return (
    <div className="App">
      {!playVideo && <Main />}
      {playVideo && <MusicPage />}
    </div>
  );
}

export default App;
