export class Project {
    id?: number = 0;
    projectTitle: string;
    projectTechnologies: string;
    projectDescripiton: string;
    projectDeployLink: string;
    projectImg: string;
    projectGitHubBackEndLink?: string;
    projectGitHubFrontEndLink?: string;

    constructor(projectId: number, projectTitle: string, projectTechnologies: string, projectDescripiton: string, projectDeployLink: string, projectImg: string, projectGitHubBackEndLink?: string, projectGitHubFrontEndLink?: string) {
        this.id = projectId;
        this.projectTitle = projectTitle;
        this.projectTechnologies = projectTechnologies;
        this.projectDescripiton = projectDescripiton;
        this.projectDeployLink = projectDeployLink;
        this.projectImg = projectImg;
        this.projectGitHubBackEndLink = projectGitHubBackEndLink;
        this.projectGitHubFrontEndLink = projectGitHubFrontEndLink;
    }
}