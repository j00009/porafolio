module.exports = {
  apps: [{
    name: "portafolio",
    script: "./index.js",
    watch: false,
    instances: 1,
    exec_mode: "cluster",
    max_memory_restart: '500M',
    cron_restart:"59 23 * * * *"
  }]
}