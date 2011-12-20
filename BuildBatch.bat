@echo off
set Configuration=Debug
if not .%1.==.. set Configuration=%1
msbuild.exe /nologo /v:m gxui.msbuild /p:Configuration=%Configuration% /p:Action=Build