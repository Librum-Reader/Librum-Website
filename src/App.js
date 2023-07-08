import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
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
import { TermsOfService } from "./Pages/TermsOfService/TermsOfService";
import { WhyTiers } from "./Pages/WhyTiers/WhyTiers";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Test } from "./Components/Test/Test";
import { ProfilePage } from "./Components/Profile/ProfilePage";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Disclaimer } from "./Components/Disclaimer/Disclaimer";
import { Cookies } from "./Components/Cookies/Cookies";

function App() {
  return (
    <SiteContextProvider>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_reCAPTCHA_SITE_KEY}>
        <div className="App">
          <Router>
            <Navbar />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/support"
                  element={<SupportPage message={" NEED HELP?"} anchor={"Ways to support us"} cards={true} />}
                />
                <Route path="/News" element={<News />} />
                <Route path="/News/:title" element={<Article />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/termsofservice" element={<TermsOfService />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/whyTiers" element={<WhyTiers />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ScrollToTop>
            <Footer />
          </Router>
        </div>
      </GoogleReCaptchaProvider>
    </SiteContextProvider>
  );
}

export default App;
