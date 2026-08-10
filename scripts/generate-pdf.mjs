import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

// Read portfolioData directly from TS file
import { portfolioData } from '../src/data/portfolio.ts';

const htmlTemplate = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${portfolioData.name} - ${portfolioData.title} Portfolio</title>
  <style>
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
    
    @page {
      size: A4;
      margin: 14mm 14mm 14mm 14mm;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.55;
      font-size: 9.5pt;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Header */
    .header {
      border-bottom: 2.5px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .header-main h1 {
      font-size: 22pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      line-height: 1.1;
    }

    .header-main p {
      font-size: 11pt;
      font-weight: 600;
      color: #2563eb;
      margin-top: 4px;
    }

    .header-contact {
      text-align: right;
      font-size: 8.5pt;
      color: #475569;
    }

    .header-contact p {
      margin-bottom: 2px;
    }

    .header-contact a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }

    .section {
      margin-bottom: 18px;
    }

    .section-title {
      font-size: 11pt;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 4px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 14px;
      background-color: #2563eb;
      border-radius: 2px;
    }

    /* About Section */
    .about-text {
      font-size: 9.5pt;
      color: #334155;
      line-height: 1.6;
      background-color: #f8fafc;
      padding: 10px 14px;
      border-left: 3px solid #2563eb;
      border-radius: 0 6px 6px 0;
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px 14px;
    }

    .skill-category {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
    }

    .skill-category-title {
      font-size: 8.5pt;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 4px;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .skill-tag {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      color: #334155;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 8pt;
      font-weight: 500;
    }

    /* Experience */
    .exp-item {
      margin-bottom: 12px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }

    .exp-title {
      font-size: 10pt;
      font-weight: 700;
      color: #0f172a;
    }

    .exp-role {
      font-size: 9pt;
      font-weight: 600;
      color: #2563eb;
      margin-left: 6px;
    }

    .exp-period {
      font-size: 8.5pt;
      font-weight: 500;
      color: #64748b;
    }

    .exp-list {
      list-style-type: none;
      padding-left: 0;
    }

    .exp-list li {
      position: relative;
      padding-left: 12px;
      font-size: 9pt;
      color: #334155;
      margin-bottom: 3px;
      line-height: 1.5;
    }

    .exp-list li::before {
      content: "•";
      position: absolute;
      left: 2px;
      color: #3b82f6;
      font-weight: bold;
    }

    /* Projects */
    .project-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 12px 14px;
      margin-bottom: 12px;
      page-break-inside: avoid;
      break-inside: avoid;
      box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }

    .project-title {
      font-size: 10.5pt;
      font-weight: 800;
      color: #0f172a;
    }

    .project-period {
      font-size: 8.5pt;
      font-weight: 500;
      color: #64748b;
    }

    .project-meta {
      display: flex;
      gap: 12px;
      font-size: 8.5pt;
      color: #475569;
      margin-bottom: 6px;
      background-color: #f1f5f9;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .project-meta-item strong {
      color: #1e293b;
    }

    .project-techs {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-bottom: 8px;
    }

    .tech-badge {
      background-color: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      font-size: 7.5pt;
      font-weight: 600;
      padding: 1px 6px;
      border-radius: 12px;
    }

    .project-desc {
      font-size: 9pt;
      color: #334155;
      margin-bottom: 8px;
      line-height: 1.5;
    }

    .project-subtitle {
      font-size: 8.5pt;
      font-weight: 700;
      color: #0f172a;
      margin-top: 6px;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .project-achievements {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 6px;
    }

    .project-achievements li {
      position: relative;
      padding-left: 12px;
      font-size: 8.5pt;
      color: #334155;
      margin-bottom: 2px;
      line-height: 1.45;
    }

    .project-achievements li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-size: 8pt;
      font-weight: bold;
    }

    .project-challenge {
      font-size: 8.5pt;
      color: #334155;
      background: #fffbeb;
      border: 1px solid #fef3c7;
      border-left: 3px solid #f59e0b;
      padding: 6px 10px;
      border-radius: 4px;
      margin-top: 6px;
      line-height: 1.45;
    }

    .project-links {
      display: flex;
      gap: 10px;
      margin-top: 6px;
      font-size: 8pt;
    }

    .project-links a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
    }

    .footer-note {
      margin-top: 16px;
      text-align: center;
      font-size: 8pt;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <div class="header-main">
      <h1>${portfolioData.name}</h1>
      <p>${portfolioData.title}</p>
    </div>
    <div class="header-contact">
      <p><strong>Phone:</strong> ${portfolioData.phone}</p>
      <p><strong>Email:</strong> ${portfolioData.email}</p>
      <p><strong>GitHub:</strong> <a href="${portfolioData.github}">${portfolioData.github}</a></p>
    </div>
  </div>

  <!-- About -->
  <div class="section">
    <div class="section-title">About Me</div>
    <div class="about-text">
      ${portfolioData.about}
    </div>
  </div>

  <!-- Skills -->
  <div class="section">
    <div class="section-title">Skills</div>
    <div class="skills-grid">
      ${['Backend', 'Frontend', 'Mobile', 'Database', 'Others'].map(cat => {
  const catSkills = portfolioData.skills.filter(s => s.category === cat);
  if (catSkills.length === 0) return '';
  return `
          <div class="skill-category">
            <div class="skill-category-title">${cat}</div>
            <div class="skill-tags">
              ${catSkills.map(s => `<span class="skill-tag">${s.name}</span>`).join('')}
            </div>
          </div>
        `;
}).join('')}
    </div>
  </div>

  <!-- Projects -->
  <div class="section">
    <div class="section-title">Projects</div>
    ${portfolioData.projects.map(proj => `
      <div class="project-card">
        <div class="project-header">
          <span class="project-title">${proj.title}</span>
          <span class="project-period">${proj.period}</span>
        </div>
        
        ${proj.role || proj.contribution ? `
          <div class="project-meta">
            ${proj.role ? `<div class="project-meta-item"><strong>역할:</strong> ${proj.role}</div>` : ''}
            ${proj.contribution ? `<div class="project-meta-item"><strong>기여도:</strong> ${proj.contribution}</div>` : ''}
          </div>
        ` : ''}

        <div class="project-techs">
          ${proj.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>

        <div class="project-desc">
          ${proj.longDescription || proj.description}
        </div>

        ${proj.keyAchievements && proj.keyAchievements.length > 0 ? `
          <div class="project-subtitle">주요 성과 및 구현 사항</div>
          <ul class="project-achievements">
            ${proj.keyAchievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
        ` : ''}

        ${proj.challenges ? `
          <div class="project-subtitle">기술적 도전 및 문제 해결</div>
          <div class="project-challenge">
            ${proj.challenges}
          </div>
        ` : ''}

        ${proj.playStoreUrl || proj.appStoreUrl || proj.githubUrl || proj.liveUrl ? `
          <div class="project-links">
            ${proj.playStoreUrl ? `<a href="${proj.playStoreUrl}">[Google Play]</a>` : ''}
            ${proj.appStoreUrl ? `<a href="${proj.appStoreUrl}">[App Store]</a>` : ''}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}">[GitHub]</a>` : ''}
            ${proj.liveUrl ? `<a href="${proj.liveUrl}">[Live Demo]</a>` : ''}
          </div>
        ` : ''}
      </div>
    `).join('')}
  </div>

</body>
</html>
`;

async function generatePDF() {
  console.log('Launching browser to generate PDF...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(htmlTemplate, { waitUntil: 'domcontentloaded' });

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'LeeHoYoon_Portfolio.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '14mm',
      bottom: '14mm',
      left: '14mm',
      right: '14mm'
    }
  });

  console.log(`PDF successfully created at: ${outputPath}`);

  // Copy to brain artifacts dir so user can download directly
  const artifactDir = '/Users/ihoyun/.gemini/antigravity-ide/brain/3da00b64-13a1-455e-a916-cce33d726755';
  if (fs.existsSync(artifactDir)) {
    const artifactPath = path.join(artifactDir, 'LeeHoYoon_Portfolio.pdf');
    fs.copyFileSync(outputPath, artifactPath);
    console.log(`PDF artifact copied to: ${artifactPath}`);
  }

  await browser.close();
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
