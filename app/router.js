import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('buscar');
  this.route('comparar');
  this.route('school', {path: 'school/:school_id'});
});

export default Router;
