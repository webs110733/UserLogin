<?php

/**
 *
 */
class Person
{

  public $name;
  public $eyeColor;
  public $age;

  //Method
  public function setName($newName)
  {
    $this->name = $newName;

  }

  public function __construct($name, $eyeColor, $age)
  {
    $this->name = $name;
    $this->eyeColor = $eyeColor;
    $this->age = $age;

  }

  public function getPerson()
  {
    $person = $this->name . " is " . $this->age . " years old!";
    return $person;

  }

}



 ?>
