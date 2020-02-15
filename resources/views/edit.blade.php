@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Editar Usuario') }}</div>
                <a href="{{ route('home')}}">Home</a>
                <div class="card-body">
                    <form method="POST" action="{{route('users.update', $user)}}" enctype="multipart/form-data"  method="POST" name="form_update" id="form_update">
                       
                        <img src="{{ URL::to('/') }}/images/{{ $user->foto }}" class="img-thumbnail" width="100px"/>
                        <div class="form-group row">
                            <label for="nombre" class="col-md-4 col-form-label text-md-right">{{ __('Nombre') }}</label>

                            <div class="col-md-6">

                                <input id="nombre" type="text" class="form-control @error('nombre') is-invalid @enderror" name="nombre" value="{{ $user->nombre }}"  autocomplete="nombre" autofocus >

                                @error('nombre')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="apellido" class="col-md-4 col-form-label text-md-right">{{ __('Apellido') }}</label>

                            <div class="col-md-6">
                                <input id="apellido" type="text" class="form-control @error('apellido') is-invalid @enderror" name="apellido" value="{{ $user->apellido }}"  autocomplete="apellido" >

                                @error('apellido')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="cedula" class="col-md-4 col-form-label text-md-right">{{ __('Cédula') }}</label>
                            
                            <div class="col-md-6">
                                <input id="cedula" type="text" class="form-control @error('cedula') is-invalid @enderror" name="cedula" value="{{ $user->cedula }}"  autocomplete="cedula" 
                                @if (Auth::user()->rol != "Administrador")
                                    {{__('disabled')}}
                                @endif
                                >

                                @error('cedula')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="ocupacion" class="col-md-4 col-form-label text-md-right">{{ __('Ocupación') }}</label>

                            <div class="col-md-6">
                                <input id="ocupacion" type="text" class="form-control @error('ocupacion') is-invalid @enderror" name="ocupacion" value="{{ $user->ocupacion }}"  autocomplete="ocupacion" >

                                @error('ocupacion')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="ciudad" class="col-md-4 col-form-label text-md-right">{{ __('Ciudad') }}</label>

                            <div class="col-md-6">
                                <select class="form-control form-control-sm" id="ciudad" name="ciudad">
                                    <option value>{{__('Seleccione una ciudad')}}</option>
                                    <option value="Bogotá"  @if ("Bogotá" == $user->ciudad) selected @endif >Bogotá</option>
                                    <option value="Calí"  @if ("Calí" == $user->ciudad) selected @endif   >Calí</option>
                                    <option value="Barranquilla"  @if ("Barranquilla" == $user->ciudad) selected @endif  >Barranquilla</option>
                                  
                                </select>

                                @error('ciudad')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="estatus" class="col-md-4 col-form-label text-md-right">{{ __('Estaus') }}</label>

                            <div class="col-md-6">
                                <select class="form-control form-control-sm" id="estatus" name="estatus">
                                    <option value>{{__('Seleccione un estatus')}}</option>
                                    <option value=true  @if (true == $user->estatus) selected @endif>Activo</option>
                                    <option value=false  @if (false == $user->estatus) selected @endif>Inactivo</option>
                                    
                                  
                                </select>

                                @error('estatus')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="rol" class="col-md-4 col-form-label text-md-right">{{ __('Rol') }}</label>

                            <div class="col-md-6">
                                <select class="form-control form-control-sm" id="rol" name="rol">
                                    <option value>{{__('Seleccione un rol')}}</option>
                                    <option value="Administrador" @if ("Administrador" == $user->rol) selected @endif  >Administrador</option>
                                    <option value="Usuario"  @if ("Usuario" == $user->rol) selected @endif  >Usuario</option>
                                </select>

                                @error('rol')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Correo Electrónico') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $user->email }}"  autocomplete="email"
                                @if (Auth::user()->rol != "Administrador")
                                    {{__('disabled')}}
                                @endif>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password"  autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password_confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirmar Password') }}</label>

                            <div class="col-md-6">
                                <input id="password_confirm" type="password" class="form-control" name="password_confirmation"  autocomplete="new-password">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="fotos" class="col-md-4 col-form-label text-md-right">{{ __('Foto de pefil') }}</label>

                            <div class="col-md-6">
                                <input id="fotos" type="file" class="form-control @error('foto') is-invalid @enderror" name="fotos[]" value="{{ $user->foto }}"   >

                                @error('foto')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Actualizar') }}
                                </button>
                            </div>
                        </div>
                        @method('PUT')
                        @csrf
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('valida')
<script src="{{asset('js/login/register.js')}}" type="text/javascript"></script>
@endsection