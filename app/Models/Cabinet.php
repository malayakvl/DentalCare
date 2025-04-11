<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cabinet extends Model
{
    protected $fillable = [
        'name',
        'place_count',
        'filial_id',
        'clinic_id'
    ];
}
