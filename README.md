<<<<<<< HEAD
# shopify-contents-pallet
ShopifyでIKEA風コンテンツパレットを再現するテーマセクション（Liquid + CSS + JS）
=======
# Shopify Contents Pallet

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Shopify](https://img.shields.io/badge/platform-Shopify-96bf48)
![Language](https://img.shields.io/badge/code-Liquid%20%2B%20CSS%20%2B%20JS-orange)
[![Author](https://img.shields.io/badge/author-RyohmaU-lightgrey)](https://rnsystem.jp)

---

2024年度 イケアの公式オンラインストア風のコンテンツプレビューデザインです。  
Liquid + CSS + JavaScript でシンプルに実装しています。  
**保守性・運用性を高めるため、カスタムフィールド（メタオブジェクト）の更新のみでデザインが反映される構造**にしています。

---

## 🚀 使用方法

1. `sections/contentspallet01.liquid` をテーマに追加  
2. `assets/contentspallet01_frame.css` をテーマに追加  
3. `assets/contentspallet01_pub.css` をテーマに追加  
4. `assets/contentspallet01_pip.css` をテーマに追加  
5. `assets/contentspallet01.js` をテーマに追加  
6. `templates/index.json` のスキーマ `order` に `contentspallet01` を追加  
7. カスタムフィールド（メタオブジェクト）を定義  
8. テーマエディタでセクションを追加し、反映したいパレットを設定

---

## 💻 完成ビューサンプル

| PCビュー |
|-----------|
PCの完成プレビューサンプルです。
| ![PC Preview01](images/sample_pc.jpg) |
画像内のドットをマウスオーバーしたら詳細ラベルがポップアップします。
| ![PC Preview02](images/sample_pc02.jpg) |

| スマホビュー |
|-----------|
スマホの完成プレビューサンプルです。
| ![スマホ Preview01](images/sample_sm01.jpg) |
| ![スマホ Preview02](images/sample_sm02.jpg) |
画像内のドットをタップしたら詳細ラベルがポップアップします。
| ![スマホ Preview03](images/sample_sm03.jpg) |

---

## 🧩 メタオブジェクト構成

### 🪄 contents_pallet_parent メタオブジェクト定義
![metaobject_contents_pallet_parent](images/metaobject_contents_pallet_parent.jpg)

### 📋 contents_pallet_parent メタオブジェクトサンプル
![metaobject_contents_pallet_parent_sample](images/metaobject_contents_pallet_parent_sample.jpg)

---

### 🧩 contents_pallet_child メタオブジェクト定義
![metaobject_contents_pallet_child](images/metaobject_contents_pallet_child.jpg)

### 📋 contents_pallet_child メタオブジェクトサンプル
![metaobject_contents_pallet_child_sample](images/metaobject_contents_pallet_child_sample.jpg)

---

### 🗺️ contents_pallet_child_location_display_type メタオブジェクト定義
![metaobject_contents_pallet_child_location_display_type](images/metaobject_contents_pallet_child_location_display_type.jpg)

### 📋 contents_pallet_child_location_display_type メタオブジェクトサンプル
![metaobject_contents_pallet_child_location_display_type_sample](images/metaobject_contents_pallet_child_location_display_type_sample.jpg)

---

## 🧑‍💻 作者

**Ryohma U.**  
ポートフォリオ：[https://www.rnsystem.jp](https://www.rnsystem.jp)

---

> 💡 **補足**  
> このコードは教育・学習目的で公開しています。  
> 実運用時は必ずテーマ構成やメタオブジェクト名を各店舗環境に合わせて変更してください。
>>>>>>> f916c8e (Add all Shopify Contents Pallet files)
