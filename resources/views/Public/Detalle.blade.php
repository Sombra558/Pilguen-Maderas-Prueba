@extends('layouts.public')

@section('content')

<div class="row">
                    <div class="col-md-6">
                    <div className="card">
                    <img height="350px" src="{{$producto->url}}" class="card-img-top" />       
                    </div>          
                    </div>
                    <div class="col-md-6">
                    <div className="card">
                       <div class="card-header"><h1 class="card-title">{{ $producto->producto }} </h1></div>
                       <div class="card-body">
                    <p class="card-text text-justify">{{ $producto->descripcion }}</p></div>
                    <div class="card-footer"> Categoria: {{$producto->categoria}}</div>
                    </div> 
                     </div>
                    <div class="col-md-12">
                    <br>
                     <hr>
                    <form class="form-control" action="post">
                        <div class="row">
                        <div class="col-md-8 form-groud">
                        <input type="number" class="form-control">
                        </div>
                        <div class="col-md-4">
                        <input class="btn-success form-control" type="summit" value="Pedido">
                        </div></div>
                    </form>
                    </div>
</div>

@endsection






	