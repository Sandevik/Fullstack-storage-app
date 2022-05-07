<?php
$sql_host = "localhost";
$sql_user = "root";
$sql_pass = "";
$sql_db = "lager-db";

$connection = mysqli_connect($sql_host, $sql_user, $sql_pass, $sql_db);
if (!$connection){
    die("Could not connect to Sql server.");
}
//name quantity artikelnummer weight/size lastupdated expiraryDate image type 