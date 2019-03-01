<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Pilguen-Maderas</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
        <style>
            .define{
                background-color:#edd177;
            }	
			footer ul{
				font-family: sans-serif;
				text-align: left;
				color: white;
				font-size: 12px;
			}
			footer ul li{
				text-align: left;
				list-style-type: none;
            }
.redes{
				text-align: left;
			}
.footer-pie{
				font-size: 11px;
				color: white;
            }
            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }
            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
            }
            .hop:hover{
                border-color:#114b02f8;
                border-width:5px;
            }
            .busca{
                background-color:#eec77dd8;
            }
           
            .bloque1{
            border-right: 100px solid transparent;
            border-top: 100px solid transparent;
            border-left: 100px solid transparent;
            border-bottom: 100px solid #f0ad4e;
            } 
            .bloque1 a{
				color: white;
            }
            .bellona{
                background-image: url(/img/santiago.png);
                background-attachment: relative;
                 background-size: cover;
                 height:350px;
                 width:100%;
                background-repeat: no-repeat; 
            }
            .coli{
                background-color:#f7b502b7;

            }
            .bellona2{
                background-image: url(http://viviendu.com/blog/wp-content/uploads/2016/02/Tipos-y-calidades-de-madera-en-casas-de-madera-1024x683.jpg);
                background-attachment: relative;
                 background-size: cover;
                 height:350px;
                 width:100%;
                background-repeat: no-repeat; 
            }
            .bellona3{
                background-image: url(/img/bosque7.jpg);
                background-attachment: relative;
                 background-size: cover;
                 height:350px;
                 width:100%;
                background-repeat: no-repeat; 
            }
            .bellona4{
                background-image: url(/img/cepillado.jpg);
                background-attachment: relative;
                 background-size: cover;
                 height:350px;
                 width:100%;
                background-repeat: no-repeat; 
            }
            .bellona5{
                background-image: url(/img/p3.jpg);
                background-attachment: relative;
                 background-size: cover;
                 height:350px;
                 width:100%;
                background-repeat: no-repeat; 
            }
            .empre{
                background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxK6AOxfPKX30oLj_Km62ntNVDOszcRRdlO5Tg5a9UfigQSfH-w);
                background-attachment: relative;
                 background-size: cover;
                 height:350px;
                 width:100%;
                background-repeat: no-repeat; 
            }
           
  
       
       

    </style>
    </head>
    <header>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top"  style="background-color: #eeeaeabb;" id="myTab" role="tablist">
            <a class="navbar-brand" href="#">
            <img src="" width="30" height="30" alt="">
            </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Inicio <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Catalogo">Productos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Servicios">Servicios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Acerca">La Empresa</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" href="#fat">Contactos</a>
                                </li>
                        </ul>
                        <ul class="navbar-nav justify-content-between">
                                <!-- Authentication Links -->
                        @guest
                            <li class="nav-item"><a class="nav-link" href="{{ route('login') }}">Login</a></li>
                            <li class="nav-item"><a class="nav-link" href="{{ route('register') }}">Register</a></li>
                        @else
                            <li class="dropdown nav-item">
                                <a class="nav-link" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true" v-pre>
                                    {{ Auth::user()->name }} {{ Auth::user()->lastname }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endguest
                        </ul>
                </div>
            </nav>

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                                <div class="carousel-item active">
                                        <img class="d-block w-100" height="560px" src="/img/bosque5.jpg" alt="First slide">
                                     
                                 </div>
                                <div class="carousel-item">
                                        <img class="d-block w-100" height="560x"  src="/img/bosque6.jpg" alt="Second slide">
                                                                     
                                 </div>
                                <div class="carousel-item">
                                        <img class="d-block w-100" height="560px"  src="/img/bg3.jpg" alt="Third slide">
                                        
                                </div>
                    </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        </div>
    </header>
    <body>
    <div class="container">
            <br>
            @yield('content')
            <br>
    </div>
    <footer data-spy="scroll" id="fat" class="coli">
    <div class="row mx-auto">
						<section class="col-xs-12 col-sm-6 col-md-6">
                        <ul class="row">
                                <li class="col-md-12"><span style="font-size: 48px; color: #168108;"><i class="fas fa-phone col"></i></span>Numero de telefono:</li>
								<li class="col-md-12"><span style="font-size: 48px; color: #168108;"><i class="fas fa-envelope col"></i></span>Correo Electronico:</li>
								<li class="col-md-12"><span style="font-size: 48px; color: #168108;"><i class="fas fa-fax col"></i></span>Fax:</li>
                                
                </ul>
						</section>     
						<section class="col-xs-12 col-sm-6 col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.969479996803!2d-72.32817458469067!3d-37.485046579813165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966be8034dedbe87%3A0xb6f9f36e33beb1bd!2sMaderas+Pilguen+S+A!5e0!3m2!1ses-419!2sve!4v1550854670918" width="100%" height="370px" frameborder="0" style="border:0" allowfullscreen></iframe>
						</section>					
				</div>
			</footer>
            <footer class="footer-pie bg-success">
				<br>
				<p class="text-center">
    			Pilguen Maderas.  Copyright 2019 Todos los derechos reservados | Powered by Saraid Mata Guaimare
				</p><br></footer>
            <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
