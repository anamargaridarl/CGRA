/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui = this;
        // disable the processKeyboard function
        this.processKeyboard = function () { };
        // create a named array to store which keys are being pressed
        this.activeKeys = {};
    }

    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code] = true;
    };

    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code] = false;
    };

    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }


    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');
        this.gui.add(this.scene.bird, 'speedfactor', 0.1, 3).name('speedFactorV');  
        this.gui.add(this.scene.bird, 'scaleFactor', 0.5, 3).name('scaleFactorBird');     

        var obj = this;

        this.initKeys();

        
        return true;
    }
}