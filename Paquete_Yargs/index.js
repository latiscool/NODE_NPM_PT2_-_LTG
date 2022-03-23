//01.-Importar en una constante el paquete yargs
const yargs = require('yargs');
//02.- Inicializar el metodo "Command" para el paso de parametros
const argv = yargs
  .command(
    //03.- Definir del comando el primer paramentro el cual sera el saludo
    'saludo',
    //0.4 Definir :la descipcion del comando Saludo
    'comando para Saludar',
    //05. Definir el objeto para la configuraicon del constructor
    {
      // ● Paso 6: Declarar que se esperará recibir un argumento llamado “nombre”Declarar que se esperará recibir un argumento llamado “nombre”
      nombre: {
        // ● Paso 7: Definir la descripción de este argumento
        describe: 'Argumento para definir tu nombre',
        // ● Paso 8: Declarar que este argumento es requerido con un true en la propiedad
        // “demand”
        demand: true,
        // ● Paso 9: Declarar el alias del argumento nombre, el cual será “n”. Esto sirve para
        // simplificar la delación de un argumento recortando su mención a solo 1 letra o siglas
        alias: 'n',
      },
    },
    //   ● Paso 10: Crear la función callback la cual recibe como parámetro el objeto args que
    // contendrá los argumentos como propiedades. A su vez la función mandará un
    // mensaje por consola saludando con el nombre recibido como argumento
    (args) => {
      console.log(`¡Saludos cordiales ${args.nombre}, espero que tengas
  un excelente día`);
    }
  )
  //● Paso 11: Concatenar el método command con el método “help” y la propiedad argv.
  .help().argv;
