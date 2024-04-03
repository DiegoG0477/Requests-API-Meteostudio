Esta API estará conectada al servidor web frontend del servicio de METEOSTUDIO a través de un balanceador de carga.
Actuará como intermediario entre el servidor web y el broker de RabbitMQ, categorizando todas las solicitudes de los usuarios y enviandolos a la cola INICIAL, que enviará todo al orquestador, encargado de enviar todas las solicitudes a las colas debidas.

Entidades / Categorías de solicitudes administradas por esta API

Users

    - Servicios de Admin
        - Obtener Usuarios: users.get-all
        - Obtener Usuario por Id: users.get-id
    
    - Servicios de Usuario
        - Registrarse: users.post-register-$tipo_usuario
        Tipo de usuario puede ser alguno entre: [particular(individual), empleado(employee), company(empresa)]
        #Dependiendo del tipo de usuario, es lo que se registra en la BDD (nueva estación, nueva suscripción(si es empleado, una suscripción automática a la estación(es) de su empresa)
        - Iniciar Sesión: users.post-login
        - Modificar datos propios: users.update-data
        #NO MVP (Opcional), no es parte del MVP - Cambiar contraseña olvidada: users.update-password

Enterprise

    - Solicitar estación meteorológica: enterprise.request-station
    - Cancelar suscripción: enterprise.disable-subscription
    - Invitar a un usuario a suscribirse a una estación: enterprise.invite-user
    #NO MVP - Solicitar token de soporte técnico: enterprise.request-support
    - Obtener datos de estación meteorológica: enterprise.get-stations-id
    #NO MVP - Obtener lista de empleados: enterprise.get-employees
    - Editar funcionamiento y comnponentes de estación meteorológica: enterprise.update-station
    #NO MVP - Descargar planos / datos / estado de la estación meteorológica:
    enterprise.request-file-station

Meteorological
    
    - Obtener datos de las últimas 24 horas (o una semana) de la estación (para la gráfica): meteorological.request-data-$cantidad_tiempo
    #donde cantidad_tiempo puede ser de 24 horas o 7 días
    
    - Descargar historial de datos meteorológicos de una estación (puede ser propia, o por suscripción): meteorological.request-file-$duracion
    #donde la duracion puede estar entre: [24h, 7d, 30d, desde el inicio(todo)]

Payment

    - Contratar / cambiar plan de suscripción: payment.request-subscription
    #Se envía los siguientes datos: userId, orderId, subscription-details
    #El servicio de pago procesa la petición, y una vez confirmada, le envía un evento al servicio de Usuarios para enlazar su nueva suscripción en la BD 