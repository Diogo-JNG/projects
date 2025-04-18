<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [

'/' => 'index.php',
'/create' => 'create.php',
'/edit' => 'edit.php',

];


function routeToController($uri, $routes) {
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    } else {
        http_response_code(404);

        require('404error.php');
    }
}

routeToController($uri, $routes);
?>