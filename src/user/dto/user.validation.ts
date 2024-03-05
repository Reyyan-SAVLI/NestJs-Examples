import {ValidationArguments, ValidationOptions, registerDecorator } from "class-validator";


export function IsAdult(validationOptions?: ValidationOptions){
    return function(object: Object, propertyName: string){
        registerDecorator({
            name: 'isAdult',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator:{
                validate(value: any, args: ValidationArguments){
                    const today = new Date();
                    const bday = new Date(value);
                    const age = today.getFullYear() - bday.getFullYear();
                    if(age<18){
                        return false;
                    }
                    return true;
                }
            }
        })
     }
}