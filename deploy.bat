@echo off
title Immigration Hub - Vercel Setup & Deploy
color 0b
echo ====================================================================
echo   IMMIGRATION HUB - VERCEL INTERACTIVE DEPLOYMENT
echo ====================================================================
echo.
echo This script launches Vercel in your interactive terminal.
echo When prompted, follow these steps:
echo.
echo 1. Set up and deploy "~/Desktop/immigration hub"? -- Type "Y" and press Enter.
echo 2. Which scope do you want to deploy to? -- Select "diablo123alif-8600" and press Enter.
echo 3. Link to existing project? -- Type "N" and press Enter.
echo 4. What's your project's name? -- Press Enter to accept the default (immigration-hub).
echo 5. In which directory is your code located? -- Press Enter to accept "./".
echo 6. Want to modify these settings? -- Type "N" and press Enter.
echo.
echo ====================================================================
echo.
npx vercel
echo.
echo ====================================================================
echo Setup complete! You can now run deploy_prod.bat to deploy to production.
echo ====================================================================
pause
