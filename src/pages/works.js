import React from "react"
import Layout from "../components/layout"

const WorksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>

      <p>こちらでは、作成した成果物を公開しています。</p>

      <h2>作成したWebサイト・アプリケーション</h2>

      <section>
        <h3>1.カフェレストランサイト</h3>
        <p>架空の飲食店サイトを作成しました。</p>
        <p><a href="https://upstr.me/cafe/index.html"><FontAwesomeIcon icon="coffee" />demo cage resutaurant</a></p>
        <h4>実装機能</h4>
        <ul>
          <li>レスポンシブデザイン（CSS）</li>
          <li>ハンバーガーメニュー（JQuery）</li>
          <li>ページスクロール（JQuery）</li>
          <li>コンタクトフォーム（PHP）</li>
        </ul>
      </section>

      <section>
        <h3>2.鮮度管理アプリ</h3>
        <p>賞味期限を管理するためのwebアプリケーションです。</p>
        <p>「CRUD」の練習で作成しました。</p>
        <p><a href="https://upstr.me/freshness/login.php">KEEP FRESH</a></p>
        <p><a href="https://upstr.me/freshness/login.php">Git Hub</a></p>
        <img src="./img/keep_fresh_demo.png"></img>
        <h4>実装機能</h4>
        <ul>
          <li>商品の登録、編集、削除（PHP）</li>
          <li>ログイン機能（PHP）</li>
          <li>商品検索機能（MySQL）</li>
        </ul>
      </section>

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