<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SecondEntity extends Model
{
    use HasFactory;

    protected $fillable = ['content'];

    public function firstEntity()
    {
        return $this->belongsTo(FirstEntity::class);
    }
}
