const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const res = skills.filter(s => s !== 'Dev').map(s => s + '! ').reduce((a, b) => a + b);
console.log(res)


// readonly

// задаем условную константу
const sky: readonly string[] = ['Dev', 'DevOps', 'Testing']; 
// идентичная запись
const sky2: ReadonlyArray<string> = ['Dev', 'DevOps', 'Testing']; 


{
    // enum - перечисление
    
    enum StatusCode{
        SUCCESS,
        IN_PROCESS,
        FAILED
    }

    const res = {
        message: "Платеж успешен",
     statusCode:StatusCode.SUCCESS   
    }

    if (res.statusCode === StatusCode.SUCCESS) {
        console.log('юпи')
    }
}
{
   const req= {
        'topicId': 5,
        'status':"publiched"//draft, deleted
    }

    const res = {
        'question': 'как осуществляется доставка?',
        'answer': 'быстро',
        'tags': ['popular', 'new'],
        'likes': 3,
        'status':'published'
    }

    enum Status{
        publiched = "publiched",
        draft = "draft",
        deleted= "deleted"
    }
    enum Tags{
        popular = 'popular',
        new='new'
    }
    

    interface Req{
        'topicId': number,
        'status':Status
    }
    interface Res{
        question: string,
        answer: string,
        tags: Tags,
        likes: number,
        status:Status
    }
    
    async function getFlags(req:Req): Promise<{res:Res}>{
        const res= await fetch('/flags', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = await res.json();
        return data;
    }
    async function getFlags2(req:Req): Promise<{res:Res[]}>{
        const res = await fetch('/flags', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = await res.json();
        return data;
    }
}