<?php
header('Content-Type: application/json');

$url = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/';

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
