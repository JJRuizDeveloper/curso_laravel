@extends('layouts.base')

@section('title', 'Home')

@section('styles')
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
@endsection

@section('content')
    <div class="product-container">
        @foreach($posts as $post)
            @component('components.product-card')
                @slot('title', $post['title'])
                @slot('content')
                    <p>{{ $post['content'] }}</p>
                @endslot
            @endcomponent
        @endforeach
    </div>
@endsection
