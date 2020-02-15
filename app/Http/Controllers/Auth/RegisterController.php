<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRequest;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        /*
        if ($data['foto']=="")
        {
            $data['foto']='foto_base.gif';
        }
        */
        $data['estatus']=true;
        return Validator::make($data, [
            'nombre' => ['required', 'string', 'max:100'],
            'fotos.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'apellido' => ['required', 'string', 'max:100'],
            'ocupacion' => ['required', 'string', 'max:100'],
            'ciudad' => ['required', 'string', 'max:50'],
            'cedula' => ['required',  'integer','unique:users'],
            'rol' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:50', 'unique:users'],
            'password' => ['required', 'string', 'min:5', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
       
       
        if ($image = $data['fotos']) {
            
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
       
       
        return User::create([
            'nombre' => $data['nombre'],
            'apellido' => $data['apellido'],
            'ocupacion' => $data['ocupacion'],
            'ciudad' => $data['ciudad'],
            'cedula'=> $data['cedula'],
            'estatus'=>  true,
            'rol' => $data['rol'],
            'foto' => $profileImage,
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }


}
