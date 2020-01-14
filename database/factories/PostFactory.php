<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->words(4),
        'description' => $faker->paragraph(2),
        'content' => $faker->paragraphs(5),
        'image' => "/img/thumb/{$faker->numberBetween(1, 18)}.jpg",
        'published_at' => now(),
    ];
});
