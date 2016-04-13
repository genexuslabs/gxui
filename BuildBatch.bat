@echo off
set Configuration=Debug
if not .%1.==.. set Configuration=%1
if not .%2.==.. set Revision=%2
msbuild.exe /nologo /v:m gxui.msbuild /t:BuildAll /p:Configuration=%Configuration% /p:Revision=%Revision% /p:Action=Build