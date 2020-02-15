<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');
    }


    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        {
            if ( !Auth::User()->estatus)
            {
                $request->session()->flush();
                Auth::logout();
                return redirect()->route('login')->with('error','El usuario está desactivado.');
            }

            return redirect()->route('home')->with('status','Ha iniciado la sesión de usuario con exito.');
        }
        
     
    }

    public function logout(Request $request)
    {
        // Guardar metadato de cierre de sesión
        $request->session()->flush();
        Auth::logout();
        return redirect()->route('home')->with('status','Se ha cerrado la sesión de usuario con exito.');
    }
}
