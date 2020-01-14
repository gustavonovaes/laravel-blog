@extends('layouts.app')

@section('content')

<div class="d-flex justify-content-end mb-2">
    <a href="{{ route('posts.create') }}"
       class="btn btn-success">Add Post</a>
</div>

<div class="card card-default">
    <div class="card-header">Posts</div>

    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @if ($posts->isEmpty())
                <tr>
                    <td colspan="4"
                        class="text-center">
                        Empty
                    </td>
                </tr>
                @endif

                @foreach($posts as $post)
                <tr>
                    <td>
                        <img src="{{ asset('storage/' . $post->image) }}"
                             alt=""
                             style="width: 120px">
                    </td>
                    <td>
                        {{ $post->title }}
                    </td>
                    <td>
                        <a href="{{ route('categories.edit', $post->category->id) }}">{{ $post->category->name }}</a>
                    </td>
                    <td>
                        @if ($post->trashed())
                        <form action="{{ route('posts.restore', $post->id) }}"
                              method="POST">
                            @csrf
                            @method('put')

                            <button type="submit"
                                    class="btn btn-sm btn-info">Restore</button>
                        </form>
                        @else
                        <a href="{{ route('posts.edit', $post->id) }} "
                           class="btn btn-sm btn-info">Edit</a>
                        @endif

                        <form action="{{ route('posts.destroy', $post->id) }}"
                              method="POST">
                            @csrf
                            @method('delete')

                            <button type="submit"
                                    class="btn btn-sm btn-danger">
                                {{ $post->trashed() ? 'Delete' : 'Trash' }}
                            </button>
                        </form>
                    </td>
                </tr>

                @endforeach
            </tbody>
        </table>
    </div>
</div>

@endsection
