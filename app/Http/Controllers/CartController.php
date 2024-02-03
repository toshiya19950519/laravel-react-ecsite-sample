<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = auth()->id();
        $query = Cart::query();

        $query->with('product');

        $query->where('user_id',$userId);

        $response = $query->get();

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = auth()->id();
        $productId = $request->input('product_id');

        $instance = Cart::where('user_id', $userId)->where('product_id',$productId)->first();

        if ($instance) {
            // レコードが存在する場合の処理
            $instance->increment('amount');
        } else {
            // レコードが存在しない場合の処理
            $instance = Cart::create([
                'user_id' => $userId, 
                'product_id' => $productId,
                'amount' => 1
            ]);
        }

        return $instance;
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
