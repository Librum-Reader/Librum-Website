import React from "react";
import styles from "./EmailConfirmationPopup.module.css";
import icon from "./142.svg";

export function EmailConfirmatonPopup() {
  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Librum</h2>
          <button className={styles.exitButton}>X</button>
        </header>
        <main className={styles.modalBody}>
          <img src={icon} className={styles.popupIcon} alt="icon" />
          <h3>Verify your email</h3>
          <p className={styles.modalDescription}>
            Verifying your email gives you access to more features on Librum. Click the button below to join our
            worldwide community of readers
          </p>
        </main>
        <footer className={styles.modalFooter}>
          <button>CONFIRM EMAIL</button>
        </footer>
      </div>
    </section>
  );
}
