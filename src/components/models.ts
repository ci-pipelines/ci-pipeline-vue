export interface NameRequiredProps {
    name: string;
}

export interface PipelineStageStepData extends NameRequiredProps {
    description?: string;
    type: string;
    script: string;
}

export interface PipelineStageData extends NameRequiredProps {
    description?: string;
    steps: PipelineStageStepData[];
}

export interface PipelineGroupData extends NameRequiredProps {
    description?: string;
    stages: PipelineStageData[];
}

export interface PipelineData extends NameRequiredProps {
    description?: string;
    groups: PipelineGroupData[];
    post: PipelineGroupData;
}