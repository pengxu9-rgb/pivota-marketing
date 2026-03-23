type ComparisonRow = {
  label: string;
  pivota: string;
  alternative: string;
};

type ComparisonTableProps = {
  rows: readonly ComparisonRow[];
};

const ComparisonTable = ({ rows }: ComparisonTableProps) => {
  return (
    <div className="section-frame overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-background/80">
          <tr className="border-b border-border/70">
            <th className="px-6 py-4 text-sm font-semibold text-foreground">Comparison</th>
            <th className="px-6 py-4 text-sm font-semibold text-foreground">Pivota</th>
            <th className="px-6 py-4 text-sm font-semibold text-foreground">Alternative</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border/60 align-top last:border-b-0">
              <td className="px-6 py-5 text-sm font-medium text-foreground">{row.label}</td>
              <td className="px-6 py-5 text-sm leading-7 text-muted-foreground">{row.pivota}</td>
              <td className="px-6 py-5 text-sm leading-7 text-muted-foreground">
                {row.alternative}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
