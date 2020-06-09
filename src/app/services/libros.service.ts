import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [];
  constructor() {
    this.libros = [
      {
        autor: 'Stephen King',
        desc: 'El mal puede tener muchas caras...  incluso podría tener la tuya. Tras el espectacular éxito de la Trilogía Bill Hodges (Mr. Mercedes, Quien pierde paga y Fin de guardia) King nos sorprende con un thriller tan escalofriante como original. Un niño de once años ha sido brutalmente asesinado. Todas las pruebas apuntan a uno de los ciudadanos más queridos de Flint City: Terry Maitland, entrenador en la liga infantil, profesor de literatura, marido ejemplar y padre de dos niñas. El detective Ralph Anderson ordena su detención. Maitland tiene una coartada firme que demuestra que estaba en otra ciudad cuando se cometió el crimen, pero las pruebas de ADN encontradas en el lugar de los hechos confirman que es culpable. Ante la justicia y la opinión pública, Terry Maitland es un asesino y el caso está resuelto. Pero el detective Anderson no está satisfecho.',
        nombre: 'El Visitante',
        precio: 12600,
        img: 'assets/img/visitante.jpg'
      },
      {
        autor: 'George R. R. Martín',
        desc: 'Magia, misterio, intriga, romance y aventura inundan estas páginas y nos transportan a un mundo que nunca hemos imaginado En un tiempo olvidado, muchísimos siglos atrás, un fenómeno inexplicable ha trastocado el ritmo natural de las estaciones. En el mundo de los Siete Reinos, donde los veranos pueden durar décadas y los inviernos una vida entera, los problemas siempre se ciernen sobre aquellos supeditados a condiciones climáticas radicales e inesperadas. El frío regresa, y en las inmensidades desiertas y congeladas del norte de Winterfell, fuerzas siniestras y supernaturales se concentran más allá del majestuoso Muro del Norte, un muro de hielo de decenas de metros de altura y espesor que cruza todo el continente de este a oeste y que protege a los reinos civilizados de los pueblos bárbaros. Los guardianes del Muro son los Hermanos Negros de la Guardia de la Noche. Justo al centro del conflicto se encuentran los Stark de Winterfell, una familia tan severa e implacable como la tierra que los ha visto nacer. Un enigmático grupo de guerreros carga espadas de un metal jamás visto por el hombre; una tribu de feroces animales salvajes arrastran a los hombres hasta la locura; un joven príncipe dragón entrega a su hermana a cambio de su trono perdido; y una mujer determinada decide emprender la más peligrosa de las jornadas.',
        nombre: 'Juego de Tronos (Cancion de Hielo y Fuego #1)',
        precio: 10200,
        img: 'assets/img/juegoDeTronos.jpg'
      },
      {
        autor: 'Carlo Rovelli',
        desc: '¿Qué es el tiempo? ¿Hasta qué punto lo entendemos? ¿Existimos en el tiempo o el tiempo existe en nosotros? ¿Por qué recordamos el pasado y no el futuro? ¿Qué quiere decir que el tiempo «corre»? ¿El pasado está cerrado y el futuro abierto? ¿El tiempo es lineal? ¿Existe de verdad?... Carlo Rovelli, físico cuyo anterior libro –Siete breves lecciones de física, publicado en esta colección– se tradujo a cuarenta idiomas y se convirtió en un sorprendente bestseller internacional, responde a estas y otras preguntas. El tiempo es un misterio no solo para los profanos, sino también para los físicos, que a lo largo de la historia han ido modificando su percepción de él: de Newton a Einstein y a la gravedad cuántica de bucles, en la que el autor es experto. Rovelli aborda el tiempo y sus enigmas con una combinación única de rigor, capacidad divulgativa y bagaje humanístico que le permite incorporar al texto la mitología hindú, el Mahābhārata y a Guillermo de Ockham, Proust, Rilke... El libro se divide en tres partes: la primera aborda lo que a día de hoy sabe la física moderna sobre el tiempo y los cambios radicales que se han producido en torno a algunos temas que se daban por cerrados; la segunda se centra en la gravedad cuántica y aborda la idea de un mundo sin tiempo, mientras que la tercera explora el nacimiento del tiempo y el modo en que lo experimentamos. El resultado es un ensayo esclarecedor y apasionante, que nos da claves –científicas, pero también filosóficas– para entender el misterio del tiempo, un tema central de la física y de nuestra relación con la vida y el universo.',
        nombre: 'El Orden del Tiempo',
        precio: 12410,
        img: 'assets/img/ordenDelTiempo.jpg'
      },
      {
        autor: 'Glenn Cooper',
        desc: 'Un ex agente del FBI, que participó en uno de los descubrimiento más sorprendentes de la humanidad, el hallazgo de una biblioteca medieval con un legado de vida y muerte, debe ahora encontrar un libro perdido: un ejemplar de la biblioteca que contiene las claves del inquietante futuro que nos aguarda.   MÁS DE 3.000.000 DE LECTORES YA SON ADICTOS A LOS THRILLERS DE GLENN COOPER ¿QUÉ HARÍAS SI SUPIERAS LA FECHA DEL FIN DEL MUNDO? Isla de Wight, 1334. Al ver próxima su muerte, el abad Felix, superior de la abadía de Vectis, deja constancia en una epístola de un secreto terrorífico y de los extraños acontecimientos relacionados con una orden muy singular: la Orden de los Nombres. Los monjes clarividentes que la componen han dedicado toda su vida a consignar sin descanso en unos libros la fecha de nacimiento y muerte de toda la humanidad... Nueva York, en la actualidad. Un hombre a las puertas de la muerte encarga a Will Piper la búsqueda de un antiguo y enigmático libro.',
        nombre: 'El Libro de las Almas (Biblioteca de los Muertos 2)',
        precio: 17310,
        img: 'assets/img/libroDelAlma.jpg'
      },
    ];
  }

  getAllBooks = (): Libro[] => {
    return this.libros;
  }

  getBook = (idx: number): Libro => {
    return this.libros[idx];
  }
  getAllBookByName = (name: string): Libro[] => {
    name = name.toLowerCase();
    const libros: Libro[] = [];

    for (let i = 0; i < this.libros.length; i++) {
      const libro = this.libros[i];
      const nombre = libro.nombre.toLowerCase();
      if (nombre.indexOf(name) >= 0) {
        libro.idx = i;
        libros.push(libro);
      }
    }
    return libros;
  }
}

export interface Libro {
  autor: string;
  desc: string;
  nombre: string;
  precio: number;
  img: string;
  idx?: number;
}
