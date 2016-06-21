/**
 * Created by Bhargav on 20-06-2016.
 */
/**
 * Created by Bhargav on 16-06-2016.
 */

dashboard.controller("listPostsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash', '$http',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash, $http) {
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
        console.log("coming to Contact controller");


        console.log(" listPostsController ");






    }]);
