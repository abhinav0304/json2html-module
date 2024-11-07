export default function json2html(data) {
    // Create HTML table structure
    let html = '<table data-user="abhinavstavaru7@gmail.com">\n';
    html += '  <thead>\n    <tr>';

    // Extract unique keys from all objects to form the table header
    const keys = [...new Set(data.flatMap(obj => Object.keys(obj)))];
    keys.forEach(key => {
        html += `<th>${key}</th>`;
    });
    html += '</tr>\n  </thead>\n  <tbody>';

    // Populate rows with data
    data.forEach(row => {
        html += '\n    <tr>';
        keys.forEach(key => {
            html += `<td>${row[key] || ''}</td>`;
        });
        html += '</tr>';
    });

    html += '\n  </tbody>\n</table>';
    return html;
}
