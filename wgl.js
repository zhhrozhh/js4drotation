function matrix(dlist,row,col){
    this.dl = dlist;
    this.r = row;
    this.c = col;
    this.mul = matrixMul;
    this.add = matrixAdd;
    this.at = matrixAt;
    this.str = function(){
        res = "";
        for(i=1;i<=this.r;i++){
            for(j=1;j<=this.c;j++)
                res += String(this.at(i,j))+ "  ";
                res += "  ";
            res+="\n";
        }
        return res;
    }
    this.ope = matrixOperation;
}
function matrixAt(i,j){
    return this.dl[this.c*(i-1)+j-1];
}
function matrixMul(other){
    if(this.c != other.r)
        return false;
    li = [];
    for(i=1;i<=this.r*other.c;i++){
        a = (i%other.c==0)?other.c:(i%other.c);
        b = Math.floor((i-1)/other.c+1);
        sum = 0;
        for(j=1;j<=other.r;j++)
            sum+=(this.at(b,j)*other.at(j,a));
        li.push(sum);
    }
    return new matrix(li,this.r,other.c);
}
function matrixAdd(other){
    if(this.c!=other.c || this.r!=other.r)
        return false;
    li = [];
    for(i=0;i<this.r*this.c;i++)
        li.push(this.dl[i]+other.dl[i]);
    return new matrix(li,this.r,this.l);
}
function matrixOperation(l){
    if(this.c != l.length)
        return false;
    return this.mul(new matrix(l,this.c,1)).dl;
}



