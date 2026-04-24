
function getFullName(firstName: string, surName: string): string{
    if (typeof firstName !== 'string') {
        throw new Error('!!!!');
    }
    return `${firstName} ${surName}`
}

const  getFullNameArrow=(firstName:string,surName:string):string =>{
    return `${firstName} ${surName}`
}


{
interface GetFullName{
    firstName: string;
    surName: string;
    }
    const user: GetFullName = {
  firstName: 'Ivan',
  surName: 'Petrov',
};
    function getFullName(user:GetFullName):string{
    return `${user.firstName} ${user.surName}`
}

const  getFullNameArrow=(user:GetFullName):string =>{
    return `${user.firstName} ${user.surName}`
    }
    
    
}

{
    interface GetFullNameFn {
  (firstName: string, surName: string): string;
}

const getFullName: GetFullNameFn = (firstName, surName) => {
  return `${firstName} ${surName}`;
};
}

{
    interface GetFullName {
        firstName: string;
        surName: string;
    }
    function getFullName({ firstName, surName }: GetFullName): string {
        return `${firstName} ${surName}`;
    }
 const getFullNameFN=({ firstName, surName }: GetFullName): string=>{
        return `${firstName} ${surName}`;
    }   
}


{
    const obj = {
        'officeId': 45,
        'isOpened': false,
        'contacts': {
            'phone': '+380661234567',
            'email': 'my@email.com',
            'address': {
                'city': 'Kiev'
            }
        }
    }
    interface Obj{
        officeId: number;
        isOpened: boolean;
        contacts: {
            phone: string;
            email: string;
            address: {
                city: string
            }
        }
    }
}