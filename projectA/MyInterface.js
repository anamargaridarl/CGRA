/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        var obj = this;

        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        //Initializa Day / Night
        this.gui.add(this.scene, 'selectedObject', this.scene.lightsIDs).name('Light').onChange(this.scene.updateObjectComplexity.bind(this.scene));

        this.gui.add(this.scene, 'texturesEnabled').name('Textures').onChange(this.scene.updateTextures.bind(this.scene));

        return true;
    }
}