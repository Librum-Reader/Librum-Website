import "./PrivacyPolicy.css";
import Template from "./Template";

const PrivacyPolicy = (props) => (
  <div className="main-container">
    <h1 className="title">Privacy Policy</h1>
    <h3 className="sub-title">Last Updated Jul 14th, 2023 </h3>
    <p className="effective-date">Effective Date: On official release (Not Yet)</p>
    <Template meta={props} />
  </div>
);

export { PrivacyPolicy };
