export default class Project{
    constructor(name, color){
        this.id = crypto.randomUUID();
        this.name = name;
        this.color = color;

    }
}