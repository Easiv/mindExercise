import Component from '@ember/component';

export default Component.extend({
  classNames: [''],

  init() {
    this._super(...arguments);
    this.classNames.pushObject('visible');
    console.log(this.classNames);
  }
});
