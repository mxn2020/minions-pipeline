/**
 * @module @minions-pipeline/sdk/schemas
 * Custom MinionType schemas for Minions Pipeline.
 */

import type { MinionType } from 'minions-sdk';

export const pipelinestageType: MinionType = {
  id: 'pipeline-pipeline-stage',
  name: 'Pipeline stage',
  slug: 'pipeline-stage',
  description: 'A defined stage in the job search funnel.',
  icon: '📍',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'order', type: 'number', label: 'order' },
    { name: 'color', type: 'string', label: 'color' },
    { name: 'isTerminal', type: 'boolean', label: 'isTerminal' },
    { name: 'autoAdvanceCondition', type: 'string', label: 'autoAdvanceCondition' },
  ],
};

export const pipelineentryType: MinionType = {
  id: 'pipeline-pipeline-entry',
  name: 'Pipeline entry',
  slug: 'pipeline-entry',
  description: 'A job opportunity at a specific stage in the pipeline.',
  icon: '🔄',
  schema: [
    { name: 'jobId', type: 'string', label: 'jobId' },
    { name: 'applicationId', type: 'string', label: 'applicationId' },
    { name: 'stageId', type: 'string', label: 'stageId' },
    { name: 'enteredStageAt', type: 'string', label: 'enteredStageAt' },
    { name: 'assignedTo', type: 'string', label: 'assignedTo' },
    { name: 'priority', type: 'select', label: 'priority' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const pipelinetransitionType: MinionType = {
  id: 'pipeline-pipeline-transition',
  name: 'Pipeline transition',
  slug: 'pipeline-transition',
  description: 'A recorded movement of a pipeline entry from one stage to another.',
  icon: '➡️',
  schema: [
    { name: 'entryId', type: 'string', label: 'entryId' },
    { name: 'fromStageId', type: 'string', label: 'fromStageId' },
    { name: 'toStageId', type: 'string', label: 'toStageId' },
    { name: 'transitionedAt', type: 'string', label: 'transitionedAt' },
    { name: 'transitionedBy', type: 'string', label: 'transitionedBy' },
    { name: 'reason', type: 'string', label: 'reason' },
  ],
};

export const funnelmetricType: MinionType = {
  id: 'pipeline-funnel-metric',
  name: 'Funnel metric',
  slug: 'funnel-metric',
  description: 'An aggregated conversion metric across a pipeline period.',
  icon: '📊',
  schema: [
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'totalDiscovered', type: 'number', label: 'totalDiscovered' },
    { name: 'totalShortlisted', type: 'number', label: 'totalShortlisted' },
    { name: 'totalApplied', type: 'number', label: 'totalApplied' },
    { name: 'totalReplied', type: 'number', label: 'totalReplied' },
    { name: 'totalInterviewed', type: 'number', label: 'totalInterviewed' },
    { name: 'totalWon', type: 'number', label: 'totalWon' },
  ],
};

export const customTypes: MinionType[] = [
  pipelinestageType,
  pipelineentryType,
  pipelinetransitionType,
  funnelmetricType,
];

