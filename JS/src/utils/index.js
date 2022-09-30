export const formatObjToHTML = (obj = {}) => `<pre>${JSON.stringify(obj, null, 2)}</pre>`;

export const formatDataToHTML = ({ title = "", data = {} } = {}) => (`
    <div style="margin: 10px;">
        <p style="color: #C46210">${title}</p>
        ${formatObjToHTML(data)}
    </div>
`);
