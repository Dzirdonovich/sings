<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <link rel="stylesheet" href="./index.css">
    <title>Добро пожаловать!</title>
  </head>
  <body>

    <form class="form__quadrat" action="index.php" method="get">
      <input type="radio" name="data_input" value="9">9</input>
      <input type="radio" name="data_input" value="16">16</input>
      <input type="radio" name="data_input" value="25">25</input>
      <input type="submit" name="" value="Начать">
    </form>




<?php

function random($randMax, $randArray){
  $randArray = array();
  while(true){
    $rand = rand(0, $randMax);
    if(!in_array($rand, $randArray)){
      $randArray[] = $rand;
      if(sizeof($randArray)+1 > $randMax){
        break;
      }
    }
  }
  return $randArray;
}

function arrayPlace($maxCount){
  $arrayPlace = array();
  for ($i=0; $i <$maxCount ; $i++) {
    $arrayPlace[] = $i;
  }
  return $arrayPlace;
}


$current = $_GET['data_input'];

switch ($current) {
  case '9':

  $array = array(
    random(9, $randArray), arrayPlace(9)
);



  for ($i=0; $i <8 ; $i++) {

    $quadrat__item = $quadrat__item.'<div id = "'.$array[1][$i].'" style="height: 165px; width: 165px;" class="quadrat__item">'.$array[0][$i].'</div>';



  };

  $block = "block";

    echo '<div class="game">'.$quadrat__item.'<div id = "9" style="height: 165px; width: 165px;" class="quadrat__item ">

    </div>'.'

    </div>';
    break;

    case '16':
    for ($i=0; $i <16 ; $i++) {
      $quadrat__item = $quadrat__item.'<div style="height: 124px; width: 124px; " class="quadrat__item">

            </div>';

    };

      echo '<div class="game">'.$quadrat__item.'

      </div>';
      break;
      case '25':
      for ($i=0; $i <25 ; $i++) {
        $quadrat__item = $quadrat__item.'<div style="height: 99px; width: 99px; " class="quadrat__item">

              </div>';

      };

        echo '<div class="game">'.$quadrat__item.'

        </div>';
        break;
  default:
    // code...
    break;
}
?>
  <script src="./index.js" type="text/javascript">

  </script>
  </body>


</html>
