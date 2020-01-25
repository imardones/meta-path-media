goog.module('app.ScrollSpyController');

/**
 * Controller for the sticky header on admob advantage
 */
class ScrollSpyController {
  constructor($window) {
    this.highlight = 'Higher Earnings';
    let pageHeight = this.getPageHeight();

    angular.element($window).bind('resize', () => {
      pageHeight = this.getPageHeight();
    });

    angular.element($window).bind('scroll', (e) => {
      let scrollPercentage = ($window.scrollY/(pageHeight -
        $window.innerHeight))*100;
      if (document.querySelectorAll('.subnav-header__list')[0]) {
        if (scrollPercentage > 0 && scrollPercentage <= 28) {
          document.querySelectorAll('.subnav-header__list li')[0]
            .setAttribute('aria-selected', 'true');
          document.querySelectorAll('.subnav-header__list li')[1]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[2]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[3]
            .setAttribute('aria-selected', 'false');
        } else if (scrollPercentage > 28 && scrollPercentage <= 54) {
          document.querySelectorAll('.subnav-header__list li')[0]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[1]
            .setAttribute('aria-selected', 'true');
          document.querySelectorAll('.subnav-header__list li')[2]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[3]
            .setAttribute('aria-selected', 'false');
        } else if (scrollPercentage > 54 && scrollPercentage <= 72) {
          document.querySelectorAll('.subnav-header__list li')[0]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[1]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[2]
            .setAttribute('aria-selected', 'true');
          document.querySelectorAll('.subnav-header__list li')[3]
            .setAttribute('aria-selected', 'false');
        } else if (scrollPercentage > 72 && scrollPercentage <= 100) {
          document.querySelectorAll('.subnav-header__list li')[0]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[1]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[2]
            .setAttribute('aria-selected', 'false');
          document.querySelectorAll('.subnav-header__list li')[3]
            .setAttribute('aria-selected', 'true');
        }
      }
    });
  }

  getPageHeight() {
    return angular.element(
        document.getElementsByClassName('admob-page'))[0].clientHeight +
      angular.element(
        document.getElementsByClassName('gmp-header__bar'))[0].clientHeight +
      angular.element(
        document.getElementsByClassName('disclaimer'))[0].clientHeight +
      angular.element(
        document.getElementsByClassName('h-c-footer'))[0].clientHeight;
  }
}

exports = ScrollSpyController;
