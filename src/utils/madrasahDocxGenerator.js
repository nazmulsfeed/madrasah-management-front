import { 
  Document, 
  Packer, 
  Paragraph, 
  Table, 
  TableRow, 
  TableCell, 
  WidthType, 
  AlignmentType, 
  BorderStyle, 
  ImageRun, 
  TextRun, 
  VerticalAlign 
} from 'docx';
import { saveAs } from 'file-saver';

/**
 * Utility to fetch an image and convert to Uint8Array for docx ImageRun
 */
async function fetchImageBuffer(url) {
  try {
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  } catch (err) {
    console.error('Failed to load image for docx:', url, err);
    return null;
  }
}

/**
 * Generate and download a pixel-perfect .docx file matching the A4 Universal Madrasah Letterhead
 * @param {Array<string>} selectedRoles - Array of signature role names
 */
export async function downloadMadrasahLetterheadDocx(selectedRoles = ['পরিচালক', 'প্রতিষ্ঠান প্রধান']) {
  const arabicImgBuffer = await fetchImageBuffer('/images/arabic_title.png');
  const logoImgBuffer = await fetchImageBuffer('/images/madrasah_logo.png');

  const borderNone = {
    top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
    bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
    left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
    right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  };

  // 1. Top Row Table: Left spacer, Center Arabic, Right Slogan
  const topRowTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: borderNone,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 28, type: WidthType.PERCENTAGE },
            borders: borderNone,
            children: [new Paragraph({})],
          }),
          new TableCell({
            width: { size: 44, type: WidthType.PERCENTAGE },
            borders: borderNone,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: arabicImgBuffer ? [
                  new ImageRun({
                    data: arabicImgBuffer,
                    transformation: { width: 330, height: 52 },
                    type: 'png',
                  })
                ] : [
                  new TextRun({ text: 'النُّورُ إِسْلَامِكْ أَكَادِيمِي', bold: true, size: 36 })
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 28, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 4, color: '86efac' },
              bottom: { style: BorderStyle.SINGLE, size: 4, color: '86efac' },
              left: { style: BorderStyle.SINGLE, size: 4, color: '86efac' },
              right: { style: BorderStyle.SINGLE, size: 18, color: '059669' },
            },
            shading: { fill: 'f0fdf4' },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { line: 240, after: 0 },
                children: [
                  new TextRun({ text: '❝ ইলম শিখো, আমল করো,', bold: true, size: 15, color: '065f46', font: 'SolaimanLipi' }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { line: 240, after: 0 },
                children: [
                  new TextRun({ text: 'মানুষের সেবায় নিজেকে গড়ো। ❞', bold: true, size: 15, color: '065f46', font: 'SolaimanLipi' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // 2. Main Institution 3-Column Table (Left Bengali, Center Logo, Right English)
  const mainHeaderTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: borderNone,
    rows: [
      new TableRow({
        children: [
          // Left: Bengali details
          new TableCell({
            width: { size: 42, type: WidthType.PERCENTAGE },
            borders: borderNone,
            verticalAlign: VerticalAlign.TOP,
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'আন্-নূর ইসলামিক একাডেমি', bold: true, size: 26, color: '020617', font: 'SolaimanLipi' })],
                spacing: { after: 20 },
              }),
              new Paragraph({
                children: [new TextRun({ text: 'শাহীবাগ জামে মসজিদ সংলগ্ন,', bold: true, size: 18, color: '1e293b', font: 'SolaimanLipi' })],
              }),
              new Paragraph({
                children: [new TextRun({ text: 'চাঁপাইনবাবগঞ্জ।', bold: true, size: 18, color: '1e293b', font: 'SolaimanLipi' })],
                spacing: { after: 60 },
              }),
              new Paragraph({
                children: [new TextRun({ text: 'হুফফাজুল কুরআন ফাউন্ডেশন', size: 16, color: '334155', font: 'SolaimanLipi' })],
              }),
              new Paragraph({
                children: [new TextRun({ text: 'বাংলাদেশ হিফজ শিক্ষা বোর্ড (নিবন্ধন: ৫০০৮২৫)', size: 16, color: '334155', font: 'SolaimanLipi' })],
                spacing: { after: 60 },
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: ' ০১৭৬৭৬১৫৭৪৬ (পরিচালক) ', bold: true, size: 16, color: '047857', font: 'SolaimanLipi' }),
                ],
              }),
            ],
          }),
          // Center: Circular Logo
          new TableCell({
            width: { size: 16, type: WidthType.PERCENTAGE },
            borders: borderNone,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: logoImgBuffer ? [
                  new ImageRun({
                    data: logoImgBuffer,
                    transformation: { width: 90, height: 90 },
                    type: 'png',
                  })
                ] : [],
              }),
            ],
          }),
          // Right: English details
          new TableCell({
            width: { size: 42, type: WidthType.PERCENTAGE },
            borders: borderNone,
            verticalAlign: VerticalAlign.TOP,
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: 'AN-NUR ISLAMIC ACADEMY', bold: true, size: 24, color: '020617', font: 'Times New Roman' })],
                spacing: { after: 20 },
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: 'Adjacent to Shahibag Jame Mosque', bold: true, size: 18, color: '1e293b', font: 'Times New Roman' })],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: 'Chapainawabganj.', bold: true, size: 18, color: '1e293b', font: 'Times New Roman' })],
                spacing: { after: 60 },
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: 'তানযীম বোর্ড-নিবন্ধন নং: ৪২০৭', size: 16, color: '334155', font: 'SolaimanLipi' })],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: 'নূরানী ইকরা বোর্ড- নিবন্ধন নং: ৬০২৫৪২', size: 16, color: '334155', font: 'SolaimanLipi' })],
                spacing: { after: 60 },
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: ' ০১৭২২০৯৫০২৬ (প্রধান শিক্ষক-নূরানী বিভাগ) ', bold: true, size: 16, color: '047857', font: 'SolaimanLipi' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // 3. Double-divider line
  const dividerLine = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 16, color: '0f172a' },
      bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: borderNone,
            children: [new Paragraph({ spacing: { after: 120 } })],
          }),
        ],
      }),
    ],
  });

  // 4. Dynamic Signature Footer Table based on selectedRoles
  const rolesCount = selectedRoles.length || 1;
  const colWidthPct = Math.floor(100 / rolesCount);
  const sigCells = selectedRoles.map((role) => (
    new TableCell({
      width: { size: colWidthPct, type: WidthType.PERCENTAGE },
      borders: borderNone,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200 },
          children: [
            new TextRun({ text: '_______________________________', color: '475569' }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: role, bold: true, size: 18, color: '0f172a', font: 'SolaimanLipi' }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: 'আন্-নূর ইসলামিক একাডেমি', size: 16, color: '64748b', font: 'SolaimanLipi' }),
          ],
        }),
      ],
    })
  ));

  const footerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: borderNone,
    rows: [
      new TableRow({
        children: sigCells,
      }),
    ],
  });

  // 5. Build Complete Word Document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,    // 0.5 inch
              right: 860,  // ~0.6 inch
              bottom: 720,
              left: 860,
            },
          },
        },
        children: [
          topRowTable,
          new Paragraph({ spacing: { after: 140 } }),
          mainHeaderTable,
          new Paragraph({ spacing: { after: 100 } }),
          dividerLine,
          // Blank Editable Body Area (Several empty lines for user writing)
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          new Paragraph({ text: '', spacing: { after: 240 } }),
          footerTable,
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `annur_letterhead_blank_${selectedRoles.length}_signatures.docx`);
}
