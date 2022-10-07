@extends('layouts.base')

@section('content')
<form method="POST" action="{{ route('comment.store') }}">
    @csrf
    <div class="form-group">
      <input type="text" class="form-control @error('title') is-invalid @enderror" name="title" placeholder="Introduce el título" value="{{ old('title') }}">
      @error('title')
        <div class="alert alert-danger mt-2" role="alert">
            {{ $message }}
        </div>
      @enderror
    </div>
    <div class="form-group mt-2">
        <input type="text" class="form-control @error('text') is-invalid @enderror" name="text" placeholder="Introduce el comentario" value="{{ old('text') }}">
        @error('text')
        <div class="alert alert-danger mt-2" role="alert">
            {{ $message }}
        </div>
      @enderror
    </div>
    <button type="submit" class="btn btn-primary mt-2">Enviar</button>
</form>
@endsection
