/**
 * Created by Bhargav on 16-06-2016.
 */

dashboard.controller("readPostsController", ['$rootScope', '$scope','$http', '$stateParams','$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope,$http,$stateParams, $state, location, dashboardService, Flash) {
        var vm = this;

        vm.message = {};

        vm.submitForm = function () {
            console.log(vm.message);
            var request = $http({
                method: "post",
                url: "contact.php",
                data: vm.message,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            /* Check whether the HTTP Request is successful or not. */
            request.success(function (data) {
                console.log(data);
                if (data == "success") {
                    Flash.create('success', 'Message Sent Succesfully', 'large-text');
                    vm.message = {};
                    vm.contactForm.$pristine();
                    vm.contactForm.$setUntouched();

                }
            });
        };
        console.log("coming to readPostsController");
        console.log(" $stateParams.id "+  $stateParams.id);


        $scope.viewArticleById = function(id){
            var getAllPostUrl = '/webapi/blogPost/' + $stateParams.id;
            $http.get(getAllPostUrl)
                .success(function (response) {
                    $scope.id = $stateParams.id;
                    console.log("coming to  success");
                    console.log("  response.length "+response.length);
                    $scope.myText = "dsfffffffffffffffffffffff";
                    $scope.viewPost = response;
                    if (response.length > 0) {
                        console.log("if response.length "+response.length);
                        $scope.postIsEmpty = true;
                        $scope.viewPost = response;
                        $scope.alerts = [{}];
                        $scope.alerts.push({type: 'success', msg: 'Update Success'});
                        $scope.truck_type = {};
                        $scope.matrialType = '';
                        $scope.maxCapacity = '';
                        $scope.noOfTrucks = '';
                    }
                    else {
                        console.log("else response.length "+response.length);
                        $scope.postIsEmpty = false;
                        $scope.alerts = [{}];
                        $scope.alerts.push({type: 'warning', msg: 'Update Failed'});
                    }
                })
                .error(function (response) {
                    $scope.alerts = [{}];
                    $scope.alerts.push({type: 'danger', msg: 'Something went wrong network Failure.'});
                });
        };

        $scope.viewArticleById($stateParams.id);



    }]);
