export function listFiles(): string[] {
    const files = require.context(
        './../../../../',
        true,
        /^(?!.*\/node_modules\/).*\.preview\.tsx$/
    );
    return files.keys().map((file: string) => file);
}
