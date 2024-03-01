import {RequireContext} from "expo-router/build/types";

declare global {
    interface NodeRequire {
        context: (path: string, recursive: boolean, regex: RegExp) => RequireContext;
        (id: string): any;
    }
}
