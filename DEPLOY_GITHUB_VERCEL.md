# Food Cartell — GitHub + Vercel Deployment

## 1) Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## 2) Upload to GitHub

Create a new empty repository on GitHub, then from this project folder:

```bash
git init
git branch -M main
git add .
git commit -m "Final Food Cartell website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Do **not** commit passwords, API keys, `.env` files, or other secrets.

## 3) Deploy on Vercel from GitHub

1. Sign in to Vercel.
2. Click **New Project**.
3. Import your GitHub repository.
4. Framework: **Vite** (normally auto-detected).
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Install Command: `npm install`.
8. Click **Deploy**.

`vercel.json` is included because this project uses React Router. It rewrites unknown routes to `/index.html`, so routes such as `/menu` and `/admin/dashboard` continue to work after a direct refresh.

## 4) Future updates

After changing the code:

```bash
git add .
git commit -m "Update website"
git push
```

If the GitHub repository is connected to Vercel, Vercel automatically creates a new deployment from the push.

## 5) Optional Vercel CLI

From the project root:

```bash
npm i -g vercel
vercel
```

For production:

```bash
vercel --prod
```
