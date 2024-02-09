import * as monaco from 'monaco-editor';
import wypst from 'wypst';

import { marked } from 'marked';
import markedWypst from './markedWypst';

import markdownTemplate from './template.md';

const editor = monaco.editor.create(document.getElementById('editor'), {
	value: markdownTemplate,
	language: 'markdown'
});

let isWypstInitialized = false;

async function renderMarkdown() {
    if (!isWypstInitialized) {
        await wypst.init();
        isWypstInitialized = true;
    }
    marked.use(markedWypst(wypst, { throwOnError: false }));
    const editorContent = editor.getValue();
    const renderedHTML = marked.parse(editorContent);
    document.getElementById('preview').innerHTML = renderedHTML;
}
renderMarkdown();

editor.onDidChangeModelContent(() => {
    renderMarkdown();
});
