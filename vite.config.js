import { sveltekit } from '@sveltejs/kit/vite';
// import mkcert from 'vite-plugin-mkcert';

const config = {
    plugins: [sveltekit()],
    // Temporarily disabled HTTPS due to mkcert system error
    // server: {
    // 	https: true
    // }
};

export default config;
