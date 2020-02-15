@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Usuario Borrado') }}</div>
                <a href="{{ URL::previous() }}">Go Back</a>
                

            </div>
        </div>
    </div>
</div>