<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
        <style>	
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
				color: gray;
				background-color: darkgreen;
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
                text-transform: uppercase;
            }
            .prueba{
                    color:black; 
                }
            .list-group-item:hover{
                background-color:green;
                color:white;
                font-style:none;
            }
            .list-group-item a:hover{
                color:white;
            }
    </style>
    </head>
    <header>
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #ffffff00;" id="myTab" role="tablist">
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
                                    <a class="nav-link" href="/Catalogo">Catalogo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Acerca</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" href="#">Contactos</a>
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
           
        </div>
    </header>
    <body>
    <div class="container-fluid">
            <hr>
            @yield('content')
    </div>
    <footer class="success bg-success">
            <br>
                <div class="row">
                    <div class="col-md-12">
                             <h1 class="display-5 text-center">SÍGUENOS EN REDES SOCIALES</h1>
                    </div>
                </div>
            
			</footer>
            <footer class="footer-pie">
				<br>
				<p class="text-center">
    			
				</p><br></footer>
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
