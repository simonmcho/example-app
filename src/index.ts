import { registerComponent } from 'ub-shared';

import { Component } from './hello-world';
console.log('submodules test');
/**
 * Feel free to register whatever you need to export.
 * IMPORTANT: Registration ordering is important.
 */
registerComponent(Component);
