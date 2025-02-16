@extends('layouts.app')

@section('content')

<div class="card card-default">
    <div class="card-header">
        {{ isset($tag) ? 'Edit' : 'Create' }} Tag
    </div>

    <div class="card-body">

        @include('partials.error')

        <form action="{{ isset($tag) ? route('tags.update', $tag->id) : route('tags.store') }}"
              method="post">
            @csrf

            @if (isset($tag))
            @method('put')
            @endif

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text"
                       id="name"
                       class="form-control"
                       name="name"
                       value="{{ $tag->name ?? '' }}">
            </div>

            <div class="form-group">
                <button type="submit"
                        class="btn btn-success">{{ isset($tag) ? 'Save' : 'Add Tag' }}</button>
            </div>
        </form>


    </div>
</div>
@endsection
