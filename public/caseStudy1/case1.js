
angular.module('caseStudyApp', []).controller('case1Ctrl', function ($scope) {

  /**
   *  variable declaration
   */
  $scope.userInformation = [];
  $scope.comment = false;


  $scope.getUserInformation = function () {

    $scope.userInformation = [
      {
        "name": "Jami Wolf",
        "description": "aww im so sorry to hear abour carter : ( and i hope everthing gets better !!! i am gonna be in kansas all of joly so you should for sure plan a trip",
        "sendtime": "Tues 7:45pm",
        "userPics": "../assests/download.jpg"
      },
      {
        "name": "Molly Hartman",
        "description": "Are Your back for Summer Yet ?",
        "sendtime": "Tues 7:45pm",
        "userPics": "../assests/download.jpg"
      },
      {
        "name": "Laura Sulkin", "description": "Come visit Lawrence ?",
        "sendtime": "Tues 7:45pm",
        "userPics": "../assests/download.jpg"
      },
      {
        "name": "Jammi Wolf",
        "description": "Hey etthan !! How is your summer Going on  ? I miss You",
        "sendtime": "Tues 7:45pm",
        "userPics": "../assests/download.jpg"
      }]
  }

  $scope.getUserInformation();


  $scope.showComment = function () {
    $scope.comment = true;
  }
  
  $scope.addComments = function (desc) {
    if (desc) {
      $scope.userInformation.push({ "name": "", "description": desc, "sendtime": "", "userPics": "" });
      $scope.comment = false;
    }

  }



});