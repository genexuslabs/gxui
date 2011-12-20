@echo off
set Configuration=Debug
if not .%2.==.. set Configuration=%2
msbuild.exe gxui.msbuild /p:Configuration=%Configuration% /p:GXDir=%1 /t:BuildAndDeployToGX
