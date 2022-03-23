const yargs = require('yargs');
const child = require('child_process');

const argv = yargs
  .command(
    'adulto',
    'Comando para verificar si es mayor de edad',
    {
      edad: {
        describe: 'Edad',
        demand: true,
        alias: 'e',
      },
    },
    (args) => {
      args.edad >= 18
        ? child.exec('node vip.js', (err, stdout) => {
            err ? console.log(err) : console.log(stdout);
          })
        : console.log('Pa juera pequeño');
    }
  )
  .help().argv;
