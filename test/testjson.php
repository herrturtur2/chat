<?php
error_reporting(E_ALL);
ini_set("error_reporting", 1);

$json = '{"a":1, "b":2}';
var_dump(json_decode($json));

echo '<br />';

$obj = json_decode($json);
echo $obj->{'a'} . '<br />';
echo $obj->{'b'};
?>