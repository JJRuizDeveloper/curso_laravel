@extends('layouts.base')

@section('content')
    @if (empty($comments))
        <p>Aún no hay comentarios para mostrar.</p>
    @else
        <a class="btn btn-info" href="{{ route('comment.create') }}">Añadir comentario</a>
        <ul class="list-group mt-2">
            @foreach ($comments as $comment)
                <li class="list-group-item">
                    <form action="{{ route('comment.delete', $comment->id) }}" method="post">
                        @csrf
                        @method('delete')
                        <input type="submit" class="btn btn-danger" value="🗑️" />
                    </form>
                    <a href="{{ route('comment.edit', $comment->id) }}" class="btn btn-warning">✏️</a>
                    {{ $comment->title }}
                </li>
            @endforeach
        </ul>
    @endif
@endsection
