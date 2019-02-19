"use strict";
function AppService($location, $http) {
    const self = this;
    const key = "4d7a3e8fb6166e54fb00f65b193aa1aa";
    const appID = "c471afec";    
    const healthSearch = ["vegan", "alcohol-free", "peanut-free", "shellfish-free"]
    self.faveArray = [];
    self.Search = function(input, id)  {
        //console.log(Number(id));
        $location.path("/recipeList");
        self.data =  $http.get("https://api.edamam.com/search?q="+input+"&app_id="+appID+"&app_key="+key+"&health="+healthSearch[Number(id)]);
        console.log(self.data);
        
        }
  
        self.Get = function(){
            return self.data;
        }

        self.addFave = function(item) {

            for(let i = 0; i < self.faveArray.length; i++){
                if(item == self.faveArray[i]){
                    return;
                }
            }

            self.faveArray.push(item)
            console.log(self.faveArray)

        }

        self.getFave = function () {
            return self.faveArray;
        }

        self.deleteFave = function (newArray) {
            self.faveArray = newArray;
        }
    }

angular.module("App").service("AppService", AppService);

//Maybe store response in a variable