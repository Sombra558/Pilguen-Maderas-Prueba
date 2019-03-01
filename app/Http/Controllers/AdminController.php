<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tipo;
use App\Producto;
use App\Categoria;
class AdminController extends Controller
{
    public function index(){
		return view('Admin/Admin');
    }
    
    
  
}
