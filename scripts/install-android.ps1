param([string]$Serial, [string]$ApkPath)
. (Join-Path $PSScriptRoot 'android-env.ps1')
if (-not $ApkPath) { $ApkPath = Join-Path $ProjectRoot 'output\android\Mlang-Pocket-1.0-debug.apk' }
if (-not (Test-Path -LiteralPath $ApkPath)) { throw 'Build the APK first with npm run android:build.' }
$deviceOutput = & $AdbPath devices -l
if ($LASTEXITCODE -ne 0) { throw 'Could not query Android devices.' }
$devices = @($deviceOutput | Where-Object { $_ -match '^\S+\s+device(?:\s|$)' } | ForEach-Object { ($_ -split '\s+')[0] })
if ($Serial) {
    if ($Serial -notin $devices) { throw 'The selected phone is not connected and authorized. Unlock it and accept Allow USB debugging.' }
} elseif ($devices.Count -eq 1) { $Serial = $devices[0] }
elseif ($devices.Count -gt 1) { throw 'Multiple devices detected. Run this script with -Serial followed by the intended phone serial.' }
else { throw 'No authorized Android phone detected. Connect a data-capable USB cable, enable USB debugging, and accept the phone prompt.' }

# -r preserves existing app data. Never uninstall or clear a phone to fix errors.
& $AdbPath -s $Serial install -r $ApkPath
if ($LASTEXITCODE -ne 0) { throw 'Installation failed. Existing app data has been preserved; review the ADB error above.' }
& $AdbPath -s $Serial shell am start -W -n 'com.mlangpocket.app/.MainActivity'
if ($LASTEXITCODE -ne 0) { throw 'Installed, but the app launch could not be confirmed.' }
& $AdbPath -s $Serial shell dumpsys package com.mlangpocket.app | Select-String 'versionCode=|versionName=|lastUpdateTime='
Write-Host 'Mlang Pocket installed and launch requested. Check the phone screen to confirm it is usable.'
