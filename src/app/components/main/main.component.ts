import { Component } from '@angular/core';
import { aboutCard } from '../../models/about-card.model';
import { projectCard } from 'src/app/models/project-card.model';
import { hobbyCard } from 'src/app/models/hobby-card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  tarjetasAbout: aboutCard[] = [
    {
      icono: 'code',
      titulo: 'Desarrollador de Software',
      descripcion: `Actualmente, trabajo como desarrollador de software. Los lenguajes que más utilizo son Python, Java, Javascript, entre otros.
      Mis Framework's de desarrollo favoritos son Angular, Ionic, Node.js, etc`
    },

    {
      icono: 'computer',
      titulo: 'Entusiasta de Hardware',
      descripcion: `Llevo años familiarizándome con el mundo de los computadores y sus componentes.
      Me gusta mucho el trabajo de empresas como Nvidia o AMD, y trato de mantenerme siempre actualizado con respecto a componentes y sus gamas.
      Hasta ahora, he armado un ordenador de escritorio (el mío :D) y espero armar muchos más.`
    },

    {
      icono: 'music_note',
      titulo: 'Músico / Compositor',
      descripcion: `Desde pequeño, he sido un ferviente amante de la m&uacute;sica. A los dos tres años ya estaba escuchando los cd's de m&uacute;sica cl&aacute;sica
      de mis padres. A los diez años comenc&eacute; a tocar la guitarra de manera autodidacta, y actualmente toco tambi&eacute;n la bater&iacute;a, el bajo y un poco el piano.
      Formo parte de Fl&eacute;bil y de vez en cuando compongo y produzco temas de Ambient.`
    },

    {
      icono: 'insert_photo',
      titulo: 'Dibujante / Pintor',
      descripcion: `Otra de mis aficiones de infancia es dibujar.
      Hoy en d&iacute;a, disfruto del dibujo y la pintura, y trato de practicar todos los d&iacute;as y aprender nuevas t&eacute;cnicas.`
    }
  ];

  tarjetasProject: projectCard[] = [
    {
      icono: 'https://unpkg.com/css.gg@2.0.0/icons/css/code-slash.css',
      titulo: 'Landing Page para consumo de API de Youtube',
      enlace: 'https://davidcornejob.github.io/async-landing/'
    },

    {
      icono: 'https://unpkg.com/css.gg@2.0.0/icons/css/laptop.css',
      titulo: 'Landing Page para consumo de API de Spotify',
      enlace: 'https://davidcornejob.github.io/landing-spotify-async/'
    },

    {
      icono: 'https://unpkg.com/css.gg@2.0.0/icons/css/music.css',
      titulo: 'Proyecto C',
      enlace: ''
    },

    {
      icono: 'https://unpkg.com/css.gg@2.0.0/icons/css/pen.css',
      titulo: 'Proyecto D',
      enlace: ''
    }
  ]

  tarjetasHobbies: hobbyCard[] = [
    {
      icono: '../../../assets/icons/icon-musica.png',
      titulo: 'Música',
      descripcion: `Preferencias en género, estilo, artistas, álbumes, etc. Instrumentos que toco; géneros / estilos que toco, etc.`
    },
    {
      icono: '../../../assets/icons/icon-dibujo.png',
      titulo: 'Dibujo / Pintura',
      descripcion: `Artistas favoritos, técnicas / estilos de pintura favoritos, etc. Técnicas / estilos de pintura utilizados.`
    },
    {
      icono: '../../../assets/icons/icon-lectura.png',
      titulo: 'Lectura',
      descripcion: `Preferencias en género, escritores favoritos, libros favoritos, etc.`
    },
    {
      icono: '../../../assets/icons/icon-ejercicio.png',
      titulo: 'Deporte',
      descripcion: `Deportes que me gustan / Deportes que practico.`
    },
    {
      icono: '../../../assets/icons/icon-videojuegos.png',
      titulo: 'Videojuegos',
      descripcion: `Videojuegos que me gustan, géneros / Videojuegos que juego.`
    },
    {
      icono: '../../../assets/icons/icon-peliculas.png',
      titulo: 'Películas / Series',
      descripcion: `Mis preferencias en directores, géneros. Películas / Series favoritas`
    }
  ]

}
