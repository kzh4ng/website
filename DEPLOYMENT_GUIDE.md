# GitHub Actions Deployment Setup Guide

This guide will help you set up automated deployment for your website using GitHub Actions.

## What This Does

Every time you push to the `main` (or `master`) branch, GitHub Actions will:
1. Build your React app
2. Deploy it to GitHub Pages
3. Make it available at https://kevin-zhang.com

## Setup Instructions

### Step 1: Merge the Workflow File

```bash
cd /Users/kevinzhang/workspace/website

# Merge my changes into your main branch
git checkout main
git merge claude/add-media-content-011CUjc8ZLa9RhPsPHbzVdng

# Push to GitHub
git push origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub: https://github.com/kzh4ng/website
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 3: Verify GitHub Actions Permissions

1. In your repo, go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### Step 4: Trigger Your First Deployment

You have two options:

**Option A: Push a change**
```bash
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

**Option B: Manual trigger from GitHub**
1. Go to **Actions** tab in your repo
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Click **Run workflow** (green button)

### Step 5: Monitor the Deployment

1. Go to the **Actions** tab in your GitHub repo
2. You'll see your workflow running
3. Click on it to see detailed logs
4. Wait for the green checkmark ✅

### Step 6: Visit Your Site

Once deployment completes (usually 2-3 minutes), visit:
- https://kevin-zhang.com
- Or: https://kzh4ng.github.io/website

## Workflow Features

### Automatic Deployment
- **Triggers**: Pushes to `main` or `master` branch
- **Manual**: Can trigger from GitHub Actions tab

### Build Verification
- Checks that build directory exists
- Lists all generated files
- Fails fast if build errors occur

### Smart Caching
- Caches npm dependencies for faster builds
- Typical build time: 1-2 minutes

### Custom Domain
- Automatically adds CNAME file with `kevin-zhang.com`
- Preserves custom domain settings

## Troubleshooting

### Build Fails
Check the Actions log for errors. Common issues:
- Missing dependencies → Run `npm install` locally first
- TypeScript errors → Fix in code
- Linting errors → Run `npm run lint` locally

### Deployment Fails
- Check workflow permissions (Step 3)
- Ensure `gh-pages` branch exists (it will be created automatically)

### Site Not Updating
- Clear browser cache (Cmd+Shift+R on Mac)
- Wait 1-2 minutes for GitHub Pages to refresh
- Check GitHub Pages settings (Step 2)

## Testing Locally

Before pushing, test your build locally:

```bash
cd client
npm run build
npx serve -s build
```

Visit http://localhost:3000 to preview.

## Removing gh-pages Package

Since you're now using GitHub Actions, you can remove the problematic `gh-pages` package:

```bash
cd client
npm uninstall gh-pages
```

Then remove the `deploy` script from `client/package.json`:
- Delete the line: `"deploy": "gh-pages -d build"`
- Delete the line: `"predeploy": "npm run build"`

## Workflow File Location

The workflow file is located at:
```
.github/workflows/deploy.yml
```

You can edit it to customize the deployment process.

## Status Badge (Optional)

Add this to your README to show build status:

```markdown
![Deploy](https://github.com/kzh4ng/website/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

## Next Steps

Now that deployment is automated, you can:
1. Focus on building features
2. Push to `main` whenever ready to deploy
3. No more manual `npm run deploy` errors!

---

**Questions?** Check the Actions tab logs for detailed information about each deployment.
