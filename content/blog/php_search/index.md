---
title: PHP：データベース検索機能の実装
date: "2020-05-03T14:04:03.284Z"
description: "この記事では、PHPの検索機能の実装について解説しています。"
---

PHPの検索機能の実装について解説します。

## PHPのデータベース検索

全体の流れとしては、下記のような形です。

```
  require './connect.php'; // PDO接続をrequire

  // 指定した名前の変数を外部から受け取りフィルタリングする
  // 空だった場合はnull、値が入っている場合は送信された値になる
  $name = filter_input(INPUT_POST, 'name');
  $store = filter_input(INPUT_POST, 'store');
  $start = filter_input(INPUT_POST, 'start');
  $end = filter_input(INPUT_POST, 'end');

  if (!isset($data['search'])) {

    // 基本SQLは「WHERE 1」で全件表示にして検索値によって条件を足す
    $sql = "SELECT * , DATE_FORMAT(month, '%Y年%m月') as sale_month FROM sales_result WHERE 1 ";
    
    // 検索文字を投入する為の箱を用意
    $data = [];

    // 品名検索
    if (!empty($name)) {
      $sql .= "AND item_name LIKE ? ";
      $data[] = "%".$name."%";
    }

    // 店名検索
    if (!empty($store)) {
      $sql .= "AND store LIKE ? ";
      $data[] = "%".$store."%";
    }

    // 集計期間の指定
    if (!empty($start)) {
      $sql .= "AND month >= ? ";
      $data[] = $start;
    }

    if (!empty($end)) {
      $sql .= "AND month <= ? ";
      $data[] = $end;
    }

    // データがない場合は検索しない
    if(count($data) === 0) {
      $sql .= "AND 0";
    }

    // デフォルトの並びは売上金額の降順（販売月と商品名でグループ化）
    $sql .= " GROUP BY sale_month, item_name ORDER BY sale_month ASC";

  }

  $result = $pdo->prepare($sql);
  $result->bindValue(':item_name', $name, PDO::PARAM_STR);
  $result->bindValue(':store', $store, PDO::PARAM_STR);
  $result->execute($data);
```

### 条件によってSQL文を変更

基本となるSQLには、「WHERE 1」を付け加える事で全ての条件を満たす（全件表示）ようにしています。

```
// 基本SQLは「WHERE 1」で全件表示にして検索値によって条件を足す
    $sql = "SELECT * , DATE_FORMAT(month, '%Y年%m月') as sale_month FROM sales_result WHERE 1 ";
```

inputに入力があったら（空でなかったら）、全件表示の基本SQLに「.=」によって、
LIKE演算子 + POSTされた値をWHERE構文の条件式に追記するようにしています。

```
// 品名検索
    if (!empty($name)) {
      $sql .= "AND item_name LIKE ? ";
      $data[] = "%".$name."%";
    }

    // 店名検索
    if (!empty($store)) {
      $sql .= "AND store LIKE ? ";
      $data[] = "%".$store."%";
    }

    // 集計期間の指定
    if (!empty($start)) {
      $sql .= "AND month >= ? ";
      $data[] = $start;
    }
```

### 検索結果の件数を表示

PDOStatementクラスのメソッド「rowCount()」を利用して、

検索結果を表示することができます。

```
  // ヒット件数を表示
  $count = $result->rowCount();
  if ($count > 0) {
    echo '<p class="table-title">' . $count.'件のデータが登録されています。</p>';
  }
```

