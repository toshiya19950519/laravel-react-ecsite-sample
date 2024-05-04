<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller{

    public function __invoke(Request $request)
    {
        $data = $request->all();
        
        Mail::to('recipient@example.com')->send(new Contact($data));
    }
}
