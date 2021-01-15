// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//primo

// var studente={
//   'nome':"Federico",
//   'cognome':'Crudo',
//   'eta':'19'
// };
// //stampa con for in
// for(var key in studente){
//   console.log(studente[key]);
// }

//array di oggetti
var studente=[
  {
    'nome':"Federico",
    'cognome':'Crudo',
    'eta':'19'
  },
  {
    'nome':"Franco",
    'cognome':'Rossi',
    'eta':'22'
  },
  {
    'nome':"Lorenzo",
    'cognome':'Licci',
    'eta':'15'
  }

];
for(var i=0;i<studente.length;i++){
   console.log(studente[i].nome+"  "+studente[i].cognome);
}

  
   




