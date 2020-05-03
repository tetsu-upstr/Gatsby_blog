import React from "react"
import Layout from "../components/layout"

const WorksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>

        こちらでは、作成した成果物を公開しています。

      <h2>作成したWebサイト・アプリケーション</h2>

      <h3>2.鮮度管理アプリ</h3>
      賞味期限を管理するためのwebアプリケーションです。

      「CRUD」の練習で作成。

      <a href="https://upstr.me/freshness/login.php">KEEP FRESH</a>
      <h4>使用技術</h4>
      <ul>
        <li>PHP</li>
        <li>MySQL</li>
      </ul>
      <h4>実装機能</h4>
      <ul>
        <li>商品の登録、編集、削除（PHP）</li>
        <li>ログイン機能（PHP）</li>
        <li>商品検索機能（MySQL）</li>
      </ul>

    </Layout>
  )
}

export default WorksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`