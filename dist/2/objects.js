function getFullName(firstName, surName) {
    if (typeof firstName !== 'string') {
        throw new Error('!!!!');
    }
    return `${firstName} ${surName}`;
}
const getFullNameArrow = (firstName, surName) => {
    return `${firstName} ${surName}`;
};
{
    const user = {
        firstName: 'Ivan',
        surName: 'Petrov',
    };
    function getFullName(user) {
        return `${user.firstName} ${user.surName}`;
    }
    const getFullNameArrow = (user) => {
        return `${user.firstName} ${user.surName}`;
    };
}
{
    const getFullName = (firstName, surName) => {
        return `${firstName} ${surName}`;
    };
}
{
    function getFullName({ firstName, surName }) {
        return `${firstName} ${surName}`;
    }
    const getFullNameFN = ({ firstName, surName }) => {
        return `${firstName} ${surName}`;
    };
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
    };
}
export {};
