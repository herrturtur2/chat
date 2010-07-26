<?php

// turn on error reporting
error_reporting(E_ALL);
set_ini("error_reporting", true);

// open database 
$user = 'root';
$password = 'tuerklinke010';
$database = 'chat';

$conn = mysql_connect(localhost, $user, $password);
@mysql_select_db($database) or die("Unable to select database.");

// select all online users from table user
$query = "select id, name from user";
$result = mysql_query($query);

// construct json string containing an array of all users
echo '{"persons": [';
$first = True;
while($row = mysql_fetch_array($result)){
  if (!$first){
    echo ', ';
  }
  echo '{"id": "' . $row['id'] . '", "name": "' . $row['name'] . '"}';
  $first = False;
}
echo ']}';

mysql_close($conn);
?>