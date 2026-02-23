/**
 * Minions Pipeline SDK
 *
 * Funnel stage tracking across the full job search lifecycle
 *
 * @module @minions-pipeline/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Pipeline.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
