import { RequireContext } from 'expo-router/build/types';

declare global {
    interface NodeRequire {
        context: (path: string, recursive: boolean, regex: RegExp) => RequireContext;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (id: string): any;
    }
}
