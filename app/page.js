'use client'
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Home() {

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const submitBtn = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      submitBtn.current.setAttribute("disabled", "true");
      submitBtn.current.classList.add("loading");

      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });
      if (res.status === 200) {
        setIsSent(true)
      } else {
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setError(`${e}`);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image src={"/img/david-header.jpg"} alt="David Sutalo's Life and Work" width="1540" height="1224" />
        </div>
        <div className={styles.title}>
          <h1><span>The Life and Work of</span> David Sutalo</h1>
          <Image src={"/img/david.webp"} alt="David Sutalo" width="540" height="720" />
          <p>Mr. David Sutalo, a 12-year resident of the Stewart House and beloved fixture all across Pike Place Market, passed away in the early morning hours on December 3, 2025, after a seven-year battle with cancer. He was surrounded by the love and care of his friends and "found family" until his last moments on earth, and he will be dearly missed.</p>
        </div>
        <div className={styles.work}>
          <h2>David's Work</h2>
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              425: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            <SwiperSlide><Image src={"/img/art/20211103_111722.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20211110_072525.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20211225_122822.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20211231_083813.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220203_105647.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220203_105743.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220203_105840.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220213_153444.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220226_090517.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220226_090732.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220302_132954.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220319_190713.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220522_135037.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220522_135112.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220524_184930.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220601_165820.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220602_133629.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220610_074454.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220614_064239.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
            <SwiperSlide><Image src={"/img/art/20220711_135340.jpg"} alt="David's work" width="1836" height="3264" /></SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.stories}>
          <h2>Reach out</h2>
          <p>Have a story or something you'd like to share about David? Let us know.</p>


          {isSent ? (
            error ? (

              <div className="message-sent">
                <h2>Something went wrong!</h2>
                <h3>An error has occured. Please reload the page and try again.</h3>
                <a href="#" className="btn btn-pink" onClick={(e) => { e.preventDefault(); location.reload(); }}>Reload</a>
              </div>

            ) : (

              <div className="message-sent">
                <h2>Thank you for contacting us.</h2>
                <p>We'll review your submission at our earliest convenience.</p>
              </div>

            )
          ) : (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <input type='text' id="name" name="name" placeholder="Name" />
                <input type='email' id="email" name="email" placeholder="Email" />
              </fieldset>
              <textarea name="message" id="message" placeholder="Your Message"></textarea>
              <button type="submit" ref={submitBtn}>Submit</button>
            </form>
          )}
        </div>


        <footer className={styles.footer}>
          <p>In Memory of David Sutalo | October 2, 1952 - December 3, 2025</p>
          <hr />
          <p>We love you, Davie.</p>
        </footer>


      </main >
    </div >
  );
}
