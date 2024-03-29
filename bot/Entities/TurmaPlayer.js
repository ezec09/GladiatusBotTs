var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TurmaPlayer {
    constructor(linkPlayer) {
        this.linkPlayer = linkPlayer;
    }
    loadItemToolTip() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(this.linkPlayer, { cache: "no-store" });
            let paginaPlayer = yield response.text();
            let casco = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.CASCO + ']').first().attr('data-tooltip');
            let arma = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.ARMA + ']').first().attr('data-tooltip');
            let armadura = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.ARMADURA + ']').first().attr('data-tooltip');
            let escudo = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.ESCUDO + ']').first().attr('data-tooltip');
            let guante = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.GUANTE + ']').first().attr('data-tooltip');
            let zapato = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.ZAPATO + ']').first().attr('data-tooltip');
            let anillo_1 = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.ANILLO_1 + ']').first().attr('data-tooltip');
            let anillo_2 = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.ANILLO_2 + ']').first().attr('data-tooltip');
            let amuleto = $(paginaPlayer).find('#char div.ui-draggable[data-container-number=' + itemContainerNumber.AMULETO + ']').first().attr('data-tooltip');
            this.itemsTooltip = new ItemsPlayers(casco, arma, armadura, escudo, guante, zapato, anillo_1, anillo_2, amuleto);
        });
    }
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(this.linkPlayer, { cache: "no-store" });
            let paginaPlayer = yield response.text();
            this.nivel = Number.parseInt($(paginaPlayer).find('#char_level')[0].textContent);
            this.fuerza = Number.parseInt($(paginaPlayer).find('#char_f0')[0].textContent);
            this.habilidad = Number.parseInt($(paginaPlayer).find('#char_f1')[0].textContent);
            this.agilidad = Number.parseInt($(paginaPlayer).find('#char_f2')[0].textContent);
            this.constitucion = Number.parseInt($(paginaPlayer).find('#char_f3')[0].textContent);
            this.carisma = Number.parseInt($(paginaPlayer).find('#char_f4')[0].textContent);
            this.inteligencia = Number.parseInt($(paginaPlayer).find('#char_f5')[0].textContent);
            this.armadura = Number.parseInt($(paginaPlayer).find('#char_panzer')[0].textContent);
            this.danioMin = Number.parseInt($(paginaPlayer).find('#char_schaden')[0].textContent.split(" ")[0]);
            this.danioMax = Number.parseInt($(paginaPlayer).find('#char_schaden')[0].textContent.split(" ")[2]);
            this.danioPromedio = (this.danioMin + this.danioMax) / 2;
            //Critico
            let posicionStart = $(paginaPlayer).find('#char_schaden_tt').attr('data-tooltip').indexOf('Posibilidad de da\\u00f1o critico:');
            posicionStart = posicionStart + 36;
            let posicionFinal = posicionStart + 2;
            this.porcentajeCritico = Number.parseInt($(paginaPlayer).find('#char_schaden_tt').attr('data-tooltip').substring(posicionStart, posicionFinal));
            //Bloqueo
            posicionStart = $(paginaPlayer).find('#char_panzer_tt').attr('data-tooltip').indexOf('Oportunidad de bloquear un golpe:');
            posicionStart = posicionStart + 36;
            posicionFinal = posicionStart + 2;
            this.porcentajeBloqueo = Number.parseInt($(paginaPlayer).find('#char_panzer_tt').attr('data-tooltip').substring(posicionStart, posicionFinal));
            this.danioArmaduraEquiv = (this.armadura) * 0.01627 - 20;
            let curacion = $(paginaPlayer).find('#char_healing');
            this.curandose = curacion.length > 0 ? Number.parseInt(curacion[0].textContent) : 0;
        });
    }
}
