import React from "react";
import "./Cookies.css";

export function Cookies() {
  return (
    <main className="cookies-container">
      <header>
        <h1 className="cookies-title">Cookies</h1>
        <article>
          <section className="cookies-text">
            <p>
              We use cookies on our website to provide you with the most relevant experience by remembering your
              preferences and repeat visits.
            </p>
          </section>
          <section className="cookies-text">
            <p>
              By clicking "Accept", you consent to the use of ALL the cookies. However, you may visit "Cookie Settings"
              to provide a controlled consent.
            </p>
          </section>
          <section className="cookies-text">
            <p>
              For more information about how we use cookies, please refer to our{" "}
              <a href="/privacypolicy">Privacy Policy</a>.
            </p>
          </section>
        </article>
      </header>
    </main>
  );
}
