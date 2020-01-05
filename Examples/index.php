<?php

    declare(strict_types = 1);
    include "includes/class-autoload.inc.php";

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
      <!-- This PHP is to
      <?php
        $person1 = new Person("Bob", "BLue", 34);

        echo $person1->getPerson();
        echo "<br>";
        var_dump($person1);
       ?> -->

<!-- Calculator App -->

<form action="./includes/calc.inc.php" method="post">
  <p>My Own Calculator!</p>
  <input type="number" name="num1" placeholder="First Number">
  <select name="oper">
    <option value="add">Addition</option>
    <option value="sub">Subtraction</option>
    <option value="div">Division</option>
    <option value="mul">Multiplication</option>

  </select>

  <input type="number" name="num2" placeholder="Second Number">
  <button type="submit" name="submit">Calculate</button>
</form>




  </body>
</html>

<?php
    //require "footer.php";
 ?>
