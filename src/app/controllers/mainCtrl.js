angular.module('app').controller('mainCtrl', function($scope) {
    $scope.friends = [
        {
            name: 'Shea',
            age: 34
        },
        {
            name: 'Bryce',
            age: 24
        },
        {
            name: 'Mario',
            age: 25
        }
    ];

    $scope.opts = [
        'name',
        'age',
    ];

    $scope.directions = [
        {
            name: 'Asc',
            value: '+'
        },
        {
            name: 'Dsc',
            value: '-'
        }
    ]
});