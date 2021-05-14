@echo off
title LopeSelfBot Installer   
echo / ---------------------------------------------- /   
echo         LopeSelfBot created by atomkern
echo / ---------------------------------------------- /   
echo Installation des modules...
echo --------------------------------------
cd %~dp0
cmd /c "npm install v11-discord.js chalk esm fs moment"
echo.
echo Fini. 
echo Creation du fichier run.bat pour le LopeSelfBot...
echo ------------------------------------
echo @echo off > run.bat
echo :: created by atomkern (https://github.com/atom1488) >> run.bat
echo title LopeSelfbot >> run.bat
echo :START >> run.bat
echo node -r esm index.js >> run.bat
echo goto START >> run.bat
echo "run.bat" Fini.
echo ------------------------------------
echo Suppression d'install.bat...
echo ------------------------------------
del "%~f0"
echo Lancement du LopeSelfbot...
call run.bat
echo Faut surtout pas leur montrer...
exit
