//From https://github.com/EvanHahn/ScriptInclude
include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

serialInclude(['../lib/CGF.js','MyScene.js', 'MyInterface.js', 'Plane.js', 'MyCone.js',
'MyWings.js', 'MyNest.js','MyTreeBranch.js','MyBirdBody.js','MyTriangle.js','MyCubeMap.js',
 'MyCylinder.js','MyHouse.js','MyPyramid.js','MyQuad.js','MyTree.js', 'MyUnitCubeQuad.js',
 'MyPrism.js','MyBird.js', 'MyTerrain.js',  'MyLSystem.js', 'MyLightning.js', 'MySemiSphere.js',
 'MySphere.js',

main=function()
{
    var app = new CGFapplication(document.body);
    var myScene = new MyScene();
    var myInterface = new MyInterface();

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);

    app.run();
}

]);