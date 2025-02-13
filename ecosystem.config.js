module.exports = {
  apps : [{
    name: 'portafolio',
    script: 'index.js',
    instances: 1, // O un número específico
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    }
  }]
};