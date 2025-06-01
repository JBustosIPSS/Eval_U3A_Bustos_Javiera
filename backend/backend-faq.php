<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$url = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/';

$options = [
    'http' => [
        'method' => 'GET',
        'header' => [
            'Authorization: Bearer ipss.get',
            'Accept: application/json'
        ]
    ]
];

$context = stream_context_create($options);

$response = @file_get_contents($url, false, $context);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo obtener la información del servidor externo.']);
    exit;
}

echo $response;
