class ItemCategoria {
    nombreCategoria: string;
    subCategoria: string;

    constructor(nombreCategoria: string, subCategoria: string) {
        this.nombreCategoria = nombreCategoria;
        this.subCategoria = subCategoria;
    }


}

function getItemCategoria(name:string): ItemCategoria{
    let desc = name;
    if(itemsDataName.armas.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('Fundible','Armas');
    }
    if(itemsDataName.escudos.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('Fundible','Escudos');
    }
    if(itemsDataName.armaduras.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('Fundible','Armaduras');
    }
    if(itemsDataName.cascos.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('Fundible','Cascos');
    }
    if(itemsDataName.guantes.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('Fundible','Guantes');
    }
    if(itemsDataName.zapatos.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('Fundible','Zapatos');
    }
    if(itemsDataName.anillos.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('No Fundible','Joya');
    }
    if(itemsDataName.amuletos.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('No Fundible','Joya');
    }
    if(itemsDataName.mercenarios.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('No Fundible','Mercenario');
    }
    if(itemsDataName.recursos.some(elem=>desc.includes(elem))) {
        return new ItemCategoria('No Fundible','Recursos');
    }
    return new ItemCategoria('No Fundible','Unknown');
}

//----------DATA INIT
const itemsDataName = {
    armas : ['Garrote','Espada corta','Daga corta','Hoz de batalla',
        'Espada grande','Roce intensivo','Tridente','Espada larga',
        'Hacha','Lanza tridente','Hacha grande','Martillo',
        'Daga punteaguda','Angel de la muerte','Schiavone','Gladius',
        'Khopesh','Lanza','Seax','Vara de lucha'],

    escudos : ['Tablones','Escudo de madera','Escudo redondo','Red','Escudo',
        'Escudo de plata','Escudo de la torre','Escudo de fuego','Escudo de la torre en llamas',
        'Escudo de titanio','Escudo vikingo','Escudo egipcio'],

    armaduras : ['Trapos','Armadura de cuero','Cuero Doble','Hombreras de cobre','Media de chapa',
        'Chapa de cobre','Armadura Catenarian','Chapa de hierro','Placa entera','Hombreras de hierro',
        'Armadura dura de cuero','Armadura de cocodrilo'],

    cascos : ['Casco de cuero','Gorra de hierro','Myrmillo','Thracian','Casco de gladiador','Casco de cráneo',
        'Casco vikingo','Centurión','Casco de Centurión entero','Centurión de latón','Casco de cobre',
        'Casco de púas','Casco con visor','Casco'],

    guantes : ['Guantes de cuero','Muñequeras de cobre','Guantes de cobre','Guantes de batalla de cuero',
        'Muñequeras de cuero','Brazaletes de hierro','Guantes con remaches','Muñequeras de chapa',
        'Brazaletes de chapa'],

    anillos : ['Anillo azul','Anillo de malaquita','Anillo de oro','Anillo de plata',
        'Anillo del dragón','Anillo de rubies','Escarabajo','Trisquel'],

    zapatos : ['Sandalias','Sandalias de cuero','Botas de cuero','Botas de batalla de cuero',
        'Vendas de cobre','Botas de caza','Vendajes de cuero duro','Botas de batalla de plata',
        'Botas remachadas','Botas de placas'],

    amuletos : ['Pendiente de Oro','Collar de plata','Pendiente de cornalina','Reliquia de plata',
        'Pendiente Sugilith','Pendiente de malaquita','Talismán de estrella',
        'Pendiente de rubies','Ojo de Ra','Fíbula'],

    mercenarios : ['Habilidad: '],

    recursos: ['Madera', 'Cobre', 'Cuero', 'Hierro', 'Hilo de lana', 'Bolas de algodón', 'Cáñamo', 'Tiras de gasa', 'Lino', 'Yute',
        'Tiras de terciopelo', 'Hilo de seda', 'Pelaje', 'Astilla ósea', 'Escama', 'Garra', 'Colmillo', 'Escama de dragón',
        'Cuerno de toro', 'Glándula venenosa', 'Pelaje de Cerbero', 'Escama de Hidra', 'Pluma de Esfinge', 'Piel de Tifón',
        'Lapislázuli', 'Amatista', 'Ámbar', 'Aguamarina', 'Zafiro', 'Granate', 'Esmeralda', 'Diamante', 'Jaspe', 'Sugilita',
        'Veneno de escorpión', 'Tintura de la resistencia', 'Antídoto', 'Adrenalina', 'Tintura de la inspiración',
        'Poción de la percepción', 'Esencia de los reflejos', 'Frasco de carisma', 'Agua del olvido', 'Esencia de alma',
        'Sello acuático', 'Runa protectora', 'Grabado terrestre', 'Tótem curativo', 'Talismán de poder', 'Piedra de la suerte',
        'Pedernal', 'Runa de la tormenta', 'Runa de las sombras', 'Cristal', 'Bronce', 'Obsidiana', 'Plata', 'Azufre', 'Mena de oro',
        'Cuarzo', 'Platino', 'Almandino', 'Cuprita', 'Piedra infernal']


}
