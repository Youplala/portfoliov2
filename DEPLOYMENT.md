# Deployment Setup

This project automatically deploys to Cloudflare Pages via GitHub Actions on every push to `main`.

## Initial Setup

### 1. Get Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use the "Edit Cloudflare Workers" template or create custom token with:
   - Permissions: `Account - Cloudflare Pages - Edit`
4. Copy the token

### 2. Get Cloudflare Account ID

1. Go to https://dash.cloudflare.com/
2. Select your domain or go to Pages
3. Copy the Account ID from the URL or right sidebar

### 3. Add GitHub Secrets

1. Go to your GitHub repo: https://github.com/Youplala/portfoliov2
2. Go to Settings → Secrets and variables → Actions
3. Click "New repository secret" and add:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [Your API token from step 1]
4. Click "New repository secret" again and add:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: [Your Account ID from step 2]

### 4. Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com/ → Pages
2. Click "Create a project"
3. Select "Direct Upload" or connect your GitHub repo
4. Project name: `portfoliov2` (must match the workflow file)
5. Configure custom domain if desired

## Deployment

Once setup is complete:
- Every push to `main` branch triggers automatic deployment
- Build time: ~1-2 minutes
- You can also manually trigger deployment from the Actions tab

## Custom Domain

To add a custom domain (e.g., brosset.li):
1. Go to Cloudflare Pages → Your Project → Custom domains
2. Click "Set up a custom domain"
3. Follow the DNS configuration steps

## Build Details

- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Node Version**: 20
- **Package Manager**: pnpm v10
