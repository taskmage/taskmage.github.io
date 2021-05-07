<?php

var_dump($_POST)

$email = $_POST['email']
$check = $_POST['checkin']

if (empty($email) || empty($check)) {
  echo 'Error'
} else {
  echo'Your email: $email'
}

require_once 'config/connect.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form</title>
</head>
<style>
  th, td {
    padding: 10px;
  }
  th {
    background: #606060;
    color: #fff;
  }
  td {
    background: #b5b5b5;
  }
</style>
<body>
  <table>
    <tr>
      <th>ID</th>
      <th>Email</th>
      <th>Date</th>
    </tr>

    <?php
      $person = mysqli_query($connect, query:"SELECT * FROM `person`");
      $person = mysqli_fetch_all($person);
      foreach ($person as $person) {
        ?>
        <tr>
          <td><?= $person[0] ?></td>
          <td><?= $person[1] ?></td>
          <td><?= $person[2] ?></td>
          <td><a style="color: red;" href="vendor/delete.php?id=<?= $person[0] ?>">Delete</a></td>
        </tr>

        <?php
      }
    ?>
  </table>
</body>
</html>