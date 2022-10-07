@extends('layouts.base')

@section('content')
<form method="POST" action="{{ route('comment.update', $comment->id) }}">
    @csrf
    @method('put')
    <div class="form-group">
      <input type="text" class="form-control @error('title') is-invalid @enderror" name="title" placeholder="Introduce el título" value="{{ $comment->title }}">
      @error('title')
        <div class="alert alert-danger mt-2" role="alert">
            {{ $message }}
        </div>
      @enderror
    </div>
    <div class="form-group mt-2">
        <input type="text" class="form-control @error('text') is-invalid @enderror" name="text" placeholder="Introduce el comentario" value="{{ $comment->text }}">
        @error('text')
        <div class="alert alert-danger mt-2" role="alert">
            {{ $message }}
        </div>
      @enderror
    </div>
    <button type="submit" class="btn btn-primary mt-2">Enviar</button>
</form>
@endsection
