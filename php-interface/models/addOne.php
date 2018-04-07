<?php
  namespace app\models;

  use Yii;
  use yii\base\Model;

  /**
   * 点赞加一功能类
   */
  class AddOne extends Model{
    public $count;

    public function addOne(){
      $count = $this -> getCount()["COUNT"];
      $count++;
      return Yii::$app -> db -> createCommand()->update('thumbs', ['count' => $count], 'username = "ytg"')->execute();

    }

    public function getCount(){
      $username = 'ytg';
      return Yii::$app->db->createCommand("
        SELECT COUNT FROM `thumbs` WHERE username='".$username."'
      ")->queryOne();
    }
  }
?>