class MyLightning extends MyLSystem {
    constructor(scene, axiom, ruleF, ruleX, angle, iterations, scaleFactor) {
        super(scene);

        super.generate(axiom, {
            "F": [ruleF],
            "X": [ruleX, "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X"]
        },
        angle, iterations, scaleFactor);

        this.depth = 0;
        
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

    startAnimation(t) {
        this.depth = 1/t;
        this.iterate();
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i = 0; i < this.axiom.length; ++i) {

            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;
                case "/":
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;
                case "\\":
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;
                case "^":
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;
                case "&":
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive = this.grammar[this.axiom[i]];

                    if (i < this.depth && this.depth != 0) {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}