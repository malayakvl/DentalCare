<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PricingItems extends Model
{
    protected $fillable = [
        'pricing_id',
        'product_id',
        'material_id',
        'quantity',
        'unit_id',
        'price',
        'total',
    ];
}
