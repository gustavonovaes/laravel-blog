@extends('layouts.blog')


@section('title', 'SaaS Blog')

@section('header')
<!-- Header -->
<header class="header text-center text-white"
        style="background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);">
    <div class="container">

        <div class="row">
            <div class="col-md-8 mx-auto">

                <h1>Latest Blog Posts</h1>
                <p class="lead-2 opacity-90 mt-6">Read and get updated on how we progress</p>

            </div>
        </div>

    </div>
</header><!-- /.header -->
@endsection

@section('content')
<!-- Main Content -->
<main class="main-content">
    <div class="section bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-xl-9">
                    <div class="row gap-y">
                        @forelse($posts as $post)
                        <div class="col-md-6 d-flex">
                            {{-- <div class="card border hover-shadow-6 mb-6 d-block"> --}}
                            <div
                                 class="card border hover-shadow-6 mb-6 d-flex flex-grow justify-content-between">
                                <a href="{{ route('blog.show', $post->id) }}"
                                   class="text-center">
                                    <img class="card-img-top"
                                         src="{{ asset($post->image) }}"
                                         alt="Card image cap"
                                         style="width: auto; height: 25vh">
                                </a>
                                <div class="p-6 text-center">
                                    <p>
                                        <a class="small-5 text-lighter text-uppercase ls-2 fw-400"
                                           href="#">{{ $post->category->name}}</a>
                                    </p>
                                    <h5 class="mb-0">
                                        <a class="text-dark"
                                           href="{{ route('blog.show', $post->id) }}">{{ $post->title }}</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        @empty

                        @if (request()->query('S'))
                        <h2 class="text-center">No results found for search:
                            <code>{{ request()->query('S') }}</code></h2>
                        @else
                        <h2 class="text-center">No results found</h2>
                        @endif

                        @endforelse
                    </div>

                    {{ $posts->appends(['S' => request()->query('S')])->links() }}
                </div>

                @include('partials.sidebar')
            </div>
        </div>
    </div>
</main>
@endsection
