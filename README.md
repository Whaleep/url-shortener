# 短網址產生器 URL shortener
一個用 Express 和 MongoDB 所建立簡單的餐廳清單網路應用程式。

## 特色 Features
- 可以在首頁表單輸入原始網址，送出表單之後，畫面會回傳格式化後的短網址
- 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入網頁提供的短網址，瀏覽器就會導向原本的網站
- 使用者可以按 Copy 來複製縮短後的網址


## 環境建置 Environment Setup

1. nvm & Node.js
2. nodemon
3. MongoDB

## 安裝 Installing

1. 在終端機輸入指令 Clone 此專案至本機電腦
```
git clone https://github.com/Whaleep/url-shortener
```
2. 進入專案目錄
```
cd url-shortener
```
3. 安裝相關套件
```
npm install
```
4. 啟動專案
```
npm run dev
```
5. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
The app is running on http://localhost:3000
```
