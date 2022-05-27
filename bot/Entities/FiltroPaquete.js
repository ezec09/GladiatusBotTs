class FiltroPaquete {
    constructor(calidad, query) {
        this.query = '';
        this.hayItemsFundibles = true;
        this.tipo_class = 'FiltroPaquete';
        this.calidad = calidad;
        this.query = query;
    }
    fromJsonString(guardado) {
        this.calidad = guardado.calidad;
        this.query = guardado.query;
        this.hayItemsFundibles = guardado.hayItemsFundibles;
        return this;
    }
    isFilterSeteado() {
        return $('select[name="fq"]')[0].selectedIndex == this.calidad + 1
            && $('input[name="qry"]')[0].getAttribute('value') == this.getLastQueryWord();
    }
    setearFiltro() {
        $('select[name="fq"]')[0].selectedIndex = this.calidad + 1;
        $('input[name="qry"]')[0].setAttribute('value', this.getLastQueryWord());
    }
    hayItemsUsablesFundibles(items) {
        return items.some(e => this.puedoFundirItem(e));
    }
    puedoFundirItem(item) {
        let nameitem = item.getName();
        let quality = item.getCalidad().qualityColor;
        let notToKeep = ControladorDeFundicion.namesNotTuMelt.every((e) => !nameitem.includes(e));
        let categoria = getItemCategoria(nameitem);
        let esFiltroItems = nameitem.toLowerCase().includes(this.query.toLowerCase());
        let esFundible = categoria.nombreCategoria == 'Fundible' && item.getCalidad().qualityColor >= this.calidad;
        let esJoyaFundible = categoria.subCategoria == 'Joya' && quality >= QualityColors.PURPLE;
        return notToKeep && esFiltroItems && (esFundible || esJoyaFundible);
    }
    getLink() {
        let linkBase = 'https://s36-ar.gladiatus.gameforge.com/game/index.php?mod=packages&f=0&fq=0&qry=&sh=' + estadoEjecucion.sh;
        linkBase = linkBase.replace('fq=0', 'fq=' + (this.calidad - 1));
        linkBase = linkBase.replace('qry=', 'qry=' + this.getLastQueryWord());
        return linkBase;
    }
    getLastQueryWord() {
        let lastQueryWord = this.query.split(' ');
        return lastQueryWord[lastQueryWord.length - 1];
    }
    toString() {
        return 'Calidad: ' + this.calidad + ' Query: ' + this.query;
    }
}
