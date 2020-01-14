<?php

namespace App\Http\Controllers;

use App\Http\Requests\Users\UpdateProfileRequest;
use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Undocumented function
     *
     * @return void
     */
    public function index()
    {
        $users = User::all();
        return view('users.index')->with('users', $users);
    }

    public function makeAdmin(User $user)
    {
        $user->makeAdmin();

        session()->flash('success', 'User made admin successfully.');

        return redirect()->route('users.index');
    }

    public function edit()
    {
        return view('users.edit')->with('user', auth()->user());
    }

    public function update(UpdateProfileRequest $request)
    {
        $user = auth()->user();

        $user->update([
            'name' => $request->name,
            'about' => $request->about,
        ]);

        session()->flash('success', 'User updated successfully.');

        return redirect()->back();
    }
}
