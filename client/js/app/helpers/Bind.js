export class Bind {
    constructor(model, view, ...props) {

        view.update(model);

        this._proxy = new Proxy(model, {
            get: (target, property) => {
                if (property === 'esvazia') {
                    target.esvazia();
                    view.update(target);
                } else if (property === 'reverse') {
                    target.reverse();
                    view.update(target);
                }
            },
            set: (target, property, value) => {
                if (property === 'adiciona') {
                    target.adiciona(value);
                    view.update(target);
                    return true;
                }else if (property === 'ordena') {
                    target.ordena(value);
                    view.update(target);
                    return true;
                } else return false;
            }
        });

    }

    adiciona(value) {
        this._proxy.adiciona = value;
    }

    esvazia() {
        this._proxy.esvazia;
    }

    ordena(criterio) {
        this._proxy.ordena = criterio;
    }

    reverse() {
        this._proxy.reverse;
    }

}