interface TableItem {
  [key: string]: string;
}

interface InfoTableProps {
  title: string;
  headers: string[];
  data: TableItem[];
}

function InfoTable({ title, headers, data }: InfoTableProps) {
  return (
    <div className="info-table-wrapper">
      <h4 className="table-title">{title}</h4>
      <div className="table-responsive">
        <table className="info-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoTable;
