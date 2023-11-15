Comencemos con algo muy simple para familiarizarte con cada componente del stack. Vamos a crear una pequeña aplicación que tenga un backend con FastAPI, un frontend con React y utilice MongoDB como base de datos para almacenar y mostrar algunos datos.

**Tarea: Crear una lista de tareas**

1. **Backend (FastAPI):**

   - Crea una API en FastAPI que tenga dos endpoints: uno para obtener todas las tareas y otro para agregar una nueva tarea.
   - Utiliza MongoDB para almacenar la lista de tareas. Puedes usar una única colección en MongoDB llamada, por ejemplo, "tasks".
   - El modelo de tarea podría tener campos como "id", "title", "completed", etc.

2. **Frontend (React):**

   - Crea una interfaz de usuario simple con React que permita mostrar la lista de tareas y agregar nuevas tareas.
   - Usa algún estado interno para manejar las tareas en el frontend.
   - Utiliza la biblioteca `fetch` o `axios` para realizar solicitudes HTTP al backend y obtener/agregar tareas.

3. **Conectar el Frontend con el Backend:**

   - Asegúrate de que tu frontend pueda comunicarse con el backend. Puedes ejecutar ambos en el mismo entorno de desarrollo por ahora.
   - Haz que tu interfaz de usuario muestre las tareas obtenidas del backend y permita agregar nuevas tareas que se envíen al backend.

4. **Ejecutar la Aplicación Completa:**

   - Asegúrate de que tu aplicación completa (frontend y backend) funcione. Puedes usar el puerto 3000 para el frontend y el puerto 8000 para el backend, por ejemplo.

5. **Extra (Opcional):**
   - Agrega funcionalidades adicionales según te sientas cómodo. Por ejemplo, podrías permitir marcar tareas como completadas, eliminar tareas, etc.

Recuerda consultar la documentación oficial de cada tecnología para obtener ayuda:

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Documentation](https://docs.mongodb.com/)

¡Buena suerte! Esta tarea simple te proporcionará una introducción práctica a cada parte del stack. Si encuentras algún problema o tienes preguntas específicas, estaré aquí para ayudarte.
