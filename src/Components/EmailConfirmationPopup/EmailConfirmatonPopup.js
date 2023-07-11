import React from "react";
import styles from "./EmailConfirmationPopup.module.css";
import icon from "./142.svg";

export function EmailConfirmatonPopup() {
  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Librum</h2>
        </header>
        <main className={styles.modalBody}>
          <img src={icon} className={styles.popupIcon} alt="icon" />
          <h3>Verify your email</h3>
          <p className={styles.modalDescription}>
            <span className={styles.modelText}>Verifying your email gives you access to more features on Librum.</span>{" "}
            <span className={styles.modelText}>Click the button below to join our worldwide community of readers</span>
          </p>
        </main>
        <footer className={styles.modalFooter}>
          <button className={styles.confirmationBtn}>CONFIRM EMAIL</button>
        </footer>
      </div>
    </section>
  );
}
