@extends('layouts.base')

@section('content')
    @if($name == "juanjo")
        <h1>Es el profesor del curso</h1>
    @else
        <h1>No es el profesor del curso</h1>
    @endif
@endsection
