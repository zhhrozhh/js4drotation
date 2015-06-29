
function r4dxy(theta){
    return new matrix([1,0,0,0,
                       0,1,0,0,
                       0,0,Math.cos(theta),-Math.sin(theta),
                       0,0,Math.sin(theta),Math.cos(theta)],4,4);
}
function r4dxz(theta){
    return new matrix([1,0,0,0,
                       0,Math.cos(theta),0,-Math.sin(theta),
                       0,0,1,0,
                       0,Math.sin(theta),0,Math.cos(theta)],4,4);
}
function r4dxw(theta){
    return new matrix([1,0,0,0,
                       0,Math.cos(theta),-Math.sin(theta),0,
                       0,Math.sin(theta),Math.cos(theta),0,
                       0,0,0,1],4,4);
}
function r4dyw(theta){
    return new matrix([Math.cos(theta),0,-Math.sin(theta),0,
                       0,1,0,0,
                       Math.sin(theta),0,Math.cos(theta),0,
                       0,0,0,1],4,4);
}
function r4dzw(theta){
    return new matrix([Math.cos(theta),-Math.sin(theta),0,0,
                       Math.sin(theta),Math.cos(theta),0,0,
                       0,0,1,0,
                       0,0,0,1],4,4);
}
function r4dyz(theta){
    return new matrix([Math.cos(theta),0,0,-Math.sin(theta),
                       0,1,0,0,
                       0,0,1,0,
                       Math.sin(theta),0,0,Math.cos(theta)],4,4);
}
function geo4d(){
    this.vl = [];
    this.push = geo4dPush;
    this.proj = function(){
        var res = new THREE.Geometry();
        for(i=0;i<this.vl.length;i++){
            res.vertices.push(new THREE.Vector3(this.vl[i][0],this.vl[i][1],this.vl[i][2]));
        }
        return res;
    }
    this.ope = geo4dOperation;
}
function geo4dPush(l){
    this.vl.push(l);
}
function geo4dOperation(m){
    for(i=0;i<this.vl.length;i++){
        var tem = i;
        this.vl[i] = m.ope(this.vl[tem]);
        i = tem;
    }
}
