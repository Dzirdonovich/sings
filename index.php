


<!DOCTYPE html>
<html lang='ru'>

<head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <title>Добро пожаловать!</title>

</head>

<body>
  <form class="form" action="index.php" method="get">
    <input class="form__input" type="text" name="data" value="" placeholder="введите количество знаков после запятой">
    <input class="form__btn" type="submit" name="" value="отправить">

    <?php

    if (!function_exists('pi'))   {
      function pi()  {
        $startNum = (4-(4/3)+(4/5));
        for ($i=7; $i <100000 ; $i=$i+4) {
          $startNum - (4/$i)+(4/$i+2);
        }
        return  $startNum;
      }
    }

    $pi = pi();



    if (!function_exists('currentpi')){
      function currentpi($piInput, $precision) {
        $currentpi = mb_substr($piInput, 0, 2+$precision);
        return $currentpi;
      }
    }

    $current = $_GET['data'];



    echo currentpi($pi, $current);
     ?>
  </form>

</body>

</html>
