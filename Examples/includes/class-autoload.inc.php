<?php
#When a class is initiated it triggers the below spl_autoload_register and passes in the class
#name to the function listed
spl_autoload_register('myAutoLoader');

function myAutoLoader($className)
{
  // This is the old autoloader code.
  // $path = "classes/";
  // $extension = ".class.php";
  // $fullPath = $path . $className . $extension;
  //
  // include $fullPath;
  //
  // #Error Handler
  // if (!file_exists($fullPath)) {
  //   return false;
  // }

  // New Code.

  $url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

  if (strpos($url, 'includes') !== false) {
    // code...

    $path = '../classes/';
  }
  else {
    $path = 'classes/';
  }
  $extension = '.class.php';
  require_once $path . $className . $extension;

}

 ?>
