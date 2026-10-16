$ErrorActionPreference = 'Stop'

# Session-only toolchain configuration. Never changes the machine PATH or Java.
$sdkCandidates = @($env:MLANG_ANDROID_SDK, $env:ANDROID_HOME, $env:ANDROID_SDK_ROOT,
    'G:\DevTools\Android\Sdk', "$env:LOCALAPPDATA\Android\Sdk")
$sdk = $sdkCandidates | Where-Object { $_ -and (Test-Path -LiteralPath (Join-Path $_ 'platform-tools\adb.exe')) } | Select-Object -First 1
if (-not $sdk) { throw 'Android SDK not found. Set MLANG_ANDROID_SDK to your SDK directory.' }
$env:ANDROID_HOME = $sdk
$env:ANDROID_SDK_ROOT = $sdk

$javaCandidates = @($env:MLANG_JAVA_HOME, $env:JAVA_HOME)
foreach ($javaRoot in @("$env:LOCALAPPDATA\jdk21", 'C:\Program Files\Eclipse Adoptium', 'G:\DevTools')) {
    if (Test-Path -LiteralPath $javaRoot) {
        $javaCandidates += Get-ChildItem -LiteralPath $javaRoot -Directory -Filter '*21*' | ForEach-Object FullName
    }
}
$jdk = $null
foreach ($candidate in $javaCandidates) {
    if (-not $candidate -or -not (Test-Path -LiteralPath (Join-Path $candidate 'release'))) { continue }
    if ((Get-Content -LiteralPath (Join-Path $candidate 'release')) -match '^JAVA_VERSION="21[.\"]') { $jdk = $candidate; break }
}
if (-not $jdk) { throw 'JDK 21 is required. Set MLANG_JAVA_HOME to a JDK 21 directory.' }
$env:JAVA_HOME = $jdk

if ($env:MLANG_GRADLE_HOME) { $env:GRADLE_USER_HOME = $env:MLANG_GRADLE_HOME }
elseif (-not $env:GRADLE_USER_HOME -and (Test-Path -LiteralPath 'G:\')) { $env:GRADLE_USER_HOME = 'G:\DevCaches\gradle' }
if (Test-Path -LiteralPath 'G:\DevTemp') { $env:TEMP = 'G:\DevTemp'; $env:TMP = $env:TEMP }

$script:ProjectRoot = Split-Path -Parent $PSScriptRoot
$script:AdbPath = Join-Path $sdk 'platform-tools\adb.exe'
$sdkProperty = 'sdk.dir=' + $sdk.Replace('\', '/')
[IO.File]::WriteAllText((Join-Path $ProjectRoot 'android\local.properties'), $sdkProperty + [Environment]::NewLine)
