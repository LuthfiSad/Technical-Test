export interface CustomerModel {
    id: string,
    customerId: number,
    gender: string,
    age: number,
    annualIncome: number,
    spendingScore: number,
    profession: string,
    workExperience: number,
    familySize: number
}


export interface CustomerDTO {
    customerId?: number,
    gender?: string,
    age?: number,
    annualIncome?: number,
    spendingScore?: number,
    profession?: string,
    workExperience?: number,
    familySize?: number
}