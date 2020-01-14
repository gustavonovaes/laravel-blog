<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use App\Tag;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    private $pagination = 4;

    public function index()
    {
        $search = \request()->query('S');

        $posts = Post::search($search)->simplePaginate($this->pagination);

        return view('welcome')->with([
            'posts' => $posts,
            'categories' => Category::all(),
            'tags' => Tag::all(),
            'topPosts' => Post::top5(),
        ]);
    }

    public function show(Post $post)
    {
        return view('blog.show')->with('post', $post);
    }

    public function category(Category $category)
    {
        $search = request()->query('S');

        $posts = $category->posts()->search($search)->simplePaginate($this->pagination);

        return view('blog.category')->with([
            'category' => $category,
            'posts' => $posts,
            'categories' => Category::all(),
            'tags' => Tag::all(),
            'topPosts' => Post::top5(),
        ]);
    }

    public function tag(Tag $tag)
    {
        $search = request()->query('S');

        $posts = $tag->posts()->search($search)->simplePaginate($this->pagination);

        return view('blog.tag')->with([
            'tag' => $tag,
            'posts' => $posts,
            'categories' => Category::all(),
            'tags' => Tag::all(),
            'topPosts' => Post::top5(),
        ]);
    }

    private function top5()
    {
    }
}
