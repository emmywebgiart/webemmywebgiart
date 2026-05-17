import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import WeddingForm from "../../components/WeddingForm";
import imgPrincipal from "../../assets/img/invitaciones/isaiylupita/img3356.webp"
import flor1 from "../../assets/img/invitaciones/isaiylupita/flor1.png"
import img2 from "../../assets/img/invitaciones/isaiylupita/dsc0118.webp"
import zapato from "../../assets/img/invitaciones/isaiylupita/zapato.png"
import vestido from "../../assets/img/invitaciones/isaiylupita/vestido.png"
import flores from "../../assets/img/invitaciones/isaiylupita/flores.png"
import img3 from "../../assets/img/invitaciones/isaiylupita/dsc0127.webp"
import img4 from "../../assets/img/invitaciones/isaiylupita/dsc0207.webp"
import img5 from "../../assets/img/invitaciones/isaiylupita/dsc0264.webp"
import img6 from "../../assets/img/invitaciones/isaiylupita/img3323.webp"
import img7 from "../../assets/img/invitaciones/isaiylupita/dsc0100.webp"
import img8 from "../../assets/img/invitaciones/isaiylupita/dsc0001.webp"
import img9 from "../../assets/img/invitaciones/isaiylupita/dsc0183.webp"
import iglesia from "../../assets/img/invitaciones/isaiylupita/iglesia.png"
import salon from "../../assets/img/invitaciones/isaiylupita/salon.png"
import vestido2 from "../../assets/img/invitaciones/isaiylupita/vestido2.png"
import traje from "../../assets/img/invitaciones/isaiylupita/traje.png"
import regalo from "../../assets/img/invitaciones/isaiylupita/regalo.png"
import audio from "../../assets/audio/napoleoneres.mp3"
import sello from "../../assets/img/invitaciones/isaiylupita/sellolacre.png"

import 'swiper/css';
import 'swiper/css/autoplay';
import { clamp } from "motion";

