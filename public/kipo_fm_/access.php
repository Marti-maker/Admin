<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$allowedFiles = [
    'access.php',
    'ajax_calls.php',
    'dialog.php',
    'execute.php',
    'force_download.php',
    'upload.php',
];

require_once './check_access.php';

$url="http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

$path = parse_url($url, PHP_URL_PATH);

$file =  basename($path);

if(in_array($file, $allowedFiles)) {
    @require_once __DIR__ . '/' . $file;
}
