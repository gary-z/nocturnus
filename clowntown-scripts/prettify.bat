@echo off
for /r %%f in (../data/*.json) do (
	python -m json.tool "../data/%%~nxf" > temp_prettified.json
	move temp_prettified.json "../data/%%~nxf"
)
pause