class MyLSPlant extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.doGenerate = function () {
            this.generate(
                "X",
                {
                    "F": ["F+F--F+F"],
                    "X": ["F[-X][X]F[-X]+FX", "F[-X][x]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
                }, 30.0, 4, 0.5
            );
        }

        // do initial generation
        this.init();
        this.doGenerate();
    }

    init() {
        // cria o lexico da gramática
        this.initGrammar()
    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}