import React from 'react';

export function compile(fileName: string): React.ReactNode[] {
    const files = require.context(
        './../../../../',
        true,
        /^(?!.*\/node_modules\/).*\.preview\.tsx$/
    );
    const components = files(fileName);
    return Object.keys(components).map(key => components[key]());
}
