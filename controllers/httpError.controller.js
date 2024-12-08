// Función para manejar el error 404 (Página no encontrada)
export const error404 = (req, res, next) => {
    res.status(404).json({
      status: 'error',
      message: 'Página no encontrada',
    });
  };
  
  // Función para manejar otros errores (por ejemplo, errores internos del servidor)
  export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log de errores en consola
    res.status(500).json({
      status: 'error',
      message: 'Ha ocurrido un error en el servidor',
      error: err.message,
    });
  };