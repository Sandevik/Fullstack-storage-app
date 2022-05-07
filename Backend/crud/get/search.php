<?php 
require_once("../../db.php");
if ($_SERVER["REQUEST_METHOD"] != "GET" && !isset($_GET["search"])){
    die("Invalid metod or parameter!");
}
header("Access-Control-Allow-Origin: *");
$query = "SELECT * FROM product WHERE title LIKE (?) OR manufacturer LIKE (?) OR product_type LIKE (?) ORDER BY title, manufacturer, product_type;";
$param = "%".$_GET["search"]."%";
$stmt = mysqli_prepare($connection, $query);
$stmt->bind_param("sss", $param, $param, $param);
$stmt ->execute();
$result = $stmt -> get_result();
$item = mysqli_fetch_all($result, MYSQLI_ASSOC);
header("Content-Type: application/json; charset=utf-8");
if (!$item){
    $error -> message = "Product Not Found";
    http_response_code(404);
   echo json_encode($error);
}else {
    http_response_code(200);
    echo json_encode($item);
}