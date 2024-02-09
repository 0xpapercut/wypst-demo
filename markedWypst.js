const inlineRule = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/;
const blockRule = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;

export default function (wypst, options = {}) {
    return {
        extensions: [
            inlineWypst(createRenderer(wypst, options, false)),
            blockWypst(createRenderer(wypst, options, true))
        ]
    };
}

function createRenderer(wypst, options, newlineAfter) {
    return function(token) {
        try {
            return wypst.renderToString(token.text, { ...options, displayMode: token.displayMode }) + (newlineAfter ? '\n' : '');
        } catch (error) {
            return `<span style="color: red;">${error}</span>`;
        }
    }
}

function inlineWypst(renderer) {
    return {
        name: 'inlineWypst',
        level: 'inline',
        start(src) {
            let index;
            let indexSrc = src;

            while (indexSrc) {
                index = indexSrc.indexOf('$');
                if (index === -1) {
                    return;
                }

                if (index === 0 || indexSrc.charAt(index - 1) === ' ') {
                    const possibleWypst = indexSrc.substring(index);

                    if (possibleWypst.match(inlineRule)) {
                        return index;
                    }
                }

                indexSrc = indexSrc.substring(index + 1).replace(/^\$+/, '');
            }
        },
        tokenizer(src, tokens) {
            const match = src.match(inlineRule);
            if (match) {
                return {
                    type: 'inlineWypst',
                    raw: match[0],
                    text: match[2].trim(),
                    displayMode: match[1].length === 2
                };
            }
        },
        renderer
    };
}

function blockWypst(renderer) {
    return {
        name: 'blockWypst',
        level: 'block',
        tokenizer(src, tokens) {
            const match = src.match(blockRule);
            if (match) {
                return {
                    type: 'blockWypst',
                    raw: match[0],
                    text: match[2].trim(),
                    displayMode: match[1].length === 2
                };
            }
        },
        renderer
    };
}
