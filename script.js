const allTools = [
    { id: 'merge', name: 'Merge PDF', icon: '📁', desc: 'Combine multiple PDFs.' },
    { id: 'split', name: 'Split PDF', icon: '✂️', desc: 'Separate pages.' },
    { id: 'remove', name: 'Remove Pages', icon: '🗑️', desc: 'Delete unwanted pages.' },
    { id: 'extract', name: 'Extract Pages', icon: '📄', desc: 'Save specific pages.' },
    { id: 'organize', name: 'Organize PDF', icon: '🗂️', desc: 'Reorder pages.' },
    { id: 'compress', name: 'Compress PDF', icon: '📉', desc: 'Reduce file size.' },
    { id: 'repair', name: 'Repair PDF', icon: '🔧', desc: 'Fix corrupted files.' },
    { id: 'flatten', name: 'Flatten PDF', icon: '⏹️', desc: 'Remove interactive forms.' },
    { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: '🖼️', desc: 'Convert image to PDF.' },
    { id: 'word-to-pdf', name: 'Word to PDF', icon: '📝', desc: 'Convert DOCX to PDF.' },
    { id: 'excel-to-pdf', name: 'Excel to PDF', icon: '📊', desc: 'Convert XLSX to PDF.' },
    { id: 'ppt-to-pdf', name: 'PowerPoint to PDF', icon: '📉', desc: 'Convert PPTX to PDF.' },
    { id: 'html-to-pdf', name: 'HTML to PDF', icon: '🌐', desc: 'Convert web to PDF.' },
    { id: 'scan-to-pdf', name: 'Scan to PDF', icon: '🖨️', desc: 'OCR scans to PDF.' },
    { id: 'pdf-to-word', name: 'PDF to Word', icon: '📘', desc: 'Convert PDF to DOCX.' },
    { id: 'pdf-to-excel', name: 'PDF to Excel', icon: '🟢', desc: 'PDF to XLSX.' },
    { id: 'pdf-to-ppt', name: 'PDF to PowerPoint', icon: '🍊', desc: 'PDF to PPT.' },
    { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: '📸', desc: 'Extract images.' },
    { id: 'edit', name: 'Edit PDF', icon: '✍️', desc: 'Add text and notes.' },
    { id: 'sign', name: 'Sign PDF', icon: '✒️', desc: 'Add signature.' },
    { id: 'watermark', name: 'Watermark', icon: '🧼', desc: 'Add stamp/logo.' },
    { id: 'rotate', name: 'Rotate PDF', icon: '🔄', desc: 'Change orientation.' },
    { id: 'protect', name: 'Protect PDF', icon: '🔒', desc: 'Add password.' },
    { id: 'unlock', name: 'Unlock PDF', icon: '🔓', desc: 'Remove password.' },
    { id: 'page-numbers', name: 'Page Numbers', icon: '🔢', desc: 'Add numbering.' },
    { id: 'pdf-a', name: 'PDF/A Converter', icon: '🗄️', desc: 'Archive-ready format.' },
    { id: 'annotate', name: 'Annotate PDF', icon: '💡', desc: 'Highlights & comments.' }
];

function initGrid() {
    const grid = document.getElementById('tools-section');
    grid.innerHTML = allTools.map(t => `
        <div class="tool-card" onclick="setupWorkspace('${t.id}', '${t.name}')">
            <span class="tool-icon">${t.icon}</span>
            <h3>${t.name}</h3>
            <p>${t.desc}</p>
        </div>
    `).join('');
}

function setupWorkspace(id, name) {
    document.getElementById('tools-section').style.display = 'none';
    const ws = document.getElementById('tool-workspace');
    ws.classList.remove('hidden');
    document.getElementById('active-tool-title').innerText = name;
    document.getElementById('dynamic-inputs').innerHTML = `<input type="file" id="user-file" accept=".pdf,.jpg,.png,.docx,.xlsx,.pptx">`;
}

function closeWorkspace() {
    document.getElementById('tool-workspace').classList.add('hidden');
    document.getElementById('tools-section').style.display = 'grid';
}

function executeToolActiveLogic() {
    alert("Processing files for: " + document.getElementById('active-tool-title').innerText);
}

window.onload = initGrid;