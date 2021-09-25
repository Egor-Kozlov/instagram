import '../src/styles/css/main.css';
import { Navigator, FeedPage, Header, Post, FooterNav, ProfilePage, LoginPage } from "./router/ComponentsLinks";


function App() {
  return (
    <div className="App">
      {/* <Navigator /> */}
      {/* <FeedPage/> */}
      <Header/>
      <div style = {{paddingTop: '90px'}}>
        <Post/>
        <Post/>
        <Post/>
      </div>
      {/* <LoginPage/> */}
      <FooterNav/>
    </div>
  );
}

export default App;
