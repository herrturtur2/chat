<?php
// 1. Creates all the necessary tables if they do not yet exist.
// 2. Adds the user to the database table.


// enable error reporting
error_reporting(E_ALL);
ini_set("error_reporting", 1);


// lots of stuff todo
// open the database
$user = 'root';
$password = 'tuerklinke010'
$database = 'chat';
mysql_connect('localhost', $user, $password);
@mysql_select_db($database) or die("Unable to select database");

// insert $_POST['username'] into the user table
// the client is responsible for not inserting duplicate values...
// this will likely change later
$query = "insert into user (id, name) values (NULL, '" . $_POST['username'] . "')";
mysql_query($query);

?>