/* eslint camelcase: "off" */
export const ServiceDetailsAnsibleComponent = {
  controller: ComponentController,
  controllerAs: 'vm',
  bindings: {
    results: '<',
  },
  templateUrl: 'app/components/services/service-details/service-details-ansible.html',
};

/** @ngInject */
function ComponentController(ModalService) {
  const vm = this;
  vm.$onInit = activate();

  function activate() {
    angular.extend(vm, {
      // Data
      plays: {
        open: true,
        resources: [],
      },
      creds: {
        open: true,
        resources: [],
      },
      results: {
        resources: [],
      },
      output: "",

      // Functions
      sampleAction: angular.noop(),
      viewPlay: angular.noop(),
      watchLive: watchLive,

      // Config
      credListConfig: credListConfig(),
      playsListConfig: playsListConfig(),
    });
  }

  function credListConfig() {
    return {
      showSelectBox: false,
      selectionMatchProp: 'id',
    };
  }

  function playsListConfig() {
    return {
      showSelectBox: false,
      selectionMatchProp: 'id',
    };
  }

  function watchLive(item) {
    const modalOptions = {
      component: 'serviceDetailsAnsibleModal',
      resolve: {
        item: function() {
          return item;
        },
      },
    };
    ModalService.open(modalOptions);
  }
}


