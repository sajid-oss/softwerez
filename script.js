const allTools = [
    { id: 'merge', name: 'Merge PDF', icon: '📁', desc: 'Combine multiple PDFs into one.' },
    { id: 'split', name: 'Split PDF', icon: '✂️', desc: 'Separate pages or extract ranges.' },
    { id: 'remove', name: 'Remove Pages', icon: '🗑️', desc: 'Delete unwanted PDF pages.' },
    { id: 'extract', name: 'Extract Pages', icon: '📄', desc: 'Save specific pages as new files.' },
    { id: 'organize', name: 'Organize PDF', icon: '🗂️', desc: 'Drag-and-drop to reorder pages.' },
    { id: 'compress', name: 'Compress PDF', icon: '📉', desc: 'Reduce file size, keep quality.' },
    { id: 'repair', name: 'Repair PDF', icon: '🔧', desc: 'Fix corrupted PDF files.' },
    { id: 'flatten', name: 'Flatten PDF', icon: '⏹️', desc: 'Remove interactive elements.' },
    { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: '🖼️', desc: 'Convert images to PDF.' },
    { id: 'word-to-pdf', name: 'Word to PDF', icon: '📝', desc: 'Convert DOCX to PDF.' },
    { id: 'excel-to-pdf', name: 'Excel to PDF', icon: '📊', desc: 'Convert XLSX to PDF.' },
    { id: 'ppt-to-pdf', name: 'PowerPoint to PDF', icon: '📉', desc: 'Convert PPTX to PDF.' },
    { id: 'html-to-pdf', name: 'HTML to PDF', icon: '🌐', desc: 'Turn web pages into PDF.' },
    { id: 'scan-to-pdf', name: 'Scan to PDF', icon: '🖨️', desc: 'Make image scans selectable.' },
    { id: 'pdf-to-word', name: 'PDF to Word', icon: '📘', desc: 'Convert PDF back to DOCX.' },
    { id: 'pdf-to-excel', name: 'PDF to Excel', icon: '🟢', desc: 'PDF tables to spreadsheets.' },
    { id: 'pdf-to-ppt', name: 'PDF to PowerPoint', icon: '🍊', desc: 'PDF to PPT presentation.' },
    { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: '📸', desc: 'Extract images from PDF.' },
    { id: 'edit', name: 'Edit PDF', icon: '✍️', desc: 'Add text, shapes, or notes.' },
    { id: 'sign', name: 'Sign PDF', icon: '✒️', desc: 'Add digital signature/stamp.' },
    { id: 'watermark', name: 'Watermark', icon: '🧼', desc: 'Overlay image or text stamps.' },
    { id: 'rotate', name: 'Rotate PDF', icon: '🔄', desc: 'Change page orientation.' },
    { id: 'protect', name: 'Protect PDF', icon: '🔒', desc: 'Add password security.' },
    { id: 'unlock', name: 'Unlock PDF', icon: '🔓', desc: 'Remove password protection.' },
    { id: 'page-numbers', name: 'Page Numbers', icon: '🔢', desc: 'Add dynamic page numbers.' },
    { id: 'pdf-a', name: 'PDF/A Converter', icon: '🗄️', desc: 'Archive-ready format.' },
    { id: 'annotate', name: 'Annotate PDF', icon: '💡', desc: 'Add highlights & comments.' }
];

function initGrid() {
    const grid = document.getElementById('tools-section');
    grid.innerHTML = allTools.map(t => `
        <div class="tool-card" onclick="setupWorkspace('${t.id}', '${t.name}', '${t.desc}', 'pdf')">
            <div class="tool-icon">${t.icon}</div>
            <h3>${t.name}</h3>
            <p>${t.desc}</p>
        </div>
    `).join('');
}

window.onload = initGrid;

// [Baaki Functions: setupWorkspace, closeWorkspace, executeToolActiveLogic yahan add karein]