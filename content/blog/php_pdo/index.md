---
title: PHP：PDOによるDB接続
date: "2020-01-10T04:34:03.284Z"
description: "この記事では、PHPのPDOによるDB接続解説しています。"
---

PHPにおけるデータベース接続について解説します。

## PDOとは？

PDOとは、PHP Data Objectsの略です。

PDOによるDB接続のメリットは、データベースの種類やバージョンの違いを問わず使用できることです。

仕様変更によるデータベースの変更や、アップデート等にも対応可能です。

### PDO実装サンプル

下記のサンプルコードは、PDOの使用例です。

```
try {
      $pdo = new PDO(
        'mysql:dbname=データベース名;host=ホスト名;charset=utf8mb4',
        'ユーザ名',
        'パスワード');
    
  // PDOのエラーレポートを表示
  $pdo-&gt;setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
} catch(PDOException $e) {
  echo 'DB接続エラー: ' . $e-&gt;getMessage();
  var_dump($e);
}
```

ホスト名は、ローカル環境の場合は「localhost」、ユーザ名は「root」、パスワードは「'(空白)'」となります。
charset=の後には、文字コードが入ります。

基本的には、「utf8」でOKで、値として絵文字や中国語なども許容するなら「utf8mb4」を記述します。

```
      // ローカル接続
      $pdo = new PDO(
        'mysql:dbname=データベース名;host=localhost;charset=utf8mb4',
        'root',
        '');
```

PDOの詳しい使い方は、<a href="https://www.php.net/manual/ja/class.pdo.php">PHP公式マニュアル</a>を参照してください。

### データベースの値を取得

PDOで接続したデータベースからテーブルの値を表示する方法は以下の通りです。

```
$sql = "SELECT * FROM items ORDER BY date";

// 1.PDOのprepareメソッドでSQL文を準備
$stmt = $pdo-&gt;prepare($sql);

// 2.PDOstatementメソッドで使用するプレースホルダに紐付け
$stmt-&gt;bindValue(':name', $name, PDO::PARAM_STR);
$stmt-&gt;bindValue(':useId', $userId, PDO::PARAM_INT);

// 3.prepareで準備されたPDOstatementオブジェクトを実行
$stmt-&gt;execute();
```

PDOでデータを取得するには、まずSQL文をprepareメソッドでプリペアドステートメントに変換します。

<!-- 入力値をPOSTで取得してSQL文を

SQLインジェクション攻撃とは

悪意を持った不正なSQL文を入力されることで、データの漏洩や破壊されてしまうことを「SQLインジェクション攻撃」といいます。

対策
エスケープ処理 -->