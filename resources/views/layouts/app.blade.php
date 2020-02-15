<!doctype html>
<html lang="{{str_replace('_','-',app()->getLocale())}}">
    <head>
        <title>{{config('app.name','EasyDOC')}}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- token CSRF -->
        <meta name="csrf-token" content="{{csrf_token()}}" />
        <!-- estilos generales de bootstrap 4 -->
        <link href="{{asset('general/css/bootstrap.min.css')}}" rel="stylesheet" />
        <!-- estilos para iconos fontawesone -->
        <link href="{{asset('general/css/all.min.css')}}" rel="stylesheet" />
        <!-- fuentes -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" />
        <!-- estilos CSS personalizados -->
        <link href="{{asset('css/personal.css')}}" rel="stylesheet" />
        <link href="{{asset('general/css/menu.css')}}" rel="stylesheet" />
        @yield('fechas_css')
    </head>
    <body>
        <!-- header -->
        
        <!-- contenido -->
        <div class="container-fluid px-md-4 py-4">
            <div class="row justify-content-center my-5">
                <div class="col-12 col-md-11 col-lg-10 my-3 pt-3">
                   
                    @yield('content')
                </div>
            </div>
        </div>
        
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="{{asset('general/js/jquery-3.4.1.min.js')}}"></script>
        <script src="{{asset('general/js/popper.min.js')}}"></script>
        <script src="{{asset('general/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('js/jquery.validate.js')}}"></script>
        <script src="{{asset('js/additional-methods.js')}}"></script>
        <script src="{{asset('general/js/menu.js')}}"></script>
        <script src="{{asset('js/index.js')}}"></script>
        @yield('valida')
    </body>
</html>