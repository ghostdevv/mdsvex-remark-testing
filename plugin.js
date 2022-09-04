import { visit } from 'unist-util-visit';
import { dirname, join } from 'path';

export default () =>
    /** @type {import('unified').Transformer} */
    (tree, file) => {
        const path = dirname(file.filename);

        visit(tree, 'image', (node) => {
            node.url = join(path, node.url);
            console.log(node.url);
        });
    };
