import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

export function BarFactory() {
    return new BarServices();
}

@Injectable()
export class BarServices {



    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}

export class BarServicesMock {

    obterBebidas(): string {
        return 'Mock';
    }

    obterPorcoes(): string {
        return 'Mock';
    }

    obterRefeicoes(): string {
        return 'Mock';
    }
}

export abstract class BebidaService {
    obterBebidas: () => string
}