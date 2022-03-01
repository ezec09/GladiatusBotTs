enum MensajeHeader {
    POP_UP_SEABRIO = 'POPUPSEABRIO',
    POP_UP_OPTIONCHANGE = 'POP_UP_OPTIONCHANGE',
    CONTENT_SCRIPT_ASK_EMPIEZO = "CONTENT_SCRIPT_ASK_EMPIEZO",
    CONTENT_SCRIPT_CAMBIO_PKT = "CONTENT_SCRIPT_CAMBIO_PKT",
    DEBUGUEAR = "DEBUGUEAR",
    CONTENT_SCRIPT_PKT_COMPRADO ="CONTENT_SCRIPT_PKT_COMPRADO",
    CAMBIO_ORO= "CAMBIO_ORO",
    ACTUALIZAR= "ACTUALIZAR",
    //NO_HAY_COMIDA= "NO_HAY_COMIDA",
    //HAY_COMIDA= "HAY_COMIDA",
    ACTUALIZAR_EXPEDICION= "ACTUALIZAR_EXPEDICION",
    LOG_IN= 'LOG_IN',
    ACTIVAR_AK = 'ACTIVAR_AK',
    RESPUESTA = 'RESPUESTA',
    ANALIZAR_SUBASTA = 'ANALIZAR_SUBASTA',
    RESULTADO_SUBASTA = 'RESULTADO_SUBASTA',
    CAMBIO_INTENTO_PAQUETES = 'CAMBIO_INTENTO_PAQUETES',
    ANALIZAR_ARENA = 'ANALIZAR_ARENA',
    ANALIZAR_TURMA = 'ANALIZAR_TURMA',
    ANALISIS_INICIAL_MANDADO = 'ANALISIS_INICIAL_MANDADO',
    STOP = 'STOP',
    AUTOOFFER = 'AUTOOFFER',
    LINK_SUBASTA = 'LINK_SUBASTA',
    IR_SUBASTA_ITEM = 'IR_SUBASTA_ITEM',
    ITEMS_ANALIZER = 'ITEMS_ANALIZER'

}

interface Mensaje {
    header: MensajeHeader,
    [id: string]: any
}

interface PasajeConfigMensaje extends Mensaje {
    configuracionToSend: ConfiguracionStruct
}

interface BotInjectMensaje extends PasajeConfigMensaje{
    estadoEjecucion: EjecucionEstado,
    correr: boolean
}