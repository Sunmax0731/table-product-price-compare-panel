export const productProfile = {
  "repository": "table-product-price-compare-panel",
  "title": "表・商品・価格比較パネル",
  "domain": "ChromeExtension",
  "hostApp": null,
  "rank": 40,
  "ideaNo": 3,
  "overview": "検索結果、表、商品候補、価格履歴、比較軸、購入保留理由を同じサイドバーで管理する。",
  "problem": "商品や情報の比較理由がブラウザ履歴やメモに散らばり、後から判断しにくい。",
  "differentiation": "価格だけでなく、比較軸と保留理由をローカルに残せる。",
  "publish": "Chrome Web Store",
  "surface": "Chrome拡張 Side Panel + compare table",
  "entity": "comparison candidate",
  "requiredFields": [
    "id",
    "title",
    "source",
    "price",
    "criteria",
    "decisionReason",
    "owner",
    "acceptance"
  ],
  "warningField": "priceUpdatedAt",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
