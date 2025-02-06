"use client";
import { useState, useRef } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    try {
      if (response.ok) {
        setMessage("Форма успішно надіслана!");
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
      } else {
        const result = await response.json();
        setMessage(result.error || "Помилка при надсиланні.");
      }
    } catch (error) {
      setMessage("Помилка при обробці відповіді сервера.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Ми будемо раді знайомству!</h2>
      <div className={styles.contact__content}>
        <div className={styles.contact__form_container}>
          <p className={styles.contact__form_title}>Контактуйте з нами через форму</p>
          <form className={styles.contact__form} onSubmit={handleSubmit}>
            <label>
              Ваше імʼя:
              <input type="text" name="name" required placeholder="Наприклад: Олександр Тисовський" />
            </label>
            <label>
              Еmail:
              <input type="email" name="email" required placeholder="Наприклад: abra.agency@gmail.com" />
            </label>
            <label>
              Телефон:
              <input type="tel" name="tel" required placeholder="Наприклад: +38 096 000 00 00" />
            </label>
            <label>
              Ваш запит:
              <textarea name="message" required placeholder="Опишіть ваш запит"></textarea>
            </label>
            <button type="submit" className={styles.contact__form_btn} disabled={isSubmitting}>
              {isSubmitting ? "Надсилання..." : "Надіслати"}
            </button>
          </form>
          {message && <p className={styles.contact__form_message}>{message}</p>}
        </div>
        <div className={styles.contact__right_container}>
          <p className={styles.contact__right_title}>Або напишіть нам на пошту:</p>
          <Link href="/" className={styles.contact__right_link}>
            <FontAwesomeIcon icon={faAt} />
            <span>abra.agency@gmail.com</span>
          </Link>
          <p className={styles.contact__right_title}>Чи зателефонуйте нам:</p>
          <Link href="/" className={styles.contact__right_link}>
            <FontAwesomeIcon className={styles.contact__right_icon} icon={faMobileScreen} />
            <span>+38 063 832 68 42</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
