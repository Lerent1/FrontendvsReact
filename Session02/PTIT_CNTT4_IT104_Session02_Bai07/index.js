import { formatDate } from './formatData.js';
const formatted = formatDate(new Date());
document.getElementById('formattedDate').textContent = formatted;