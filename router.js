module.exports = function(){


  var index = function* (){
    this.body = "This is a Message";
  };


  return {"message":index};

}
