class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        
        this.lightning_texture = new CGFappearance(scene);
        this.lightning_texture.loadTexture('images/marble3.jpg');

        this.init();
    }

    doGenerate() {
        this.generate("X", {
            "F": ["FF"],
            "X": ["F[-X][X]F[-X]+FX", "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[^X][X]F[&X]^X", "F[/X][X]F[\\X]+X"]
        }, 25, 3, 0.5);
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
        this.doGenerate();
        this.depth = 0;
        this.start_time = t;
    }

    updateLightning(t) {
        this.elapsed_time = t - this.start_time;

        if (this.elapsed_time >= 1000) {
            return true;
        }

        if (this.elapsed_time != 0) {
            this.depth = this.elapsed_time * this.axiom.length / 1000;
        }

        return false;
    }

    display() {
        this.lightning_texture.apply();

        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale * 1.5, this.scale);

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

                    if (i < this.depth && this.depth != 0 && primitive) {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}