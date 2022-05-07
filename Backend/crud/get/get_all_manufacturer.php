<?php
if ($_SERVER["REQUEST_METHOD"] != "GET") {
    die("Invalid method");
}
require_once "../../db.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
$query = "SELECT DISTINCT manufacturer AS property FROM product";
$result = mysqli_query($connection, $query) or die();
$item = mysqli_fetch_all($result, MYSQLI_ASSOC);
header("Content-Type: application/json; charset=utf-8");
if (!$item) {
    $error->message = "Product Not Found";
    http_response_code(404);
    echo json_encode($error);
} else {
    http_response_code(200);
    echo json_encode($item);
}
