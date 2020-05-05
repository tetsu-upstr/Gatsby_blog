---
title: Gatsbyブログでのfontawesomeを使い方
date: "2020-05-05T06:55:03.284Z"
description: "react-fontawesomeについて解説します。"
---

Gatsbyブログでfntawesomeを使用するには、

「[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)」を設定します。

## インストール

nmpでインストールします。

```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome

$ npm i --save @fortawesome/free-brands-svg-icons
$ npm i --save @fortawesome/free-regular-svg-icons
```

## 使い方

Reactコンポーネントで下記のように記述します。

```
// fontawesomeの読み込み
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const WorksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section>
        <h3>1.カフェレストランサイト</h3>
        <p>架空の飲食店サイトを作成しました。</p>
        <p><a href="https://upstr.me/cafe/index.html"><FontAwesomeIcon icon={faCoffee} />cafe</a></p>

```
