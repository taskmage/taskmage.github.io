<?php

require_once '../config/connect.php';

$email = $_POST['email'];

mysqli_query($connect, query:"INSERT INTO `person` (`id`,`email`,`date`) VALUES (NULL, `$email`)");

header('Location: /');