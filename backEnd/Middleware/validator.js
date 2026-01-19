// Middleware para validar schemas de zod, primero recibimos un schema
export const validateSchema = (schema) => (req, res, next) => {
  // Bloque try-catch para manejo de excepciones
  try {
    // Usamos el metodo integrado para validar/parsear un schema de zod, y pasamos el cuerpo de la petición
    schema.parse(req.body);

    // Si no hay errores, continuamos con el programa
    next();
  } catch (error) {
    // Si hay errores recorremos el objeto error con la función map para imprimir cada mensaje
    const errorMessages = error.issues.map((issue) => issue.message);
    console.log(errorMessages);

    // Retornamos un status 400, que significa un fallo de procesamiento causado por un fallo del cliente
    return res.status(400).json({ errors: errorMessages });
  }
};
