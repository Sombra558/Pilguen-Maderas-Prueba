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
    public function PollinesListado(){
      
        return $productos;
    }
    public function Redirecciones(){
       
        return redirect('/Catalogo');
    }
    public function Redirecciones2(){
       
        return redirect('/Servicios');
    }
    public function CortezasListado(){
        $productos=Producto::where('tipo', 'Cortezas')->get();
        return $productos;
    }
    public function MaderasListado(){
        $productos=Producto::get()->where('tipo', "Madera");
        return $productos;
    }
    public function AstillasListado(){
        $productos=Producto::where('tipo', "Astilla")->get();
        return $productos;
    }
    public function PolinesListado(){
        $productos=Producto::where('tipo', "Polines")->get();
        return $productos;
    }
    public function ProductoDetalle($id){
		$producto = Producto::find($id);
    	return view('/Public/Detalle',compact('producto'));
	}
}
