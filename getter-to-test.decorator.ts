// Use o comentário abaixo para ignorar o erro de compilação do TypeScript
//                 //@ts-expect-error - Usando o decorator @GetterToTest()

export function GetterToTest() {
    return (target: any, propertyKey: string) => {
        if (process.env.NODE_ENV !== 'test') return;

        let property: any;

        Object.defineProperty(target, propertyKey, {
            get() {
                return property;
            },
            set(value: any) {
                property = value;
            },
            enumerable: true,
            configurable: true,
        });
    };
}
