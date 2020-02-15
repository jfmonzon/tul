@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <a href="{{ url('/') }}">Inicio</a>
                <div class="card-header">{{Auth::user()->nombre}} {{Auth::user()->apellido}}</div>
                @if (Auth::check())
               
                
                    

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                  
                   
                        @if (Auth::user()->rol == 'Administrador')
                        <div class="col-md-8">
                            
                                <div class="table-responsive-md">
                                    <table class="table table-bordered table-hover table-sm table-striped">
                                        <caption class="d-none">{{__("Usuarios")}}</caption>
                                        <thead class="thead-dark filatabla">
                                            <tr>
                                                 
                                                <th scope="col">Foto</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Cédula</th>
                                                <th scope="col">Ocupación</th>
                                                <th scope="col">Ciudad</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Rol</th>
                                                <th scope="col">Correo</th>
                                                <th scope="col" colspan="3">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            @forelse ($users as $user)
                                            <tr>
                                               
                                                <td> <img src="{{ URL::to('/') }}/images/{{ $user->foto }}" class="img-thumbnail" width="75" /></td>    
                                                <td>{{$user->nombre}} {{$user->apellido}} </td>
                                                <td>{{$user->cedula}}</td> 
                                               
                                                <td>{{$user->ocupacion}}</td>    
                                                <td>{{$user->ciudad}}</td>     
                                                   
                                                <td>@if ( $user->estatus)
                                                    {{__('Activo')}}
                                                @else
                                                    {{__(' Inactivo')}}
                                                    @endif
                                                </td>    
                                                <td>{{$user->rol}}</td>    
                                                <td>{{$user->email}}</td>    
                                                <td> <a href="{{ route('users.edit', $user->id) }}">edit</a></td>    
                                                <td> <button class="btn btn-sm ml-1 mb-0 btn-secondary"  title="Eliminar" data-toggle="modal" data-target="#rol_Modal{{$user->id}}">
                                                    Eliminar
                                                </button> <div class="modal fade" id="rol_Modal{{ $user->id }}" tabindex="-1" role="dialog" aria-labelledby="rol_ModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                                        <div class="modal-content border-info">
                                                            <div class="modal-header bg-info m-0 p-2">
                                                                <h6 class="modal-title font-weight-bold" id="rol_ModalLabel">Usuario: {{$user->nombre}} {{$user->apellido}}</h6>
                                                            </div>
                                                            <div class="modal-body">{{__('Quiere eliminar este usuario ?')}}</div>
                                                            <div class="modal-footer">
                                                    <form action="{{route('users.delete', $user->id)}}" id="delete{{$user->id}}" method="POST" name="delete{{$user->id}}">
                                                    <button class="btn btn-sm btn-secondary" type="reset" data-dismiss="modal">NO</button>
                                                    <button class="btn btn-sm btn-danger" type="submit" id="rol_delete" name="rol_delete">SI</button>
                                                    @method('DELETE')
                                                    @csrf
                                                </form></td>    
                                                <td><button class="btn btn-sm ml-1 mb-0 btn-secondary"  title="Activar/desactivar" data-toggle="modal" data-target="#act_Modal{{$user->id}}">
                                                   @if ($user->estatus)
                                                       {{__('Desactivar')}}
                                                   @else
                                                       {{__('Activar')}}
                                                   @endif
                                                </button> <div class="modal fade" id="act_Modal{{ $user->id }}" tabindex="-1" role="dialog" aria-labelledby="act_ModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                                        <div class="modal-content border-info">
                                                            <div class="modal-header bg-info m-0 p-2">
                                                                <h6 class="modal-title font-weight-bold" id="act_ModalLabel">Usuario: {{$user->nombre}} {{$user->apellido}}</h6>
                                                            </div>
                                                            @if ($user->estatus)
                                                            <div class="modal-body">{{__('Quiere Desactivar este usuario ?')}}</div>
                                                             @else
                                                             <div class="modal-body">{{__('Quiere Activar este usuario ?')}}</div>
                                                             @endif
                                                           
                                                            <div class="modal-footer">
                                                    <form action="{{route('users.desactivar', $user->id)}}" id="desactivar{{$user->id}}" method="POST" name="desactivar{{$user->id}}">
                                                    <button class="btn btn-sm btn-secondary" type="reset" data-dismiss="modal">NO</button>
                                                    <button class="btn btn-sm btn-danger" type="submit" id="rol_activar" name="rol_activar">SI</button>
                                                    @csrf
                                                    @method('PUT')
                                                </form></td>    
                                            </tr> 
                                            @empty
                                                
                                            @endforelse
                                        </tbody>
                                    </table>        
                            </div>
                        
                    </div>
                           @else
                           <div class="col-md-4">
                            <div class="card">
                                <div class="my-2 px-2">
                                    <a href="{{ route('users.edit', Auth::user()->id) }}">edit</a>
                                    
                                </div>
                            </div>
                        </div>
                           @endif
                        </div>
                    </div>        
                    <div class="col-md-4">
                        <div class="card">
                            <div class="my-2 px-2">
                                
                                <form action="{{route('logout')}}" method="POST">
                                    <button class="btn btn-danger btn-sm btn-block">
                                        <i class="fas fa-sign-out-alt text-light"></i>&nbsp;&nbsp;{{__('Cerrar Sesión')}}
                                    </button>
                                    @csrf
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
            </div>
        </div>
    </div>
</div>
@endsection
