import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
export default class AuthSite extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
        courses: [],
    }
 
}

  


 
    render() {
      
            return (

              <div className="row">
              <div className="col-md-12">
              <img src="/img/logo.png" className="rounded mx-auto d-block" alt="Responsive image"/>
                <h1 className="text-center">Bienvenido</h1>
                </div>
                <div  className="col-md-12">
                <br/><h3 className="display-5 text-center">En MADERAS PILGUEN S.A, nos dedicamos a darle un trabajo profesional a la madera en sus diferentes aplicaciones; es por ello que  con el transcurrir del tiempo hemos incorporado  la más alta tecnología y el personal capacitado para cumplir con los requerimientos del desarrollo regional.</h3><br/>
                <hr/>
                <ScrollAnimation animateIn='fadeIn'
                      animateOut='fadeOut'>
                    <div className="row align-items-center bloque1">
                      
                        <div className="col-md-6 bellona2">
                    
                        </div>
                        <div className="col-md-6">
                        <h1 className="text-center">Calidad</h1>
                        <p className="text-justify">
                        Generar valor a través del aprovechamiento responsable y sustentable del Bosque plantado y nativo, asegurando su preservación como recurso natural renovable, así como la obtención y comercialización de productos madereros y no madereros de calidad que satisfagan las necesidades de nuestros clientes. Para lograrlo, nos inspiran la ética y el compromiso a largo plazo con nuestros accionistas, clientes, proveedores, empleados, la comunidad y el medio ambiente, y nos rigen los altos estándares de las normas de certificación y de nuestras políticas.
                        </p>
                        <h5 className="btn btn-success text-center"><a href="/Catalogo"> Nuestros Productos </a></h5>
                        </div>
                     
                    </div></ScrollAnimation>
                    <br/>
                </div>
              
                
                <div  className="col-md-12">
                <br/>
                <ScrollAnimation animateIn='fadeIn'
                      animateOut='fadeOut'>
                <div className="row align-items-center bloque1">
                      <div className="col-md-6">
                      <h1 className="text-center">Experiencia</h1>
                      <p className="text-justify">
                      Inicia sus  actividades en el año 1992 con un pequeño grupo de trabajo comprometido a ofrecer el mejor servicio del mercado  referente al trato de  madera aserrada y piezas dimensionadas;  siempre enfocados  en un fuerte compromiso con el cuidado del medio ambiente y un manejo forestal responsable
                      </p>
                      <h5 className="btn btn-success text-center"><a href="/Acerca"> Nuestros Trabajos </a></h5>
                      
                      </div>
                      <div className="col-md-6 bellona">
                   
                      </div>
                  </div></ScrollAnimation>
                  <br/>
                </div>
                <div className="col-md-12">
                <br/>
                <ScrollAnimation animateIn='fadeIn'
                      animateOut='fadeOut'>
                <div  className="row align-items-center bloque1">
                      
                      <div className="col-md-6 bellona3">
                      
                      </div>
                      <div className="col-md-6">
                      <h1 className="text-center"> Variedad de Bosques</h1>
                      <p >
                      Trabajamos con hectáreas de Bosques de Pino Radiata, Eucalypthus Globulus y Nitems 
                      </p>
                      <h5 className="btn btn-success text-center"><a href="/Acerca"> Nuestros Productos </a></h5>
                      
                      </div>
                  </div></ScrollAnimation>
                </div>
                <br/>
              </div>
            )
          
    }
    
}