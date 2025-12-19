import path from 'path';
import { create } from 'mochawesome-report-generator';

// Путь к файлу отчета и каталогу для отчетов
const cucumberReportPath = path.resolve('reports/cucumber.json');
const mochawesomeReportDir = path.resolve('reports/mochawesome');

// Генерация отчета с Mochawesome
create(cucumberReportPath, {
  reportDir: mochawesomeReportDir,
  reportFilename: 'index',
  reportTitle: 'Rozetka UI Tests',
  charts: true,
  quiet: true,
}).then(() => {
  console.log('Mochawesome report generated successfully!');
}).catch((error) => {
  console.error('Error generating Mochawesome report:', error);
});
