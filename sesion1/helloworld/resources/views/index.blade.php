@extends('layouts.base')

@section('title', 'Home')

@section('styles')
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
@endsection

@section('content')
    <h1>Hola, {{ $name }}</h1>
    <div class="product-container">
        @component('components.product-card')
            @slot('title', 'Producto 0')
            @slot('content')
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, similique qui! Voluptate expedita mollitia
                    voluptatibus neque culpa! Nesciunt adipisci, a, odit praesentium architecto eaque corrupti veritatis, officiis
                    minima alias ipsum.</p>
            @endslot
        @endcomponent
        @component('components.product-card')
            @slot('title', 'Producto 1')
            @slot('content')
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, similique qui! Voluptate expedita mollitia
                    voluptatibus neque culpa! Nesciunt adipisci, a, odit praesentium architecto eaque corrupti veritatis, officiis
                    minima alias ipsum.</p>
            @endslot
        @endcomponent
        @component('components.product-card')
            @slot('title', 'Producto 2')
            @slot('content')
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, similique qui! Voluptate expedita mollitia
                    voluptatibus neque culpa! Nesciunt adipisci, a, odit praesentium architecto eaque corrupti veritatis, officiis
                    minima alias ipsum.</p>
            @endslot
        @endcomponent
        @component('components.product-card')
            @slot('title', 'Producto 3')
            @slot('content')
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, similique qui! Voluptate expedita mollitia
                    voluptatibus neque culpa! Nesciunt adipisci, a, odit praesentium architecto eaque corrupti veritatis, officiis
                    minima alias ipsum.</p>
            @endslot
        @endcomponent
    </div>
@endsection
