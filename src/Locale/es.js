
const es = {
  screens:{
    IntroScreen:{
      welcome: 'Bienvenido a este manual interactivo',
      welcome2: 'Esta aplicación te simplificará la manera en la que buscas módulos de bomba',
      button:{
        start: 'Comenzar'
      }
    },
    BombDescription:{
      sectionTitle: 'Desactivando bombas',
      sectionDescription: 'Una bomba explotará cuando su contador llegue a 0:00 o cuando se sucedan varios fallos en el ' +
        'proceso de desactivación. La única forma de desactivar una bomba es desarmar todos sus módulos antes de que el ' +
        'temporizador finalice.',
      bombExample: 'Ejemplo de bomba',
      frontBomb: 'Frontal',
      sideBomb: 'Lateral',
      modules: {
        title: 'Módulos',
        description: 'Cada bomba puede incluir hasta once módulos que deberán ser desarmados. Cada uno se presenta ' +
          'separado del resto y es posible desactivarlos en cualquier orden.\n' +
          'Podrá encontrar las instrucciones para desarmar los módulos en la Sección 1. ' +
          'Los módulos “demandantes” presentan casos especiales y se explican en la Sección 2.'
      },
      strikes: {
        title: 'Strikes',
        description:'Cuando el encargado de desactivar la bomba falle, la bomba pasará a ' +
          'tener un strike, el cual se podrá ver en el indicador superior al ' +
          'contador de tiempo. Las bombas con un indicador de strike ' +
          'explotarán al tercero. El temporizador continuará su cuenta atrás ' +
          'más rápido si ocurre un strike.\n' +
          'Si la bomba no tiene ningún indicador de strike, ésta explotará al ' +
          'primer fallo sin dar lugar a error alguno.',
        strikeIndicator: 'Indicador de strike'
      },
      gatherInformation: {
        title: 'Reunir información',
        description: 'Algunas instrucciones de desarmado requieren de información específica de la ' +
          'bomba, como su número de serie. Este tipo de información normalmente se ' +
          'encuentra en la parte superior, inferior o lateral de la carcasa de la bomba. ' +
          'Observe el Apéndice A, B y C para ver instrucciones de identificación que le ' +
          'podrían ser útiles para desarmar determinados módulos.'
      }
    },
    SimpleCables:{
      title: 'Acerca de los cables',
      subtitle: 'Los cables son el alma de los aparatos! Espera, no, la electricidad es el elemento fundamental... ' +
        'Los cables son más como las arterias. ¿Las venas? No importa...',
      instructionsList: [
        'Un módulo cableado puede tener de 3 a 6 cables en él.',
        'Sólo es necesario cortar el cable correcto para desarmar el módulo.',
        'El orden de los cables comienza desde el superior'
      ]
    },
    SimpleCables3: {
      title: '3 cables',
      instructionsList: [
        'Si no hay cable rojo, corte el segundo cable.',
        'Si no, en caso de que el último cable sea blanco, corte el último cable.',
        'Si no, en caso de que haya más de un cable azul, corte el último cable azul.',
        'Si no, corte el último cable.'
      ]
    },
    SimpleCables4: {
      title: '4 cables',
      instructionsList: [
        'Si hay más de un cable rojo y el último dígito del número de serie de la bomba es impar, corte el último cable rojo.',
        'Si no, en caso de que el último cable sea amarillo y no haya cables rojos, corte el primer cable.',
        'Si no, en caso de que haya exactamente un cable azul, corte el primer cable.',
        'Si no, en caso de que haya más de un cable amarillo, corte el último cable.',
        'Si no, corte el segundo cable.'
      ]
    },
    SimpleCables5: {
      title: '5 cables',
      instructionsList: [
        'Si el último cable es negro y el último dígito del número de serie de la bomba es impar, corte el cuarto cable.',
        'Si no, en caso de que haya exactamente un cable rojo y más de un cable amarillo, corte el primer cable.',
        'Si no, en caso de no haber cables negros, corte el segundo cable.',
        'Si no, corte el primer cable.'
      ]
    },
    SimpleCables6: {
      title: '6 cables',
      instructionsList: [
        'Si no hay cables de color amarillo y el último dígito del número de serie de la bomba es impar, corte el tercer cable.',
        'Si no, en caso de que haya exactamente un cable amarillo y más de un cable blanco, corte el cuarto cable.',
        'Si no, en caso de no haber cables rojos, corte el último cable.',
        'Si no, corte el cuarto cable.'
      ]
    },
    Button: {
      title: 'Acerca del botón',
      subtitle: 'Puede que piense que un botón que le indica que sea pulsado es un mecanismo sencillo. Ése es el tipo de pensamiento que hace que todo explote.',
      appendix: {
       a:{
         description: 'Véase el Apéndice A para la identificación del indicador.',
         button: 'Ir a Apéndice A'
       },
       b:{
         description: 'Véase el Apéndice B para la identificación de la batería.',
         button: 'Ir a Apéndice B'
       }
      },
      instructionsDescription: 'Siga estas reglas en el orden en el que aparecen. Realice la primera acción que aplique:',
      instructionsList: [
        'Si el botón es de color azul y dice "Abort" ([TEXT] en la imagen), mantenga pulsado el botón y mire el apartado "Soltar un botón pulsado".',
        'Si hay más de una batería en la bomba y en el botón dice "Detonate" ([TEXT] en la imagen), pulse e inmediatamente suelte el botón.',
        'Si el botón es de color blanco y la bomba tiene un indicador encendido con la etiqueta "CAR", mantenga pulsado el botón y mire el apartado "Soltar un botón presionado".',
        'Si hay más de dos baterías en la bomba y tiene un indicador encendido con la etiqueta "FRK", pulse e inmediatamente suelte el botón.',
        'Si el botón es de color amarillo, mantenga pulsado el botón y mire el apartado "Soltar un botón presionado".',
        'Si el botón es de color rojo y dice "Hold" ([TEXT] en la imagen), pulse e inmediatamente suelte el botón.',
        'Si nada de lo anterior es aplicable, mantenga pulsado el botón y mire el apartado "Soltar un botón presionado".'
      ],
      subSection:{
        title: 'Soltar un botón presionado',
        subtitle: 'Si mantiene un botón presionado, una banda de color se iluminará en el lado derecho del módulo. Basándose en ese color, se debe soltar el botón en un punto específico en el tiempo:',
        bands: {
          blue: 'Banda azul',
          white: 'Banda blanca',
          yellow: 'Banda amarilla',
          other: 'Banda de otro color',
        },
        bandsDescription: {
          blue: 'soltar cuando el contador de tiempo tenga un 4 en cualquier posición.',
          white: 'soltar cuando el contador de tiempo tenga un 1 en cualquier posición.',
          yellow: 'soltar cuando el contador de tiempo tenga un 5 en cualquier posición.',
          other: 'soltar cuando el contador de tiempo tenga un 1 en cualquier posición.',
        }
      }
    },
    Keypad: {
      title: 'Acerca del teclado',
      subtitle: 'No estoy seguro de qué son estos símbolos, pero sospecho que tienen algo que ver con el ocultismo.',
      instructionsList: [
        'Solo una de las columnas de abajo tiene los cuatro símbolos que se verán en el teclado.',
        'Pulse los cuatro botones en el orden en que aparecen, de arriba a abajo, dentro de dicha columna.'
      ]
    },
    SimonSays: {
      title: 'Acerca de "Simon dice"',
      subtitle: 'Es uno de esos juguetes con los que seguramente has jugado de niño donde tienes que hacer repetir los patrones que aparecen. Excepto que ésta es una imitación que, probablemente, fue comprada en una tienda de todo a cien.',
      instructionsList:[
        'Uno de los cuatro botones de colores parpadeará.',
        'Usando la tabla adecuada de las mostradas a continuación, pulse el botón con el color correspondiente.',
        'El botón original parpadeará, seguido de otro. Repita esta secuencia en orden usando la tabla de colores.',
        'La secuencia se alargará en un color más cada vez que se resuelva correctamente hasta que el módulo sea desarmado.'
      ],
      serialNumberVocal: 'Si el número de serie contiene una vocal:',
      serialNumberNoVocal: 'Si el número de serie no contiene una vocal:',
    },
    WhoIsOnFirst: {
      title: 'Acerca de "¿Quién está en primera?"',
      subtitle: 'Este artilugio es como algo sacado de un sketch de comedia, lo que podría ser gracioso si no estuviera conectado a una bomba. Mejor ser breve, las palabras solo complican las cosas...',
      instructionsList: [
        'Lea la pantalla [DISPLAY] y utilice el paso 1 para determinar la etiqueta del botón a leer.',
        'Utilizando la etiqueta del botón [TEXT], use el paso 2 para determinar el botón a pulsar.',
        'Repítalo hasta que el módulo sea desarmado.'
      ],
      stepOne: 'En base a la palabra mostrada en la pantalla, lea la etiqueta del botón que se indica abajo y continúe en el paso 2:',
      stepTwo: 'Usando la etiqueta obtenida en el paso 1, pulse el primer botón que aparezca en esta lista:'
    },
    Memory: {
      title: 'Acerca del Juego de memoria',
      subtitle: 'La memoria es algo frágil, pero también lo son todas las cosas cuando una bomba está a punto de explotar, ¡así que preste atención!',
      instructionsList: [
        'Pulse el botón correcto del módulo para continuar a la siguiente etapa en función de lo mostrado en pantalla. Complete todas las etapas para desarmar el módulo.',
        'Si pulsa un botón incorrecto, el módulo se reseteará hasta la etapa 1.',
        'El orden de los botones se tratará de izquierda a derecha.'
      ],
      phase1: [
        'Si se muestra un 1, pulse el botón en la segunda posición.',
        'Si se muestra un 2, pulse el botón en la segunda posición.',
        'Si se muestra un 3, pulse el botón en la tercera posición.',
        'Si se muestra un 4, pulse de botón en la cuarta posición.'
      ],
      phase2: [
        'Si se muestra un 1, pulse el botón “4”.',
        'Si se muestra un 2, pulse el botón en la misma posición que pulsó en la etapa 1.',
        'Si se muestra un 3, pulse el botón en la primera posición.',
        'Si se muestra un 4, pulse el botón en la misma posición que pulsó en la etapa 1.'
      ],
      phase3: [
        'Si se muestra un 1, pulse el botón con la misma etiqueta que pulsó en la etapa 2.',
        'Si se muestra un 2, pulse el botón con la misma etiqueta que pulsó en la etapa 1.',
        'Si se muestra un 3, pulse el botón en la tercera posición.',
        'Si se muestra un 4, pulse el botón “4”.'
      ],
      phase4: [
        'Si se muestra un 1, pulse el botón en la misma posición que pulsó en la etapa 1.',
        'Si se muestra un 2, pulse el botón en la primera posición.',
        'Si se muestra un 3, pulse el botón en la misma posición que pulsó en la etapa 2.',
        'Si se muestra un 4, pulse el botón en la misma posición que pulsó en la etapa 2.'
      ],
      phase5: [
        'Si se muestra un 1, pulse el botón con la misma etiqueta que pulsó en la etapa 1.',
        'Si se muestra un 2, pulse el botón con la misma etiqueta que pulsó en la etapa 2.',
        'Si se muestra un 3, pulse el botón con la misma etiqueta que pulsó en la etapa 4.',
        'Si se muestra un 4, pulse el botón con la misma etiqueta que pulsó en la etapa 3.'
      ]
    }
  },
  IntroScreen: 'Introducción',
  BombDescription: 'Desactivando Bombas',
  SimpleCables: 'Cables simples',
  Button: 'Botones',
  Keypad: 'Teclado'
};

export default es