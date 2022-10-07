<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FirstEntity extends Model
{
    use HasFactory;

    protected $fillable = ['content'];


    public function secondEntities()
    {
        return $this->hasMany(SecondEntity::class, 'first_entity_id');
    }


    // $elm = FirstEntity::find(5)

    // @foreach($elm->secondEntities as $el)
}
