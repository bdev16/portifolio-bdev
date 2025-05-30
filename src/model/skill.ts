export class Skill{
    id?: number;
    skillImg: string;
    skillDescription: string;

    constructor(skillNumber: number, skillImg: string, skillDescription: string) {
        this.id = skillNumber;
        this.skillImg = skillImg;
        this.skillDescription = skillDescription;
    }
}