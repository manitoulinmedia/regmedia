import {readdirSync,mkdirSync,copyFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';
const root=dirname(fileURLToPath(import.meta.url));
mkdirSync(join(root,'public/assets'),{recursive:true});
for(const file of readdirSync(root)){
 if(/\.(webp|mp4|woff2)$/.test(file))copyFileSync(join(root,file),join(root,'public/assets',file));
 else if(['index.html','app.js','style.css','favicon.svg','robots.txt','_headers'].includes(file))copyFileSync(join(root,file),join(root,'public',file));
}
for(const file of ['index.html','style.css','app.js','assets/mark-motion.mp4'])if(!existsSync(join(root,'public',file)))throw new Error(`Missing ${file}`);
console.log('RegMedia assets built in public/.');
