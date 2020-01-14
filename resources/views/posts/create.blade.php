@extends('layouts.app')

@section('content')

<div class="card card-default">
    <div class="card-header">
        {{ isset($post) ? 'Edit' : 'Create' }} Post
    </div>

    <div class="card-body">

        @include('partials.error')

        <form action="{{ isset($post) ? route('posts.update', $post->id) : route('posts.store') }}"
              method="POST"
              enctype="multipart/form-data">
            @csrf

            @if (isset($post))
            @method('put')
            @endif

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text"
                       id="title"
                       class="form-control"
                       name="title"
                       value="{{ $post->title ?? '' }}">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description"
                          id="description"
                          class="form-control"
                          cols="5"
                          rows="5">{{ $post->description ?? '' }}</textarea>
            </div>

            <div class="form-group">
                <label for="content">Content</label>
                <input id="content"
                       type="hidden"
                       name="content"
                       value="{{ $post->content ?? '' }}">
                <trix-editor input="content"></trix-editor>
            </div>

            <div class="form-group">
                <label for="published_at">Published at</label>
                <input type="text"
                       id="published_at"
                       class="form-control"
                       name="published_at"
                       value="{{ $post->published_at ?? '' }}">
            </div>

            @if (isset($post))
            <div class="form-group d-flex justify-content-center">
                <img src="{{ asset('storage/' . $post->image) }}"
                     alt=""
                     style="width: 50%;">
            </div>
            @endif

            <div class="form-group">
                <label for="image">Image</label>
                <input type="file"
                       id="image"
                       class="form-control"
                       name="image">
            </div>

            <div class="form-group">
                <label for="category">Category</label>
                <select id="category"
                        name="category"
                        class="form-control">
                    @foreach ($categories as $category)
                    <option value="{{ $category->id }}"
                            {{ isset($post) && $category->id == $post->category_id ? 'selected="selected"' : '' }}>
                        {{ $category->name }}
                    </option>
                    @endforeach
                </select>
            </div>

            @if (!$tags->isEmpty())
            <div class="form-group">
                <label for="tags">Tags</label>
                <select name="tags[]"
                        id="tags"
                        class="form-control"
                        multiple>
                    @foreach($tags as $tag)
                    <option value="{{ $tag->id }}"
                            {{ isset($post) && $post->hasTag($tag) ? 'selected="selected"' : '' }}>
                        {{ $tag->name }}
                    </option>
                    @endforeach
                </select>
            </div>
            @endif

            <div class="form-group">
                <button type="submit"
                        class="btn btn-success">{{ isset($post) ? 'Save' : 'Add post' }}</button>
            </div>
        </form>
    </div>
</div>
@endsection


@section('styles')
<link async
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/trix/1.2.1/trix.css">
<link async
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
      media="screen">
<link async
      href="https://cdn.jsdelivr.net/npm/select2@4.0.12/dist/css/select2.min.css"
      rel="stylesheet" />

@endsection


@section('scripts')
<script defer
        src="https://cdnjs.cloudflare.com/ajax/libs/trix/1.2.1/trix.js"></script>

<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<script defer
        src="https://cdn.jsdelivr.net/npm/select2@4.0.12/dist/js/select2.min.js"></script>

<script defer>
    flatpickr('#published_at', {
        enableTime: true,
        enableSeconds: true,
    });

    $(document).ready(() => {
        const $selectTags = $("#tags");
        $selectTags.select2({
            tags: true
        });
    })
</script>
@endsection
