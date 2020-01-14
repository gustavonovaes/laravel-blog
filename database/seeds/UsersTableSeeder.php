<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where('email', 'gustavonovaes93@gmail.com')->first();

        if (!$user) {
            User::create([
                'name' => 'Gustavo Novaes',
                'email' => 'gustavonovaes93@gmail.com',
                'password' => Hash::make('hardpass'),
                'role' => 'admin'
            ]);
        }
    }
}
