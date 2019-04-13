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


        //Initializa lights
       
        this.gui.add(this.scene, 'selectedObject', this.scene.lightsIDs).name('Light').onChange(this.scene.updateObjectComplexity.bind(this.scene));

   

        return true;
    }
}