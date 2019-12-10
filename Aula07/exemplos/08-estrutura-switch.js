var Animal = 'Dinossauro';
switch (Animal) {
   case 'Vaca':
   case 'Girafa':
   case 'Cachorro':
   case 'Porco':
       console.log(Animal + ': esse animal irá para Arca de Noé');
       break;
   case 'Dinossauro':
   default:
       console.log(Animal + ': Esse animal não vai.');
}
