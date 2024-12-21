import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:"title"
})

export class TitlePipe implements PipeTransform{
    transform(value: any, gender: any):any {
        let titlestate = 'Mr. ';
        if (gender == 'female')
        {
            return 'Miss. ' + value ;
        }
        if(gender == 'other') 
        {
            return 'other. ' + value;
        }
        return titlestate + value;
    }

}