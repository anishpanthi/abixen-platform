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

    angular
        .module('platformAdminApplication', [
            'pascalprecht.translate',
            'platformComponent',
            'platformNavigationModule',
            'platformPermissionModule',
            'platformRoleModule',
            'platformPageModule',
            'platformUserModule',
            'platformLayoutModule',
            'platformModuleModule',
            'platformModuleTypeModule',
            'multiVisualizationModule',
            'webContentService',
            'platformCommonModule',
            'platformListGridModule',
            'platformThumbModule',
            'platformUtilsModule',
            'ui.bootstrap',
            'ui.router',
            'ngAnimate',
            'ngTouch',
            'ngRoute',
            'toaster',
            'ui.grid',
            'ui.grid.exporter',
            'ui.grid.selection',
            'ui.grid.pinning',
            'ui.grid.resizeColumns',
            'ui.grid.moveColumns',
            'ui.grid.autoResize',
            'ui.bootstrap.showErrors',
            'ngScrollbar',
            'platformUploadFileModule',
            'platformSheetReaderModule',
            'platformThemeModule',
            'platformCommentModule'
        ]);
})();