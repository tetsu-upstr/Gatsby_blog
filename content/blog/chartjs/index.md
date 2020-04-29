---
title: Chart.jsで「グラフ」を簡単に描く
date: "2020-01-04T17:50:03.284Z"
description: "この記事では、JavaScriptのグラフ描画ライブラリ「Chart.js」について解説しています。"
---

JavaScriptのライブラリ「Chart.js」でグラフを表現する方法について確認します。

### Chart.jsとは

「Chart.js」とは、簡単に様々なグラフやチャートが表現できるオープンソースのJavaScriptライブラリです。
棒グラフや折れ線グラフ、レーダー、バブルチャートなど様々なグラフタイプを使用することができます。

### 利用方法
「Chart.js」は、GitHubからダウンロードするか、CDNを使うことができます。
````
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"&gt;&lt;/script&gt;
````

このように、シンプルで見やすいグラフを描画できます。

<p class="codepen" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="tetsu-k" data-slug-hash="LYEOXxv" data-pen-title="LYEOXxv">See the Pen <a href="https://codepen.io/tetsu-k/pen/LYEOXxv">
LYEOXxv</a> by tetsu (<a href="https://codepen.io/tetsu-k">@tetsu-k</a>)
on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

htmlは、canvasタグを埋め込むだけでOKです。

### HTML

CDNでscriptを読み込み、canvasタグを埋め込むだけなので簡単です。

````
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>graph</title>
  <link rel="stylesheet" href="style.css">
  <!-- Chart.js CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>
</head>
<body>
  <div class="box">
    <canvas id="graph"></canvas>
  </div>
  <script src="main.js" defer></script>
</body>
</html>
````

### JavaScript
「label」でグラフのラベル、「datasets」でデータの数値をそれぞれ設定できます。

グラフカラーは、「backgroundColor」で変更します。

````
"use strict";

//「月別データ」
var mydata = {
labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
datasets: [
  {
    label: '今年',
    backgroundColor: "rgba(0,0,255,0.5)",
    data: [65, 59, 80, 81, 56, 55, 48, 30, 12, 42, 38, 56],
  },
  {
    label: '昨年',
    backgroundColor: "rgba(0,0,255,0.1)",
    data: [42, 49, 50, 74, 76, 45, 34, 67, 32, 22, 54, 26],
  }
]
};

//「オプション設定」
var options = {
  title: {    
  display: true,
  text: 'サンプルチャート'
  }
};

var canvas = document.getElementById('graph');
var chart = new Chart(canvas, {

type: 'bar',  //グラフの種類
data: mydata,  //表示するデータ
options: options  //オプション設定

});
````

「type：」を変更することで、折れ線グラフなど他のグラフに変更することも可能です。

optionsを定義することでグラフの設定を細かく変更することができます。
```
let options = {
    scales: {
    //  縦軸の設定
      yAxes: [{
        ticks: {
        suggestedMin: 0, // 最小値と最大値の設定
        suggestedMax: 400, // suggestedMax数値が超えても調整してくれる
        stepSize: 100, // 100刻みにしてくれる
        callback: function(value, index, values) {
           return 'JPY ' + value; // 単位を付けられる
        }
        },
        id: 'sales_axes',
        type: 'linear',
        position: 'left'
      }]
    },
    // グラフタイトルの設定
    title: { 
      display: true,
      text: 'Annual Salse',
      fontSize: 18,
      position: 'left' // 横に配置も可能（デフォルトは上）
    },
    legend: {
    position: 'right' // 凡例を右に
    display: false // falseで凡例を消す
    }
  };
```