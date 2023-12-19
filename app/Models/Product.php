<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'price',
        'title',
        'stock',
    ];

    public function Users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
