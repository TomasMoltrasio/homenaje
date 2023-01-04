import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function App() {
  return (
    <div className="h-max flex flex-col justify-start items-center bg-gray-900">
      <img
        src="escudo.png"
        alt="escudo"
        className="
        w-1/6
        h-1/6
        object-contain
        object-center
        mt-10
        mb-10
      "
      />
      <h3 className="text-white text-lg text-justify w-11/12 mb-4">
        Pedro Arsenio Billordo era médico cardiólogo, a cargo del Área de
        Crecimiento, Desarrollo y Nutrición del Club Los Tilos. Estaba casado
        con la comunicadora social Soledad Navarro, con quien tuvo a su única
        hija, Lupe. <br /> Integrante de la camada 80, comenzó a jugar al rugby
        y a hacer amigos en las divisiones infantiles del Club. Ya en juveniles,
        se destacó entre sus compañeros por su gran velocidad y forma física.{" "}
        <br /> En 2002, fue campeón de la URBA con la Menores de 22 entrenada
        por la Macha Gómez Cabrera, e integrada por las camadas 80, 81 y 82.
        Pedro fue el tryman del equipo. Al año siguiente arañó el debut en
        Primera. Jugó un tiempo más en plantel superior hasta su retiro
        definitivo. <br /> Ya recibido de médico y abocado al desarrollo
        profesional, continuó vinculado al deporte. Corrió maratones y carreras
        de montaña, en pruebas de alta exigencia física y mental. La
        autoexigencia era una constante en Pedro, que afloraba en todo lo que se
        propusiera. <br /> En los últimos años, impulsó el desarrollo del área
        de nutrición que él mismo había creado, con el objeto de “potenciar la
        actividad física y mejorar los hábitos alimenticios”. Su logro es el
        mejor legado para el Club que lo formó como la hermosa persona que fue.{" "}
        <br /> Pedro fue un luchador. Un resiliente. Una persona positiva, que
        siempre fue para adelante y que supo sobreponerse a momentos difíciles.
        Un profesional querido y respetado, y sobre todo, un buen amigo. <br />
      </h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-11/12 h-1/2"
      >
        <SwiperSlide>
          <img
            src="img1.jpeg"
            alt="Menores de 16"
            className="w-full h-full object-contain object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img2.jpeg"
            alt="Menores de 19"
            className="w-full h-full object-contain object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img3.jpeg"
            alt="Seven de Bahía Blanca"
            className="w-full h-full object-contain object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img4.jpeg"
            alt="Pedro, Sol y Lupe"
            className="w-full h-full object-contain object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
