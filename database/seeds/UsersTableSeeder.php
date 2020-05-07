<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'civility' => 'Mr.',
            'firstname' => 'Abderraouf',
            'lastname' => 'Mahdi',
            'email' => 'mahdi.abderraouf@outlook.com',
            'birthdate' => '1998-08-29',
            'is_admin' => true,
            'gender' => 'male',
            'password' => Hash::make('password')
        ]);
        factory('App\User', 50)->create();
    }
}
