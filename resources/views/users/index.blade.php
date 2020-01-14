@extends('layouts.app')

@section('content')


<div class="card card-default">
    <div class="card-header">Users</div>

    <div class="card-body">

        @if ($users->isEmpty())
        <h1>No users yet</h1>
        @endif

        <table class="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                <tr>
                    <td>
                        <img src="{{ Gravatar::src($user->email) }}"
                             class="avatar"
                             alt="">
                    </td>

                    <td>
                        {{ $user->name }}
                    </td>

                    <td>
                        {{ $user->email }}
                    </td>

                    <td>
                        @if (!$user->isAdmin())
                        <form action="{{ route('users.make-admin', $user->id) }}"
                              method="post">
                            @csrf
                            @method('patch')

                            <button type="submit"
                                    class="btn btn-success btn-sm">Make Admin</button>
                        </form>
                        @endif
                    </td>
                </tr>

                @endforeach
            </tbody>
        </table>
    </div>
</div>

@endsection


@section("styles")
    <style>
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    </style>
@endsection
