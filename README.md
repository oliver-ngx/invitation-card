# Invitation Card (React)

This is a ready-to-deploy React project for your interactive invitation card.

## Step-by-step (beginner friendly)

### 0) One-time setup on your computer
1. Install **Node.js** (includes npm): https://nodejs.org/en (LTS version).
2. Install **Git**: https://git-scm.com/downloads
3. Create a **GitHub** account: https://github.com/

### 1) Get the project onto your computer
- Unzip this folder somewhere easy (e.g., Desktop).
- Open a terminal in the unzipped `invitation-card` folder.

### 2) Install packages and run locally
```bash
npm install
npm start
```
- Your app opens at http://localhost:3000
- Click around to test pages 1 → 2 → 3.

### 3) Prepare for GitHub
- Create a new *empty* repo on GitHub named **invitation-card**.
- In the terminal (inside this folder), run:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/invitation-card.git
git push -u origin main
```
> Replace `YOURUSERNAME` with your GitHub username.

### 4) Set your homepage for GitHub Pages
- Open `package.json` and change:
```
"homepage": "https://yourusername.github.io/invitation-card"
```
to use **your** username exactly.

### 5) Publish to GitHub Pages
```bash
npm install gh-pages --save-dev
npm run deploy
```
- This command builds the app and publishes to a `gh-pages` branch.

### 6) Get your live link
- Visit: `https://YOURUSERNAME.github.io/invitation-card`
- If it doesn't load: open your repository → **Settings** → **Pages** → set *Branch* to `gh-pages` and *Folder* to `/ (root)`, then Save.

You're done! Share the link with your friend Sub 💌
