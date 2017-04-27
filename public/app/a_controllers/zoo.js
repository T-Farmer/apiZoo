app.controller('ZooCtrl', function($scope, AnimalFact){

$scope.editing = false

const popPage = () =>{
  AnimalFact.getAll()
    .then((animals) => {
      console.log(animals)
      console.log(animals[0].keepersRelated[0].name)
      $scope.animals = animals
      $scope.$apply()
    })
}

popPage()

$scope.remove = (id) => {
  console.log("id", id)
  AnimalFact.remove(id)
  .then(() => {
    popPage()
  })
}

$scope.save = (id, updateInfo) => {
  console.log("save", id, updateInfo)
  AnimalFact.update(id, updateInfo)
  .then(() => {
    console.log("updated!!")
    $scope.editing = false;
    popPage()
  })
}


})
