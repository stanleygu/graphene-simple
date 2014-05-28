'use strict';

angular.module('grapheneSimpleApp')
  .controller('MainCtrl', function($scope) {
    $scope.nodes = [{
      id: 'n1',
      x: 20,
      y: 20
    }, {
      id: 'n2',
      x: 50,
      y: 50
    }];

    $scope.edges = [{
      source: $scope.nodes[0],
      target: $scope.nodes[1]
    }];

    $scope.exports = {
      nodes: $scope.nodes,
      edges: $scope.edges
    };
  });
