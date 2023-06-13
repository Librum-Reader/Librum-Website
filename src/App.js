import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { SupportPage } from "./Pages/Support/SupportPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SiteContextProvider } from "./Context/Context";
import { News } from "./Pages/News/News";
import { Profile } from "./Pages/Profile/Profile";
import { Article } from "./Pages/Article/Article";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { Test } from "./Components/Test/Test";

function App() {
  return (
    <SiteContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/support"
                element={
                  <SupportPage
                    message={" NEED HELP?"}
                    anchor={"Ways to support us"}
                    cards={true}
                  />
                }
              />
              <Route path="/News" element={<News />} />
              <Route path="/News/:title" element={<Article />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
