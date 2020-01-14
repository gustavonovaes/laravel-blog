<?php

use App\Category;
use App\Post;
use App\Tag;
use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $maxCategories = 8;
        for ($i = 0; $i < $maxCategories; $i++) {
            Category::create(['name' => $faker->word()]);
        }

        $maxTags = 12;
        for ($i = 0; $i < $maxTags; $i++) {
            Tag::create(['name' => $faker->word()]);
        }

        $maxPosts = 6;
        for ($i = 0; $i < $maxPosts; $i++) {
            $categoryId = $faker->numberBetween(1, $maxCategories);
            $thumbId = $faker->numberBetween(1, 18);

            $post = Post::create([
                'title' => $faker->words(3, true),
                'description' => $faker->paragraph(2, true),
                'content' => $faker->paragraphs(5, true),
                'published_at' => now(),
                'image' => "/img/thumb/{$thumbId}.jpg",
                'user_id' => 1,
                'category_id' => $categoryId,
            ]);

            $countTags = $faker->numberBetween(1, 3);
            while ($countTags--) {
                $tagId = $faker->numberBetween(1, $maxTags);
                $post->tags()->attach($tagId);
            }
        }
    }
}
