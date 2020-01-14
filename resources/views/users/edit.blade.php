@extends('layouts.app')

@section('content')
<div class="card">
    <div class="card-header">My Profile</div>

    <div class="card-body">
        @include('partials.error')

        <form action="{{ route('users.update') }}"
              method="post">
            @csrf
            @method('put')

            <div class="form-group">
                <label for="name">Name</label>
                <input id="name"
                       type="text"
                       name="name"
                       class="form-control"
                       value="{{ $user->name }}">
            </div>

            <div class="form-group">
                <label for="about">About me</label>
                <textarea name="about"
                          id="about"
                          class="form-control"
                          cols="30"
                          rows="5">{{ $user->about }}</textarea>
            </div>

            <button type="submit"
                    class="btn btn-success">Update Profile</button>
        </form>
    </div>
</div>
@endsection
