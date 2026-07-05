const allTools = [
    { id: 'merge', name: 'Merge PDF', icon: '📁', desc: 'Combine multiple PDFs into one.', file: 'pdf', multi: true },
    { id: 'split', name: 'Split PDF', icon: '✂️', desc: 'Separate pages or extract ranges.', file: 'pdf' },
    { id: 'remove', name: 'Remove Pages', icon: '🗑️', desc: 'Delete unwanted PDF pages.', file: 'pdf' },
    { id: 'extract', name: 'Extract Pages', icon: '📄', desc: 'Save specific pages as new files.', file: 'pdf' },
    { id: 'organize', name: 'Organize PDF', icon: '🗂️', desc: 'Drag-and-drop to reorder pages.', file: 'pdf' },
    { id: 'compress', name: 'Compress PDF', icon: '📉', desc: 'Reduce file size, keep quality.', file: 'pdf' },
    { id: 'repair', name: 'Repair PDF', icon: '🔧', desc: 'Fix corrupted PDF files.', file: 'pdf' },
    { id: 'flatten', name: 'Flatten PDF', icon: '⏹️', desc: 'Remove interactive elements.', file: 'pdf' },
    { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: '🖼️', desc: 'Convert images to PDF.', file: 'image' },
    { id: 'word-to-pdf', name: 'Word to PDF', icon: '📝', desc: 'Convert DOCX to PDF.', file: 'word' },
    { id: 'excel-to-pdf', name: 'Excel to PDF', icon: '📊', desc: 'Convert XLSX to PDF.', file: 'excel' },
    { id: 'ppt-to-pdf', name: 'PowerPoint to PDF', icon: '📉', desc: 'Convert PPTX to PDF.', file: 'ppt' },
    { id: 'html-to-pdf', name: 'HTML to PDF', icon: '🌐', desc: 'Turn web pages into PDF.', file: 'html_text' },
    { id: 'scan-to-pdf', name: 'Scan to PDF', icon: '🖨️', desc: 'Make image scans selectable.', file: 'image' },
    { id: 'pdf-to-word', name: 'PDF to Word', icon: '📘', desc: 'Convert PDF back to DOCX.', file: 'pdf' },
    { id: 'pdf-to-excel', name: 'PDF to Excel', icon: '🟢', desc: 'PDF tables to spreadsheets.', file: 'pdf' },
    { id: 'pdf-to-ppt', name: 'PDF to PowerPoint', icon: '🍊', desc: 'PDF to PPT presentation.', file: 'pdf' },
    { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: '📸', desc: 'Extract images from PDF.', file: 'pdf' },
    { id: 'edit', name: 'Edit PDF', icon: '✍️', desc: 'Add text, shapes, or notes.', file: 'pdf_edit' },
    { id: 'sign', name: 'Sign PDF', icon: '✒️', desc: 'Add digital signature/stamp.', file: 'pdf' },
    { id: 'watermark', name: 'Watermark', icon: '🧼', desc: 'Overlay image or text stamps.', file: 'pdf' },
    { id: 'rotate', name: 'Rotate PDF', icon: '🔄', desc: 'Change page orientation.', file: 'pdf' },
    { id: 'protect', name: 'Protect PDF', icon: '🔒', desc: 'Add password security.', file: 'pdf' },
    { id: 'unlock', name: 'Unlock PDF', icon: '🔓', desc: 'Remove password protection.', file: 'pdf' },
    { id: 'page-numbers', name: 'Page Numbers', icon: '🔢', desc: 'Add dynamic page numbers.', file: 'pdf' },
    { id: 'pdf-a', name: 'PDF/A Converter', icon: '🗄️', desc: 'Archive-ready format.', file: 'pdf' },
    { id: 'annotate', name: 'Annotate PDF', icon: '💡', desc: 'Add highlights & comments.', file: 'pdf' }
];

// Initialize Grid with corrected setupWorkspace arguments
function initGrid() {
    const grid = document.getElementById('tools-section');
    grid.innerHTML = allTools.map(t => `
        <div class="tool-card" onclick="setupWorkspace('${t.id}', '${t.name}', '${t.desc}', '${t.file}', ${!!t.multi})">
            <div class="tool-icon">${t.icon}</div>
            <h3>${t.name}</h3>
            <p>${t.desc}</p>
        </div>
    `).join('');
}

window.onload = initGrid;

// [INSERT YOUR setupWorkspace, resetWorkspaceState, closeWorkspace, 
//  updateStatus, executeToolActiveLogic, and triggerDownload FUNCTIONS HERE]