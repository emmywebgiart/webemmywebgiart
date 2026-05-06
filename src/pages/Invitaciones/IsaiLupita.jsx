import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import WeddingForm from "../../components/WeddingForm";
import imgPrincipal from "../../assets/img/invitaciones/isaiylupita/IMG_3356.jpg"
import flor1 from "../../assets/img/invitaciones/isaiylupita/flor1.png"
import img2 from "../../assets/img/invitaciones/isaiylupita/DSC_0118.JPG"
import zapato from "../../assets/img/invitaciones/isaiylupita/zapato.png"
import vestido from "../../assets/img/invitaciones/isaiylupita/vestido.png"
import flores from "../../assets/img/invitaciones/isaiylupita/flores.png"
import img3 from "../../assets/img/invitaciones/isaiylupita/DSC_0127.JPG"
import img4 from "../../assets/img/invitaciones/isaiylupita/DSC_0207.JPG"
import img5 from "../../assets/img/invitaciones/isaiylupita/DSC_0264.JPG"
import img6 from "../../assets/img/invitaciones/isaiylupita/IMG_3323.JPG"
import img7 from "../../assets/img/invitaciones/isaiylupita/DSC_0100.JPG"
import iglesia from "../../assets/img/invitaciones/isaiylupita/iglesia.png"
import salon from "../../assets/img/invitaciones/isaiylupita/salon.png"
import vestido2 from "../../assets/img/invitaciones/isaiylupita/vestido2.png"
import traje from "../../assets/img/invitaciones/isaiylupita/traje.png"
import regalo from "../../assets/img/invitaciones/isaiylupita/regalo.png"
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

