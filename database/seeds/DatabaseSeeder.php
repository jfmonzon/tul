<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        DB::table('users')
            ->insert([
                'foto'=>'foto.jpg',
                'nombre'=>'Administrador',
                'apellido'=>'Tuls',
                'ocupacion'=>'Administrador  de la aplicación',
                'ciudad'=>'Bogotá',
                'cedula'=>'123456789',
                'email'=>'admon@administrador.com',
                'password'=>bcrypt('superadmin'),
                'estatus'=>true,
                'rol'=>'Administrador'

                

            ]);

            DB::table('users')
            ->insert([
                'foto'=>'foto.jpg',
                'nombre'=>'Usuario',
                'apellido'=>'Tuls',
                'ocupacion'=>'Usuario de la aplicación',
                'ciudad'=>'Calí',
                'cedula'=>'987654321',
                'email'=>'user@usuario.com',
                'password'=>bcrypt('usuario'),
                'estatus'=>true,
                'rol'=>'Usuario'
                
                
            ]);

    }
}
