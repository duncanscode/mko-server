module.exports = {
    apps: [{
        name: 'mko-server',
        script: 'build/app.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production',
            PORT: 8080
        }
    }]
}