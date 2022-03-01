function crearPackDesdeTr(elemento: HTMLElement) {
    let nombreDuenio: string = $(elemento).find('td')[1].textContent.trim();
    let valor = Number.parseInt($(elemento).find('td')[2].textContent.trim().replace(/\./g,''));
    let nivel = Number.parseInt($(elemento).find('td')[4].textContent.trim());
    let idItem =  Number.parseInt($(elemento).find('td div')[0].getAttribute('data-item-id'));
    let dataTooltip = $(elemento).find('td div')[0].getAttribute('data-tooltip');
    let nombre = dataTooltip.split('"')[1].trim();
    let link = $(elemento).find('td input')[0];
    return new Paquete(nombre,idItem,nombreDuenio,valor,nivel, link);
}