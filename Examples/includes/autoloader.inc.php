<?php
#When a class is initiated it triggers the below spl_autoload_register and passes in the class
#name to the function listed 
spl_autoload_register('myAutoLoader');

function myAutoLoader($className)
{
  $path = "classes/";
  $extension = ".class.php";
  $fullPath = $path . $className . $extension;

  include $fullPath;

  #Error Handler
  if (!file_exists($fullPath)) {
    return false;
  }

}

 ?>
