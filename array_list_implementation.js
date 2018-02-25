class ArrayList
  {
    constructor(){
      this.length = 0;
      this.data = {};
    }
    push(value){
      this.data[this.length] = value;
      this.length++;
      return this.data;
    }
    pop(){ 
      this._collapseTo(0);
      return this.data;
    }
    getVal(index){
      return this.data[index];
    }
    delete(index){
      this._collapseTo(index);
      return(this.data);
    }
    _collapseTo(index){
      var i = index;
      while(i<this.length-1){
        this.data[i] = this.data[i+1];
        i++;
      }
      delete this.data[this.length-1];
      this.length--;
    }
  }

const list = new ArrayList();


list.push(4);
list.push(21);
list.push(34);
list.push(90);
list.push(7);
list.push(6);
list.push(5);

console.log(list.delete(3));


