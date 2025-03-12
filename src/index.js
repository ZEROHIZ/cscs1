export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // 如果路径是根路径或没有扩展名，默认返回 index.html
    if (path === "/" || !path.includes('.')) {
      path = "/index.html";
    }

    try {
      // 直接从 Worker 资源中获取文件
      const file = await env.ASSETS.fetch(new Request(path));
      
      if (file.ok) {
        const contentType = getContentType(path);
        return new Response(await file.text(), {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    } catch (e) {
      console.error('Error serving file:', e);
    }

    // 如果是其他路径，尝试返回 index.html
    if (path !== "/index.html") {
      try {
        const indexFile = await env.ASSETS.fetch(new Request("/index.html"));
        return new Response(await indexFile.text(), {
          headers: {
            "Content-Type": "text/html",
            "Cache-Control": "public, max-age=3600"
          }
        });
      } catch (e) {
        console.error('Error serving index.html:', e);
      }
    }

    return new Response("Not Found", { status: 404 });
  }
};

// 根据文件扩展名获取 Content-Type
function getContentType(path) {
  const extension = path.split('.').pop().toLowerCase();
  const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon'
  };
  
  return contentTypes[extension] || 'text/plain';
}
