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
        //global light - maybe delete after
        this.gui.add(this.scene, 'GlobalLight', 0.0,1.0).onChange(this.scene.updateAmbientLight.bind(this.scene));
       
        var f0 = this.gui.addFolder('Night ');
        f0.add(this.scene.lights[0], 'enabled').name("Fire");
        f0.add(this.scene.lights[2], 'enabled').name("Moon");
       
        var f1 = this.gui;
        f1.add(this.scene.lights[1], 'enabled').name("Day");

   

        return true;
    }
}