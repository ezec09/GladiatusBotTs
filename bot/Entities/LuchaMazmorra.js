class LuchaMazmorra {
    constructor(dificultad, hacerBoss, indiceLugar) {
        this.prioridad = datosContext.prioridades.calabozo;
        this.estado = tareaEstado.enEspera;
        this.tipo_class = 'LuchaMazmorra';
        this.timed_out_miliseconds = 5000;
        this.dificultad = dificultad;
        this.hacerBoss = hacerBoss;
        this.indiceLugar = indiceLugar;
    }
    changeEstado(newEstado) {
        this.estado = newEstado;
    }
    getEstado() {
        return this.estado;
    }
    noEstaIniciada() {
        return $('input[value*=\"' + this.dificultad + '\"]').length == 1;
    }
    iniciar() {
        return $('input[value*=\"' + this.dificultad + '\"]')[0];
    }
    proximoEsBoss() {
        return $('.map_label').html() === 'Jefe';
        //reset || ($('.dungeoncondition_not_fulfilled').length == 1 && $('.dungeoncondition_fulfilled').length == 2 && this.indiceLugar == 5) la tribu umpokta
    }
    cancelarMazmorra() {
        return $('input[name*="dungeonId"] + input')[0];
    }
    hayEnemigo() {
        return $('img[usemap*="#dmap"] + img').length > 0;
    }
    atacar() {
        if (this.indiceLugar == 2) {
            if ($($('.map_label').toArray()
                .filter(e => e.hasAttribute('onclick') && e.getAttribute('onclick').includes('startFight')))
                .filter((e, elem) => { return $(elem).text() == 'Jefe'; })
                .first().length > 0) {
                console.log('peleando jefe');
                return $($('.map_label').toArray()
                    .filter(e => e.hasAttribute('onclick') && e.getAttribute('onclick').includes('startFight')))
                    .filter((e, elem) => { return $(elem).text() == 'Jefe'; })
                    .first()[0];
            }
            let enemigosMazmorra = $('img').toArray().filter(e => e.hasAttribute('onclick') && e.getAttribute('onclick').includes('startFight'));
            return enemigosMazmorra[enemigosMazmorra.length - 1];
        }
        else {
            return $('img[usemap*="#dmap"] + img')[0];
        }
    }
    estamosEnTuLugar() {
        return $('#submenu2 a.menuitem')[this.indiceLugar].classList.contains('active');
    }
    irATuLugar() {
        //$('#cooldown_bar_dungeon .cooldown_bar_link')[0].click();
        return $('#submenu2 a.menuitem')[this.indiceLugar];
    }
    estamosEnDungeon() {
        return $('#dungeonPage').length == 1;
    }
    irADungeon() {
        return $('td a.awesome-tabs')[1];
    }
    getProximoClick() {
        if (!this.estamosEnTuLugar()) {
            return Promise.resolve(this.irATuLugar());
        }
        else if (!this.estamosEnDungeon()) {
            return Promise.resolve(this.irADungeon());
        }
        else if (this.noEstaIniciada()) {
            return Promise.resolve(this.iniciar());
        }
        else if (!this.hacerBoss && this.proximoEsBoss()) {
            return Promise.resolve(this.cancelarMazmorra());
        }
        else if (!this.hayEnemigo()) {
            return Promise.resolve(this.irATuLugar());
        }
        else {
            this.estado = tareaEstado.finalizada;
            return Promise.resolve(this.atacar());
        }
    }
    fromJsonString(jsonGuardado) {
        this.dificultad = jsonGuardado.dificultad;
        this.indiceLugar = jsonGuardado.indiceLugar;
        this.hacerBoss = jsonGuardado.hacerBoss;
        this.estado = jsonGuardado.estado;
        return this;
    }
    seCancela() {
        return !datosContext.modulos.correrMazmorra;
    }
    equals(t) {
        return this.tipo_class == t.tipo_class;
    }
    getHomeClick() {
        return $('#submenu2 a.menuitem')[this.indiceLugar];
    }
    puedeDesbloquearse() {
        return true;
    }
}
