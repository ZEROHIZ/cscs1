export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // 如果路径是根路径或没有扩展名，默认返回 index.html
    if (path === "/" || !path.includes('.')) {
      path = "/index.html";
    }
    
    // 构建文件路径
    const filePath = path;
    
    try {
      // 尝试从静态资源中获取文件
      const response = await fetch(`https://example.com${filePath}`);
      
      if (response.ok) {
        // 根据文件扩展名设置正确的 Content-Type
        const contentType = getContentType(filePath);
        
        // 返回文件内容
        return new Response(await response.text(), {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    } catch (e) {
      // 忽略错误，继续处理
    }
    
    // 如果文件不存在，返回 index.html 的内容
    if (path !== "/index.html") {
      return fetch(request.url.replace(path, "/index.html"));
    }
    
    // 如果 index.html 也不存在，返回 404
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
