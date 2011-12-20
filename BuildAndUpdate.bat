ECHO OFF
REM 1 = GX folder
REM 2 = KB folder
REM 3 = Model name (e.g.: CSharpModel)
REM 4 = Debug


if not .%1.==.. set GxFolder=%1
if not .%2.==.. set KBFolder=%2
if not .%3.==.. set Model=%3
if not .%4.==.. set Config=%4


if .%GxFolder%.==.. goto usage
if .%KBFolder%.==.. goto usage
if .%Model%.==.. goto usage
if .%Config%.==.. goto usage

call BuildBatch.bat %Config%
call UpdateGX.bat %GxFolder% %Config%
call UpdateKB.bat %KBFolder% %Model% %Config%
goto END

:usage
echo  Usage BuildAndUpdate.bat <GxFolder> <KBFolder> <Model(i.e. CSharpModel)> <Config (Debug|Release)>

:END
