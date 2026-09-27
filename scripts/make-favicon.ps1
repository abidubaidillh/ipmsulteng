Add-Type -AssemblyName System.Drawing

$sizes = @(16, 32, 48)
$magenta = [System.Drawing.ColorTranslator]::FromHtml('#CD0179')
$purple  = [System.Drawing.ColorTranslator]::FromHtml('#7A2D61')
$pngs = @{}

foreach ($s in $sizes) {
  $bmp = New-Object System.Drawing.Bitmap($s, $s, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.Clear([System.Drawing.Color]::Transparent)

  $bg = New-Object System.Drawing.SolidBrush($magenta)
  $g.FillRectangle($bg, 0, 0, $s, $s)
  $bg.Dispose()

  $bw = [Math]::Max(1, [int]($s * 0.09))
  $bd = New-Object System.Drawing.SolidBrush($purple)
  $g.FillRectangle($bd, 0, 0, $s, $bw)
  $g.FillRectangle($bd, 0, $s - $bw, $s, $bw)
  $g.FillRectangle($bd, 0, 0, $bw, $s)
  $g.FillRectangle($bd, $s - $bw, 0, $bw, $s)
  $bd.Dispose()

  $fnt = New-Object System.Drawing.Font('Arial Black', [float]($s * 0.40), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $fg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
  $fmt = New-Object System.Drawing.StringFormat
  $fmt.Alignment = [System.Drawing.StringAlignment]::Center
  $fmt.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF(0, 0, [float]$s, [float]$s)
  $g.DrawString('IPM', $fnt, $fg, $rect, $fmt)

  $fmt.Dispose(); $fg.Dispose(); $fnt.Dispose(); $g.Dispose()

  $ms = New-Object System.IO.MemoryStream
  $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  $pngs[$s] = $ms.ToArray()
  $ms.Dispose(); $bmp.Dispose()
}

$outPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'app\favicon.ico'
$fs = [System.IO.File]::Create($outPath)
$w = New-Object System.IO.BinaryWriter($fs)

$w.Write([UInt16]0)
$w.Write([UInt16]1)
$w.Write([UInt16]$sizes.Count)

$offset = 6 + (16 * $sizes.Count)
foreach ($s in $sizes) {
  $data = $pngs[$s]
  $dim = [byte]$s
  $w.Write($dim)
  $w.Write($dim)
  $w.Write([byte]0)
  $w.Write([byte]0)
  $w.Write([UInt16]1)
  $w.Write([UInt16]32)
  $w.Write([UInt32]$data.Length)
  $w.Write([UInt32]$offset)
  $offset += $data.Length
}
foreach ($s in $sizes) {
  $data = $pngs[$s]
  $w.Write($data, 0, $data.Length)
}

$w.Flush(); $w.Dispose(); $fs.Dispose()

$fi = Get-Item -LiteralPath $outPath
Write-Output ("favicon.ico written: " + $fi.Length + " bytes, sizes " + ($sizes -join ','))
