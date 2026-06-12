export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hata</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #f8fafc;
      color: #334155;
    }
    .container { text-align: center; padding: 2rem; max-width: 400px; }
    h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #ef4444; }
    p { font-size: 0.9rem; color: #64748b; margin-bottom: 1.5rem; }
    a {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background: #1d4ed8;
      color: white;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.875rem;
    }
    a:hover { background: #1e40af; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Bir hata oluştu</h1>
    <p>Sunucuda beklenmeyen bir hata meydana geldi. Lütfen sayfayı yenileyin.</p>
    <a href="/">Ana sayfaya dön</a>
  </div>
</body>
</html>`;
}
