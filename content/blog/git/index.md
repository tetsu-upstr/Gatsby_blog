---
title: Gitの基本操作（バージョン管理）
date: "2019-12-26T05:39:03.284Z"
description: "この記事では、主にGitやGitHubについて解説しています。初心者向けにGitによるバージョン管理のアウトプットをかねてまとめているので参考にしてください。"
---

チーム開発において必須となる「Git」。

当記事では、Gitの運用方法についてまとめます。
## Gitの基本コマンド
Gitは、Macならターミナル を使用して操作します。

個人開発の場合でも、過去のバージョンに戻ることができて便利なGit。

現場では使いこなせないと話にならないという事で、

プログラミング学習においてのアウトプットは全てGitを使って行うようにしています。

Gitによるバージョン管理の流れは、下記の通りです。
### 1.リモートリポジトリからCloneする
```
$ cd ディレクトリパス
$ git clone URL
```
最初に、cdコマンドでリポジトリを作成したいディレクトリに移動します。

cloneコマンドでリモートリポジトリのURLを指定します。

すでにリポジトリ内に存在するファイルが作業ディレクトリ（ワークツリー）にコピーされます。

### 2.ローカルリポジトリの作成
```
$ git init
```
initコマンドを実行すると「.git」というローカルリポジトリをディレクトリに作成します。

例えば、testディレクトリでgit initを実行すると、下記のようになります。
```
~/D/test ❯❯❯ git init
Initialized empty Git repository in /Users/tetsu/Desktop/test/.git/
```
「.git」のフォルダが生成され、ステージングエリアとローカルリポジトリという作業領域が準備されます。

対象ディレクトリをGitの管理下に置くことができました。
### 3.ファイルをステージングエリア（インデックス）に登録
```
$ git add ファイル名
```
ステージングエリアとは、commitしたい変更ファイルを置いておく場所です。
$ git add . とするとディレクトリ内の全ファイルを一度に登録できます。
### 4.ファイルの変更をローカルリポジトリに登録
```
$ git commit --m "変更点、変更理由の記述"
```
commitは、ファイルをローカルリポジトリに記録するコマンドです。
※ --m　を忘れるとデフォルトのエディターとしてVimが立ち上がります。

コミットメッセージ入力後に :wq で保存・終了します。
### 5.リモートリポジトリにpushする
```
git remote add origin https://github.com/ユーザー名/リモートリポジトリ名.git
```
一番最初は、「.Gitファイル」をリモートリポジトリに関連付けします。
```
$ git push -u origin master
```
2回目以降は上記の簡略化したコマンドで、GitHub上にあるリモートリポジトリに

commitとしたファイルをpush（アップロード）できます。

ちなみに「origin」とは「リモートリポジトリ」のエイリアスを指します。
```
$ git push origin master
```
pushコマンドで、GitHubのリモートリポジトリに変更ファイルをアップロードすることができます。
## Gitの確認コマンド
次に、各コマンドに対する実行結果を確認する方法をみてみましょう。
### 1.Gitの現在の状況を確認
```
$ git status
```
Gitの様々な状況をまとめて確認できます。
```
On branch master

No commits yet

Untracked files:
  (use "git add ..." to include in what will be committed)

	test.html

nothing added to commit but untracked files present (use "git add" to track)
```
### 2.commitの状況を確認
```
$ git log
```
commitの履歴を確認するコマンドです。
```
commit c08d7124cda5f512c7af2a3c67252f910b439bf5 (HEAD -&gt; master)
Author: ユーザ名 &lt;xxxxx@gmail.com&gt;
Date:   Sun Dec 29 10:45:34 2019 +0900

    create test.html
```
commitの回数が増えて見にくいときは、git log --oneline とすることで1行ずつのスッキリとした表示にできます。
```
~/D/test ❯❯❯ git log --oneline
c08d712 (HEAD -&gt; master) create test.html
```
### 3.ファイルの差分を確認
```
$ git diff
```
diffは、ブランチをマージする前にファイルの差分を確認するためのコマンドです。
オプションを指定する事で様々な状態の差分を確認することができます。
### 4.リモートリポジトリURLを確認
```
$ git remote -v```
<p class="p1">正常に登録されていれば、リモートリポジトリのURLを返します。</p>

## Gitの削除コマンド
```
$ git rm ファイル名
```
git rm でローカルリポジトリのファイルを削除できます。
## ブランチの運用
ブランチとは、ひとつのファイルをブランチ（枝）で分岐させて作業するための機能です。

チーム開発において、複数人が同時並行でファイルを変更する際に役立ちます。
### 1.ブランチの作成
```
$ git branch ブランチ名
```
初期状態は、ブランチが「master」となっています。

Gitは、基本的に「masterが一番正しく、最新のものである」という状態で運用します。
### 2.ブランチの移動
```
$ git checkout ブランチ名
```
checkoutは、ブランチを切り替えるコマンドです。
```
$ git branch
```
現在のブランチを確認することができます。
```
~/D/test ❯❯❯ git branch
* master
```
「 * 」がついているのが現在のブランチです。

ブランチで作成・変更したファイルを全てcommitを完了してから、masterにマージします。
```
git checkout master```
masterに対して、マージしたいブレンチ名をコマンドで打ちます。
```
git merge [ブランチ名]```
マージの衝突（CONFLICT）が起きなければ、マージ完了です。
masterが最新のものになっているか確認してください。

もしコンフリクトエラーになってしまった場合は、[こちら](https://appuals.com/how-to-fix-git-error-you-need-to-resolve-your-current-index-first/)

のサイトが参考になりましたのでご参照ください。