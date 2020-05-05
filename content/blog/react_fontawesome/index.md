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

FontAwesomeIconaと利用したいアイコンをインポートします。

```
// fontawesomeの読み込み
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
```

Reactコンポーネントで下記のように記述すればOKです。

```
const WorksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        // { カッコの中にアイコン名が入ります }
        <FontAwesomeIcon icon={faCoffee} />
      </div>

```
