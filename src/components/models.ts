

export interface PipelineStageStepData {
    name: string;
    description: string;
    type: string;
    script: string;
}

export interface PipelineStageData {
    name: string;
    description: string;
    steps: PipelineStageStepData[];
}

export interface PipelineGroupData {
    name: string;
    description: string;
    stages: PipelineStageData[];
}

export interface PipelineData {
    name: string;
    description: string;
    groups: PipelineGroupData[];
    post: PipelineGroupData;
}