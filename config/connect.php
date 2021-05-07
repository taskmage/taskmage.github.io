<?php

$connect = mysqli_connect(host: 'localhost', user: 'root', password: '', database:'');

if (!$connect) {
  die ('Error');
}