<?php

require_once 'config/connect.php';

$id = $_GET['id'];

mysqli_query($connect, query:"DELETE FROM `person` WHERE `person` . `id` = '$id'");

header('Location: /');