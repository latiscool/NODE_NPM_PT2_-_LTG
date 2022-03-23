const yargs = require('yargs');
const child = require('child_process');

const user = 'Ovni22';
const pass = 123457;
const argv = yargs
  .command(
    'login',
    'Comando para ingresar al area 51',
    {
      user: {
        describe: 'Usuario',
        demand: true,
        alias: 'u',
      },
      pass: {
        describre: 'Contraseña',
        demand: true,
        alias: 'p',
      },
    },
    (args) => {
      args.user == user && args.pass == pass
        ? child.exec('node acceso.js', (err, stdout) => {
            err ? console.log(err) : console.log(stdout);
          })
        : console.log('Credenciales incorrectas');
    }
  )
  .help().argv;
