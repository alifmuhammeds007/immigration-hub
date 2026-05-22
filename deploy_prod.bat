@echo off
title Immigration Hub - Vercel Production Deploy
color 0a
echo ====================================================================
echo   IMMIGRATION HUB - VERCEL PRODUCTION DEPLOYMENT
echo ====================================================================
echo.
echo Launching Vercel production deployment...
echo.
npx vercel --prod
echo.
echo ====================================================================
echo Production build pushed to Vercel successfully!
echo ====================================================================
pause
