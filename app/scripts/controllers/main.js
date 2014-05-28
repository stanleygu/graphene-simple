'use strict';

angular.module('grapheneSimpleApp')
  .controller('MainCtrl', function($scope) {
    // Array of node objects
    $scope.nodes = [{
      id: 'n1',
      x: 20,
      y: 20
    }, {
      id: 'n2',
      x: 50,
      y: 50
    }];

    // Array of edges, each containing references to source and target nodes
    $scope.edges = [{
      source: $scope.nodes[0],
      target: $scope.nodes[1]
    }];

    // Specify which variables to export to the template
    $scope.exports = {
      nodes: $scope.nodes,
      edges: $scope.edges
    };
  });
