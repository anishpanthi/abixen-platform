/**
 * Copyright (c) 2010-present Abixen Systems. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

(function () {

    'use strict';

    var externalModules = [
        'platformChartModule',
        'platformMagicNumberModule',
        'platformKpiChartModule'
    ];

    var platformApplicationModules = [
        'ngResource',
        'pascalprecht.translate',
        'platformComponent',
        'platformApplicationDirectives',
        'platformUserModule',
        'platformNavigationModule',
        'platformUtilsModule',
        'platformThumbModule',
        'platformPageModule',
        'platformListGridModule',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'ngAside',
        'adf.provider',
        'ui.bootstrap.showErrors',
        'toaster',
        'xeditable',
        'angularFileUpload',
        'ngCookies',
        'platformModalModule',
        'platformModalSelectionModule',
        'ui.grid',
        'ui.grid.exporter',
        'ui.grid.selection',
        'ui.grid.pinning',
        'ui.grid.resizeColumns',
        'ui.grid.moveColumns',
        'ui.grid.autoResize',
        'ui.bootstrap.showErrors',
        'platformFAModalSelection',
        'ngScrollbar'];

    for (var i = 0; i < externalModules.length; i++) {
        if (testIfModuleExists(externalModules[i])) {
            platformApplicationModules.push(externalModules[i]);
        }
    }

    angular
        .module('platformApplication', platformApplicationModules);

    function testIfModuleExists(moduleName) {
        try {
            angular.module(moduleName);
            console.log('Module ' + moduleName + ' exists');
            return true;
        } catch (e) {
            console.error(e);
            console.error('Module ' + moduleName + ' doesn\'t exist');
        }
        return false;
    }
})();