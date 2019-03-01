<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Producto;

class PublicController extends Controller
{
    public function index(){
        return view('Catalogo');
    }
    public function acerca(){
        return view('/Public/Acerca');
    }
    public function servicios(){
        return view('/Public/Servicios');
    }
    public function ProductoListado(){
        $productos=Producto::get();
        return $productos;
    }
    public function ProductoDetalle($id){
		$producto = Producto::find($id);
    	return view('/Public/Detalle',compact('producto'));
	}
}
