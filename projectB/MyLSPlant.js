class MyLSPlant extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.axiom = "X"; //"F--F--F";
        this.ruleF = "FF"; //"F+F--F+F"; 
        this.ruleF2 = "F+F--F+F"; 
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.ruleX2 = "F[-X][x]+X";
        this.ruleX3 = "F[+X]-X";
        this.ruleX4 = "F[/X][X]F[\\X]+X";
        this.ruleX5 = "X → F[\X][X]/X";
        this.ruleX6 = "F[/X]\X";
        this.ruleX7 = "F[^X][X]F[&X]^X";
        this.ruleX8 = "F[^X]&X";
        this.ruleX9 = "F[&X]^X";
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;

        this.doGenerate = function () {
            this.generate(
                this.axiom,
                {
                    "F": [this.ruleF2],
                    "X": [this.ruleX, this.ruleX2, this.ruleX3, this.ruleX4, this.ruleX5, this.ruleX6, this.ruleX7, this.ruleX8, this.ruleX9]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
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