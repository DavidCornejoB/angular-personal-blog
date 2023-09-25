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

  private tarjetasAbout: aboutCard[] = [
    {
      icono: 'code',
      titulo: 'Desarrollador de Software',
      descripcion: `Actualmente, trabajo como desarrollador de software, haciendo uso de GeneXus 17. Los lenguajes que más utilizo son Python, Java, Javascript, entre otros.
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
      descripcion: `Desde pequeño, he sido un ferviente amante de la música. A los dos tres años ya estaba escuchando los cd's de música clásica
      de mis padres. A los diez años comencé a tocar la guitarra de manera autodidacta, y actualmente toco también la batería, el bajo y un poco de piano.
      Formo parte de Flébil y, de vez en cuando, compongo y produzco temas de Ambient.`
    },

    {
      icono: 'insert_photo',
      titulo: 'Dibujante / Pintor',
      descripcion: `Otra de mis aficiones de infancia es dibujar.
      Hoy en día, disfruto del dibujo y la pintura, y trato de practicar todos los días y aprender nuevas técnicas.`
    }
  ];

  private tarjetasProject: projectCard[] = [
    {
      icono: '../../../assets/images/youtube-landing.PNG',
      titulo: 'Landing Page para consumo de API de Youtube',
      enlace: 'https://davidcornejob.github.io/async-landing/',
      descripcion: 'HTML5, CSS3, JavaScript, Node.js'
    },

    {
      icono: '../../../assets/images/spotify-landing.PNG',
      titulo: 'Landing Page para consumo de API de Spotify',
      enlace: 'https://davidcornejob.github.io/landing-spotify-async/',
      descripcion: 'HTML5, CSS3, JavaScript, Node.js'
    },

    {
      icono: '../../../assets/images/ionic-page.PNG',
      titulo: 'Plataforma de Realidad Aumentada, Gualaceo. Ionic - Unity',
      enlace: 'https://gualaceoar.web.app/login',
      descripcion: 'HTML5, CSS3, Ionic, Unity, Firebase'
    },

    {
      icono: '../../../assets/images/fastapi-page.PNG',
      titulo: 'API de películas desarrollado en FastAPI + SQLite',
      enlace: 'https://fastapi-movies-api.onrender.com',
      descripcion: 'FastAPI, Python, SQLite, API REST'
    },

    {
      icono: '../../../assets/images/netflix-page.PNG',
      titulo: 'Página creada con React para consumo de API de Netflix',
      enlace: 'https://netflix-react-page.web.app',
      descripcion: 'HTML5, CSS3, JavaScript, Node.js, React.js'
    }
  ]

  private tarjetasHobbies: hobbyCard[] = [
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

  getTarjetasAbout(){
    return this.tarjetasAbout;
  }

  getTarjetasProject(){
    return this.tarjetasProject;
  }

  getTarjetasHobbies(){
    return this.tarjetasHobbies;
  }

}
