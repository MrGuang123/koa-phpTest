<?php
  namespace app\controllers;
  use Yii;
  use yii\filters\AccessController;
  use yii\web\Controller;
  use yii\web\Response;
  use yii\filters\VerbFilter;
  use app\models\addOne;

  public AddOne extends Controller {
    public function behaviors(){
      // 暂时先写到siteController中，等以后再单独分开
    }
  }
?>