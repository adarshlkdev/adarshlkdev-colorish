export class Log{
     static success(message: string){
        console.log(`%c ${message}`, 'color: green')
}
        static error(message: string){
            console.log(`%c ${message}`, 'color: red')
    }
        static warning(message: string){
            console.log(`%c ${message}`, 'color: yellow')
    }
        static info(message: string){
            console.log(`%c ${message}`, 'color: cyan ; background: yellow')
    }
}