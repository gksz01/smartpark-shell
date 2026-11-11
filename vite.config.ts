import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
export default defineConfig({base:process.env.VITE_BASE_PATH || "/",plugins:[react(),federation({name:'smartpark_shell',remotes: {driver: process.env.VITE_DRIVER_URL || 'http://localhost:4174/assets/remoteEntry.js', admin: process.env.VITE_ADMIN_URL || 'http://localhost:4175/assets/remoteEntry.js'}, shared:['react','react-dom']})],build:{target:'esnext',cssCodeSplit:true},preview:{port:4173,cors:true,host:'0.0.0.0'},server:{port:4173,cors:true,host:'0.0.0.0'}});
