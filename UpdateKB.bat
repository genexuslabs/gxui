@echo off
set Configuration=Debug
if not .%3.==.. set Configuration=%3
msbuild.exe gxui.msbuild /p:Configuration=%Configuration% /p:KBDir=%1 /p:KBModelDir=%2 /t:BuildAndDeployToKB
