let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Acción de Listar');
        break;
    case 'guardar':
        console.log('Acción de Guardar');
        break;
    default:
        console.log('Acción No Reconocida');
}

if (accion == 'listar') {
    console.log('Acción de Listar');
} else if (accion == 'guardar') {
    console.log('Acción de Guardar');
} else {
    console.log('Acción de Actualizar');
}