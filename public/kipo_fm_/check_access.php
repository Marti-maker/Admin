<?php

use KipoEngine\Groups\Models\Group;
use Illuminate\Support\Facades\Auth;

function accessDenied() {
    echo '<h1>Access Denied</h1>';
    die();
}

$kipoEngineFolder = getcwd() . '/../..';

require $kipoEngineFolder . '/vendor/autoload.php';
$app = require_once $kipoEngineFolder . '/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$request = Illuminate\Http\Request::capture();
$response = $kernel->handle(
    $request
);

if(!$request->getSession()) {
    $sessionKey = $app['config']['session.cookie'];

    $idParts = explode('|', $app['encrypter']->decrypt($_COOKIE[$sessionKey], false));
    $id =  end($idParts);

    $app['session']->driver()->setId($id);
    $app['session']->driver()->start();
}

$isLogged = Auth::check();

if(!$isLogged) return accessDenied();

$user = Auth::user();

$group = Group::find($user->group);

if((!$user->group) || !$group->access_admin) {
    accessDenied();
}