class MyWings extends CGFobject {
    constructor(scene) {
        super(scene);

        this.higher = new MyQuad(scene);
        this.lower = new MyTriangle(scene);

        this.wingsText = new CGFappearance(scene)
        this.wingsText.loadTexture('images/beak2.jpeg');

    }
    
    displayWings(rwings,v) {
        
        this.scene.pushMatrix();
        this.wingsText.apply();
        if(v !=0)
        this.scene.rotate(-0.5*Math.sin(rwings*v*3), 0, 0, 1);
        else
        this.scene.rotate(-0.5*Math.sin(rwings*0.3), 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.translate(+0.4 + 0.75, 0.1, 0.5);
        this.scene.scale(0.2, 1, 0.20);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 10, 0, 1, 0);
        this.wingsText.apply();
        this.lower.display();
        this.scene.popMatrix();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.2, 0.5);
        this.scene.scale(1, 1, 0.4);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 8, 0, 1, 0);
        this.higher.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        if(v !=0)
        this.scene.rotate(0.5*Math.sin(rwings*v*3), 0, 0, 1);
        else
        this.scene.rotate(0.5*Math.sin(rwings * 0.3), 0, 0, 1);
        
        this.scene.pushMatrix();
        this.scene.translate(-0.4 - 0.74, 0.1, 0.5);
        this.scene.scale(0.2, 1, 0.20);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 10, 0, 1, 0);
        this.wingsText.apply();
        this.lower.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.2, 0.5);
        this.scene.scale(1, 1, 0.4);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 8, 0, 1, 0);
        this.higher.display();
        this.scene.popMatrix();
        this.scene.popMatrix();



        this.scene.popMatrix();


    }
}
