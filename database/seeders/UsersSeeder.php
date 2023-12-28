<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'user',
                'email' => 'user@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'user2',
                'email' => 'user2@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'user3',
                'email' => 'user3@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'user4',
                'email' => 'user4@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'user5',
                'email' => 'user5@example.com',
                'password' => Hash::make('password'),
            ],
        ]);
    }
}