export default function IsaiLupita () {
    const targetDate = new Date("2026-08-29T00:00:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const swiperRef = useRef(null);
    const audioRef = useRef(null)
    const [overlayVisible, setOverlayVisible] = useState(true)
    const containerRef = useRef(null)
    const innerBgRef = useRef(null)
    const [isContainerOpen, setContainerOpen] = useState(false)
    const [isInnerOpen, setInnerOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            clearInterval(interval);
            return;
        }

        setTimeLeft({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        });
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        const audio = audioRef.current

        const handleVisibilityChange = () => {
            if (!audio) return

            if (document.hidden) {
                audio.pause()
                setIsPlaying(false)
            } else {
                audio.play().catch(() => {})
                setIsPlaying(true)
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const abrirInvitacion = () => {
        setContainerOpen(true)

        setTimeout(() => setInnerOpen(true), 300)

        setTimeout(() => {
            setOverlayVisible(false)
            setIsPlaying(true)
            const audio = audioRef.current
            audio.muted = false
            audio.play().catch((err) => console.log("No se pudo reproducir audio:", err))
        }, 1300)
    };

    const { days, hours, minutes, seconds } = timeLeft;

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (!audio) return

        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play().catch(() => {})
            setIsPlaying(true)
        }
    }

    return (
        <>
        <main>
            <audio ref={audioRef} src={audio} loop hidden />

            {overlayVisible && (
                <div className="full_screen bg_p3 grid_center">
                    <div
                        ref={containerRef}
                        className={`invitation_container d-flex justify-content-center align-items-center ${isContainerOpen ? 'open' : ''}`}
                    >
                        <div
                            ref={innerBgRef}
                            className={`inner_background ${isInnerOpen ? 'open' : ''}`}
                        ></div>
                        <div className="position-relative text-center z-2">
                            <h2 className="invitation_title font_great_vibes color_p4">Isaí y Lupita</h2>
                            <p className="text-white">Haz clic para abrir tu invitación</p>
                            <button className="button_invitation" onClick={abrirInvitacion}>
                                <img src={sello} alt="Sello Isai y Lupita" className="img_invitation_seal" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {!overlayVisible && (
                <>
                    <button className="sound_button z_4 grid-center" onClick={toggleAudio}>
                    <div className={`sound_equalizer ${isPlaying ? "playing" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </button>
                    <section className="section_hero" style={{backgroundImage: `url(${imgPrincipal})`}}>
                        <div className="hero_content position-relative d-flex flex-column">
                            <div className="hero_title_container text-center">
                                <h1 className="hero_title font_great_vibes d-inline-block mb-0">Nuestra Boda</h1>
                            </div>
                            <div className="text-center">
                                <h2 className="hero_names font_lustria">Isaí y Lupita</h2>
                                <div className="hero_quote">
                                    <p className="hero_quote_text font_lustria text-white mb-0">"Lo que se cuida y se pone en manos de Dios, dura toda la vida"</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="section_general_title_container">
                            <h3 className="section_title_green text-center font_great_vibes">Save the date</h3>
                        </div>
                        <div className="d-flex flex-column gap_2">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src={flor1} alt="Decoración flor" className="img_flower" />
                                <div className="text-center">
                                    <p className="fs_4">Agosto</p>
                                    <p className="date_day fw-bolder">29</p>
                                    <p className="fs_4 mb-0">2026</p>
                                </div>
                                <img src={flor1} alt="Decoración flor" className="img_flower flip_horizontal" />
                            </div>
                            <div>
                                <div className="d-flex flex-column gap_2">
                                    <div className="counter_container">
                                        <div className="row text-center fw-bolder">
                                            <div className="col-3">
                                                <span className="counter_number">
                                                    {days}
                                                </span>
                                            </div>
                                            <div className="col-3">
                                                <span className="counter_number">
                                                    {hours}
                                                </span>
                                            </div>
                                            <div className="col-3">
                                                <span className="counter_number">
                                                    {minutes}
                                                </span>
                                            </div>
                                            <div className="col-3">
                                                <span className="counter_number">
                                                    {seconds}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{padding: "0px clamp(1rem, 3vw, 2rem)"}}>
                                        <div className="row">
                                            <div className="col-3">
                                                <span className="counter_label d-block text-center">Días</span>
                                            </div>
                                            <div className="col-3">
                                                <span className="counter_label d-block text-center">Horas</span>
                                            </div>
                                            <div className="col-3">
                                                <span className="counter_label d-block text-center">Minutos</span>
                                            </div>
                                            <div className="col-3">
                                                <span className="counter_label d-block text-center">Segundos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>                 
                            </div>
                        </div>
                    </section>
                    <section className="section_photo">
                        <img src={img2} alt="Foto pareja" className="w-100" />
                        <div className="section_photo_overlay">
                            <div className="photo_section_card_blur photo_frase_container">
                                <div className="photo_card_blur">
                                    <p className="position-relative text-center color_p1">¡Ha llegado el momento de unir nuestras vidas en matrimonio y queremos que estés presente en este día tan especial que tanto hemos soñado!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_decoration position-relative">
                        <div className="card_border border_p4">
                            <div className="card_body_pb_deco">
                                <div className="section_decoration_title_container text-center">
                                    <div className="card_title_deco position-relative">
                                        <h3 className="section_title font_great_vibes color_p4 mb-0">Con la bendición de Dios y de nuestros padres</h3>
                                    </div>
                                </div>
                                <section className="d-flex flex-column gap_7">
                                    <article className="d-flex flex-column gap_4 text-center text-white">
                                        <div className="position-relative">
                                            <p className="position-relative mb-0 z-1">Padres del novio</p>
                                            <div className="subtitle_deco_container">
                                                <img src={zapato} alt="Decoración" className="img_shoes" />
                                            </div>
                                        </div>
                                        <div className="position-relative">
                                            <p className="mb-0">Ernesto Peña Miranda</p>
                                            <p>Socorro Pérez Reyes</p>
                                        </div>
                                    </article>
                                    <article className="d-flex flex-column gap_4 text-center text-white">
                                        <div className="position-relative">
                                            <p className="position-relative mb-0 z-1">Padres de la novia</p>
                                            <div className="subtitle_deco_container">
                                                <img src={vestido} alt="Decoración" className="img_dress" />
                                            </div>
                                        </div>
                                        <div className="position-relative">
                                            <p className="mb-0">Juan Angeles Duran</p>
                                            <p>Timotea Marcos Flores</p>
                                        </div>
                                    </article>
                                </section>
                            </div>                            
                        </div>
                        <div className="flowers_separator_container position-absolute pe-none z-3">
                            <img src={flores} alt="Separador flores" />
                        </div> 
                    </section>
                    <section className="section_album">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                swiper.autoplay.start();
                            }}
                            spaceBetween={0}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            onInit={(swiper) => swiper.autoplay.start()}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide lazy="true">
                                <img src={img3} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide lazy="true">
                                <img src={img4} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide lazy="true">
                                <img src={img5} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide lazy="true">
                                <img src={img6} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide lazy="true">
                                <img src={img7} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide lazy="true">
                                <img src={img8} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide lazy="true">
                                <img src={img9} alt="" className="w-100" loading="lazy" />
                            </SwiperSlide>
                        </Swiper>                        
                    </section>
                    <section className="section position-relative">
                        <img src={iglesia} alt="" className="section_bg_img" />
                        <div className="section_general_title_container position-relative">
                            <h3 className="section_title_green text-center font_great_vibes">Ceremonia religiosa</h3>
                        </div>
                        <section className="position-relative text-center">
                            <article>
                                <p className="mb-0">Iglesia católica</p>
                                <p className="fw-bolder fs_4">Jesús Nazareno</p>
                            </article>
                            <article>
                                <p className="mb-0">Jocotitlán, Estado de México</p>
                                <p className="fw-bolder fs_4">13:00 HRS</p>
                            </article>
                        </section>
                        <div className="position-relative d-flex justify-content-center">
                            <a href="https://www.google.com/maps/place/Iglesia+Jesus+Nazareno/@19.7107036,-99.7879141,17z/data=!3m1!4b1!4m6!3m5!1s0x85d25dbeb19eb7e9:0x6d40fd1a4c63e07f!8m2!3d19.7107036!4d-99.7853392!16s%2Fg%2F11b6bv1zng?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="button_general">Ver ubicación en Google Maps</a>
                        </div>
                    </section>
                    <section className="section_decoration position-relative">
                        <div class="card_border border_p4">
                            <div className="card_body_pb_deco">             
                                <div className="section_decoration_title_container text-center">
                                    <div className="card_title_deco position-relative">
                                        <h3 className="section_title font_great_vibes color_p4 mb-0">Nuestros padrinos</h3>
                                    </div>
                                </div>      
                                <article className="text-white text-center">
                                    <p className="mb-0">Jesús Rodríguez Castillo</p>
                                    <p>Elia Peña Pérez</p>
                                </article>
                            </div>  
                        </div>
                        <div className="flowers_separator_container position-absolute">
                            <img src={flores} alt="Separador flores" />
                        </div>
                    </section>
                    <section className="section position-relative">
                        <img src={salon} alt="" className="section_bg_img" />
                        <div className="section_general_title_container position-relative">
                            <h3 className="section_title_green text-center font_great_vibes">Ceremonia civil y recepción</h3>
                        </div>
                        <section className="position-relative text-center">
                            <article>
                                <p className="mb-0">Salón</p>
                                <p className="fw-bolder fs_4" translate="no">"Faty"</p>
                            </article>
                            <article>
                                <p className="mb-0">Jocotitlán, Estado de México</p>
                                <p className="fw-bolder fs_4">15:00 HRS</p>
                            </article>
                        </section>
                        <div className="position-relative d-flex justify-content-center">
                            <a href="https://www.google.com/maps/place/Salon+Jard%C3%ADn+FATY/@19.7017385,-99.7923488,17z/data=!3m1!4b1!4m6!3m5!1s0x85d25d8659b32aa3:0x4fedc4b3fc0f40ff!8m2!3d19.7017335!4d-99.7897739!16s%2Fg%2F11j2vg2vc7?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="button_general">Ver ubicación en Google Maps</a>
                        </div>
                    </section>
                    <section className="section_decoration position-relative">
                        <div className="card_border border_p4">
                            <div className="card_body_pb_deco">
                                <div className="section_decoration_title_container text-center">
                                    <div className="card_title_deco position-relative">
                                        <h3 className="section_title font_great_vibes color_p4 mb-0">Itinerario</h3>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="row align-items-center position-relative">
                                        <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                            <p className="mb-0 text-white text-end">13:00 PM</p>
                                        </div>
                                        <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                            <div className="timeline_circle_container d-flex justify-content-center">
                                                <span className="timeline_circle d-block"></span>
                                            </div>
                                        </div>
                                        <div className="col-4 py-2 d-flex align-items-center">
                                            <p className="color_p4 mb-0">Ceremonia religiosa</p>
                                        </div>
                                    </div>       
                                    <div className="row align-items-center position-relative">
                                        <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                            <p className="color_p4 mb-0 text-end">Ceremonia civil</p>
                                        </div>
                                        <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                            <div className="timeline_circle_container d-flex justify-content-center">
                                                <span className="timeline_circle d-block"></span>
                                            </div>
                                        </div>
                                        <div className="col-4 py-2 d-flex align-items-center">
                                            <p className="mb-0 text-white">15:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center position-relative">
                                        <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                            <p className="mb-0 text-white text-end">16:00 PM</p>
                                        </div>
                                        <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                            <div className="timeline_circle_container d-flex justify-content-center">
                                                <span className="timeline_circle d-block"></span>
                                            </div>
                                        </div>
                                        <div className="col-4 py-2 d-flex align-items-center">
                                            <p className="color_p4 mb-0">Recepción</p>
                                        </div>
                                    </div>  
                                    <div className="row align-items-center position-relative">
                                        <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                            <p className="color_p4 mb-0 text-end">Comida</p>
                                        </div>
                                        <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                            <div className="timeline_circle_container d-flex justify-content-center">
                                                <span className="timeline_circle d-block"></span>
                                            </div>
                                        </div>
                                        <div className="col-4 py-2 d-flex align-items-center">
                                            <p className="mb-0 text-white">16:20 PM</p>
                                        </div>
                                    </div>   
                                    <div className="row align-items-center position-relative">
                                        <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                            <p className="mb-0 text-white text-end">18:00 PM</p>
                                        </div>
                                        <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                            <div className="timeline_circle_container d-flex justify-content-center">
                                                <span className="timeline_circle d-block"></span>
                                            </div>
                                        </div>
                                        <div className="col-4 py-2 d-flex align-items-center">
                                            <p className="color_p4 mb-0">Momento especial de los novios</p>
                                        </div>
                                    </div> 
                                    <div className="row align-items-center position-relative">
                                        <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                            <p className="color_p4 mb-0 text-end">Disfruta, baila, ríe y canta con nosotros</p>
                                        </div>
                                        <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                            <div className="timeline_circle_container d-flex justify-content-center">
                                                <span className="timeline_circle d-block"></span>
                                            </div>
                                        </div>
                                        <div className="col-4 py-2 d-flex align-items-center">
                                            <p className="mb-0 text-white">18:30 - 24:00 HRS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flowers_separator_container position-absolute">
                            <img src={flores} alt="Separador flores" />
                        </div>
                    </section>
                    <section className="section">
                        <div className="section_general_title_container">
                            <h3 className="section_title_green text-center font_great_vibes">Código de vestimenta</h3>
                        </div>
                        <div className="d-flex flex-column gap_3">
                            <section className="d-flex justify-content-center gap_4">
                                <article>
                                    <div className="d-flex justify-content-center align-items-center" style={{background: "#BAC095", borderRadius: "12px", height: "clamp(8rem, 22vw, 16rem)", width: "clamp(8rem, 22vw, 16rem)"}}>
                                        <img src={vestido2} alt="" className="dress_code_img"/>
                                    </div>
                                </article>
                                <article>
                                    <div className="d-flex justify-content-center align-items-center" style={{background: "#D9D9D9", borderRadius: "12px", height: "clamp(8rem, 22vw, 16rem)", width: "clamp(8rem, 22vw, 16rem)"}}>
                                        <img src={traje} alt="" className="dress_code_img" />
                                    </div>
                                </article>
                            </section>
                            <div className="text-center">
                                <p>Formal</p>
                                <p className="mb-0">¡Prepárense para una boda llena de colores!</p>
                                <p className="mb-0">El color blanco queda reservado para la novia</p>
                            </div> 
                        </div>                       
                    </section>
                    <section className="section_decoration position-relative">
                        <div className="card_border border_p4">
                            <div className="card_body_pb_deco">
                                <div className="section_decoration_title_container text-center">
                                    <div className="card_title_deco position-relative">
                                        <h3 className="section_title font_great_vibes color_p4 mb-0">Regalos</h3>
                                    </div>
                                </div>
                                <div className="text-white text-center position-relative">
                                    <p className="position-relative z-1">(Lluvia de sobres)</p>
                                    <div className="card_body">
                                        <p className="position-relative z-1">Nos sentimos bendecidos de tener familiares y amigos como tú, si estás pensando en un regalo, cualquier contribución económica que puedas hacer nos ayudará, tu generosidad será recordada con gratitud.</p>
                                    </div>
                                    <div className="position-absolute" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "0"}}>
                                        <img src={regalo} alt="Decoración regalo" className="img_gift opacity-25" />
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="flowers_separator_container position-absolute">
                            <img src={flores} alt="Separador flores" />
                        </div>       
                    </section>
                    <section className="section">
                        <WeddingForm />
                    </section>
                </>
            )}
        </main>          
        </>
    )
}