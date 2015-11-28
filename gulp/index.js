var requireDir = require('require-dir');

/**
 * Require all tasks in gulp/tasks.
 * Include subfolders.
 */
requireDir('./tasks', { recurse: true });