export default function IsaiLupita () {
    const targetDate = new Date("2026-08-29T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const swiperRef = useRef(null);

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

  const { days, hours, minutes, seconds } = timeLeft;

    return (
        <>
        <main>
            <section className="section_hero" style={{background: `url(${imgPrincipal})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundPosition: "center"}}>
                {/* <img src={imgPrincipal} alt="" style={{width: "100%"}} /> */}
                <div className="position-relative d-flex flex-column gap-5">
                    <div className="text-center" style={{padding: "32px", paddingTop: "64px"}}>
                        <h1 className="hero_title font_great_vibes mb-0 text-center d-inline-block">Nuestra Boda</h1>
                    </div>
                    <div className="text-center">
                        <h2 className="hero_names font_lustria" style={{fontSize: "4rem"}}>Isaí y Lupita</h2>
                        <div style={{padding: "0 96px"}}>
                            <p className="font_lustria text-white" style={{fontSize: "0.75rem"}}>"Lo que se cuida y se pone en manos de Dios, dura toda la vida"</p>
                        </div>
                    </div>
                </div>              
            </section>
            <section style={{padding: "16px", paddingBottom: "48px"}}>
                <div style={{padding: "32px 0"}}>
                    <h3 className="text-center font_great_vibes" style={{fontSize: "2.5rem", color: "#437057"}}>Save the date</h3>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <img src={flor1} alt="" style={{width: "133px"}} />
                    <div className="text-center">
                        <p style={{fontSize: "24px"}}>Agosto</p>
                        <p style={{fontSize: "4rem", fontWeight: "bolder"}}>29</p>
                        <p style={{fontSize: "24px"}}>2026</p>
                    </div>
                    <img src={flor1} alt="" style={{width: "133px", transform: "scaleX(-1)"}} />
                </div>
                <div>
                    {/* <div style={{background: "#778873", borderRadius: "32px", padding: "16px"}}>                   
                        <div className="row">
                            <div className="col-3">
                                <span className="d-block text-center" style={{fontSize: "2rem", color: "#D4DE95"}}>24</span>
                            </div>
                            <div className="col-3">
                                <span className="d-block text-center" style={{fontSize: "2rem", color: "#D4DE95"}}>12</span>
                            </div>
                            <div className="col-3">
                                <span className="d-block text-center" style={{fontSize: "2rem", color: "#D4DE95"}}>24</span>
                            </div>
                            <div className="col-3">
                                <span className="d-block text-center" style={{fontSize: "2rem", color: "#D4DE95"}}>24</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="d-flex flex-column gap-2">                  
                        <div
                        style={{
                            background: "#778873",
                            borderRadius: "32px",
                            padding: "16px",
                        }}
                        >
                            <div className="row text-center fw-bolder">
                                <div className="col-3">
                                    <span style={{ fontSize: "2rem", color: "#D4DE95" }}>
                                        {days}
                                    </span>
                                </div>

                                <div className="col-3">
                                    <span style={{ fontSize: "2rem", color: "#D4DE95" }}>
                                        {hours}
                                    </span>
                                </div>

                                <div className="col-3">
                                    <span style={{ fontSize: "2rem", color: "#D4DE95" }}>
                                        {minutes}
                                    </span>
                                </div>

                                <div className="col-3">
                                    <span style={{ fontSize: "2rem", color: "#D4DE95" }}>
                                        {seconds}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style={{textTransform: "uppercase", fontSize: "0.75rem", padding: "0px 16px"}}>
                            <div className="row">
                                <div className="col-3">
                                    <span className="d-block text-center">Días</span>
                                </div>
                                <div className="col-3">
                                    <span className="d-block text-center">Horas</span>
                                </div>
                                <div className="col-3">
                                    <span className="d-block text-center">Minutos</span>
                                </div>
                                <div className="col-3">
                                    <span className="d-block text-center">Segundos</span>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>
            </section>
            <section className="section_photo">
                <img src={img2} alt="" style={{width: "100%"}} />
                <div style={{position: "absolute", top: 0, padding: 16, paddingTop: 0, zIndex: 1}}>
                    <div className="photo_frase_container" style={{background: "rgb(255, 255, 255, .5)", backdropFilter: "blur(15px)", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px"}}>
                        <div style={{padding: 16, paddingLeft: 48, paddingRight: 48}}>
                            <p className="text-center" style={{color: "#3D4127"}}>¡Ha llegado el momento de unir nuestras vidas en matrimonio y queremos que estés presente en este día tan especial que tanto hemos soñado!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="position-relative" style={{background: "#778873", padding: "16px", paddingBottom: "144px"}}>
                <div style={{padding: "32px 0"}}>
                    <h3 className="font_great_vibes text-center" style={{color: "#D4DE95", fontSize: "2.5rem"}}>Con la bendición de Dios y de nuestros padres</h3>
                </div>
                <section className="d-flex flex-column gap-5">
                    <article className="d-flex flex-column gap-4 text-center text-white">
                        <div className="position-relative">
                            <p className="mb-0">Padres del novio</p>
                            <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                                <img src={zapato} alt="" style={{width: "121px", opacity: ".2"}} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-0">Ernesto Peña Miranda</p>
                            <p>Socorro Pérez Reyes</p>
                        </div>
                    </article>
                    <article className="d-flex flex-column gap-4 text-center text-white">
                        <div className="position-relative">
                            <p className="mb-0">Padres de la novia</p>
                            <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                                <img src={vestido} alt="" style={{width: "82px", opacity: ".2"}} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-0">Juan Angeles Duran</p>
                            <p>Timotea Marcos Flores</p>
                        </div>
                    </article>
                </section>
                <div className="flowers_separator_container position-absolute" style={{zIndex: "3", pointerEvents: "none"}}>
                    <img src={flores} alt="Separador flores" />
                </div> 
            </section>
            <section className="section_album">
                {/* <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img3} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                </Swiper> */}
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
                    <SwiperSlide>
                        <img src={img3} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="" style={{width: "100%"}} />
                    </SwiperSlide>
                </Swiper>
                
            </section>
            <section className="position-relative" style={{padding: "16px", paddingBottom: "48px"}}>
                <img src={iglesia} alt="" style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute", opacity: ".2", left: 0, top: 0}} />
                <div className="position-relative" style={{padding: "32px 0"}}>
                    <h3 className="text-center font_great_vibes" style={{fontSize: "2.5rem", color: "#437057"}}>Ceremonia religiosa</h3>
                </div>
                <section className="position-relative text-center">
                    <article>
                        <p className="mb-0">Iglesia católica</p>
                        <p style={{fontSize: "1.5rem", fontWeight: "bolder"}}>Jesús Nazareno</p>
                    </article>
                    <article>
                        <p className="mb-0">Jocotitlán, Estado de México</p>
                        <p style={{fontSize: "1.5rem", fontWeight: "bolder"}}>13:00 HRS</p>
                    </article>
                </section>
                <div className="position-relative d-flex justify-content-center">
                    <a style={{background: "#D4DE95", color: "#2F5249", padding: "8px 16px", borderRadius: "0.75rem", textDecoration: "none"}} href="https://www.google.com/maps/place/Iglesia+Jesus+Nazareno/@19.7107036,-99.7879141,17z/data=!3m1!4b1!4m6!3m5!1s0x85d25dbeb19eb7e9:0x6d40fd1a4c63e07f!8m2!3d19.7107036!4d-99.7853392!16s%2Fg%2F11b6bv1zng?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Ver mapa</a>
                </div>
            </section>
            <section className="position-relative" style={{background: "#778873", padding: 16}}>
                <div style={{border: "1px solid #D4DE95", borderRadius: "1rem", paddingBottom: "144px"}}>     
                    <div className="section_title_container text-center" style={{padding: "32px 0"}}>
                        <div className="position-relative" style={{display: "inline-block", background: "#778873", padding: 8}}>
                            <h3 className="section_title font_great_vibes mb-0" style={{color: "#D4DE95"}}>Nuestros padrinos</h3>
                        </div>
                    </div>      
                    <article className="text-white text-center">
                        <p className="mb-0">Jesús Rodríguez Castillo</p>
                        <p>Elia Peña Pérez</p>
                    </article>
                </div>
                <div className="flowers_separator_container position-absolute">
                    <img src={flores} alt="Separador flores" />
                </div>
            </section>
            <section className="position-relative" style={{padding: "16px", paddingBottom: "48px"}}>
                <img src={salon} alt="" style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute", opacity: ".2", left: 0, top: 0}} />
                <div className="position-relative" style={{padding: "32px 0"}}>
                    <h3 className="text-center font_great_vibes" style={{fontSize: "2.5rem", color: "#437057"}}>Ceremonia civil y recepción</h3>
                </div>
                <section className="position-relative text-center">
                    <article>
                        <p className="mb-0">Salón</p>
                        <p style={{fontSize: "1.5rem", fontWeight: "bolder"}}>"Fati"</p>
                    </article>
                    <article>
                        <p className="mb-0">Jocotitlán, Estado de México</p>
                        <p style={{fontSize: "1.5rem", fontWeight: "bolder"}}>15:00 HRS</p>
                    </article>
                </section>
                <div className="position-relative d-flex justify-content-center">
                    <a style={{background: "#D4DE95", color: "#2F5249", padding: "8px 16px", borderRadius: "0.75rem", textDecoration: "none"}} href="https://www.google.com/maps/place/Salon+Jard%C3%ADn+FATY/@19.7017385,-99.7923488,17z/data=!3m1!4b1!4m6!3m5!1s0x85d25d8659b32aa3:0x4fedc4b3fc0f40ff!8m2!3d19.7017335!4d-99.7897739!16s%2Fg%2F11j2vg2vc7?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Ver mapa</a>
                </div>
            </section>
            <section className="position-relative" style={{background: "#778873", padding: 16}}>
                <div style={{border: "1px solid #D4DE95", borderRadius: "1rem", paddingBottom: "144px"}}>
                    <div className="section_title_container text-center" style={{padding: "32px 0"}}>
                        <div className="position-relative" style={{display: "inline-block", background: "#778873", padding: 8}}>
                            <h3 className="section_title font_great_vibes mb-0" style={{color: "#D4DE95"}}>Itinerario</h3>
                        </div>
                    </div>
                    <div style={{padding: "1rem"}}>                   
                        <div className="row align-items-center position-relative">
                            <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                <p className="mb-0 text-white text-end">13:00 PM</p>
                            </div>
                            <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                <div className="timeline_circle_container d-flex justify-content-center">
                                    <span className="d-block" style={{height: "32px", width: "32px", background: "#fff", borderRadius: "50%"}}></span>
                                </div>
                            </div>
                            <div className="col-4 py-2 d-flex align-items-center">
                                <p className="mb-0" style={{color: "#D4DE95"}}>Ceremonia religiosa</p>
                            </div>
                        </div>       
                        <div className="row align-items-center position-relative">
                            <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                <p className="mb-0 text-end" style={{color: "#D4DE95"}}>Ceremonia civil</p>
                            </div>
                            <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                <div className="timeline_circle_container d-flex justify-content-center">
                                    <span className="d-block" style={{height: "32px", width: "32px", background: "#fff", borderRadius: "50%"}}></span>
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
                                    <span className="d-block" style={{height: "32px", width: "32px", background: "#fff", borderRadius: "50%"}}></span>
                                </div>
                            </div>
                            <div className="col-4 py-2 d-flex align-items-center">
                                <p className="mb-0" style={{color: "#D4DE95"}}>Recepción</p>
                            </div>
                        </div>  
                        <div className="row align-items-center position-relative">
                            <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                <p className="mb-0 text-end" style={{color: "#D4DE95"}}>Comida</p>
                            </div>
                            <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                <div className="timeline_circle_container d-flex justify-content-center">
                                    <span className="d-block" style={{height: "32px", width: "32px", background: "#fff", borderRadius: "50%"}}></span>
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
                                    <span className="d-block" style={{height: "32px", width: "32px", background: "#fff", borderRadius: "50%"}}></span>
                                </div>
                            </div>
                            <div className="col-4 py-2 d-flex align-items-center">
                                <p className="mb-0" style={{color: "#D4DE95"}}>Momento especial de los novios</p>
                            </div>
                        </div> 
                        <div className="row align-items-center position-relative">
                            <div className="col-4 py-2 d-flex justify-content-end align-items-center">
                                <p className="mb-0 text-end" style={{color: "#D4DE95"}}>Disfruta, baila, ríe y canta con nosotros</p>
                            </div>
                            <div className="col-4 py-2 d-flex justify-content-center align-items-center">
                                <div className="timeline_circle_container d-flex justify-content-center">
                                    <span className="d-block" style={{height: "32px", width: "32px", background: "#fff", borderRadius: "50%"}}></span>
                                </div>
                            </div>
                            <div className="col-4 py-2 d-flex align-items-center">
                                <p className="mb-0 text-white">18:30 - 24:00 HRS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flowers_separator_container position-absolute">
                    <img src={flores} alt="Separador flores" />
                </div>
            </section>
            <section style={{padding: "16px", paddingBottom: "48px"}}>
                <div style={{padding: "32px 0"}}>
                    <h3 className="text-center font_great_vibes" style={{fontSize: "2.5rem", color: "#437057"}}>Código de vestimenta</h3>
                </div>
                <div className="d-flex flex-column gap-3">
                    <section className="d-flex justify-content-center gap-4">
                        <article>
                            <div className="d-flex justify-content-center align-items-center" style={{background: "#BAC095", borderRadius: "12px", height: "128px", width: "128px"}}>
                                <img src={vestido2} alt="" style={{height: "80px"}} />
                            </div>
                        </article>
                        <article>
                            <div className="d-flex justify-content-center align-items-center" style={{background: "#D9D9D9", borderRadius: "12px", height: "128px", width: "128px"}}>
                                <img src={traje} alt="" style={{height: "80px"}} />
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
            <section className="position-relative" style={{background: "#778873", padding: 16}}>
                <div style={{border: "1px solid #D4DE95", borderRadius: "1rem", paddingBottom: "144px"}}>
                    <div className="section_title_container text-center" style={{padding: "32px 0"}}>
                        <div className="position-relative" style={{display: "inline-block", background: "#778873", padding: 8}}>
                            <h3 className="section_title font_great_vibes mb-0" style={{color: "#D4DE95"}}>Regalos</h3>
                        </div>
                    </div> 
                    <div className="text-white text-center position-relative">
                        <p className="position-relative" style={{zIndex: "1"}}>(Lluvia de sobres)</p>
                        <div className="position-relative" style={{padding: "0 48px", zIndex: "1"}}>
                            <p>Nos sentimos bendecidos de tener familiares y amigos como tú, si estás pensando en un regalo, cualquier contribución económica que puedas hacer nos ayudará, tu generosidad será recordada con gratitud.</p>
                        </div>
                        <div className="position-absolute" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "0"}}>
                            <img src={regalo} alt="" style={{width: "252px", opacity: .2}} />
                        </div>                    
                    </div>
                </div> 
                <div className="flowers_separator_container position-absolute">
                    <img src={flores} alt="Separador flores" />
                </div>       
            </section>
            <section style={{padding: 48}}>
                <WeddingForm />
            </section>
        </main>          
        </>
    )
}