# Veblen Launch System

AI-powered content workflow platform for short-form video content creation.

## 🚀 Deploy to Vercel (Easiest - 5 minutes)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign Up" and create a free account

### Step 2: Upload This Project to GitHub
1. Log into GitHub
2. Click the "+" icon in the top right → "New repository"
3. Name it: `veblen-launch-system`
4. Keep it Public (free) or Private (also free)
5. Click "Create repository"
6. On the next page, click "uploading an existing file"
7. Drag ALL the files from this folder into the upload area
8. Click "Commit changes"

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Add New..." → "Project"
5. Find `veblen-launch-system` and click "Import"
6. Leave all settings as default
7. Click "Deploy"
8. Wait 1-2 minutes for it to build
9. Done! You'll get a URL like: `veblen-launch-system.vercel.app`

## 📁 Project Structure

```
veblen-launch-app/
├── pages/
│   ├── _app.js        # App wrapper
│   ├── globals.css    # Styles
│   └── index.js       # Main app
├── package.json       # Dependencies
├── next.config.js     # Next.js config
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.js  # PostCSS config
└── README.md          # This file
```

## 🎮 Demo Mode

This version runs in Demo Mode with mock data. It simulates:
- Website analysis
- Research generation (pillars, hooks, topics, pain points)
- Script writing (8 full scripts)
- Filming guide (shot lists, locations, props)
- Content calendar (4 weeks)

## 🔧 To Enable Real AI

To connect to Claude AI for real generation:
1. Get an API key from https://console.anthropic.com
2. Add it as an environment variable in Vercel:
   - Go to your project → Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = your-key-here
3. Update the code to use the API key

## 💡 Features

- ✅ 6-step content workflow
- ✅ Website analyzer
- ✅ Hook bank generator
- ✅ Script writer with SPCL format
- ✅ Filming guide with shot lists
- ✅ 4-week content calendar
- ✅ JSON export
- ✅ Orange/Black/White branding

## 📞 Support

Built by Veblen. For support, contact your account manager.
