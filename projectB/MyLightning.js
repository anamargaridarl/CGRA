class MyLightning extends MyLSystem {
    constructor(scene, axiom, ruleF, ruleX, angle, iterations, scaleFactor) {
        super(scene);

        super.generate(axiom, {
            "F": [ruleF],
            "X": [ruleX, "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X"]
        },
        angle, iterations, scaleFactor);
        this.init();
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