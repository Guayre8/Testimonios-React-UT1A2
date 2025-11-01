import { useState } from 'react'
import Testimonio from "./Testimonio";

function App() {

  // Para crear este Array utilicé IA para agilizar el proceso ya que son datos de prueba
const testimonios = [
  {
    id: 1,
    nombre: "Carla Marrero",
    pais: "Suecia",
    profesion: "Ingeniera en Software",
    imagen: "../../public/images/persona1.jpg",
    testimonio: "React me ha permitido crear interfaces interactivas de manera sencilla y ordenada. Su estructura por componentes me encanta."
  },
  {
    id: 2,
    nombre: "Luis Fernández",
    pais: "España",
    profesion: "Desarrollador Frontend",
    imagen: "../../public/images/persona2.jpg",
    testimonio: "Con React he aprendido a organizar mejor mi código y a pensar en componentes reutilizables."
  },
  {
    id: 3,
    nombre: "Sofía Martín",
    pais: "México",
    profesion: "Diseñadora Web",
    imagen: "../../public/images/persona3.jpg",
    testimonio: "Me gusta cómo React permite actualizar la vista automáticamente cuando cambia el estado."
  },
  {
    id: 4,
    nombre: "Andrés Pérez",
    pais: "Argentina",
    profesion: "Estudiante de Programación",
    imagen: "../../public/images/persona4.jpg",
    testimonio: "React me pareció difícil al principio, pero con práctica se vuelve muy intuitivo y potente."
  }
];

  return (

    // Map que reccore el array de testimonios y renderiza un componente Testimonio por cada uno que hay dentro del array
    <div style={{ justifyContent: "center", padding: "20px" }}>
      {testimonios.map((t) => (
        <Testimonio
          key={t.id}
          nombre={t.nombre}
          pais={t.pais}
          profesion={t.profesion}
          imagen={t.imagen}
          testimonio={t.testimonio}
        />
      ))}
    </div>
  );
}

export default App;

