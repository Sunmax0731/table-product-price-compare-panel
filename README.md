# table-product-price-compare-panel

表・商品・価格比較パネル は、検索結果、表、商品候補、価格履歴、比較軸、購入保留理由を同じサイドバーで管理する。

## 何を解決するか

商品や情報の比較理由がブラウザ履歴やメモに散らばり、後から判断しにくい。

## 差別化

価格だけでなく、比較軸と保留理由をローカルに残せる。

## 公開先

- Chrome Web Store

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Chrome拡張 Side Panel + compare table の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/table-product-price-compare-panel-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\ChromeExtension\created_idea_003_table-product-price-compare-panel`
- idea ZIP: `D:\AI\ChromeExtension\created_idea_003_table-product-price-compare-panel\idea_003_table-product-price-compare-panel.zip`
- PICKUP rank: 40
- Domain: ChromeExtension
