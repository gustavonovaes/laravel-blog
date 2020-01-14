<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Post extends Model
{
    use SoftDeletes;


    protected $dates = [
        'published_at'
    ];

    protected $fillable = [
        'title',
        'description',
        'content',
        'image',
        'published_at',
        'user_id',
        'category_id',
    ];

    /**
     * Delete post image from storage
     *
     * @return void
     */
    public function deleteImage()
    {
        Storage::delete($this->image);
    }


    public static function findOrFail(int $id): Post
    {
        return Post::withTrashed()->findOrFail($id);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function hasTag(Tag $tag)
    {
        return $this->tags->contains($tag->id);
    }

    public function scopeSearch($query, $search)
    {
        if (!$search) {
            return $query->published();
        }

        return $query->published()->where('title', 'LIKE', "%{$search}%");
    }

    public function scopePublished($query)
    {
        return $query->where('published_at', '<=', now());
    }

    public static function top5()
    {
        return self::all()->shuffle()->slice(0, 5);
    }
}
