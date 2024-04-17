Esta API estará conectada al servidor web frontend del servicio de METEOSTUDIO a través de un balanceador de carga.
Actuará como intermediario entre el servidor web y el broker de RabbitMQ, categorizando todas las solicitudes de los usuarios y enviandolos a la cola INICIAL, que enviará todo al orquestador, encargado de enviar todas las solicitudes a las colas debidas.

Entidades / Categorías de solicitudes administradas por esta API

Users

    - Servicios de Admin
        - Obtener Usuarios: enterprise.users.get-all -> code
        - Obtener Usuario por Id: enterprise.users.get-id -> code
    
    - Servicios de Usuario
        - Registrarse: enterprise.users.register-type -> code
        Tipo de usuario puede ser alguno entre: [particular(individual), empleado(employee), company(empresa)]
        #Dependiendo del tipo de usuario, es lo que se registra en la BDD (nueva estación, nueva suscripción(si es empleado, una suscripción automática a la estación(es) de su empresa)
        - Iniciar Sesión: enterprise.auth.login -> code
        - Modificar datos propios: enterprise.users.update-data -> code
        #NO MVP (Opcional), no es parte del MVP - Cambiar contraseña olvidada: enterprise.users.update-password

Enterprise

    - Solicitar estación meteorológica: enterprise.request-station -> code
    - Cancelar suscripción: enterprise.disable-subscription -> code
    - Invitar a un usuario a suscribirse a una estación: enterprise.invite-user -> code
    #NO MVP - Solicitar token de soporte técnico: enterprise.request-support
    - Obtener datos de estación meteorológica: enterprise.get-stations-id -> code
    - Obtener la lista de las estaciones meteorologicas: enterprise.get-stations-all -> code
    #NO MVP - Obtener lista de empleados: enterprise.get-employees
    - Editar funcionamiento y comnponentes de estación meteorológica: enterprise.update-station -> code
    #NO MVP - Descargar planos / datos / estado de la estación meteorológica:
    enterprise.request-file-station -> code

Meteorological
    
    - Obtener datos de las últimas 24 horas (o una semana) de la estación (para la gráfica): meteorological.request-data-time -> code
    #donde cantidad_tiempo puede ser de 24 horas o 7 días
    
    - Descargar historial de datos meteorológicos de una estación (puede ser propia, o por suscripción): meteorological.request-file-time -> code
    #donde la duracion puede estar entre: [24h, 7d, 30d, desde el inicio(todo)]

Payment

    - Contratar / cambiar plan de suscripción: payment.request-subscription -> code
    #Se envía los siguientes datos: userId, orderId, subscription-details
    #El servicio de pago procesa la petición, y una vez confirmada, le envía un evento al servicio de Usuarios para enlazar su nueva suscripción en la BD 