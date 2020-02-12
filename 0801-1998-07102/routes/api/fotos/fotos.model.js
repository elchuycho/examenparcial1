var fs = require('fs');
var fileToSave = 'security.json';
var userModel = {};
var userCollection = [];

function writeToFile(){
  var serializedJSON = JSON.stringify(userCollection);
  fs.writeFileSync(fileToSave, serializedJSON, { encoding: 'utf8' });
  return true;
}

function openFile(){
  try{
  var serializedJSON = fs.readFileSync(fileToSave,{encoding:'utf8'});
  userCollection = JSON.parse(serializedJSON);
  } catch(e){
    console.log(e);
  }
}


var userTemplate = {
    fotosid:'',
    fotostitle:"",
    fotosurl:"",
    fotosthumbnail:"",
    fotosalbum: ""
}

openFile();

userModel.getAll = ()=>{
    return userCollection;
}

userModel.getById = (id)=>{
    var filteredUsers = userCollection.filter(
        (o)=>{
            return o.fotosid === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];
    }else{
        return null
    }
}



userModel.addNew = ( {fotostitle,fotosalbum,fotosurl,fotosthumbnail} )=>{
    var newUser = Object.assign(
    {},
    userTemplate,
    {
        fotostitle:fotostitle1,
        fotosalbum:fotosalbum1,
        fotosurl:fotosurl1,
        fotosthumbnail:fotosthumbnail1
    }
  );
    newUser.fotosid = userCollection.length + 1;

    userCollection.push(newUser);
    writeToFile();
    return newUser;
}









//prueba estatico
userCollection.push(
    Object.assign(
        {},
        userTemplate,
        {
            fotosid:1,
            fotostitle:"PRUEBA TITLE 1",
            fotosurl:"WWW.PRUEBA-URL-1.COM",
            fotosthumbnail:"WWW.THUMBNAIL-1.COM",
            fotosalbum: "prueba album 1"
        }
    )
);



module.exports = userModel;
