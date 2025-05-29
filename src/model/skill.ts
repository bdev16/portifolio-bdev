export class Skill{
    id?: number;
    skillImg: string;
    skillDescription: string;

    constructor(skillImg: string, skillDescription: string) {
        this.skillImg = skillImg;
        this.skillDescription = skillDescription;
    }
}