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
                'foto'=>'',
                'nombre'=>'Administrador',
                'apellido'=>'Admon',
                'ocupacion'=>'Administrador',
                'ciudad'=>'Bogotá',
                'cedula'=>'123456789',
                'email'=>'admon@administrador.com',
                'password'=>bcrypt('superadmin'),
                'estatus'=>true,
                'rol'=>'Administrador'

                

            ]);

            DB::table('users')
            ->insert([
                'foto'=>'',
                'nombre'=>'Usuario',
                'apellido'=>'User',
                'ocupacion'=>'Usuario',
                'ciudad'=>'Cali',
                'cedula'=>'987654321',
                'email'=>'user@usuario.com',
                'password'=>bcrypt('usuario'),
                'estatus'=>true,
                'rol'=>'Usuario'
                
                
            ]);

    }
}
