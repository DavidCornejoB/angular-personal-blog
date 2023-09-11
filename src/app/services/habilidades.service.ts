import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  // HABILIDADES FRONTEND:
  private iconosLenguajesFrontend = [
    {
      url: '../../../assets/icons/icon-html5.png',
      descripcion: 'HTML5'
    },
    {
      url: '../../../assets/icons/icon-css3.png',
      descripcion: 'CSS3'
    },
    {
      url: '../../../assets/icons/icon-javascript.png',
      descripcion: 'JavaScript'
    }
  ]

  private iconosFrameworksFrontend = [
    {
      url: '../../../assets/icons/icon-angular.png',
      descripcion: 'Angular'
    }
  ]

  //HABILIDADES BACKEND:
  private iconosLenguajesBackend = [
    {
      url: '../../../assets/icons/icon-python.png',
      descripcion: 'Python'
    },
    {
      url: '../../../assets/icons/icon-java.png',
      descripcion: 'Java'
    },
    {
      url: '../../../assets/icons/icon-javascript.png',
      descripcion: 'JavaScript'
    }
  ]

  private iconosFrameworksBackend = [
    {
      url: '../../../assets/icons/icon-nodejs.png',
      descripcion: 'Node.js'
    },
    {
      url: '../../../assets/icons/icon-fastapi.png',
      descripcion: 'FastApi Python'
    }
  ]

  //HABILIDADES BASES DE DATOS:
  private iconosBases = [
    {
      url: '../../../assets/icons/icon-postgresql.png',
      descripcion: 'PostgreSQL'
    },
    {
      url: '../../../assets/icons/icon-mysql.png',
      descripcion: 'MySQL'
    }
  ]

  //HABILIDADES MOVILES:
  private iconosMoviles = [
    {
      url: '../../../assets/icons/icon-ionic.png',
      descripcion: 'Ionic'
    },
    {
      url: '../../../assets/icons/icon-firebase.png',
      descripcion: 'Firebase'
    },
    {
      url: '../../../assets/icons/icon-unity.png',
      descripcion: 'Unity'
    }
  ]

  //HABILIDADES INTEGRACION:
  private iconosIntegracion = [
    {
      url: '../../../assets/icons/icon-git.png',
      descripcion: 'Git'
    },
    {
      url: '../../../assets/icons/icon-github.png',
      descripcion: 'GitHub'
    },
    {
      url: '../../../assets/icons/icon-docker.png',
      descripcion: 'Docker'
    }
  ]

  getLenguajesFrontend(){
    return this.iconosLenguajesFrontend;
  }

  getFrameworksFrontend(){
    return this.iconosFrameworksFrontend;
  }

  getLenguajesBackend(){
    return this.iconosLenguajesBackend;
  }

  getFrameworksBackend(){
    return this.iconosFrameworksBackend;
  }

  getBases(){
    return this.iconosBases;
  }

  getMoviles(){
    return this.iconosMoviles;
  }

  getIntegracion(){
    return this.iconosIntegracion;
  }

}
