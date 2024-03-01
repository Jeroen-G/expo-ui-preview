// ^(?!.*\/node_modules\/).*\.preview\.tsx$
export function listFiles(): string[] {
    const files = require.context('./../../../', true, /\.preview.tsx$/);
    return files.keys().map((file: string) => file);
}
