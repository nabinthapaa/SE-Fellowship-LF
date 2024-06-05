interface INFO {
  required: boolean;
  value?: string;
}

interface User {
  name: string;
  details: { [key: string]: INFO };
  hobbies: [string];
}

function __get(obj?: User, key?: string, _default?: string): void{
    return 1
}
