<?php

namespace App\Http\Controllers;
use App\UserRequest;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;


class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $data = User::latest()->paginate(5);
        return view('index', compact('data'))
                ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    public function create()
    {
        return view('create');
    }

    public function edit(User $user)
    {   
        $user = User::find($user->id);
        return view('edit', compact('user'));
    }

    public function delete(User $user)
    {   
        $user = User::find($user->id);
        $user->delete();
        $users=User::All();
        return view('home', compact('users'));
    }

    public function desactivar(User $user)
    {   
        
        $user = User::findOrFail($user->id);
        
        if ($user->estatus)
        {
            $user->estatus=false;
        }
        else
        {
            $user->estatus=true;
        }    
        $user->save();
        
        $users=User::All();
        return view('home', compact('users'));
    }

    public function show($id)
    {
        $data = User::findOrFail($id);
        return view('view', compact('data'));
    }

    public function update(Request $request,$id)
    { 
       
        $tarea = User::findOrFail($id);
        $condicion = [
            'email'            => 'required|unique:users,email,'.$id,
            'cedula'            => 'required|unique:users,cedula,'.$id,
            
        ];

        $regla = [
            'nombre'                        => 'required|min:3|max:100',
            'apellido'                      => 'required|min:3|max:100',
            'ocupacion'                     => 'required',
            'ciudad'                        => 'required',
            'rol'                           => 'required',
            'password'                      => 'required',

        ];
        $arrays= array_merge($condicion,$regla);
        //'nombre', 'apellido', 'ocupacion', 'ciudad', 'cedula', 'estatus', 'rol',  'email', 'password',
        $this->validate(request(), $arrays);
         if ($image = $request['fotos']) {
            
            foreach ($image as $files) {
               
                $destinationPath = 'images/'; // upload path
                $profileImage = date('YmdHis') . "." . $files->getClientOriginalExtension();
                $files->move($destinationPath, $profileImage);
                $insert[]['image'] = "$profileImage";
            }
        }else
        {
            $profileImage='foto.jpg';
        }

        $tarea->nombre = request('nombre');
        $tarea->apellido = request('apellido');
        $tarea->ocupacion = request('ocupacion');
        $tarea->ciudad = request('ciudad');
        $tarea->cedula = request('cedula');
        $tarea->rol = request('rol');
        $tarea->email = request('email');
        $tarea->foto = $profileImage;
        $tarea->password = bcrypt(request('password'));

        $tarea->save();

        $users=User::All();
        return view('home', compact('users'));
       
        
    }
}