"""
Minions Pipeline SDK — Type Schemas
Custom MinionType schemas for Minions Pipeline.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

pipeline_stage_type = MinionType(
    id="pipeline-pipeline-stage",
    name="Pipeline stage",
    slug="pipeline-stage",
    description="A defined stage in the job search funnel.",
    icon="📍",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="order", type="number", label="order"),
        FieldDefinition(name="color", type="string", label="color"),
        FieldDefinition(name="isTerminal", type="boolean", label="isTerminal"),
        FieldDefinition(name="autoAdvanceCondition", type="string", label="autoAdvanceCondition"),
    ],
)

pipeline_entry_type = MinionType(
    id="pipeline-pipeline-entry",
    name="Pipeline entry",
    slug="pipeline-entry",
    description="A job opportunity at a specific stage in the pipeline.",
    icon="🔄",
    schema=[
        FieldDefinition(name="jobId", type="string", label="jobId"),
        FieldDefinition(name="applicationId", type="string", label="applicationId"),
        FieldDefinition(name="stageId", type="string", label="stageId"),
        FieldDefinition(name="enteredStageAt", type="string", label="enteredStageAt"),
        FieldDefinition(name="assignedTo", type="string", label="assignedTo"),
        FieldDefinition(name="priority", type="select", label="priority"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

pipeline_transition_type = MinionType(
    id="pipeline-pipeline-transition",
    name="Pipeline transition",
    slug="pipeline-transition",
    description="A recorded movement of a pipeline entry from one stage to another.",
    icon="➡️",
    schema=[
        FieldDefinition(name="entryId", type="string", label="entryId"),
        FieldDefinition(name="fromStageId", type="string", label="fromStageId"),
        FieldDefinition(name="toStageId", type="string", label="toStageId"),
        FieldDefinition(name="transitionedAt", type="string", label="transitionedAt"),
        FieldDefinition(name="transitionedBy", type="string", label="transitionedBy"),
        FieldDefinition(name="reason", type="string", label="reason"),
    ],
)

funnel_metric_type = MinionType(
    id="pipeline-funnel-metric",
    name="Funnel metric",
    slug="funnel-metric",
    description="An aggregated conversion metric across a pipeline period.",
    icon="📊",
    schema=[
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="totalDiscovered", type="number", label="totalDiscovered"),
        FieldDefinition(name="totalShortlisted", type="number", label="totalShortlisted"),
        FieldDefinition(name="totalApplied", type="number", label="totalApplied"),
        FieldDefinition(name="totalReplied", type="number", label="totalReplied"),
        FieldDefinition(name="totalInterviewed", type="number", label="totalInterviewed"),
        FieldDefinition(name="totalWon", type="number", label="totalWon"),
    ],
)

custom_types: list[MinionType] = [
    pipeline_stage_type,
    pipeline_entry_type,
    pipeline_transition_type,
    funnel_metric_type,
]

