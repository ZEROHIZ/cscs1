export default {
  async fetch(request, env, ctx) {
    // 获取请求的 URL 和路径
    const url = new URL(request.url);
    let path = url.pathname;
    
    // 如果路径是根路径或没有扩展名，默认返回 index.html
    if (path === "/" || !path.includes('.')) {
      path = "/index.html";
    }
    
    // 直接返回 index.html 的内容
    if (path === "/index.html") {
      return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Donuts - Roll and Rescue Baby Donuts | Play Online</title>
    <meta name="description" content="Play Super Donuts online for free! Roll around and rescue the stolen Baby Donuts across 8 worlds and over 50 stages. No download required.">
    <link rel="canonical" href="https://superdonuts.com">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        neon: {
                            pink: '#ff2a6d',
                            blue: '#05d9e8',
                            purple: '#d300c5',
                            yellow: '#f9f871',
                            dark: '#1a1a2e'
                        }
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer base {
            body {
                background-color: theme('colors.neon.dark');
                color: white;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .neon-text {
                text-shadow: 0 0 5px theme('colors.neon.blue'), 
                             0 0 10px theme('colors.neon.blue'),
                             0 0 20px theme('colors.neon.blue');
            }
            
            .neon-border {
                box-shadow: 0 0 5px theme('colors.neon.pink'),
                            0 0 10px theme('colors.neon.pink');
            }
            
            .game-container {
                height: 75vh;
                min-height: 400px;
            }
            
            @media (max-width: 768px) {
                .game-container {
                    height: 50vh;
                }
            }
        }
    </style>
</head>
<body class="min-h-screen">
    <header class="bg-gradient-to-r from-neon-purple to-neon-dark p-4 border-b-2 border-neon-pink">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="text-center md:text-left mb-4 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold neon-text text-neon-pink mb-2">Super Donuts</h1>
                <p class="text-neon-blue text-xl">Roll around and rescue the stolen Baby Donuts across 8 worlds!</p>
            </div>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#game" class="text-neon-yellow hover:text-neon-pink transition-colors">Play Now</a></li>
                    <li><a href="#about" class="text-neon-yellow hover:text-neon-pink transition-colors">About</a></li>
                    <li><a href="#controls" class="text-neon-yellow hover:text-neon-pink transition-colors">Controls</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-8">
        <section id="game" class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-neon-blue">Play Super Donuts Online</h2>
            <div class="game-container rounded-lg overflow-hidden border-2 border-neon-pink neon-border">
                <iframe src="https://html-classic.itch.zone/html/13042496/index.html" 
                        class="w-full h-full" 
                        frameborder="0" 
                        allowfullscreen
                        title="Super Donuts Game"></iframe>
            </div>
        </section>

        <section id="about" class="mb-12 bg-black bg-opacity-50 p-6 rounded-lg border-l-4 border-neon-blue">
            <h2 class="text-3xl font-bold mb-4 text-neon-blue">About Super Donuts</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <p class="mb-4">Super Donuts is a momentum and physics based 2D platformer without a jump button, mixed with the exploration and challenges of classic 3D Collectathons! Each level has a set of baby donuts to find, collect them all to open the exit.</p>
                    <p class="mb-4">During your adventures through Sweetzerland, you'll encounter a colourful cast of characters. Feed them special sweets to unlock fast-paced bonus stages!</p>
                </div>
                <div>
                    <h3 class="text-2xl font-bold mb-3 text-neon-pink">Game Features</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Over 50 stages across 8 worlds</li>
                        <li>Physics-based rolling gameplay</li>
                        <li>Multiple challenges per level</li>
                        <li>Hidden secrets and time trials</li>
                        <li>Colorful pixel art graphics</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="controls" class="mb-12 bg-black bg-opacity-50 p-6 rounded-lg border-l-4 border-neon-yellow">
            <h2 class="text-3xl font-bold mb-4 text-neon-blue">Game Controls</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-3 text-neon-pink">Keyboard Controls</h3>
                    <ul class="space-y-2">
                        <li><span class="text-neon-yellow font-bold">A / D</span> - Move Left / Right</li>
                        <li><span class="text-neon-yellow font-bold">Space (W / Up / Enter)</span> - Enter Level</li>
                        <li><span class="text-neon-yellow font-bold">Space (Up)</span> - Jump (in bonus levels)</li>
                        <li><span class="text-neon-yellow font-bold">R</span> - Reset Level</li>
                        <li><span class="text-neon-yellow font-bold">Esc (Shift)</span> - Pause</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-2xl font-bold mb-3 text-neon-pink">Level Challenges</h3>
                    <p class="mb-4">Each level has three extra challenges:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Find the hidden Secret Sweet</li>
                        <li>Collect all 100 sweets</li>
                        <li>Beat RetroBreak's Time Trials</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="tips" class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-neon-blue">Gameplay Tips</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-black bg-opacity-70 p-5 rounded-lg border-t-2 border-neon-pink">
                    <h3 class="text-xl font-bold mb-3 text-neon-pink">Master Momentum</h3>
                    <p>Learn to control your rolling speed. Use slopes and platforms to gain momentum when needed.</p>
                </div>
                <div class="bg-black bg-opacity-70 p-5 rounded-lg border-t-2 border-neon-blue">
                    <h3 class="text-xl font-bold mb-3 text-neon-pink">Explore Everything</h3>
                    <p>Secret sweets are often hidden in unexpected places. Take your time to explore each level thoroughly.</p>
                </div>
                <div class="bg-black bg-opacity-70 p-5 rounded-lg border-t-2 border-neon-purple">
                    <h3 class="text-xl font-bold mb-3 text-neon-pink">Practice Time Trials</h3>
                    <p>For time trials, plan your route carefully and use momentum to your advantage.</p>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-black py-8 border-t-2 border-neon-purple">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold text-neon-pink mb-2">Super Donuts</h2>
                    <p class="text-gray-400">Game by <a href="https://retrobreak.itch.io" class="text-neon-blue hover:text-neon-pink">RetroBreak</a> © 2023. All rights reserved.</p>
                </div>
                <div>
                    <ul class="flex space-x-6">
                        <li><a href="#" class="text-neon-blue hover:text-neon-pink transition-colors">Privacy Policy</a></li>
                        <li><a href="#" class="text-neon-blue hover:text-neon-pink transition-colors">Terms of Service</a></li>
                        <li><a href="#" class="text-neon-blue hover:text-neon-pink transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`, {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }
    
    // 对于其他请求，返回 404
    return new Response("Not Found", { status: 404 });
  }
};

// 根据文件扩展名获取 Content-Type 函数保持不变
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
