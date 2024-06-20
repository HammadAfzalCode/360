'use strict';

/**
 * showcase-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::showcase-data.showcase-data');
