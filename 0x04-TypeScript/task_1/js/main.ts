export interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
  }
  
  export interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  class RestrictedTeacher implements Teacher {
    constructor(
      public readonly firstName: string,
      public readonly lastName: string,
      public fullTimeEmployee: boolean,
      public location: string,
      public yearsOfExperience?: number,
      //public [key: string]: any
    ) {}
  }
  
  export function createTeacher(teacher: Teacher): Teacher {
    return new RestrictedTeacher(
      teacher.firstName,
      teacher.lastName,
      teacher.fullTimeEmployee,
      teacher.location,
      teacher.yearsOfExperience,
    );
  }
  
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  

  export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  
export interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  export interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  

  export class StudentClass implements StudentClass {
    constructor(private firstName: string, private lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  