import React from "react";
import "./Disclaimer.css";

export function Disclaimer() {
  return (
    <main className="disclaimer-container">
      <header>
        <h1 className="disclaimer-title">Disclaimer</h1>
      </header>
      <article>
        <section className="disclaimer-text">
          <p>
            The content on this website is provided for general information purposes only. It is not intended as legal,
            financial, or other professional advice, and should not be relied upon as a substitute for consultations
            with qualified professionals who are familiar with your individual needs.
          </p>
        </section>
        <section className="disclaimer-text">
          <p>
            While we strive to keep the information on this website accurate, complete, and up-to-date, we do not
            guarantee or warrant that the information is accurate, complete, or current. By using this website, you
            accept the risk that the information may be inaccurate, incomplete, or out of date, as well as the risk of
            possible misunderstandings or misinterpretations of the information.
          </p>
        </section>
        <section className="disclaimer-text">
          <p>
            We disclaim all responsibility for any liability, loss, or risk which is incurred as a direct or indirect
            consequence of the use of any of the material on this website.
          </p>
        </section>
      </article>
    </main>
  );
}
