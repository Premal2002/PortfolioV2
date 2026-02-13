# -------- CONFIG --------
$downloadPath = "C:\Users\Premal Kadam\Downloads"
$targetPath   = "src"
# ------------------------

Write-Host "Source (Downloads): $downloadPath"
Write-Host "Target: $targetPath"
Write-Host "------------------------------------"

# Ensure target directory exists
if (!(Test-Path $targetPath)) {
    New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
    Write-Host "Created src directory."
}

# Files to copy
$files = @(
"App.js",
"App.css",
"index.js",
"index.css"
)

foreach ($file in $files) {

    $sourceFile = Join-Path $downloadPath $file
    $destFile   = Join-Path $targetPath $file

    if (Test-Path $sourceFile) {
        Copy-Item $sourceFile $destFile -Force
        Write-Host "Copied: $file" -ForegroundColor Green
    }
    else {
        Write-Host "Missing in Downloads: $file" -ForegroundColor Yellow
    }
}

Write-Host "------------------------------------"
Write-Host "Root src files copy completed."

