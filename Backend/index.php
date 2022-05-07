<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    require("./crud/post/post.php");
}else if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    if (isset($_GET["id"])){
        require("./crud/get/get_by_id.php");
    }else if (isset($_GET["product"])){
        require("./crud/get/get_by_product.php");
    }else if (isset($_GET["search"])){
        require("./crud/get/search.php");
    }else{
        require("./crud/get/get_all_products.php");
    }
}else if ($_SERVER['REQUEST_METHOD'] == 'PUT'){
    require("./crud/put/put.php");
}else if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET["id"])){
    require("./crud/delete/delete.php");
}else{
    json_encode("Method not allowed");
}