class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
    }

    init() {
        // cria o lexico da gramática
        this.initGrammar()
    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
    }
}